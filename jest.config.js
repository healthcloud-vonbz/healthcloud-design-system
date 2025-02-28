/** @type {import('jest').Config} */
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Se usar alias (@), ajuste conforme necessário
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
