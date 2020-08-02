'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmail = undefined;
exports.isId = isId;

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Global validators go here.
 * Local validator (which are only used once) are stored next to the component.
 * I.e. isUsername in ~/models/User/validate.js
 *
 * Input: value: any.
 * Output: Boolean
 *
 * Prefer validating with validator over your own code.
 */

var isEmail = exports.isEmail = function isEmail(value) {
  return _validator2.default.isEmail(value);
};

function isId(value) {
  return _mongoose2.default.Types.ObjectId.isValid(value);
}