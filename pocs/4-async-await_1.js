/**
 * ASYNC is used with methods
 * and AWAIT is a keyword : we cannot use await outside an async method
 * 
 * 
 * points to note about asyc functions : 
 * 
 * 
 * 1. we can make a function async , by placing async keyword befor it
 * 2. async function returns a promise ALWAYS
 * 3. if we return some value : promise gets resolved with that value
 * 4. if we throw an error : promise gets rejected with that error
 * 
 * 
 */


//example_1 : async method returns a promise , this promise gets full-filled with 'abhinav
const someWork_1 = async () => {
    return "abhinav";
}
console.log(someWork_1());


//example_2 : async method returns a promise , this promise gets full-filled with 'abhinav
const someWork_2 = async () => {
    return "abhinav";
}
someWork_2().then((result) => {
    console.log('Promise was resolved with : ' + result);
}).catch((e) => {
    console.log(e);
});


//example_3 : async method reject flow
const someWork_3 = async () => {
    throw new Error("some error")
}
someWork_3().then((result) => {
    console.log('Promise was resolved with : ' + result);
}).catch((e) => {
    console.log(e);
});