/* jshint esversion: 7 */
/* jshint node: true */
'use strict';


var app3 = new Vue({
  el: '#app-3',
  data: {
    selected: "cleopatra",
    options: [
      //{ text: "All's Well That Ends Well (1602)", value: "allswell" },
      { text: "Antony and Cleopatra (1606)", value: "cleopatra" },
      { text: "As You Like It (1599)", value: "asyoulikeit" },
      { text: "Comedy of Errors (1589)", value: "comedy_errors" },
      { text: "Coriolanus (1607)", value: "coriolanus" },
      { text: "Cymbeline (1609)", value: "cymbeline" },
      { text: "Hamlet (1600)", value: "hamlet" },
      { text: "Henry IV, Part I (1597)", value: "1henryiv" },
      { text: "Henry IV, Part II (1597", value: "2henryiv" },
      { text: "Henry V (1598)", value: "henryv" },
      { text: "Henry VI, Part I (1591)", value: "1henryvi" },
      { text: "Henry VI, Part II (1590)", value: "2henryvi" },
      { text: "Henry VI, Part III (1590)", value: "3henryvi" },
      { text: "Henry VIII (1612)", value: "henryviii" },
      { text: "Julius Caesar (1599)", value: "julius_caesar" },
      { text: "King John (1596)", value: "john" },
      { text: "King Lear (1605)", value: "lear" },
      { text: "Love's Labour's Lost (1594)", value: "lll" },
      { text: "Macbeth (1605)", value: "macbeth" },
      { text: "Merry Wives of Windsor (1600)", value: "merry_wives" },
      { text: "Measure for Measure (1604)", value: "measure" },
      { text: "Merchant of Venice (1596)", value: "merchant" },
      { text: "Midsummer Night's Dream (1595)", value: "midsummer" },
      { text: "Much Ado about Nothing (1598)", value: "much_ado" },
      { text: "Othello (1604)", value: "othello" },
      { text: "Pericles (1608)", value: "pericles" },
      { text: "Richard II (1595)", value: "richardii" },
      { text: "Richard III (1592)", value: "richardiii" },
      { text: "Romeo and Juliet (1594)", value: "romeo_juliet" },
      { text: "Taming of the Shrew (1593)", value: "taming_shrew" },
      { text: "Tempest (1611)", value: "tempest" },
      { text: "Timon of Athens (1607)", value: "timon" },
      { text: "Titus Andronicus (1593)", value: "titus" },
      { text: "Troilus and Cressida (1601)", value: "troilus_cressida" },
      { text: "Twelfth Night (1599)", value: "twelfth_night" },
      { text: "Two Gentlemen of Verona (1594)", value: "two_gentlemen" },
      { text: "Winter's Tale (1610)", value: "winters_tale" },
    ]
  },
  methods: {
    getchoice: function (event) {
      console.log(this);
      return this.selected;
    }
  }
});


var app4 = new Vue({
  el: '#app-4',
  data: {
    form : {
      word: ''
    },
  },
  methods: {
    getword: function (event) {
      //console.log(this.form.name);
      return this.form.name;
    }
  }
});


async function getData(url) {
  return fetch(url)
      .then(response => response.json())
      .catch(error => console.log(error));
}

async function getinfo(){
  var choice = app3.getchoice().toString();
  var word = app4.getword().toString();
  

  //console.log(choice);
  //console.log(word);

    if (document.querySelector('#check').checked) {
      //checking all plays
      
      var count = await Promise.all([getData(`https://shakespeare-api.herokuapp.com/search_for_${word}/`)]);
      var data = count[0].count;
      document.getElementById("display_results").innerHTML = "There are " + data + " uses of the word " + word + " in all of his plays";

  } else {
      //checking specified play

      var count2 = await Promise.all([getData(`https://shakespeare-api.herokuapp.com/search_for_${word}_in_${choice}`)]);
      var data2 = count2[0].count;
      document.getElementById("display_results").innerHTML = "There are " + data2 + " uses of the word " + word + " in " + choice;
  }
}





    

