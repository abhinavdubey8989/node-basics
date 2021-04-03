/**
 * 
 * async await gives syntactical and scope advantage
 * 
 * if any promise fails , then the code after it is not executed , and it goeas to catch of the the promise catcher
 * 
 * in this case : doWork.catch
 * 
 */


const addPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('numbers must be non-negative')
            }
            resolve(a + b);
        }, 2000)
    });

};



const doWork = async () => {
    const sum1 = await addPromise(1, 2); //try changing one argument to negative
    const sum2 = await addPromise(1, sum1);
    const sum3 = await addPromise(1, sum2);
    return sum3;
};


doWork().then((res) => {
    console.log('asnwer of addition : ' + res);
}).catch((e) => {
    console.log(e);
});