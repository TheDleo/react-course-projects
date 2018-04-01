'use strict';

var square = function square(x) {
    return x * x;
};

var squareArrow2 = function squareArrow2(x) {
    return x * x;
};

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(32));

var fullName = 'Mike Smith';

var getFirstName = function getFirstName(name) {
    return name.split(' ')[0];
};

console.log(getFirstName(fullName));
