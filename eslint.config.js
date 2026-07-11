import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  rules: {
    'style/jsx-one-expression-per-line': 'off',
    'no-alert': 'off',
    'no-console': 'off',
  },
})
