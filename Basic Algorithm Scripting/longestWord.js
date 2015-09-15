// Here we're finding the longest word in a given string
function findLongestWord(str) {
  var longWord = str.split(' '); // First, we're creating a variable and setting it equal to a split string 
                                 // which creates an array
  var arr = longWord.sort(function (a, b){ // Then we create a new var called arr, sort it
  return a.length - b.length;
  });
  var last = arr.pop().length;// Now we create a new var called last, taking the arr variable, where we sorted from a-b
  							  // and we "pop" the longest word out of the array, using .length property
  return last;
}

findLongestWord('The quick brown fox jumped over the lazy dog');