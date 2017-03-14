"use strict";

var coins = [],
    length,
    input;

function getInput() {
    input = document.querySelector('.input').value;
    var slot = document.querySelectorAll(".slot");
    length = slot.length;
    saveCoin(slot);
    coinCalculate(input, coins, length);
    return input;
}

function saveCoin(slot) {
    for (var i = 0; i < slot.length; i++) {
        slot[i].setAttribute('data-number', slot[i].value);
        coins.push(slot[i].value);
    }
    coins.sort(function (a, b) {
        return b - a
    });
    console.log("coins: " + coins);
    return coins;
}

function coinCalculate(input, coins, length) {
    var countArr = [],
        remainder = input;

    for (var j = 0; j < length; j++) {
        var count = parseInt(remainder / coins[j]);
        countArr.push(count);
        console.log("coins: " + coins[j]);
        if (count > 0) {
            var a = document.querySelector("[data-number="+coins[j]+"]");
//            a.parentElement
        }
        console.log("countArr: " + countArr);
        remainder = remainder - (count * coins[j]);
        console.log("remainder: " + remainder);
    }
    return count;
}

//function displayCount(count) {
//    for (var k = 0; k < count.length; k++) {
//        document.querySelectorAll('.slot').innerHTML =
//    }
//}

document.addEventListener("DOMContentLoaded", function () {
    var el = document.querySelector(".submit");
    el.addEventListener("click", function () {
        console.log("clicked");
        getInput();
    })
});