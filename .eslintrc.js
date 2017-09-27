module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "es6": true
  },
  "globals": {
    "memoryDB": true,
    "google": true,
  },
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    // Note regarding rule severity, the available values are:
    //    "off" or 0 - turn the rule off
    //    "warn" or 1 - turn the rule on as a warning (doesn't effect exit code)
    //    "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
    //-------------------------------------------------------------------------------------------
    // "arrow-parens": [
    //   "error",
    //   "always"
    // ],
    // "arrow-body-style": [
    //   2,
    //   "as-needed"
    // ],
    // "comma-dangle": [
    //   2,
    //   "always-multiline"
    // ],
    // "import/imports-first": 0,
    // "import/newline-after-import": 0,
    // "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    // "import/no-unresolved": 2,
    // "import/prefer-default-export": 0,
    // "import/no-webpack-loader-syntax": 0
    // "indent": [
    //   2,
    //   2,
    //   {
    //     "SwitchCase": 1
    //   }
    // ],
    // "jsx-a11y/aria-props": 2,
    // "jsx-a11y/heading-has-content": 0,
    // "jsx-a11y/href-no-hash": 2,
    // "jsx-a11y/label-has-for": 2,
    // "jsx-a11y/mouse-events-have-key-events": 2,
    // "jsx-a11y/role-has-required-aria-props": 2,
    // "jsx-a11y/role-supports-aria-props": 2,
    "max-len": [
      "error",
      {
        "code": 100,
        "tabWidth": 2,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    // "newline-per-chained-call": 0,
    // "no-confusing-arrow": 0,
    "no-console": 1,

    // "no-use-before-define": 0,
    // "prefer-template": 2,
    // "class-methods-use-this": 0,
    // "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js"
        ]
      }
    ],

    // "react/jsx-first-prop-new-line": [
    //   2,
    //   "multiline"
    // ],
    // "react/jsx-no-target-blank": 0,
    // "react/require-extension": 0,
    // "react/self-closing-comp": 0,
    // "redux-saga/no-yield-in-race": 2,
    // "redux-saga/yield-effects": 2,
    // "require-yield": 0,
  }
};
