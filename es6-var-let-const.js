/* ES6 var - let - const */

function varNumber() {
    if (1 === 1) {
        var notScoped;
        var notScoped = 7
    }
    return notScoped; // this is 7! lol
}

console.assert(varNumber() === 7);

function letNumber() {
    let scoped = 0;
    // let scoped = 1; // compile error
    if (1 === 1) {
        let scoped = 7;
        scoped = 7;
    }
    return scoped; // 0
}

console.assert(letNumber() === 0);

function constNumber() {
    const cn = 7;
    // cn = 10 // compile error
    const x = {
        number: cn
    };
    x.number = 10; // x's properties are NOT immutable
    return x;
}

console.assert(constNumber().number === 10);
