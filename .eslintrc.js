module.exports = {
    root: true,
    env: {
        es2020: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    plugins: ['@typescript-eslint', 'prettier'],
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {},
}
