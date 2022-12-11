module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    "vue/setup-compiler-macros": true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ["simple-import-sort", "import"],
  rules: {
    "no-console": "warn",
    eqeqeq: "off",
    curly: "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "no-prototype-builtins": "off",
    'vue/multi-word-component-names': 'off',
  }
};
