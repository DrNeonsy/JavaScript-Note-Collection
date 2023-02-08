/*
  I Didn't Showcase Radio Buttons In The Checked Section So =>
  You Need To But The Name Attribute With The Same Value On The Radio Buttons
  You Wish To Be Grouped. Otherwise You Can Check Them All
*/

// This Is Just For The Radio Button Interface
document.getElementById("Button").onclick = function () {
    let forEach = document.getElementById("forEach").checked;
    let map = document.getElementById("map").checked;
    let filter = document.getElementById("filter").checked;
    let reduce = document.getElementById("reduce").checked;
    let sortNumbers = document.getElementById("sortNumbers").checked;
    let sortStrings = document.getElementById("sortStrings").checked;

    let options = [forEach, map, filter, reduce, sortNumbers, sortStrings];

    // The Switch Pattern Is True Because I Want To Enter The Case Where It Matches
    switch (true) {
        case options[0]:
            forEach();
            break;
        case options[1]:
            map();
            break;
        case options[2]:
            filterOutput();
            break;
        case options[3]:
            reduceOutput();
            break;
        case options[4]:
            sortNumbersOutput();
            break;
        case options[5]:
            sortStringsOutput();
            break;
    }
};

// ----------------------------------------------------------------------------

function forEach() {
    // Placeholder
}
function map() {
    // Placeholder
}
function filter() {
    // Placeholder
}
function reduce() {
    // Placeholder
}
function sortNumbers() {
    // Placeholder
}
function sortStrings() {
    // Placeholder
}
