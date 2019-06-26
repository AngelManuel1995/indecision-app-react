'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: []
        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOneOption = _this.handleDeleteOneOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var options = JSON.parse(localStorage.getItem('options'));
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                this.state.options = [];
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var optionsJson = JSON.stringify(this.state.options);
                localStorage.setItem('options', optionsJson);
            }
            console.log('Component did update');
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('Component will Unmount');
            return true;
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handleDeleteOneOption',
        value: function handleDeleteOneOption(optionToRemove) {
            this.setState(function (prevState) {
                return { options: prevState.options.filter(function (option) {
                        return option !== optionToRemove;
                    }) };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var decision = Math.floor(Math.random() * this.state.options.length);
            var todo = this.state.options[decision];
            alert(todo);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter a valid option to add into the list';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'The option is already in the list';
            }

            this.setState(function (prevState) {
                return {
                    options: [].concat(_toConsumableArray(prevState.options), [option])
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    handleDeleteOneOption: this.handleDeleteOneOption,
                    handleDeleteOptions: this.handleDeleteOptions,
                    options: this.state.options
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'INDECISION APP'
        ),
        React.createElement(
            'p',
            null,
            'put your life in the hands of a computer'
        )
    );
};

var Action = function Action(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handlePick,
                disabled: !props.hasOptions },
            'What should I do?'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.state = {
            error: undefined
        };
        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            if (!error) {
                e.target.elements.option.value = '';
            }
            this.setState(function () {
                return {
                    error: error
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error,
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement(
                        'label',
                        { htmlFor: 'addOption' },
                        'Add new option'
                    ),
                    React.createElement('input', { id: 'addOption', name: 'option', type: 'text' }),
                    React.createElement(
                        'button',
                        null,
                        'ADD'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'span',
            null,
            props.option
        ),
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    return props.handleDeleteOneOption(props.option);
                } },
            'Remove'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove all'
        ),
        props.options.length === 0 ? React.createElement(
            'p',
            null,
            'Please add one option to get started!!!'
        ) : React.createElement(
            'h3',
            null,
            'All your options: ',
            props.options.length
        ),
        React.createElement(
            'div',
            null,
            props.options.map(function (option) {
                return React.createElement(Option, { handleDeleteOneOption: props.handleDeleteOneOption, props: true, key: option, option: option });
            })
        )
    );
};

/*IndecisionApp.defaultProps = {
    options: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
}*/

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
