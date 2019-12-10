var app3 = new Vue({
  el: '#app-3',
  data: {
    selected: "All's Well That Ends Well (1602)",
    options: [
      { text: "All's Well That Ends Well (1602)", value: "All's Well That Ends Well (1602)" },
      { text: "Antony and Cleopatra (1606)", value: "Antony and Cleopatra (1606)" },
      { text: "As You Like It (1599)", value: "As You Like It (1599)" },
      { text: "Comedy of Errors (1589)", value: "Comedy of Errors (1589)" },
      { text: "Coriolanus (1607)", value: "Coriolanus (1607)" },
      { text: "Cymbeline (1609)", value: "Cymbeline (1609)" },
      { text: "Hamlet (1600)", value: "Hamlet (1600)" },
      { text: "Henry IV, Part I (1597)", value: "Henry IV, Part I (1597)" },
      { text: "Henry IV, Part II (1597", value: "Henry IV, Part II (1597)" },
      { text: "Henry V (1598)", value: "Henry V (1598)" },
      { text: "Henry VI, Part I (1591)", value: "Henry VI, Part I (1591)" },
      { text: "Henry VI, Part II (1590)", value: "Henry VI, Part II (1590)" },
      { text: "Henry VI, Part III (1590)", value: "Henry VI, Part III (1590)" },
      { text: "Henry VIII (1612)", value: "Henry VIII (1612)" },
      { text: "Julius Caesar (1599)", value: "Julius Caesar (1599)" },
      { text: "King John (1596)", value: "King John (1596)" },
      { text: "King Lear (1605)", value: "King Lear (1605)" },
      { text: "Love's Labour's Lost (1594)", value: "Love's Labour's Lost (1594)" },
      { text: "Macbeth (1605)", value: "Macbeth (1605)" },
      { text: "Measure for Measure (1604)", value: "Measure for Measure (1604)" },
      { text: "Merchant of Venice (1596)", value: "Merchant of Venice (1596)" },
      { text: "Midsummer Night's Dream (1595)", value: "Midsummer Night's Dream (1595)" },
      { text: "Much Ado about Nothing (1598)", value: "Much Ado about Nothing (1598)" },
      { text: "Othello (1604)", value: "Othello (1604)" },
      { text: "Pericles (1608)", value: "Pericles (1608)" },
      { text: "Richard II (1595)", value: "Richard II (1595)" },
      { text: "Richard III (1592)", value: "Richard III (1592)" },
      { text: "Romeo and Juliet (1594)", value: "Romeo and Juliet (1594)" },
      { text: "Taming of the Shrew (1593)", value: "Taming of the Shrew (1593)" },
      { text: "Romeo and Juliet (1594)", value: "Romeo and Juliet (1594)" },
      { text: "Tempest (1611)", value: "Tempest (1611)" },
      { text: "Timon of Athens (1607)", value: "Timon of Athens (1607)" },
      { text: "Titus Andronicus (1593)", value: "Titus Andronicus (1593)" },
      { text: "Troilus and Cressida (1601)", value: "Troilus and Cressida (1601)" },
      { text: "Twelfth Night (1599)", value: "Twelfth Night (1599)" },
      { text: "Two Gentlemen of Verona (1594)", value: "Two Gentlemen of Verona (1594)" },
      { text: "Winter's Tale (1610)", value: "Winter's Tale (1610)" },
    ]
  },
  methods: {
    getchoice: function (event) {
      //console.log(this.selected);
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

function getdata(){
  var choice = app3.getchoice();
  var word = app4.getword();
  console.log(choice);
  console.log(word);

}

