const add = (a, b) => a + b;

const generateGreeting = (name) => (`Hello ${name}!`);

test('add should add 2 numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
})

test('generateGreeting should generate the right greeting', () =>{
    const expected = generateGreeting('Dan');
    expect(expected).toBe('Hello Dan!');
})