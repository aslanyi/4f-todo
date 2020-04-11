module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "React": "writable",
        "require": true,
        "process": true,
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "semi":["error", "always"],
        "quotes": ["error", "single"],
        // "indent": ["error", 4],
        "prefer-const": "error",
        "comma-dangle": ["error", "always-multiline"],
        "prettier/prettier": ["error"],
        "react/react-in-jsx-scope": "off",
        "no-debugger": 2,
        "linebreak-style": ["error", "unix"],
    }
};
