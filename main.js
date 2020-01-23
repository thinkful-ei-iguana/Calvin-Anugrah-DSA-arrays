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

  // -------Drill 2-------
  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  //   console.log("line 24:", arr.get(0));
  // What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.
  // length is: 6-number of .pop methods called (in this case 0)
  // capacity is: 12, goes from 0 to 1*3 when called, then 3 is still less than 6 so iterates again, capacity go from current of 3 to (3+1)*3=12
  // address is: pointer is 3, starts at 1, and increases as capacity is called to iterate, so from 1 to 2 to 3 as the capacity goes from 0 > 3 > 12

  // -------Drill 3-------

  //   arr.pop();
  //   arr.pop();
  //   arr.pop();
  //   arr.pop();
  //   arr.pop();
  //   arr.pop();
  //   console.log("arr is: ", arr);

  // -------Drill 4-------
  console.log(arr.get(0));
  arr.length = 0;
  arr.push(25);
  console.log(arr.get(0));

  // Empty the array and add just 1 item: arr.push("tauhida");
  // Print this 1 item that you just added. What is the result? Can you explain your result?
  // 'tauhida' is a string and therefore NaN, so when you console.log the string in that index it returns that the value is not a number and returns NaN

  // What is the purpose of the _resize() function in your Array class?
  // purpose of the resize function:resize frees up 'old-space' that was previously held in memory so it can be reused. It then 'resizes' to the required size or more, during which it emplaces or 'sets aside' the required memory to be held for access as needed. If resize is called again, it frees up the 'old-space' and allocates space for the incoming data.

  // -------Drill 5-------

  // 5. URLify a string
  // A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

  const spaceReplace = Input => {
    const replace = "%20";
    const Output = [];
    for (let i = 0; i < Input.length; i++) {
      if (Input[i] !== " ") {
        Output.push(Input[i]);
      } else {
        Output.push(replace);
      }
    }
    let stringReplaced = Output.join("");
    return stringReplaced;
    // input has any space characters, replace with %20
  };
  console.log(spaceReplace("Tauhida Parveen"));
  console.log(spaceReplace("www.thinkful.com /tauh ida parv een"));
  // Input: tauhida parveen
  // Output: tauhida%20parveen
  // Input: www.thinkful.com /tauh ida parv een
  // Output: www.thinkful.com%20/tauh%20ida%20parv%20een

  // -------Drill 6-------

  // Filtering an array
  // Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

  const greaterThanFour = numArr => {
    const newNumArr = [];
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] >= 5) {
        newNumArr.push(numArr[i]);
      }
    }
    return newNumArr;
  };
  console.log(greaterThanFour([1, 6, 2, 7, 5]));
}
main();
