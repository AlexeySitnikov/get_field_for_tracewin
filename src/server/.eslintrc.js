module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": "airbnb-base",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        semi: ['error', 'never'],
        'react/jsx-uses-react': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-props-no-spreading': 0,
        'react/prop-types': 0,
        'no-console': 0,
        'import/no-cycle': 0,
        'import/prefer-default-export': 0,
        'react/jsx-filename-extension': 0,
        'linebreak-style': 0,
    }
}
