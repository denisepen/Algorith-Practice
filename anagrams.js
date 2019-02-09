// check to see if 2 strings are anagrams of each other -
// same characters in the same quantity
function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) { //get rid of any spaces or punctiation
    charMap[char] = (charMap[char] + 1) || 1;
  }
  return charMap;
}

function anagrams (str1, str2) {
  const acharMap = buildCharMap(str1);
  const bcharMap = buildCharMap(str2);
  console.log(acharMap, bcharMap);

  if (Object.keys(acharMap).length !== Object.keys(bcharMap).length) {
    console.log('false');
    return false
  }

  for (let char in acharMap) { // for..in for objects, for..of for arrays
    if(acharMap[char] !== bcharMap[char]) {
      console.log('false');
      return false
    }
  }

  console.log('true');
  return true
}

anagrams('egg', 'begg')
