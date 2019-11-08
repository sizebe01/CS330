/* jshint esversion: 6 */
/* jshint browser: true */
"use strict;";


function toggleDisabled() {
    
    isDisabled = document.getElementById("existingletters").disabled;
    if (isDisabled){
        document.getElementById("existingletters").disabled = false;
    } else{
        document.getElementById("existingletters").disabled = true;
    }
}

