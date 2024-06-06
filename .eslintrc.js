module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "airbnb-typescript",
        "prettier",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            typescript: {},
        },
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    plugins: ["react", "@typescript-eslint", "jsx-a11y", "import"],
    ignorePatterns: [".eslintrc.js"], // Adicione esta linha
    rules: {
        "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                ts: "never",
                tsx: "never",
            },
        ],
        "@typescript-eslint/no-unused-vars": ["error"],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
    },
};
