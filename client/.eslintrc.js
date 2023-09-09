module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'airbnb', 'airbnb/hooks',
        'plugin:react/jsx-runtime',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': 2,
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'import/extensions': 'off',
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'linebreak-style': 'off',
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
};