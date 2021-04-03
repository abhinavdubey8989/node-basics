//promises helps to reduce callback stuff
//callbacks are clumsy



//the first one to get called will be the final state of the promise
//which is good , as no such thing is there in callbacks
const my_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 3]);
        reject('12');
    }, 2000);

});


//only 1 of (then,catch) will run
my_promise.then((resp) => {
    console.log('success');
    console.log(resp);
}).catch((error) => {
    console.log('some err occurred');
});