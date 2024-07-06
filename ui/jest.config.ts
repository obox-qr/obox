export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest" 
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/mock/mock.js',
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "^.+\\.svg$": "jest-transformer-svg",
    },
}