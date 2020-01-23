const Array = require("./documentation-array");
// What is the length, capacity and memory address of your array?
// Add the following in the main function and then print the array:
//     ...
//     arr.push(5);
//     arr.push(15);
//     arr.push(19);
//     arr.push(45);
//     arr.push(10);
// What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array

  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  console.log(arr.get(0));
  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  console.log("arr is ", arr);

  console.log("arr is ", arr);
}

main();
