function countChars(str) {

  var result = {};

  pattern = /[a-z0-9]/;

  for (var i=0; i< str.length; i++){
    var char = str[i].toLowerCase();

    if(pattern.test(char))  {
      if(result[char] >0){
        result[char]++;
      } else{
        result[char] = 1;
      }
    }
  }
  console.log(result)
}

countChars("work!!!...Work")
