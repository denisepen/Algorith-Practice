// move thru array and look for min - swap min number with the first number we started with then move to nex number in the array.

function selectionSort(arr){
  for (var i = 0; i< arr.length; i++) {
    // i is the position of the lowest element;
    var lowest = i;
    // start with j=i+1 so that the next time around we are starting with the next index
    for (var j=i+1; j < arr.length; j++){
      if(arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if(i !== lowest) {
      console.log(i, lowest);
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
    console.log(arr);
  }




selectionSort([34, 22, 10, 19, 17]);
