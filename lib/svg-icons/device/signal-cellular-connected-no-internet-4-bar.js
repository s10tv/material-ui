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

var DeviceSignalCellularConnectedNoInternet4Bar = function DeviceSignalCellularConnectedNoInternet4Bar(props) {
  return _react2.default.createElement(
    _svgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z' })
  );
};
DeviceSignalCellularConnectedNoInternet4Bar = (0, _pure2.default)(DeviceSignalCellularConnectedNoInternet4Bar);
DeviceSignalCellularConnectedNoInternet4Bar.displayName = 'DeviceSignalCellularConnectedNoInternet4Bar';

exports.default = DeviceSignalCellularConnectedNoInternet4Bar;
module.exports = exports['default'];