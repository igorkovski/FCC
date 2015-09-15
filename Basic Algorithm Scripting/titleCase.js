  /* The trick here is to make sure that we first lowercase the entire string
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