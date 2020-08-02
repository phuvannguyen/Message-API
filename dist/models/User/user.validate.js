'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUsername = isUsername;
exports.isPassword = isPassword;

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isUsername(value) {
  var validateLength = _validator2.default.isLength(value, { min: 5, max: 20 });
  var validateCharacters = _validator2.default.isAlphanumeric(value);
  return validateLength && validateCharacters;
}
//validator length characters of Password
function isPassword(value) {
  return _validator2.default.isLength(value, { min: 4 });
}