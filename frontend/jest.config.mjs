export default {
  testEnvironment: "jsdom",  // Ensures Jest runs in a browser-like environment
  transform: {
    "^.+\\.jsx?$": "babel-jest",  // Enables JSX transformation
  },
  moduleFileExtensions: ["js", "jsx"],  // Allows Jest to recognize JS & JSX files
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],  // Ensures matchers are loaded properly
};

