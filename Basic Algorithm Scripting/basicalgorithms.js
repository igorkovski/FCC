/* Some of the function names are pretty self-explanatory, but I have added some comments just in case.*/
// One of the most challenging parts of the program was the scripting. We were able to pair program with other students in the camp. It helped us to think through the problems we were working on. These were my solutions to the problems:

// Here we had to create a function to reverse a string.
function reverseString(str) {

  var strRev = str.split('').reverse('').join('');

  return strRev;
}

reverseString('hello');

// This function will "factorialize" the given argument

function factorialize(n) {
  if (typeof n !== "number") {
    throw "The input should be a number, no strings this time"
  }
  if (n === 0) {
    return 1;
  }
  return n * factorialize(n - 1);
}

factorialize(5);

// This function will check whether the given word is a palindrome (a word that is spelled the same way forwards and backwards). It will either return "true" if it is indeed a palindrome, or false otherwise.
function palindrome(str) {
  if (typeof str !== "string") {
    throw "The input should be a string, numbers don't work...sorry"
  }
  var normal = str.replace(/[\W_]/g, '').toLowerCase();
  var reversed = normal.split('').reverse().join('');
  return normal === reversed;
}
palindrome("eye");

// Here we're finding the longest word in a given string

function findLongestWord(str) {
  var longWord = str.split(' '); // First, we're creating a variable and setting it equal to a split string which creates an array

  // Then we create a new var called arr, sort it
  var arr = longWord.sort(function (a, b){
  return a.length - b.length;
  });
  // Now we create a new var called last, taking the arr variable, where we sorted from a-b and we "pop" the longest word out of the array, using .length property
  var last = arr.pop().length;
  return last;
}

findLongestWord('The quick brown fox jumped over the lazy dog');

/* The trick in the next problem is to make sure that we first lowercase the entire string
 before we loop through it, then split it into an array.
 If we don't do that, then a string such as: "I'M A LITTLE TEA POT" all caps won't work
 given how this function runs. You're obviously free to craft your own.
 Given that I'm still learning, I'm sure there are ways to "refractor" this code.
 But this was my first try at creating solutions to these little "String" problems.
*/

function titleCase(str) {
var strArr = str.toLowerCase().split(" ");

for (var i = 0; i < strArr.length; i++) {

var k = strArr[i].charAt(0).toUpperCase();
strArr[i] = k + strArr[i].substr(1);
}

return strArr.join(" ");
}

titleCase("I'm a little tea pot");

// The next problem was quite challenging to think through how the loop will go through a sub-array and a 2D array. It is supposed to return an array consisting of the largest number from each provided sub-array.

function largestOfFour(arr) {

  var result = [];

// outer loop applies to outer array
  for (var i = 0; i < arr.length; i += 1) {
  	var largest = 0;
  	// innerloop is applied to inner array
  	for (var j = 0; j < arr[i].length; j += 1) {
  	  if (arr[i][j] > largest) {
  	  	largest = arr[i][j];
  	  }
  	}
  	result[i] = largest;
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// The next challenge is supposed to check if a string(first argument) ends with the given target string(second argument). It will either return a boolean.

function end(str, target) {
  if (typeof str !== "string") {
    throw "Str should be a string"
  }
  var result;

  if (str === target)
    return true;
  else {
    for (var i = 0; i < str.length; i += 1)
//      if ((str.length - i) < target.length)
//        return false;
      if (str.substr(i, str.length - 1) === target)
        return true;
    }
    return false;
  }

end("Bastian", "n", "");

// Here we are supposed to repeat a given string(first argument) n times (second argument). It will return an empty string if n is a negative number.

function repeat(str, num) {

  if (str === "" || num < 0)
    return "";
  var string = "";
  for (var i = 0; i < num; i += 1) {
      string = string.concat(str);
  }
  return string;
}

repeat("abc", 3, "");
