/*"2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?"*/

/*	
You need to divide by all numbers from 1 to 20, so you need a collection of the prime factors. 
The primes in that range are 2, 3, 5, 7, 11, 13, 17, and 19. You need four 2's to divide 16 and two 3's for 9 and 18. 
If you select from the resulting list, you can find the prime factors for all the numbers 20 and under.
/*

//to check if a number is a prime number

function isPrime(number){
  if(number < 2){
    return false;
  }
  else{
    for(var c = 2; c <= Math.sqrt(number);c++){
      if(number%c === 0){
        return false;
      }
    }
    return true;
  }
}

//calculating the smallestMultiple divisible by all numbers under n;

function smallestMultiple(n){
  var array = [];

  for(var c = 1; c <= n; c++){
    if(isPrime(c)){
      array.push(c);
    }
  }

  var numTimes = [];
  var product;
  for(var c = 0; c < array.length; c++){
    var counter = 0;
    product = array[c];
    while (product <= n){
      product *= array[c];
      counter++;
    }
    numTimes.push(counter);
  }
  var total = 1;
  for(var c = 0; c < array.length; c++){
    total *= (Math.pow(array[c], numTimes[c]));
  }
  return total;
}

//this function can be used to calculate a number perfectly divisible by all number between 1 and n.
