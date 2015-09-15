function reverseString(str) {
  
  var strRev = str.split('').reverse('').join('');
  
  return strRev;
}

reverseString('hello');