//value and ref types are similar in JS as other langauges
//value types - primitives like string, number, boolean, null, undefined and symbol and these dont have any methods.
let x = Symbol(`this is a symbol`)
x = 123
x="sss"
x=null
x=undefined
x=true
console.log(x)

let y = x //this is a new variable and new value assigned to it in case of value types
y="oil"
console.log(x) //print true
console.log(y) //print oil
//IMP - in value types, value itself is immutable. so if we do x.toUpperCase() etc it is internally a new value in memory 
let x1 = 5
function sum(x1,y1) { //x1,y1 are both local variables inside of function and not same as x1 above
    x1 = x1+y1 //here x1 becomes 10 bith this x1 is in function scope.
}
sum(x1,5) //here we are passing x as 5 and y as 5. value types are passes by value 
console.log(x) //x still remain 5

//ref types - objects/functions/class
//here if we do let y = x and x is an object, then both x and y refer to same memory location where object is stored in heap.
//and variables are stored in stack with address location value.



//hashmaps - are basically key value pairs where keys are stored in one array and then another array holds the values with 1:1 mapping.
//but storage is optimised so that put operations are very fast.
//in Java, there is a type called Map<string,string> for this purpose.
//In JS , Map is for same purpose ie key value pairs - is also an iterable where as regular object is not - and there are 
//some good methods available too - since they are iterables, they maintain their order

//example of regular object holding key value pairs
let contacts = {
    "Kunal": "05559833",
    "Anshum": "13141499"
}

//using map -- html local storage works with same map approach using get and set methods.
let mycontacts = new Map();
mycontacts.set("kunal","34234239")
mycontacts.set("anshum","23232883")
console.log(mycontacts.get("kunal"))

//we can use function also as a key
let func = ()=> {
    return Math.sum(10,20);
}
mycontacts.set(func,"something about the function as a key")
mycontacts.get(func)

//need to see when can we use this function adding as a key feature where functions are tied together may be

//methods
mycontacts.size //- to get count of key value pairs

for(kv of mycontacts) {
console.log(kv)
}

//above for ..of loop will fail with regular object

//clear
mycontacts.clear()

//map entries
console.log(mycontacts.entries()) //print [Map Entries] { [ 'kunal', '34234239' ], [ 'anshum', '23232883' ] }
//and this above is an iterable

//using forEach on this has also been added. So this works on maps as well apart from Arrays
mycontacts.forEach((val) => {
    console.log(val)
  })
  //print 34234239 and 23232883  ie the values

  console.log(mycontacts.keys()) //[Map Iterator] { 'kunal', 'anshum' }

  //simiarly
  mycontacts.values()


  //Weak map - allows garba ecollection of its key if it is not referred anymore - good to maintain states
  //regular map - doesnt allow garba ecolletion and its keys becomes its own part as separate entities and are not referred
  //IMP - below code is behaving same for strong and weak maps.. need to investigate
  //WeakMap has very less number of methods. we should use regular Map for most times to kep things simple and have more functionality available.

  let userData = {
    users: [
      {
        name:"k",
        age:10
      },
      {
        name:"b",
        age:20
      }
    ]
  }
  
  let func2 = ()=> {
    console.log("this is a function type")
  }
  
  let friendObj = {
    "friendname": "someone"
  }
  
  let strongMap = new Map()
  strongMap.set("kunal","123")
  strongMap.set("anshum","456")
  strongMap.set(userData.users[0],"first user info in strong map")
  strongMap.set(userData.users[1],"second user info in strong map")
  strongMap.set(func2,"function added to strong map")
  strongMap.set(friendObj,"some friend added to strong map")
  
  let weakMap = new WeakMap()
  weakMap.set(userData.users[0],"first user info weak map")
  weakMap.set(userData.users[1],"second user info weak map")
  weakMap.set(func2,"function added to weak map")
  weakMap.set(friendObj,"some friend weak map")
  
  func2 = null
  
  console.log(strongMap.get(func2)) //shows value as undefined
  console.log(strongMap.get(friendObj))
  console.log(strongMap.get(userData.users[0]))
  
  console.log(weakMap.get(func2))
  console.log(weakMap.get(friendObj))
  console.log(weakMap.get(userData.users[0]))
  
  
  friendObj = null
  userData.users[0]=null
  


  /// Sets
  //similar to array except that it not same as array - is not a prototype method, no push , pop etc
  //can hold any datatypes
  //all elements are unique irrespective element is value or ref type
  //are iterable and maintain the order.
  let s = new Set([10,20,10,20,20,30])
console.log(s)
//print Set(3) { 10, 20, 30 }
s.forEach((val)=> {
console.log(val)
})

s.add() //if adding objects then even if objects are same with their properties and values, they will be added since their reference is different
s.size
s.has(23)
s.entries() //return iterable - [Set Entries] { [ 10, 10 ], [ 20, 20 ], [ 30, 30 ] }  a bit wierd
s.keys()//return iterator
s.delete()
s.clear()

//WeakSet vs Sets
//can only hold objects
//primary gain is garba ecollection if some object is not not available in memory. So it uses weak references and not strong references
// no get method - not iterable and size is always 0 - reason:: since they are not iterable

let w = new Set();
let h = {
  name:"harry",
  age:10
}
let sh = {
  name:"sharry",
  age:20
}

x.add(h)
x.add(sh)
console.log(x.entries()) //will show all entries
h=null
console.log(x.entries()) //will again show all entires even if object was deleted.

//In case of WeakSet() , we dont have entries() available but checking has(h) will return false after it was set to null








