module.exports = {
    "extends": "airbnb-base",
    "rules":{
      "no-console": 0,
      "no-var": "error",
      "no-undef": 0,
      "indent": [
          "error", 2, { "FunctionDeclaration": {"body": 1, "parameters": 2} }
      ],
      "prefer-rest-params": 0,
      "consistent-return":0
  }
};
