
const addPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000)
    });

};



//performing 1 async call after another 
//without nesting 
//nesting increases code complexity and maintainance

addPromise(1, 2).then((result1) => {
    console.log('sum of 1 and 2 : ' + result1);
    return addPromise(result1, 1);
}).then((result2) => {
    console.log('sum of 1 and 3 : ' + result2);
}).catch((error) => {
    console.log(error);
});