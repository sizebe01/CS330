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

    let body = document.querySelector("body");
    let aaa = document.createElement("p");
    aaa.classList = "alert alert-primary student";

    if(n == null){
        aaa.innerText = " Hello Student, Thanks for looking at my awsome content! ";
        
    } else{
        aaa.innerText = 'Hello '+ n + ", Thanks for looking at my awesome content!";
    }
    body.appendChild(aaa);
}


function NumberCheck() {

    let params = new URLSearchParams(window.location.search);
    let n = params.get("n");

    let body = document.querySelector("body");
    let bbb = document.createElement("p");
    bbb.classList = "alert alert-danger student";

    if(n == null){
      bbb.innerText = "330 is not a prime number. ";
    } else{
        if (isPrime(n) == false){
          bbb.innerText =n + " is not a prime number.";
        }
        if (isPrime(n) == true){
          bbb.innerText = n + " is a prime number.";
        }
    } 
    body.appendChild(bbb)
}

function printNprimes(num) {
  let params = new URLSearchParams(window.location.search);
  let n = params.get("n");

  let table = document.querySelector("tbody");
  let ccc = document.createElement("th");
  ccc.innerText = n +"prime numbers";
  ccc.classList = "alert alert-info student";

  if(n == null){
    
    ccc.innerText = "First 330 prime numbers are: " + getNprimes(330);
  }
  else{
    ccc.innerText = "First "+n+ " prime numbers are: " + getNprimes(n);
  }
 
    table.appendChild(ccc);
    
  
}

printNprimes();
NameCheck();
NumberCheck();
