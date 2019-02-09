
function palindrome(str) {
  var newStr = '';

  for (var i=str.length-1; i >= 0; i--) {
    newStr += str[i]
  }
  if (str === newStr) {
    console.log('true');
    return true;
  }

  console.log('false');
  return false;
}

palindrome ('max')
