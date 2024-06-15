//some basic examples on arrays and for loops
let arr = [1,2,3,4,5]
arr.forEach((value,index) => {  //forEach comes from Array.prototype.forEach ie only for arrays
  console.log("value is "+ value +"and index is"+ index)
})

for(let i=0;i<=4;i++){
  console.log(arr[i])
}

for(let key in arr) {  //for in also work on all iterators and not just arrays. it gives keys 
  console.log(arr[key])
}

let obj = { "name":"ks","addr":"utrecht"}
for(let prop in obj) {
  console.log(prop)
  console.log(obj[prop])
}

//map - return another array
let arr = [1,2,3,4,5]
let xx = arr.map((val,index)=> {
    return val + 10
});
console.log(xx)
//output [11, 12, 13, 14, 15]

//for of -- to direct get values from arrays as well as from any iterable type. It gives values directly
for(let value of arr) {
    console.log(value)
  }
//we can use this for strings as well and it will give every character at a time. 

//Array.from usage
let y = Array.from([1,2,3,4,5])
console.log(y)
let z = Array.from([1,2,3,4,5], (num)=> {  //first array created and then map kind of operation done on it to return new array
  return num+num
})
console.log(z)  ///above line can be handled as (num)=> num+num  ie without brackets. 
                //If brackets are used then we have to use return.

console.log(Array.from("kunal"))
//output of above
//(5) [1, 2, 3, 4, 5]
//(5) [2, 4, 6, 8, 10]
//(5) ["k", "u", "n", "a", "l"]

// Array.of() function
let s = Array(7); //array with 7 indexes and no values
let s1 = Array.of(7) //array with one value

//another example
let x = Array.of(1,2,3,"kunal",{},[123])
console.log(x)
//output
//(6) [1, 2, 3, "kunal", Object, Array(1)]
//Also - Array.of(1,2,3,"kunal",{},[123]) will behave the same as Array.of in this case. 

//Array.fill - it is an array prototype - changes the array
let arr = [1,2,3,4,5,6,7,8]
arr.fill("NA",3,5) //value, start index and stop index. it mutates the array
console.log(arr)

//splice is to get new array but doesnt impact main array
console.log(arr.splice(1,3))
console.log(arr)
//output
//(8) [1, 2, 3, "NA", "NA", 6, 7, 8]
//(3) [2, 3, "NA"]
//(5) [1, "NA", 6, 7, 8]

//if we dont provide end index, it fills/replace all after start index
arr.fill("kunal",3)//from index 3 all values will be updated to new value provided

//Array splice method - also mutates the main array if used with inserting a value
let arr = [1,2,3,4,5,6,7,8]
console.log(arr.splice(1,3,"kunal")) //start with index 1, delete 3 elements from there and insert kunal at start index
console.log(arr)
//output
//(3) [2, 3, 4]
//(6) [1, "kunal", 5, 6, 7, 8]

//find and findIndex - they are also prototype functions and hence all arrays will have this.
const x = arr.find((element,index)=> {
    return element.city.temp > 80;
});

//findIndex
arr.findIndex((value,index)=> {  //parameter is basically a callback or a predicate
    return value.city.temp> 80  //return first index where this condition becomes true.
})

