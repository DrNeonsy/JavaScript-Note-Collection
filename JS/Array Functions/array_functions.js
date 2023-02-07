/*
  I Didn't Showcase Radio Buttons In The Checked Section So =>
  You Need To But The Name Attribute With The Same Value On The Radio Buttons
  You Wish To Be Grouped. Otherwise You Can Check Them All
*/

document.getElementById("Button").onclick = function () {
  let forEach = document.getElementById("forEach").checked;
  let map = document.getElementById("map").checked;
  let filter = document.getElementById("filter").checked;
  let reduce = document.getElementById("reduce").checked;
  let sortNumbers = document.getElementById("sortNumbers").checked;
  let sortStrings = document.getElementById("sortStrings").checked;

  if (forEach) {
    forEachOutput();
  } else if (map) {
    mapOutput();
  } else if (filter) {
    filterOutput();
  } else if (reduce) {
    reduceOutput();
  } else if (sortNumbers) {
    sortNumbersOutput();
  } else if (sortStrings) {
    sortStringsOutput();
  }
};
