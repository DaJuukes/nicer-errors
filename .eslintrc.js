module.exports = {
  "env": {
      "es6": true,
      "node": true
  },
  "plugins": [
    //"mocha"
  ],
  "extends": ["eslint:recommended"],
  "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 8
  },
  "env": {
      "node": true,
      "es6": true,
    //  "mocha": true
  },
  "rules": {
    //  "mocha/no-exclusive-tests": "error",
      "no-console":0,
      "no-unused-vars": 1,
      "no-case-declarations": 0,
      "indent": [
          "warn"
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "semi": [
          "error",
          "always"
      ]
  }
}
