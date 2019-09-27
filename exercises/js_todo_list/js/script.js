/* jshint esversion: 6 */
/* jshint browser: true */
"use strict;";

var team = ["Aardvark", "Beaver", "Cheetah", "Dolphin", "Elephant", "Flamingo", "Giraffe", "Hippo"];
var priority = ["Low", "Normal", "Important", "Critical"];

function addTask() {
    let rowcolids = ['taskname', 'assigned', 'priority', 'date'];
    let vals = [];
    for (let cid of rowcolids) {
        vals.push(document.getElementById(cid).value);
    }
    makeRow(vals, document.getElementById('todolist'));
}

function removeRow() {
   
    var checked = document.getElementsByClassName('checkbox');
    
    for (var i = 0; i < checked.length; i++){
        if (checked[i].checked){
            document.getElementById("todolist").deleteRow(i);
            
        }
    }
}

function makeRow(valueList, parent) {
    let row = document.createElement("tr");
    row.innerHTML += " <input type = 'checkbox' onclick='removeRow()' class = 'checkbox form-control'/>";
    
    if(valueList.includes('')){
        
        window.alert('Make sure the Task and Date fields are filled out!');
    } else{
        
        if(valueList.includes('Low')){
            for (let val of valueList) {
            
                let td = document.createElement("td");
                td.innerHTML = val;
                td.style.backgroundColor = "#00A2FF";
                row.appendChild(td);
            }
            parent.appendChild(row); 
        }
        
        if(valueList.includes('Normal')){
            for (let val of valueList) {
                let td = document.createElement("td");
                td.innerHTML = val;
                td.style.backgroundColor = "#FFF700";
                row.appendChild(td);
            }
            parent.appendChild(row); 
        }
        
        if(valueList.includes('Important')){
            for (let val of valueList) {
                let td = document.createElement("td");
                td.innerHTML = val;
                td.style.backgroundColor = "#FFBC00";
                row.appendChild(td);
            }
            parent.appendChild(row); 
        }

        if(valueList.includes('Critical')){
            for (let val of valueList) {
                let td = document.createElement("td");
                td.innerHTML = val;
                td.style.backgroundColor = "#FF3C00";
                row.appendChild(td);
            }
            parent.appendChild(row); 
        }
    }
}

function populateSelect(selectId, sList) {
    let sel = document.getElementById(selectId);
    for (let s of sList) {
        let opt = document.createElement("option");
        opt.value = s;
        opt.innerHTML = s;
        sel.appendChild(opt);
    }
}


$(document).ready(function () {
    populateSelect('assigned', team);
    populateSelect('priority', priority);
});



