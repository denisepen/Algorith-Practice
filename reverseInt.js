
function intReverse(numb) {
  var reversed = numb.toString().split('').reverse().join('')

  numrev = parseInt(reversed) * Math.sign(numb)
  console.log(numrev);
}

intReverse(-800)
