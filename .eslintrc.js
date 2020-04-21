module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "always-multiline"
    }],
    semi: [
      "error",
      "always",
      {
        "omitLastInOneLineBlock": true
      },
    ],
    "space-before-function-paren":["error", "never"],
    "space-before-blocks": ["error", "always"],
    quotes: ["error", "single", { "allowTemplateLiterals": true }],
    'no-unused-vars': 'warn',
    'require-await': 'warn',
    'no-empty-pattern': 'warn',
    'object-curly-spacing': ['error', 'always'],
    curly: ["error", "multi"],
    "vue/html-indent": ["error", 4, {
      "attribute": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/require-default-prop": 'off',
    "vue/no-v-html": 'off',
  }
}
