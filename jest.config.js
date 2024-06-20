module.exports = {
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'babel-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    testEnvironment: 'jsdom',
};
