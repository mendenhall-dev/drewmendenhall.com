/** @type { import("eslint").Linter.Config } */
const eslintConfig = {
  env: {
    node: true,
  },
  ignorePatterns: [
    '/out/',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'array-bracket-spacing': 'warn',
    'comma-dangle':
    [
      'warn',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'comma-spacing': 'warn',
    'curly': ['warn', 'multi-line'],
    'indent': ['warn', 2, {SwitchCase: 1, flatTernaryExpressions: true}],
    'no-irregular-whitespace': 'error',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-undef': 'error',
    'no-unused-vars': ['warn', {ignoreRestSiblings: true}],
    'object-curly-spacing': 'warn',
    'object-shorthand': 'warn',
    'quotes': ['warn', 'single', {avoidEscape: true}],
    'quote-props': ['warn', 'consistent-as-needed'],
    'semi': ['error', 'never'],
    'strict': ['error', 'never'],
  },

  overrides: [{
    files: [
      '*.ts',
      '*.tsx',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: true,
    },
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'plugin:@typescript-eslint/strict-type-checked',
    ],
  }],
}

module.exports = eslintConfig
