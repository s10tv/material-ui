'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _svgIcon = require('../../svg-icon');

var _svgIcon2 = _interopRequireDefault(_svgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvRemoveFromQueue = function AvRemoveFromQueue(props) {
  return _react2.default.createElement(
    _svgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z' })
  );
};
AvRemoveFromQueue = (0, _pure2.default)(AvRemoveFromQueue);
AvRemoveFromQueue.displayName = 'AvRemoveFromQueue';

exports.default = AvRemoveFromQueue;
module.exports = exports['default'];