//metodos que se probaran su funcionalidad en jest
'use strict'
function minutesToHours(minutes){
    return (minutes/60).toFixed(2);
}

function puTwoDigits(digit){
    let convertedDigit = "";
    if(digit < 10){
        convertedDigit = `0${digit}`;
    }else{
        convertedDigit = `${digit}`;
    }
    return convertedDigit;
}
module.exports = {minutesToHours, puTwoDigits}