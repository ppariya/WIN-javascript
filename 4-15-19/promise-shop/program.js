require('es6-promise');

//problem 2
// var promise = new Promise(function(fulfill, reject){
//     setTimeout(function() {
//         fulfill('FULFILLED!');
//     }, 300);
// })

// promise.then(function(value){
//     console.log(value);
// })


//problem3
// var promise = new Promise(function(fulfill, reject){
//     setTimeout(function(){
//         reject(new Error('REJECTED!'));

//     }, 300)
// })

// function onReject(error){
//     console.log(error.message);
// }


// promise.then(null, onReject);    


//problem4

// const promise = new Promise(
//     (fulfill,reject) => {
//         setTimeout(function(){
//         fulfill('I FIRED');
//         reject(new Error('I DID NOT FIRE'));
//         }, 300)
//     }
// );

// function onReject(error){
//     console.log(error.message)
// }

// promise.then(console.log, onReject)


//problem5
// const promise = new Promise(
//     (fulfill, reject) => {
        
//             fulfill('PROMISE VALUE');
        
//     }
// );

// promise.then(console.log);
// console.log('MAIN PROGRAM');

//problem6
// var promise = Promise.resolve("Passed!");
// promise = Promise.reject("Failed!");
// promise.catch(function(error){
//     console.error(error.message);
// })


//problem7
first().then(second).then(console.log);
