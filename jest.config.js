module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  //collectCoverageFrom: ['src/**/*.{js,jsx}'],
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx'],
  coveragePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/docs/',
    '<rootDir>/build/'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/docs/',
    '<rootDir>/build/'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
    '!src/newrelic.js',
    '!src/constant/*.js'
  ],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './testreport',
        filename: 'index.html',
        expand: false,
        pageTitle: 'vc-user-service Test Report'
      }
    ]
  ]
};
