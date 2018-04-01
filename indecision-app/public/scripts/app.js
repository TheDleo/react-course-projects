'use strict';

var appObject = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['Item 1', 'Item 2']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObject.title
    ),
    appObject.subtitle && React.createElement(
        'p',
        null,
        appObject.subtitle
    ),
    React.createElement(
        'p',
        null,
        appObject.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            appObject.options[0]
        ),
        React.createElement(
            'li',
            null,
            appObject.options[1]
        )
    )
);

var user = {
    name: 'Dan Martin',
    age: 54,
    location: 'Phoenix'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous',
        '!'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
