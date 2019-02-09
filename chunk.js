
function chunk(arr, size) {
  const chunked = [];
  let index = 0;

  while (index < arr.length ) {
    chunked.push(arr.slice(index, (index + size)))
    index += size
  }
  console.log(chunked);
  return chunked
}


chunk([4,5,6,7,8,9,10], 3)
