module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb-base",
        "airbnb-typescript/base",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json"],
    },
    overrides: [],
    rules: {
        'linebreak-style': 0,
        "consistent-return": "off",
        "curly": [
            "error"
        ]
    },
    ignorePatterns: ["__tests__/*", "dist/*", "src/migrations/*"],
};