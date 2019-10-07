/* jshint esversion: 6 */
/* jshint node: true */
'use strict';


var stores = ['Fareway', 'Ace-Hardware', 'Caseys', 'The-Hatchery', 'Amundsens'];
var sections = ['Produce', 'Meats', 'Cereal', 'Canned-Goods', 'Frozen-Foods', 'Dairy', 'Liquor', 'Tools', 'Clothing'];

var shoppingModel = new ShoppingList();
var myView = new ShoppingView(shoppingModel);

function clickedon() {
    
    let rowcolids = ['itemname', 'qty', 'store', 'category', 'price', 'priority'];
    let vals = {};
    for (let cid of rowcolids) {
        vals[cid] = document.getElementById(cid).value;
    }
    if(vals.qty == '' || vals.price ==''){
        window.alert('Make sure all fields are filled out before adding an item!');
    }else{
    let it = new Item(vals.itemname, vals.qty, vals.priority, vals.store, vals.category, vals.price);
    shoppingModel.addItem(it);
    }
}


function readdrows(){
    let savedcols = localStorage.getItem('shoppinglist');
    savedcols = savedcols ? JSON.parse(savedcols) : [];
    var newvals = savedcols.newItems;
    
    for (var i = 0; i < newvals.length; i++){
        let it = new Item(newvals[i].name, newvals[i].quantity, newvals[i].priority, newvals[i].store, newvals[i].section, newvals[i].price);
        shoppingModel.addItem(it);
    }
    
}

function clickedOnSave() {

    localStorage.setItem('shoppinglist', JSON.stringify(shoppingModel));    

}

function clickedOnRemPurch() {

    var checked = document.getElementsByClassName('checkbox');
    
    for (var i = 0; i < checked.length; i++){
        while (checked[i].checked){
            var delrow = document.getElementById("shoppinglist");
            delrow.deleteRow(i);
            shoppingModel.delItem(i);
        }
    }

}

function clickedOnRemAll() {

    myView.deleteAllRows(document.getElementById('shoppinglist'));
    shoppingModel.removeAll();
}



function populateSelect(selectId, sList) {
    let sel = document.getElementById(selectId, sList);
    for (let s of sList) {
        let opt = document.createElement("option");
        opt.value = s;
        opt.innerHTML = s;
        sel.appendChild(opt);
    }
}

$(document).ready(function () {
    readdrows();
    populateSelect('store', stores);
    populateSelect('category', sections);
});