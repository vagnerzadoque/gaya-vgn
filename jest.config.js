// Configuração independente sem referência ao arquivo base
module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.stories.tsx',
    '!src/**/*.subcomponent.tsx',
    '!src/**/*.styles.ts',
    '!src/Templates/**',
    '!src/growthPlanColors/**',
    '!src/helpers/**'
  ],
  errorOnDeprecated: true,
  displayName: 'natds-react',
  // Removendo a opção "name" que não é reconhecida
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    // Removendo o transformador MDX que não existe
    // '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-file'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@naturacosmeticos|react-jss)/)'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.mdx$': '<rootDir>/__mocks__/mdxMock.js'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  verbose: true,
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ]
}
