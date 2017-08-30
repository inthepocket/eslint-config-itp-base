module.exports = {
  extends: 'airbnb-base',
  rules: {
    'arrow-body-style': ['warn', 'as-needed'],
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'func-names': 'off',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
    "no-underscore-dangle": ["error", { "allow": ["_id"] }],
  },
  env: {
    mocha: true,
    mongo: true,
  },
};
