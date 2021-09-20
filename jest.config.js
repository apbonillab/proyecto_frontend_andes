/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
   // The root of your source code, typically /src
   // `<rootDir>` is a token Jest substitutes
   roots: ['<rootDir>/src'],

   preset: 'ts-jest',
   testEnvironment: 'jsdom',
   // Runs special logic, adding special
   // extended assertions to Jest
   setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect'
   ],
   // Jest transformations -- this adds support for TypeScript
   // using ts-jest
   transform: {
      '^.+\\.tsx?$': 'ts-jest',
   },
   // Test spec file resolution pattern
   // Matches parent folder `__tests__` and filename
   // should contain `test` or `spec`.
   testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
   // Module file extensions for importing
   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
   moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less|scss)$": "identity-obj-proxy"
    }


};