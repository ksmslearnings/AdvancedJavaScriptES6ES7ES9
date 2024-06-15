//old style object creation
const x = new Object();
console.log(x);
const y = Object.create(null);
console.log(y);
//object literal
const z = {}; //object literal

//another way
let commonName = "kunal"
let adress = "utrrecht"
const a = {
  commonName,  //here we dont have to assign a value and if a variable is available 
                //its value will be automatically assigned if name of property matches the variable
  adress,
  show() {
    console.log(this);
  }
}
console.log(a)
//output
//{name: "kunal", adress: "utrrecht", show: ƒ show()}

// we can also pass the object to another function using object literals
let obj1 = {
    "fname": "kunal",
    "address" : "utrecht"
}
let fname = obj1.fname
let address = obj1.address
//passing data to another some function
 processFunction({
fname,
address,
obj1.fname //this will fail since there is variable with this name
 })

 processFunction(data){
    //..
 }


//Destructuring
let g = { "name":"ks", "home":"dsff"}
const {name, home} = g //object's properties will be mapped to name and home properties in one shot in variables in one shot
//note - LHS is not a object but the constants ie variables basically
// We can rename the variables too while we read it
const {name: NameofPerson, home: authorHome } = g

//Another example
function sendLogs({logName, LogId, LogSource}) {
    console.log(`${logName} has Id of ${LogId} and source of ${LogSource}`)
  }
  
  let obj = {
    "logName" : "log1",
    "LogId" : 123,
    "LogSource" : "loganalytics"
  }
  
  sendLogs(obj) //passing whoel object and it will be destructured when it is read on first line 
                //wherever properties match

  //even nested objects can be destructured
  let obj = {
    "logName" : "log1",
    "LogId" : 123,
    "LogSource" : "loganalytics",
    "childs" : [
      "obj1",
      "obj2"
    ]
  }
  
  const {childs: {[0]: firstChild, [1]: secondChild}} = obj//first get childs and then again destructure 
                                                        //it with its individual elements which are in this 
                                                        //case array element but it can be anything
  console.log(firstChild)
  console.log(secondChild)

// Another usage can be that we can use it as names parameters in a function parameter.
calcArea({"width":100, "height":200}) //directly passing a JS object

function calcArea({ height,width }) {..}  //so order is not important if we use destructuring

//Using this concept in arrays - can be used with small arrays
let arr = [1,2,3,4,5]
const [first, second, third] = arr //for arrays , values in the array are mapped to variables in order
console.log(first)
console.log(third)
console.log(second)

const [,,,forth,fifth] = arr //here we skip first 3 and define 2 variables to read 4th and 5th values
console.log(forth)
console.log(fifth)

//and we can use rest operator as well
const [,two,...others] = arr //others will be an array itself


