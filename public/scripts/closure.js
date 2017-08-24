// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');


function createFunction() {
	function newFunction() {
    console.log("hello");
  }
  return newFunction;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var function1 = createFunction();
// function1();



function createFunctionPrinter(input) {
  function newFunction() {
    console.log(input);
  }
	return newFunction;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var printSample = createFunctionPrinter('sample');
// printSample();
// var printHello = createFunctionPrinter('hello');
// printHello();



function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope

  function incrementCounter () {
//     console.log(counter);
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();



function addByX(x) {
  function newFunction(input) {
    return input + x;
  }
  return newFunction;
}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1
// console.log(addByTwo(1));

// now call addByTwo with an input of 2
// console.log(addByTwo(2));



//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let firstRun = null;

    function inner(num) {
      if (!firstRun) {
        firstRun = func(num);
    		return func(num);
      } else {
        return firstRun;
      }
  	}
    return inner;



}

var onceifiedAddByTo = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceifiedAddByTo(4));  //should log 6
console.log(onceifiedAddByTo(10));  //should log 6
console.log(onceifiedAddByTo(9001));  //should log 6


function after(count, func) {

}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

// afterCalled(); -> nothing is printed
// afterCalled(); -> nothing is printed
// afterCalled(); -> 'hello' is printed


function delay(func, wait) {

}
