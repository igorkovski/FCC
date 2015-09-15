function palindrome(str) {
  var normal = str.replace(/[\W_]/g, '').toLowerCase();
  var reversed = normal.split('').reverse().join('');
  return normal === reversed;
}