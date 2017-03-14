"use strict";

var coins = [],
    length,
    input;

// store coin value and input
function getInput() {
    input = document.querySelector('.input').value;
    var slot = document.querySelectorAll(".slot");
    length = slot.length;
    saveCoin(slot);
    coinCalculate(input, coins, length);
    return input;
}

// storing coin values to data-attr and sorting them 
function saveCoin(slot) {
    for (var i = 0; i < slot.length; i++) {
        slot[i].setAttribute('data-number', slot[i].value); // create data attr to match with count later
        coins.push(slot[i].value);
    }
    coins.sort(function (a, b) { // sort coin value from max to min
        return b - a
    });
    console.log("coins: " + coins);
    return coins;
}

// calculate input value to coin counts
function coinCalculate(input, coins, length) {
    var countArr = [],
        remainder = input;

    for (var j = 0; j < length; j++) {
        var count = parseInt(remainder / coins[j]);
        countArr.push(count);
        console.log("coins: " + coins[j]);
        if (count > 0) {
            var a = document.querySelector("[data-number='" + coins[j] + "']");
            var b = a.parentElement.getElementsByClassName('count');
            b[0].style.visibility = "visible";
            b[0].innerHTML = count;
            console.log(b);
        }
        console.log("countArr: " + countArr);
        remainder = remainder - (count * coins[j]);
        console.log("remainder: " + remainder);
    }
    return count;
}

document.addEventListener("DOMContentLoaded", function () {
    var el = document.querySelector(".submit");
    el.addEventListener("click", function () {
        console.log("clicked");
        getInput();
        coins = [];
    })
});