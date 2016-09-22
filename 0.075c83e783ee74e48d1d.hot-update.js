webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(160);

	var _antd = __webpack_require__(223);

	var _welcome = __webpack_require__(225);

	var _welcome2 = _interopRequireDefault(_welcome);

	var _profile = __webpack_require__(226);

	var _profile2 = _interopRequireDefault(_profile);

	var _antdes = __webpack_require__(237);

	var _antdes2 = _interopRequireDefault(_antdes);

	var _gallery = __webpack_require__(247);

	var _gallery2 = _interopRequireDefault(_gallery);

	var _subpage = __webpack_require__(250);

	var _subpage2 = _interopRequireDefault(_subpage);

	var _last = __webpack_require__(253);

	var _last2 = _interopRequireDefault(_last);

	var _editPage = __webpack_require__(256);

	var _editPage2 = _interopRequireDefault(_editPage);

	__webpack_require__(260);

	__webpack_require__(262);

	__webpack_require__(264);

	__webpack_require__(272);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// 引入垫片兼容IE
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);

	// 引入React-Router模块


	// 引入Antd组件

	var SubMenu = _antd.Menu.SubMenu;

	// 引入单个页面（包括嵌套的子页面）


	// 引入Ant-Design样式 & Animate.CSS样式 & font-awesome样式


	// 引入主体样式

	// 配置整体组件
	var Init = function (_React$Component) {
	    _inherits(Init, _React$Component);

	    function Init(props) {
	        _classCallCheck(this, Init);

	        var _this = _possibleConstructorReturn(this, (Init.__proto__ || Object.getPrototypeOf(Init)).call(this, props));

	        _this.handleClick = function (e) {
	            _this.setState({
	                current: e.key,
	                openKeys: e.keyPath.slice(1)
	            });
	        };

	        _this.onToggle = function (info) {
	            _this.setState({
	                openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
	            });
	        };

	        _this.state = {
	            current: '1',
	            openKeys: []
	        };
	        return _this;
	    }

	    _createClass(Init, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { id: 'leftMenu' },
	                    _react2.default.createElement('img', { src: '../images/logo.png', width: '50', id: 'logo' }),
	                    '  ',
	                    _react2.default.createElement(
	                        _antd.Menu,
	                        { onClick: this.handleClick,
	                            style: { width: 146 },
	                            openKeys: this.state.openKeys,
	                            onOpen: this.onToggle,
	                            onClose: this.onToggle,
	                            selectedKeys: [this.state.current],
	                            theme: 'light',
	                            mode: 'inline' },
	                        _react2.default.createElement(
	                            _antd.Menu.Item,
	                            { key: '1' },
	                            _react2.default.createElement(
	                                _reactRouter.IndexLink,
	                                { to: '/' },
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    _react2.default.createElement(_antd.Icon, { type: 'home' }),
	                                    _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        '欢迎页'
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            SubMenu,
	                            { key: 'sub2', title: _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    _react2.default.createElement(_antd.Icon, { type: 'windows' }),
	                                    _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        '导航一'
	                                    )
	                                ) },
	                            _react2.default.createElement(
	                                _antd.Menu.Item,
	                                { key: '2' },
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/profile' },
	                                    '子导航一'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            SubMenu,
	                            { key: 'sub3', title: _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    _react2.default.createElement(_antd.Icon, { type: 'bar-chart' }),
	                                    _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        '导航二'
	                                    )
	                                ) },
	                            _react2.default.createElement(
	                                _antd.Menu.Item,
	                                { key: '3' },
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/antdes' },
	                                    '子导航二'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            SubMenu,
	                            { key: 'sub4', title: _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
	                                    _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        '导航三'
	                                    )
	                                ) },
	                            _react2.default.createElement(
	                                _antd.Menu.Item,
	                                { key: '4' },
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/gallery' },
	                                    '子导航三'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _antd.Menu.Item,
	                                { key: '5' },
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/subpage' },
	                                    '子导航四'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _antd.Menu.Item,
	                            { key: '6' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/last' },
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    _react2.default.createElement(_antd.Icon, { type: 'solution' }),
	                                    _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        '结尾页'
	                                    )
	                                )
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { id: 'rightWrap' },
	                    this.props.children
	                )
	            );
	        }
	    }]);

	    return Init;
	}(_react2.default.Component);

	// 配置路由，并将路由注入到id为init的DOM元素中


	_reactDom2.default.render(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: Init },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: Home }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'register', component: Register }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'login', component: Login }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'profile', component: _profile2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'antdes', component: _antdes2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'gallery', component: _gallery2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'subpage', component: _subpage2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'last', component: _last2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'editPage/:rowId', component: _editPage2.default })
	    )
	), document.querySelector('#init'));

/***/ }
])