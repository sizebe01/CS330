/* jshint esversion: 7 */
/* jshint node: true */
'use strict';


async function getData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));
}

async function randomjoke() {
    var random_joke = await Promise.all([getData(`https://cors-anywhere.herokuapp.com/https://cs330proj4.herokuapp.com/api/v1/jokes`)]);
    var joke = random_joke[0].joke;
    document.getElementById("displayBelow").innerHTML = joke;

}

async function specificjoke() {
    let num = parseInt(document.querySelector('#number').value);
    var specific_joke = await Promise.all([getData(`https://cors-anywhere.herokuapp.com/https://cs330proj4.herokuapp.com/api/v1/jokes/${num}`)]);
    var joke = specific_joke[0].joke;
    document.getElementById("displayBelow").innerHTML = joke;

}