'use strict';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision app'
    ),
    React.createElement(
        'p',
        null,
        'Hi I am basic template, and I changed'
    )
);

ReactDOM.render(template, document.getElementById('app'));
