/* jshint esversion: 6 */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
'use strict';



function get_value(val) 
{ 
    document.getElementById("result").value+=val; 
} 
  
 
function solve() 
{ 
    let x = document.getElementById("result").value; 
    let y = eval(x); 
    document.getElementById("result").value = y; 
} 
  
 
function clear_screen() 
{ 
    document.getElementById("result").value = ""; 
} 
