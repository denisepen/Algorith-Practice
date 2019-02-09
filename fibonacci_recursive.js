// 0,1,1,2,3,5,8,


function recursiveFib(n) {
  if (n < 2) {
    return n;
  }

  // console.log(recursiveFib(n - 1) + recursiveFib(n - 2));
  return recursiveFib(n - 1) + recursiveFib(n - 2)
}

recursiveFib(7)
