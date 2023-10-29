import typescriptESLint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

/** @type { import("eslint").Linter.FlatConfig[] } */
const eslintConfig = [
  {
    files: [
      '**/.js',
      '**/.ts',
      '**/.tsx',
    ],
    ignores: [
      'out/**',
    ],
    languageOptions:{
      ecmaVersion: 'latest',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      'array-bracket-spacing': 'warn',
      'comma-dangle': ['warn', 'always-multiline'],
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
  },

  {
    files: [
      '*.ts',
      '*.tsx',
    ],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptESLint,
    },
  },

  {
    files: [
      '*.ts',
      '*.tsx',
    ],
    rules: typescriptESLint.configs['strict-type-checked'].rules,
  },
]

export default eslintConfig
