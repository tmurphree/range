module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: "airbnb-base",
  rules: {
    'comma-dangle': ['error', { 'functions': 'never' }],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'off',
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-else-return': ['error', { 'allowElseIf': true }],
    'operator-linebreak': ['error', 'after'],
  },
};
