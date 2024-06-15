let x = 10 //x variable at global scope here
for(let x=0;x<20;x++) {
    console.log(x) //local x variable
}
console.log(x) //10
//Let is better for variable leak prevention.

//let and const are new var


//Hoisting concept - applied to var and not to let
//var is always moved up ie hoisting. Hoisting is moving only the variable at the top and not its value.
//And movement of variable is scope based ie if variable is defined inside a function with var , 
//then it is moved up at top of the function and not global scope.
var a = 10
function tryout(){
  console.log(a) //will be undefiend here since var x; will be there as first line inside function due to hoisting
  var a = 20
  console.log(a)
}
tryout()

//if we use let then it will be an error in code itself
var b = 10
function tryout1(){
  console.log(b) 
  let b = 20
  console.log(b)
}
tryout1() ////will throw an error since b inside with let will not be hoisted and 
        ////hence b will be treated as not defined variable itself


//const - as name says cant change once defined. Hoisting rules do not apply to const as well
const x = 1
x=2//not possible and will throw an error

const arr = [1,2,3]
arr.push(4) //is still works since it still stays an array

//also fine below
const fname = "kunal"
const hello  = "hello, "+ fname //Interpolation
console.log(hello)

//Template Literals --  ${variableName} and we can remain inside the main string without 
//adding single and double quotes. Uses `` to create a template
const fname = "kunal"
const hello  = `hello, ${fname}`
console.log(hello)

// `` ie template literals also keep track of new lines and stuff.
const b = `kunal is
goed man
`
//will print
kunal is
goed man

//Template Literals for Expression also works
const mathCalc = `43 * 22 = ${43 * 22}`
console.log(mathCalc)
//print - 43 * 22 = 946

//and this also works
let isMember = false
console.log(`your price is ${isMember ? "40 Dollar" : "20 dollars"}`)
//print 20 dollars


//JS has built in arguments object that always receives whats passed to a function.
//different from the parameters we are manually reading. Arguments will always receive everything passed
function names(str){
  console.log(arguments)
  console.log("string passed is " +str)
}

names(10,20,30,40,50)
//output
//(5) {0: 10, 1: 20, 2: 30, 3: 40, 4: 50}
//string passed is 10
