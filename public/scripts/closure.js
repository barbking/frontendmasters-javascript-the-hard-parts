// http://csbin.io/closures
// console.log('Hello, world!');
// Create a function createFunction that creates and returns a function.
 // When that created function is called, it should print "hello".

function createFunction() {
	function newFunction() {
    console.log("hello");
  }
  return newFunction;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var function1 = createFunction();
// function1();

// Create a function createFunctionPrinter that accepts one input and returns a function.
// When that created function is called, it should print out the input that was used when the
// function was created.
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


/* Examine the code for the outer function. Notice that we are returning a function and
that function is using variables that are outside of its scope.
Uncomment those lines of code. Try to deduce the output before executing. */
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


/*Now we are going to create a function addByX that returns a function that will
add an input by x.*/
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
/* Write a function once that accepts a callback as input and returns a function. When the returned
function is called the first time, it should call the callback and return that output.
If it is called any additional times, instead ofcalling the callback again it will simply return
the output value from the first time it was called.*/
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

/*Write a function after that takes the number of times the callback needs to be
called before being executed as the first parameter and the callback as the second
parameter.*/
function after(count, func) {

}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

// afterCalled(); -> nothing is printed
// afterCalled(); -> nothing is printed
// afterCalled(); -> 'hello' is printed

/* Write a function delay that accepts a callback as the first parameter and the wait
in milliseconds before allowing the callback to be invoked as the second parameter.
Any additional arguments after wait are provided to func when it is invoked.
 HINT: research setTimeout();*/
function delay(func, wait) {

}
