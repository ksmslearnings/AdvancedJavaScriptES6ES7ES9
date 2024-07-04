// Async Await if concept introduced in ES8 ie EcmaScript 2017
//Promises were part of ES6 ie EcmaScript 2015
//async await doesnt change JS fundamentally and under the hood all stays the same. 
//It provided better way to architect JS code and better way to think about it.

//promise example to simulate a backend call
function doSomething() {
  return new Promise((resolve,reject)=>{ //promise is very JS language based syntax and not very user friendly and human like way of thinking
    setTimeout(function() { //set timeout is used here to simulate some backend call
       resolve("3 seconds have passed");
    }, 3000);
  })
}

console.log('first line');
doSomething().then(resolvedData => { //issue here is that this is JS way to handle this and is not very intuitive
  console.log(resolvedData);
})

console.log('last line');
//output
//first line
//last line
//3 seconds have passed

//Now handling same process using async await approach - under the hood it still runs using event loop any async operations

function doSomething() {
  return new Promise((resolve,reject)=>{
    setTimeout(function() { //set timeout is used here to simulate some backend call
       resolve("2 seconds have passed");
    }, 2000);
  })
}


async function two() { //is annotated for JS as async telling it that this will have some long running operation that we want to await
  const response = await doSomething(); //JS will pause execution of this particular function till this line completes but will keep executing other parts of the program
  console.log(response);//this line will run only after above line is completed
  
}

console.log('first line in main program');//will be run immediately
two();//JS will see that this is async function and run it till first await is seen and then thread runs below code awaiting this one for later completion
console.log('last line in main program'); //will be run immediately

//output
//first line in main program
//last line in main program
//2 seconds have passed


////Some other additional things introduced in ES8
//Object.entries and Object.values
const person = {
  "name":"kunal",
  "id":10
}

console.log(Object.values(person));//output [ 'kunal', 10 ] ie array of values
console.log(Object.entries(person));//output [ [ 'name', 'kunal' ], [ 'id', 10 ] ] ie array of all key value pairs

//str.padStart and padEnd - work on strings and are prototype functions
const name="kunal"
console.log(name.padEnd(20,',')) //kunal,,,,,,,,,,,,,,,
console.log(name.padStart(20,','))//,,,,,,,,,,,,,,,kunal
console.log(name) //kunal  ie original string is not changed at all

//Object.getOwnPropertyDescriptors   - also in ES8 to know about every property in object
const person1 = {
  "name":"kunal",
  "id":10
}

console.log(Object.getOwnPropertyDescriptors(person1));
//out
// {
//   name: {
//     value: 'kunal',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   id: { value: 10, writable: true, enumerable: true, configurable: true }
// }


// Another simple thing introduced in ES8 is comma can be there in function calls as well now just like in arrays etc
const arr = [1,2,3,4,5,]//was always there in ES5 too
function func1(x,y) {console.log('hi')}
func1(10,20,) //is ok now
