module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: false,
    collectCoverageFrom: ["src/**/*.{ts,tsx}"],
    coverageDirectory: "coverage",
};
