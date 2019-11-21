/* jshint esversion: 7 */
/* jshint node: true */
'use strict';

async function getData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));
}

function remove(){
    var node = document.getElementById("number_info");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
}

async function get_individual(num, all_numbers) {

    document.getElementById("displayBelow").innerHTML = '';
    document.getElementById("displayBelow").className = '';

    document.getElementById("displayNumber").innerHTML = '';
    document.getElementById("displayNumber").className = '';

    document.getElementById("displayAbove").innerHTML = '';
    document.getElementById("displayAbove").className = '';

    var node = document.getElementById("number_info");
    while (node.hasChildNodes()) {
        remove();  
    }
    for (var i = num -1; i < num + 2; i++){
        var number = await Promise.all([getData(`https://numbersapi.com/${i}?json`)]);
        var para = document.createElement("div");
        var node = document.createTextNode(number[0].text);
        para.appendChild(node);
        para.id = "box";
        para.classList = "alert alert-info student";
        var element = document.getElementById("number_info");
        element.appendChild(para);
    }
}

async function get_batch(num, all_numbers) {
    

    var node = document.getElementById("number_info");
    while (node.hasChildNodes()) {
        remove();  
    }

    var input = num;
    var inputPlus = input + 1;
    var inputMinus = input-1;
    var number = await Promise.all([getData(`http://numbersapi.com/${input}?json`)]);
    var numberAbove = await Promise.all([getData(`http://numbersapi.com/${inputPlus}?json`)]);
    var numberBelow = await Promise.all([getData(`http://numbersapi.com/${inputMinus}?json`)]);
    
    document.getElementById("displayBelow").innerHTML = numberBelow[0].text;
    document.getElementById("displayBelow").className = "alert alert-info student";

    document.getElementById("displayNumber").innerHTML = number[0].text;
    document.getElementById("displayNumber").className = "alert alert-info student";

    document.getElementById("displayAbove").innerHTML = numberAbove[0].text;
    document.getElementById("displayAbove").className = "alert alert-info student";

}

async function clickedon() {
    let num = parseInt(document.querySelector('#number').value);
    
    let all_numbers = document.querySelector('#number_info');

    if (document.querySelector('#batch').checked) {
        get_batch(num, all_numbers);
    } else {
        get_individual(num, all_numbers);
    }
}
