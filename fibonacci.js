// produce the nth element in the fibonacci sequence
// generate as many as possible and return the requested element
// 0,1,1,2,3,5,8,

function fib(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }
  console.log(result[n]);
  console.log(result.join(', '));
  return result[n];
}

fib(6);
