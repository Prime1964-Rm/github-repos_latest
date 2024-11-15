import { RepoDetailsProvider } from "@/contexts/githubUserContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RepoDetailsProvider>
      <Component {...pageProps} />;
    </RepoDetailsProvider>
  );
}
