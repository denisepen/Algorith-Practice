// Big O complexity: n^2
 //if almost sorted O(n)

//Most Inefficient solution

// function bubbleSort(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//       if(arr[j] > arr[j+1]) {
//         // SWAP
//         var temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//   }
//   // return arr;
//   console.log(arr)
// }

// More Efficient solution
 //with this solution we run the comparisons fewer times
// function bubbleSort(arr) {
//   // i starts at 4
//   for (var i = arr.length; i > 0; i--) {
//     for (var j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j+1]);
//       if(arr[j] > arr[j+1]) {
//         // SWAP
//         var temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//   }
//   // return arr;
//   console.log(arr)
// }

// optimized with noswaps - if there arent anymore swaps then break out of loops
function bubbleSort(arr) {
  var noSwaps;
  // i starts at 4
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]) {
        // SWAP
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false // if we don't swap anything we never set noSwaps to false so we break
      }
    }
  }
  // return arr;
  console.log(arr)
}


bubbleSort([2,34,1,78,19,45])
