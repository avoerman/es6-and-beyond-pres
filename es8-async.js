({babel: true})

// ES6 Promises
// ES2017 (ES8) Async Await

let sayHi = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('hi');
        }, 10000)
    })
};

let sayBye = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('bye');
        }, 100)
    })
};

async function talk() {
    let response1 = await sayHi();
    console.log(response1);
    let response2 = await sayBye();
    console.log(response2);
}

talk();

