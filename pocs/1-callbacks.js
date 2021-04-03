

//method-0 :  to create a call back sync
//*****************STARTS**************/
const add = (a, b, callback) => {
    const result = a + b;
    callback(result);
}


add(1, 2, (sum) => {
    console.log(sum)
})
//*****************ENDS**************/




//method-1 :  to create a call back mechanism async
//*****************STARTS**************/
const custom_method = (a, b, callback) => {
    setTimeout(() => {
        const sum = a + b;
        callback(sum)
    }, 2000)
}


custom_method(1, 22, (sum) => {
    console.log('sum is : ' + sum)
})
//*****************ENDS**************/




//method-2 :  to create a call back mechanism async
//*****************STARTS**************/
const custom_method_2 = (a, b, callback) => {
    setTimeout(() => {
        const sum = a + b;
        callback(sum)
    }, 1000)
}


const fun_2 = (sum) => {
    console.log('sum is : ' + sum);
}

custom_method_2(1, 2, fun_2)

//*****************ENDS**************/




//method-2 : (err,resp) call back mechanism async
//*****************STARTS**************/
const custom_method_3 = (callback) => {
    setTimeout(() => {
        callback('This is error msg', null);
        // callback(null, [1, 2, 3]);
    }, 1000)
}



custom_method_3((error, resp) => {

    if (error) {
        return console.log("error occured and handled");
    }

    console.log('data received : ');
    console.log(resp);
})

//*****************ENDS**************/

