'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _iconButton = require('./icon-button');

var _iconButton2 = _interopRequireDefault(_iconButton);

var _menu = require('./svg-icons/navigation/menu');

var _menu2 = _interopRequireDefault(_menu);

var _getMuiTheme = require('./styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _paper = require('./paper');

var _paper2 = _interopRequireDefault(_paper);

var _propTypes = require('./utils/prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function getStyles(props, state) {
  var _state$muiTheme = state.muiTheme;
  var appBar = _state$muiTheme.appBar;
  var iconButtonSize = _state$muiTheme.button.iconButtonSize;
  var zIndex = _state$muiTheme.zIndex;


  var flatButtonSize = 36;

  var styles = {
    root: {
      position: 'relative',
      zIndex: zIndex.appBar,
      width: '100%',
      display: 'flex',
      minHeight: appBar.height,
      backgroundColor: appBar.color,
      paddingLeft: appBar.padding,
      paddingRight: appBar.padding
    },
    title: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: 0,
      paddingTop: 0,
      letterSpacing: 0,
      fontSize: 24,
      fontWeight: appBar.titleFontWeight,
      color: appBar.textColor,
      lineHeight: appBar.height + 'px'
    },
    mainElement: {
      boxFlex: 1,
      flex: '1'
    },
    iconButtonStyle: {
      marginTop: (appBar.height - iconButtonSize) / 2,
      marginRight: 8,
      marginLeft: -16
    },
    iconButtonIconStyle: {
      fill: appBar.textColor,
      color: appBar.textColor
    },
    flatButton: {
      color: appBar.textColor,
      marginTop: (iconButtonSize - flatButtonSize) / 2 + 1
    }
  };

  return styles;
}

var AppBar = _react2.default.createClass({
  displayName: 'AppBar',


  propTypes: {
    /**
     * Can be used to render a tab inside an app bar for instance.
     */
    children: _react2.default.PropTypes.node,

    /**
     * Applied to the app bar's root element.
     */
    className: _react2.default.PropTypes.string,

    /**
     * The classname of the icon on the left of the app bar.
     * If you are using a stylesheet for your icons, enter the class name for the icon to be used here.
     */
    iconClassNameLeft: _react2.default.PropTypes.string,

    /**
     * Similiar to the iconClassNameLeft prop except that
     * it applies to the icon displayed on the right of the app bar.
     */
    iconClassNameRight: _react2.default.PropTypes.string,

    /**
     * The custom element to be displayed on the left side of the
     * app bar such as an SvgIcon.
     */
    iconElementLeft: _react2.default.PropTypes.element,

    /**
     * Similiar to the iconElementLeft prop except that this element is displayed on the right of the app bar.
     */
    iconElementRight: _react2.default.PropTypes.element,

    /**
     * Override the inline-styles of the element displayed on the right side of the app bar.
     */
    iconStyleRight: _react2.default.PropTypes.object,

    /**
     * Callback function for when the left icon is selected via a touch tap.
     *
     * @param {object} event TouchTap event targeting the left `IconButton`.
     */
    onLeftIconButtonTouchTap: _react2.default.PropTypes.func,

    /**
     * Callback function for when the right icon is selected via a touch tap.
     *
     * @param {object} event TouchTap event targeting the right `IconButton`.
     */
    onRightIconButtonTouchTap: _react2.default.PropTypes.func,

    /**
     * Callback function for when the title text is selected via a touch tap.
     *
     * @param {object} event TouchTap event targeting the `title` node.
     */
    onTitleTouchTap: _react2.default.PropTypes.func,

    /**
     * Determines whether or not to display the Menu icon next to the title.
     * Setting this prop to false will hide the icon.
     */
    showMenuIconButton: _react2.default.PropTypes.bool,

    /**
     * Override the inline-styles of the root element.
     */
    style: _react2.default.PropTypes.object,

    /**
     * The title to display on the app bar.
     */
    title: _react2.default.PropTypes.node,

    /**
     * Override the inline-styles of the app bar's title element.
     */
    titleStyle: _react2.default.PropTypes.object,

    /**
     * The zDepth of the component.
     * The shadow of the app bar is also dependent on this property.
     */
    zDepth: _propTypes2.default.zDepth
  },

  contextTypes: {
    muiTheme: _react2.default.PropTypes.object
  },

  childContextTypes: {
    muiTheme: _react2.default.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      showMenuIconButton: true,
      title: '',
      zDepth: 1
    };
  },
  getInitialState: function getInitialState() {
    return {
      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
    };
  },
  getChildContext: function getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  },
  componentDidMount: function componentDidMount() {
    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.props.iconElementLeft || !this.props.iconClassNameLeft, 'Properties iconElementLeft\n      and iconClassNameLeft cannot be simultaneously defined. Please use one or the other.') : undefined;

    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.props.iconElementRight || !this.props.iconClassNameRight, 'Properties iconElementRight\n      and iconClassNameRight cannot be simultaneously defined. Please use one or the other.') : undefined;
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      muiTheme: nextContext.muiTheme || this.state.muiTheme
    });
  },
  _onLeftIconButtonTouchTap: function _onLeftIconButtonTouchTap(event) {
    if (this.props.onLeftIconButtonTouchTap) {
      this.props.onLeftIconButtonTouchTap(event);
    }
  },
  _onRightIconButtonTouchTap: function _onRightIconButtonTouchTap(event) {
    if (this.props.onRightIconButtonTouchTap) {
      this.props.onRightIconButtonTouchTap(event);
    }
  },
  handleTitleTouchTap: function handleTitleTouchTap(event) {
    if (this.props.onTitleTouchTap) {
      this.props.onTitleTouchTap(event);
    }
  },
  render: function render() {
    var _props = this.props;
    var title = _props.title;
    var titleStyle = _props.titleStyle;
    var iconStyleRight = _props.iconStyleRight;
    var showMenuIconButton = _props.showMenuIconButton;
    var iconElementLeft = _props.iconElementLeft;
    var iconElementRight = _props.iconElementRight;
    var iconClassNameLeft = _props.iconClassNameLeft;
    var iconClassNameRight = _props.iconClassNameRight;
    var className = _props.className;
    var style = _props.style;
    var zDepth = _props.zDepth;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ['title', 'titleStyle', 'iconStyleRight', 'showMenuIconButton', 'iconElementLeft', 'iconElementRight', 'iconClassNameLeft', 'iconClassNameRight', 'className', 'style', 'zDepth', 'children']);

    var prepareStyles = this.state.muiTheme.prepareStyles;


    var styles = getStyles(this.props, this.state);

    var menuElementLeft = undefined;
    var menuElementRight = undefined;
    var titleElement = undefined;

    if (title) {
      // If the title is a string, wrap in an h1 tag.
      // If not, just use it as a node.
      titleElement = typeof title === 'string' || title instanceof String ? _react2.default.createElement(
        'h1',
        {
          onTouchTap: this.handleTitleTouchTap,
          style: prepareStyles((0, _simpleAssign2.default)({}, styles.title, styles.mainElement, titleStyle))
        },
        title
      ) : _react2.default.createElement(
        'div',
        {
          onTouchTap: this.handleTitleTouchTap,
          style: prepareStyles((0, _simpleAssign2.default)({}, styles.title, styles.mainElement, titleStyle))
        },
        title
      );
    }

    if (showMenuIconButton) {
      var iconElementLeftNode = iconElementLeft;

      if (iconElementLeft) {
        switch (iconElementLeft.type.displayName) {
          case 'IconButton':
            iconElementLeftNode = _react2.default.cloneElement(iconElementLeft, {
              iconStyle: (0, _simpleAssign2.default)({}, styles.iconButtonIconStyle, iconElementLeft.props.iconStyle)
            });
            break;
        }

        menuElementLeft = _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _simpleAssign2.default)({}, styles.iconButtonStyle)) },
          iconElementLeftNode
        );
      } else {
        var child = iconClassNameLeft ? '' : _react2.default.createElement(_menu2.default, { style: (0, _simpleAssign2.default)({}, styles.iconButtonIconStyle) });
        menuElementLeft = _react2.default.createElement(
          _iconButton2.default,
          {
            style: styles.iconButtonStyle,
            iconStyle: styles.iconButtonIconStyle,
            iconClassName: iconClassNameLeft,
            onTouchTap: this._onLeftIconButtonTouchTap
          },
          child
        );
      }
    }

    var iconRightStyle = (0, _simpleAssign2.default)({}, styles.iconButtonStyle, {
      marginRight: -16,
      marginLeft: 'auto'
    }, iconStyleRight);

    if (iconElementRight) {
      var iconElementRightNode = iconElementRight;

      switch (iconElementRight.type.displayName) {
        case 'IconMenu':
        case 'IconButton':
          iconElementRightNode = _react2.default.cloneElement(iconElementRight, {
            iconStyle: (0, _simpleAssign2.default)({}, styles.iconButtonIconStyle, iconElementRight.props.iconStyle)
          });
          break;

        case 'FlatButton':
          iconElementRightNode = _react2.default.cloneElement(iconElementRight, {
            style: (0, _simpleAssign2.default)({}, styles.flatButton, iconElementRight.props.style)
          });
          break;
      }

      menuElementRight = _react2.default.createElement(
        'div',
        { style: prepareStyles(iconRightStyle) },
        iconElementRightNode
      );
    } else if (iconClassNameRight) {
      menuElementRight = _react2.default.createElement(_iconButton2.default, {
        style: iconRightStyle,
        iconStyle: styles.iconButtonIconStyle,
        iconClassName: iconClassNameRight,
        onTouchTap: this._onRightIconButtonTouchTap
      });
    }

    return _react2.default.createElement(
      _paper2.default,
      _extends({}, other, {
        rounded: false,
        className: className,
        style: (0, _simpleAssign2.default)({}, styles.root, style),
        zDepth: zDepth
      }),
      menuElementLeft,
      titleElement,
      menuElementRight,
      children
    );
  }
});

exports.default = AppBar;
module.exports = exports['default'];