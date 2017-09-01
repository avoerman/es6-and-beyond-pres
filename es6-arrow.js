/* ES6 arrow functions */
const animals = ['cat', 'dog', 'duck', 'tiger'];


var es5 = animals.filter(function (animal) {
    return animal.length === 3;
}).map(function (animal) {
    return '<li id="' + animal + '">' + animal.toUpperCase() + '!' + '</li>';
}).join('\n');

console.log(es5);

let es6 = animals
    .filter(animal => animal.length === 3)
    .map(animal => `<li id="${animal}">${animal.toUpperCase()}!</li>`).join('\n');


console.log(es6);

console.assert(es5 === es6);

