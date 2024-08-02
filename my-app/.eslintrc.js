module.exports = {
    // такой конфиг подходит для версии eslint 8, нужно устанавливать глобально
    // npm i -g eslint@8.10.0
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        // 'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        // плагин проверяет чтобы мы не вводили просто текст,
        // а всегда делали перевод через i18n
        // 'i18next',
        // 'react-hooks',
    ],
    rules: {
        // Цифра 2 указывает на уровень ошибок или предупреждений
        // (severity level), где:
        // 0 - отключено,
        // 1 - предупреждение (warning),
        // 2 - ошибка (error).
        // Число 4 определяет размер отступа в пробелах,
        // который необходим для каждого уровня вложенности JSX.
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        // отключаем дефолтный экспорт
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        semi: ['error', 'never'],
        // Отключаем правило для всех файлов кроме JSX
        // 'i18next/no-literal-string': ['error',
        //     { markupOnly: true, ignoreAttribute: ['to', 'data-testid'] }],
        'react/jsx-props-no-spreading': 'warn',
        'max-len': ['error', { ignoreComments: true, code: 100 }],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        // проверяем хуки на типы, более глубокая проерка
        // 'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        // 'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        // отключаем запрет на мутирование стейта (immerjs в RTK мутирует данные)
        'no-param-reassign': 'off',
    },
    globals: {
        // указываем глобальные переменные которые передали через webpack.DefinePlugin
        __IS_DEV__: true,
        React: true,
    },
    // отключаем правила для выбранных атрибутов html
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}', '**/src/**/*.stories.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
}
