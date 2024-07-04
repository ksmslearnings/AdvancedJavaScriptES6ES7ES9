// JS is single threaded - non blocking and even driven and handle async operations 
//in an event loop separately from the main thread so that it stays non blocking. 
//so things like ajax calls, settimeout cals etc are handled async way via event loop.
//IMP - JS will not wait for async operations and will move forward
//eg
setTimeout(function() {console.log('inside settime out')}, 110);
console.log("line 1")
setTimeout(function() {console.log('inside settime out2')}, 100);
for(i =0;i<= 1000000;i++)
{
  if(i=1000000) {
    console.log('loop completed')
  }
}
//will print this output
//line 1
//loop completed
//inside settime out2
//inside settime out


//In JS functions are first class objects - we can call them, store them in variables, pass them in other functions.
function print(text) {
    console.log(text)
}
//print('hello')
//is same as 
const print = function(text) {
    console.log(text)
}
//print('hello')

//Callbacks in JS - it is the code (function or object or something else) that we pass around for another function to run later
function run(callback, input) {
    callback(input);
}

run(print,'hello world') //will call the callback function print here

//or
run(function(text) {
    console.log(text)
}, 'hi this is by directly adding another function')

//we have seen callbacks in jquery too
/*
$('btn').click(=> {...})//we passed callback functions to click event/function
*/

//Another gr8 example of callback
//how can we have something like this a(2)(3)
function a(x) {
    console.log(x)
    return function(y) {
        console.log('this is a callback function inside of main function')
        console.log(x+y);  // x will be available here due to closure concept.
    }
}

a(5)(10)
//will output
//5
//this is a callback function inside of main function
//15

//similarly we can have functions returning objects and then we call those objects and their properties as usual

//**************************Promises in JS******************************
//native to javascript - is a js construct that gives us few methods to hande async of blocking operations
// then - catch - All - race (with resolve and reject)
// then - when something is done 
// catch - when any error occurs while executing something
// All - when all the called functionalities are done
// race - when atleast one of the functionalities called is done
let newPromise = new Promise(() => {})  //it need a callback called primise object
console.log(newPromise) //Promise { <pending> }
//now the callback itself need to have 2 params - they can be named anything but they are for resolve and reject
//better to use the same words as convention in js
//IMP - is the in promise constructor in JS, resolve and reject are expected to be callbacks themselves as well


//Good example of using primises

let newPromise1 = new Promise((resolve,reject) => {
    //whatever is here is called immediately whatever JS can and dont have to wait
    console.log('we dome something here and this will be run immeidately')
    console.log('we may call ajax calls OR some http calls OR something else that takes time or is dependent on some externla services')  
  
    resolve("a message from resolve"); //whatever is passed to resolve will be available to then as data
    //or
    //reject("a message from reject");//this can be any kind of data as with resolve
    
  })  //it need a callback called primise object
  console.log(newPromise1)
  
  //IMP then function look on the promise outside of it and look for resolve callback called or not and only then it calls its callback function
  newPromise.then((promiseResolveData)=> {  //again then need a callback that it will only call when promise has resolved
    console.log('then called')
    console.log(promiseResolveData)
  })
  
  //IMP catch function look on the promise outside of it and look for reject callback called or not and only then it calls its callback function
  newPromise.catch((promiseRejectData)=> {  //again then need a callback that it will only call when promise has rejected
    console.log('catch called')
    console.log(promiseRejectData) 
  })
  
  console.log('this is something called before then function itself') //this will get called before then is done
  console.log(newPromise1)
  //output
/*
  we dome something here and this will be run immeidately
  we may call ajax calls OR some http calls OR something else that takes time or is dependent on some externla services
  Promise { 'a message from resolve' }
  this is something called before then function itself
  Promise { 'a message from resolve' }
  then called
  a message from resolve
  */

  //If we have multiple promises and their 'then' callbacks and we want to wait for all of 
  //them to resolve/reject  ie complete, we can use Promise.all(promise1, promise2).then(callback)

  //and if we want to quickly move forward as soon as any one of the primises is done then we can use .race(callback)


  ///See some examples of real usecases of promises

  

  
  





