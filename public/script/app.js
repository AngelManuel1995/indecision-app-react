'use strict';

var user = {
    name: 'Angel Manuel Góez Giraldo',
    age: 24,
    location: 'Medellín - Colombia',
    options: ['item1', 'item2']
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

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        user.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var onMakeDecision = function onMakeDecision() {
    var decision = Math.floor(Math.random() * user.options.length);
    var todo = user.options[decision];
    console.log(todo);
};

var removeAllItems = function removeAllItems() {
    user.options = [];
    render();
};

var render = function render() {

    var template = React.createElement(
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
            'button',
            { disabled: user.options.length === 0, onClick: onMakeDecision },
            'WHAT SHOULD I DO?'
        ),
        React.createElement(
            'button',
            { onClick: removeAllItems },
            'REMOVE ALL'
        ),
        user.options.length > 0 ? React.createElement(
            'p',
            null,
            'Here are your options: ',
            user.options.length
        ) : React.createElement(
            'p',
            null,
            'No options to show'
        ),
        React.createElement(
            'ol',
            null,
            user.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'div',
            null,
            React.createElement(
                'form',
                { onSubmit: onFormSubmit },
                React.createElement(
                    'label',
                    { htmlFor: 'itemForm' },
                    'Add new item'
                ),
                React.createElement('input', { id: 'itemForm', name: 'option', type: 'text' }),
                React.createElement(
                    'button',
                    null,
                    'ADD'
                )
            )
        ),
        getLocation(user)
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();
