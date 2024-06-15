
//Tagged Literals or templates - extensions on template literals
//Example 1

function buildHTML(strings, expr) {//expr can be many as well and Strings will be an array
    //console.log(strings[0]) //<li>
    //console.log(strings[1]) //</li>
    //console.log(expr) //template literal passed. in this case only 1
    const newHtml = expr.map(function(line) {
      return `${strings[0]} ${line} ${strings[1]}`
    });
    return newHtml
}
    
//if we call a function using tagged template , 
//function will receive min 2 parameters ie array of tags and one or more expressions based on template literas passed to it
let harry = `Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense.`;
let lotr = `When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his eleventy-first birthday with a party of special magnificence, there was much talk and excitement in Hobbiton.`
let orwell = `It was a bright cold day in April, and the clocks were striking thirteen.” — 1984, George Orwell`
let lines = [
  harry,
  lotr,
  orwell
];
console.log(buildHTML `<li>${lines}</li>`)
//then we can do something like this to put it in DOM -  document.querySelector('#quotes').innerHTML = result;

//Example 2 - a bit of tweaking of above example
function buildHTMLV1(strings, expr) {
return function(element) {
    const newHtml = expr.map(function(line) {
        return `${strings[0]} ${line} ${strings[1]}`
      });
    
    const finalHTML = newHtml.join('') //will remove all commas and return list items together
    document.querySelector(element).innerHTML += finalHTML
}
}

const placeHtml = buildHtml `<li>${lines}</li>` //return a function
placeHtml("$quotes")//some element in brower DOM as an example


//Example 3 - regular template literals are not able to call functions inside of them.
function testFunction(){
  return "Hello, from inside test Function"
}

const templateLiteralCallback = `Rob Jim Bill ${()=>testFunction()}`
console.log(templateLiteralCallback); //this will print Rob Jim Bill ${()=>testFunction()}

//So we can do is,
function taggedFunction(strings,func) {
  return strings[0] + func()
}
const templateLiteralCallbackV1 = taggedFunction `Rob Jim Bill ${()=>testFunction()}`
