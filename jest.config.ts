import type { Config } from "@jest/types";
import { compilerOptions } from "./tsconfig.json";

// Or async function
export default async (): Promise<Config.InitialOptions> => ({
  coverageProvider: "v8",
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  clearMocks: true,
  verbose: true,
  testEnvironment: "jsdom",
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        diagnostics: false,
      },
    ],
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleDirectories: ["node_modules", "test-utils", __dirname],
  modulePaths: [compilerOptions.baseUrl],
  coverageDirectory: "<rootDir>/tests/coverage/jest",
  coveragePathIgnorePatterns: [
    "./node_modules/",
    "./babel.config.js",
    "src/constants.ts",
    "src/index.tsx",
    "src/main.tsx",
    "src/vite-env.d.ts",
    "src/test-utils/",
    ".*__snapshots__/.*",
  ],
  coverageThreshold: {
    global: {
      lines: 99,
      branches: 99,
      functions: 99,
      statements: 99,
    },
  },
});
