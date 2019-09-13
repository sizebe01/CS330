/* jshint esversion: 6 */
/* jshint node: true */
'use strict';

function isPrime(n) {
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}


function getNprimes(n){
  const arr = [];
  let i = 2

  while (arr.length < n) {
    if (isPrime(i)) {
      arr.push(i)
    }
    i++
  } 
  return arr;
  
}


function NameCheck() {

    let params = new URLSearchParams(window.location.search);
    let n = params.get("name");
    if(n == null){
        document.write(" Hello Student, Thanks for looking at my awsome content! ");
    } else{
        document.write(" Hello ", n,", Thanks for looking at my awsome content! ");
    }
}


function NumberCheck() {

    let params = new URLSearchParams(window.location.search);
    let n = params.get("n");
    if(n == null){
        document.write("330 is not a prime number. ");
    } else{
        if (isPrime(n) == false){
            document.write(n," is not a prime number. ")
        }
        if (isPrime(n) == true){
            document.write(n," is a prime number. ")
        }
    } 
}

function printNprimes(num) {
  let params = new URLSearchParams(window.location.search);
  let n = params.get("n");
  if(n == null){
    document.write("First 330 prime numbers are: ", getNprimes(330));
  }
  else{
    document.write("First ",n, " prime numbers are: ",getNprimes(n));
  }
}


NameCheck();
NumberCheck();
printNprimes();