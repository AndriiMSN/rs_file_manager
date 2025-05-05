module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: ['eslint:recommended'],
    rules: {
        'no-multi-spaces': 'error', // добавили это
    },
};
