'use strict';

var app = {
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
    margin: '0px auto'
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var onMakeDecision = function onMakeDecision() {
    var decision = Math.floor(Math.random() * app.options.length);
    var todo = app.options[decision];
    console.log(todo);
};

var removeAllItems = function removeAllItems() {
    app.options = [];
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
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'WHAT SHOULD I DO?'
        ),
        React.createElement(
            'button',
            { onClick: removeAllItems },
            'REMOVE ALL'
        ),
        app.options.length > 0 ? React.createElement(
            'p',
            null,
            'Here are your options: ',
            app.options.length
        ) : React.createElement(
            'p',
            null,
            'No options to show'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
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
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();
