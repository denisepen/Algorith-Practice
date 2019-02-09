// count # of times requested string is found in longer string.
// not complete yet

function stringSearch (short, long) {
  for (var i=0; i< long.length; i++) {
    // console.log(longString[i])
    for (var j = 0; j < short.length; j++) {
      console.log(short[j], long[i+j]);
      if (short[j] !== long[i + j] ) {
        console.log("BREAK!!!")
       break;
      }
    }
  }
}

stringSearch ("lol", "lorie loled")
