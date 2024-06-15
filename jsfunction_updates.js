//rest operator and default operator
//Default operator
function(x, y=10) {
    console.log('usual stuff')
}

//rest operator - gets all the parameters after the ones manually read in order.
function findHighest(upperLimit, ...numList) {
    let max = 0
    numList.filter(function(n) {
        if(n < upperLimit && n > max) {
            max = n
        }
    });
    return max //max number less than upper limit passed
}

console.log(findHighest(45,32,89,12,34,67));

//spread operator - oppostive of rest operator. it turns an array which is already know to numbers
function sum(a,b,c) {
    return a+b+c;
  }
  
  const numbers = [1,2,3]
  console.log(sum(...numbers))

  //Another example of spread operator to copy over the object and make a new copy
  const currState = {
    a:10,
    b:20,
    c:30
  }
  
  const action = {
    payload:40,
    type:"done"
  }
  const newState =  {...currState} //copies the entire object into a new object IMP . 
  //const newState =  currState //this is just a new variable also pointing to same object..
  newState.newProperty = action.payload
  console.log(newState)
  console.log(currState)

 // Also applies to arrays
 var arr1 = [1,2,3,4,5]
 var arr2 = [...arr1] //will make a copy and not a reference

//output
//(4) {a: 10, b: 20, c: 30, newProperty: 4...}
//(3) {a: 10, b: 20, c: 30}

//Example using spread operator to initialize objects - with Array.Apply prototype functions it wont create new objects
function Ball(x,y,z){
    this.r = x;
    this.h=y;
    this.z=z
}

let ballArgs = [10,20,30]
let newBall = new Ball(...ballArgs) //this will pass the arguments correctly for function object

//another example
const arr = [12,3,4,5,6,7,8,9,1212,34]
console.log(Math.min.apply(null,arr)) //prototype way a bit wierd
console.log(Math.min(...arr)) //spread operator based

//amother example
const xx = [1,2,3]
const yy = ['a','b','c',...xx,'q','123','s'] //can insert values in middle of an array as an example


