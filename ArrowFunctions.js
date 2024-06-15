//Standard Example
//regular approach
const arr = [1,2,3,4,5]
arr.map(function(element,index) {
  console.log(element)
});

//arrow function ie anonymous function shorthand syntax
arr.map( (element,index) => {
  console.log(element)
});

//Important difference between arrow function and normal named or unnamed function
// arrow functions dont have any binding to 'this' ie they dont have any of their own this and they use this 
//from its parent scope. this is an important and very subtle difference
//So arrow functions are good at all places where the caller object is not important like array.map/reduce etc functions
var obj = {
    normalFunction: function() {
      console.log(`a function inside an object has this set to ${this}`);
    },
    arrowFunction: () => {
      console.log("arrow function has this set to "+ this);
    }
  }
  obj.normalFunction();// this will point to Object and not windows since obj called the function
  obj.arrowFunction(); // here too this will point to Object and not windows since obj called the function

  //Similarly for ajax calls in jquery, this function in then clause will point to ajax call itself and not to parent 
  //function 

  $('.city').each(function() {

    const city = $(this).attr('city');
    $.getJSON('..url').
    then((response) => {
        console.log(this); ///will get this from parent context and not ajax call sicne we are using arrow function 
        //and it doesnt have its own bound this
    }).
    then(function(response) {
        console.log(this); // will get this as ajax call object ie the parent context that called then
        // since now we are using regular function
    })

  });