'use strict';

var user = {
    name: 'Angel Manuel Góez Giraldo',
    age: 24,
    location: 'Medellín - Colombia'
};

var getLocation = function getLocation(_ref) {
    var location = _ref.location;

    if (!location) {
        return 'Unknown';
    }
    return React.createElement(
        'p',
        null,
        'My location is: ',
        location
    );
};

var style = {
    border: '2px solid #eee',
    color: 'black',
    boxShadow: '0px 2px #ccc',
    padding: '10px',
    backgroundColor: '#fff',
    display: 'inline-block',
    margin: '0px'
};
var buttonStyleAdd = {
    backgroundColor: 'green',
    color: '#fff',
    padding: '5px',
    fontSize: '20px',
    boxShadow: '1px 2px #ccc',
    margin: '2px'
};
var buttonStyleMinus = {
    backgroundColor: 'crimson',
    color: '#fff',
    padding: '5px',
    fontSize: '20px',
    boxShadow: '1px 2px #ccc',
    margin: '2px'
};
var buttonStyleRestart = {
    backgroundColor: 'blue',
    color: '#fff',
    padding: '5px',
    fontSize: '20px',
    boxShadow: '1px 2px #ccc',
    margin: '2px'
};

var counter = 0;

var addOne = function addOne() {
    counter++;
    render();
};
var minusOne = function minusOne() {
    counter--;
    render();
};
var reset = function reset() {
    counter = 0;
    render();
};

var render = function render() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { style: style },
            React.createElement(
                'h1',
                null,
                'Indecision app'
            ),
            React.createElement(
                'p',
                null,
                'Hi I am basic template, and I changed'
            ),
            React.createElement(
                'ol',
                null,
                React.createElement(
                    'li',
                    null,
                    'Item one'
                ),
                React.createElement(
                    'li',
                    null,
                    'Item two'
                )
            ),
            getLocation(user)
        ),
        React.createElement(
            'div',
            { style: style },
            React.createElement(
                'h1',
                null,
                'Counter mini-app'
            ),
            React.createElement(
                'p',
                null,
                'Events and Attributes'
            ),
            React.createElement(
                'p',
                null,
                'Counter: ',
                counter
            ),
            React.createElement(
                'button',
                { style: buttonStyleAdd, onClick: addOne },
                'Add 1'
            ),
            React.createElement(
                'button',
                { style: buttonStyleMinus, onClick: minusOne },
                'Minus 1'
            ),
            React.createElement(
                'button',
                { style: buttonStyleRestart, onClick: reset },
                'Reset'
            )
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();
