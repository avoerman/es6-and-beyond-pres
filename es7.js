/**
 * ES7 (ES2016) - Array.prototype.includes
 */

// ES5
var hasBeefyCrunchEs5 = function(items) {
    return items.indexOf('Beefy Crunch Burrito') !== -1;
};

// ES2016
const hasBeefyCrunch = (items = []) => items.map(item => item.toLowerCase()).includes('beefy crunch burrito');

console.assert(hasBeefyCrunch(['Beefy Crunch Burrito', 'Quesillrido']) === true);
console.assert(hasBeefyCrunch(['Crunchwrap Supreme', 'Doritos Locos Taco']) === false);
console.assert(hasBeefyCrunch(['Big Mac', 'Fries']) === false);

/**
 *  ES7 (ES2016) - Exponential Operator
 */

// ES6
// var expES6 = Math.pow(7, 2);

// ES2016
const exp = 7 ** 2;

console.assert(exp === 49);





















// const exp = 7 ** 2; 


// // ES7
// const hasBeefyCrunch = (items = []) => items.map(item => item.toLowerCase()).includes('beefy crunch burrito');
//const hasBeefyCrunch = (items = []) => items.map(item => item.toLowerCase()).includes('beefy crunch burrito');
