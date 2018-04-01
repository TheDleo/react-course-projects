const square = function (x) {
    return x * x;
};

const squareArrow2 = (x) => {
    return x * x;
}

const squareArrow = (x) => x * x;

console.log(squareArrow(32));

const fullName = 'Mike Smith';

const getFirstName = (name) => name.split(' ')[0];

console.log(getFirstName(fullName));


const multiplier = {
    numbers: [5,7, 13],
    multiplyBy: 13,
    multiply() {
      return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());