const Array = require("./documentation-array");
// What is the length, capacity and memory address of your array?
// length is 0 to start
// capacity is 0 to start, moves to 12
// memory address (where it's pointing)

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

  console.log("line 24:", arr.get(0));
  // What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.
  // length is: 6-number of .pop methods called (in this case 0)
  // capacity is: 12, goes from 0 to 1*3 when called, then 3 is still less than 6 so iterates again, capacity go from current of 3 to (3+1)*3=12
  // address is: pointer is 3, starts at 1, and increases as capacity is called to iterate, so from 1 to 2 to 3 as the capacity goes from 0 > 3 > 12

  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  console.log("arr is: ", arr);

  console.log("arr is: ", arr);
}

main();
