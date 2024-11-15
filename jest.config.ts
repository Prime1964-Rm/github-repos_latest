import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "ts-jest",

    globals: {
      "ts-jest": {
        tsconfig: "tsconfig.test.json",
      },
    },

    clearMocks: true,
    testEnvironment: "jsdom",

    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

    moduleNameMapper: {
      "src/(.*)": "<rootDir>/src/$1",
      "^@/(.*)$": "<rootDir>/src/$1",
      "^next/image$": "<rootDir>/__mocks__/next/image.ts",
      "^next/font$": "<rootDir>/__mocks__/next/font.ts",
    },
  };
};
