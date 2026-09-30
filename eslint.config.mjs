import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import vue from 'eslint-plugin-vue'

export default tseslint.config(
  { ignores: ['**/node_modules/**', '**/.nuxt/**', '**/.output/**', '**/dist/**', '**/localhost/**', '**/.openai/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vue.configs['flat/essential'],
  {
    files: ['apps/web/**/*.{ts,vue}'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    rules: {
      // Nuxt imports and DOM globals are checked by vue-tsc instead.
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrors: 'none' }],
    },
  },
  {
    files: ['apps/web/pages/**/*.vue', 'apps/web/layouts/**/*.vue', 'apps/web/app.vue', 'apps/web/error.vue'],
    rules: { 'vue/multi-word-component-names': 'off' },
  },
  {
    files: ['**/*.mjs'],
    languageOptions: { globals: { console: 'readonly', process: 'readonly', Buffer: 'readonly', URL: 'readonly' } },
  },
)
