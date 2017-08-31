//http://csbin.io/callbacks
console.log('Hello, world!');

// Challenge 1
// Create a function addTwo that accepts one input and adds 2 to it.
function addTwo(num) {
  return num + 2;
}
// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
// Create a function addS that accepts one input and adds an "s" to it.
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
// Create a function called map that takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
function map(array, callback) {
  let newArray = [];
  for (var i=0; i<=array.length-1; i++) {
    let newElement = callback(array[i]);
    newArray.push(newElement);
  }
  return newArray;
}
// console.log(map([1, 2, 3], addTwo));


// Challenge 4
// The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
function forEach(array, callback) {
  for (var i=0; i<array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
// In the first part of the extension, you're going to rebuild map as mapWith.
// This time you're going to use forEach inside of mapWith instead of using a for loop.
function mapWith(array, instructions) {
  let newArray = [];
  function applyToEachElement(element){
    console.log(element);
  }
	forEach(array, applyToEachElement)
}

console.log(mapWith([1,2,3],addTwo))

//Extension 2
// The function reduce takes an array and reduces the elements to a single value. F
// or example it can sum all the numbers, multiply them, or any operation that you can put into a function.
// Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates
//  the output of each loop. The array is iterated over, passing the accumulator and the next array element as
//  arguments to the callback. The callback's return value becomes the new accumulator value
//  . The next loop executes with this new accumulator value. In the example above,
//  the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1)
//  to make it 5.
//  Finally add(5, 3) brings it to 8, which is returned.
function reduce(array, callback, initialValue) {

}

//Extension 3
// Construct a function intersection that compares input arrays and returns a new array with elements
// found in all of the inputs. BONUS: Use reduce!
function intersection(arrays) {

}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [15, 5]

//Extension 4
// Construct a function union that compares input arrays and returns a new array that contains all elements.
// If there are duplicate elements, only add it once to the new array.
// Preserve the order of the elements starting from the first element of the first input array.
// BONUS: Use reduce!
function union(arrays) {

}


// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]
