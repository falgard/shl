module.exports = {
  "env": {
      "node": true,
      "es6": true,
      "jest": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "rules": {
      "indent": [
          "error",
          4
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ],
      "no-console": "off"
  }
};