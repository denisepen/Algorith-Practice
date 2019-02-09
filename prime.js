// find out if a single number is prime
 function isPrime(num) {
     // console.log("Hello");
     var prime = 'true';
     if (num === 2) {
       prime = true;
       // console.log(prime);
       return
     }

     if (num < 2) {
       prime = false;
       // console.log(prime);
       return
     }

   for (var i = 2; i < num; i++) {
     // console.log(i, num % i);
    if (num % i === 0)  {

      prime = false;
    }
   }
   // console.log(prime);
   return prime
 }

 // isPrime(3)
 /////////////////////////////////////////////////////////////////////////
 // find all primes from 1 to num
 //
 function primeList(num) {
   for (var i = 3; i <= num; i++) {
     if (isPrime(i)) console.log(i);
   }

 }

 primeList(25)
