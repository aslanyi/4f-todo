module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
        "node": true,
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
        "prettier",
        "react-hooks"
    ],
    "rules": {
        "semi":["error", "always"],
        "quotes": ["error", "single"],
        "prefer-const": "error",
        "comma-dangle": ["error", "always-multiline"],
        "react/react-in-jsx-scope": "off",
        "no-debugger": 2,
        "linebreak-style": ["error", "windows"],
        "react-hooks/rules-of-hooks": "error", 
        "react-hooks/exhaustive-deps": "warn"
    }
};
