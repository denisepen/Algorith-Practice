// only works on a sorted array!
// worst & average case: O(log n)
// best case: O(1)

function binarySearch (arr, value) {
  var left = 0;
  var right= arr.length - 1;

  var midpoint = Math.floor((left + right) / 2);

  while (arr[midpoint] !== value && left <= right) {
    // console.log(left, midpoint, right)
    if ( value < arr[midpoint]){
      right = midpoint -1;

    } else {
      left = midpoint + 1;
    }
    midpoint = Math.floor((left + right) / 2);
  }

  if (arr[midpoint] === value) {
    console.log(midpoint)
      return midpoint

    }

    console.log(-1)
  return -1
}

binarySearch([0,1,3,4, 5,7,12,22, 23], 2)
