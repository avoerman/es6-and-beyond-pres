/**
 * ES8 (ES2017) - Object.entries/ Object.values
 */

const tacos = {
    cheese: true,
    beef: true,
    onions: false,
    peppers: false
};

const ingredients = Object.entries(tacos)
    .filter(([key, val]) => val)
    .map(([key, val]) => key)
    .join(', ');


console.log(ingredients);
console.assert(ingredients === 'cheese, beef');




// Object.values


const hasIngredients = Object.values(tacos).includes(true);

console.log(hasIngredients);
console.assert(hasIngredients === true);
