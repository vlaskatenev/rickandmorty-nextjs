import path from 'path'

export default {
    globals: {
        __IS_DEV__: true,
    },
    clearMocks: true,
    testEnvironment: 'jsdom',
    // дирректории которые мы игнорируем
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    // расширения для файлов
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    testMatch: [
        // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    transform: {
        '^.+\\.(ts|tsx)$': ['babel-jest',
            { configFile: path.resolve(__dirname, 'babel.config.json') }],
    },
    // дирректорияв которой лежит наша папка src
    rootDir: '../../',
    // подключаем конфиг для библиотеки jest dom
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTest.ts'],
    moduleNameMapper: {
        // Подключаем scss/css для работы с jest
        // https://jestjs.io/docs/webpack#mocking-css-modules
        // npm install --save-dev identity-obj-proxy
        '\\.s?css$': 'identity-obj-proxy',
        // мокаем файл jestEmptyComponent.tsx который будет подставляться вместо svg,
        // небольшой хак чтобы не тестировать svg
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
}
