import { square, add } from './utils.js';

console.log('app.js is running!');
console.log(square(5));
console.log(add(100, 23));
 
import isSenior, {isAdult, canDrink} from './person';

const age = 19;

console.log('isAdult', isAdult(age));
console.log('canDrink', canDrink(age));
console.log('isSenior', isSenior(age));