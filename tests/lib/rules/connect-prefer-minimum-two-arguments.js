require('babel-eslint');

const rule = require('../../../lib/rules/connect-prefer-minimum-two-arguments');
const { RuleTester } = require('eslint');

const parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module',
  ecmaFeatures: {
    experimentalObjectRestSpread: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run('connect-prefer-minimum-two-arguments', rule, {
  valid: [
    'connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Component)',
    'connect(mapStateToProps, mapDispatchToProps)(Component)',
  ],
  invalid: [{
    code: 'connect(mapStateToProps)(Component)',
    errors: [
      {
        message: 'Connect function should have at least 2 arguments.',
      },
    ],
  }],
});