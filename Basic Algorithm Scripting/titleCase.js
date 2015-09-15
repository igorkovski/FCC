function titleCase(str) {
  var strArr = str.toLowerCase().split(" ");// The trick here is to make sure that we first lowercase the entire string
  											// then split it into an array.  If we don't do that, then a string such as:
  											// "I'M A LITTLE TEA POT" which is all caps won't work given how this function runs
  for (var i = 0; i < strArr.length; i++) {
    
  var k = strArr[i].charAt(0).toUpperCase();
  strArr[i] = k + strArr[i].substr(1);
  }
  
  return strArr.join(" ");
}

titleCase("I'm a little tea pot");