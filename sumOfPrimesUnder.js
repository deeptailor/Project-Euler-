/*
This question from project euler asks us to calculate the sum of all primes under 2 million.
There are many ways to solve this problem, but the first time I solved it,
it took my computer over a minute to calculate the answer. The issue was how I was checking for primes. 
/*

//first we will declare a function to detect primes, and this is my most efficient form.

function isPrime(number){
  if(number < 3){
    if(number === 2){
      return true;
    }
    else{
      return false;
    }
  }
  else if(number % 2 === 0){
    return false;
  }
  else{
    for(var c = 3; c <= Math.sqrt(number);c+=2){
      if(number%c === 0){
        return false;
      }
    }
    return true;
  }
}

// then finally declare the main function to calculate the sum of primes under n.

function sumOfPrimesUnder(n){
  var sum = 2;

  for(var c = 3; c < n; c+=2){
    if(isPrime(c)){
      sum += c;
    }
  }
  return sum;
}

//this produces an answer under 0.5 seconds. Which is a great improvement over my first trial. 
