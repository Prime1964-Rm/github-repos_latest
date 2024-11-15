import React from "react";
import { render, act } from "@testing-library/react";
import { useState, useEffect } from "react";

import { waitFor } from "@testing-library/react";
import useFetch from "@/hooks/useFetch";

global.fetch = jest.fn();
const url = "https://api.github.com/orgs/godaddy/repos";

describe("useFetch", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderUseFetch(url: string, init?: RequestInit) {
    const result = render(<TestComponent url={url} init={init} />);
    return result;
  }

  function TestComponent({ url, init }: { url: string; init?: RequestInit }) {
    const { data, error, loading }: any = useFetch(url, init);

    return (
      <div>
        <span data-testid="loading">{loading ? "loading" : "done"}</span>
        <span data-testid="data">{JSON.stringify(data)}</span>
        <span data-testid="error">{error ? error.message : "no error"}</span>
      </div>
    );
  }

  it("should set loading to true initially and false after fetch completes", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 200,
      json: async () => ({ data: "test data" }),
    });

    const { getByTestId } = renderUseFetch(url);

    expect(getByTestId("loading").textContent).toBe("loading");

    await waitFor(() =>
      expect(getByTestId("loading").textContent).toBe("done")
    );
  });

  it("should set data correctly on successful fetch", async () => {
    const mockData = { data: "test data" };

    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 200,
      json: async () => mockData,
    });

    const { getByTestId } = renderUseFetch(url);

    await waitFor(() =>
      expect(getByTestId("data").textContent).toBe(JSON.stringify(mockData))
    );
  });

  it("should set error state if fetch fails", async () => {
    const mockError = new Error("Network error");

    (fetch as jest.Mock).mockRejectedValueOnce(mockError);

    const { getByTestId } = renderUseFetch(url);

    await waitFor(() =>
      expect(getByTestId("error").textContent).toBe(mockError.message)
    );
  });

  it("should call fetch with the correct url and options", async () => {
    const mockData = { data: "test data" };

    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 200,
      json: async () => mockData,
    });

    const init = { method: "GET" };
    renderUseFetch(url, init);

    await waitFor(() => expect(fetch).toHaveBeenCalledWith(url, init));
  });

  it("should handle non-200 response gracefully", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 500,
      json: async () => ({ message: "Internal Server Error" }),
    });

    const { getByTestId } = renderUseFetch(url);

    await waitFor(() =>
      expect(getByTestId("error").textContent).toBe("no error")
    );
  });
});
