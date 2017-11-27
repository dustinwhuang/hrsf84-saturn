/**
 * These rules enforce the Airbnb Javascript Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/airbnb/javascript
 */

module.exports = {
  extends: 'airbnb',

  env: {
    "browser": true,
    "jest": true,
    "es6": true,
  },

  rules: {
    "jsx-a11y/click-events-have-key-events": "off",
    "no-underscore-dangle": ["error", { "allow": ["_id"] }]
  },
};
