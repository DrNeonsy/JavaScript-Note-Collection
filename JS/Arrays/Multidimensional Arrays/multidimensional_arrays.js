/*
    A Multidimensional Array Might Sound Fancy But It Is Just An Array
    That Is Holding Other Arrays

    So It's "Just" An Array Of Arrays
    JavaScript Does Not Natively Support This Concept So We Have To Do It Ourselves
*/

let reds = ["lightRed", "darkRed", "wineRed"];
let blues = ["lightBlue", "cyan", "aqua", "darkBlue"];
let greens = ["lightGreen", "darkGreen", "lime", "poisonGreen"];

let colors = [reds, blues, greens];

console.log("Colors Array", colors); // Open The Output Via The Arrow In The Console

console.log("\nNow To Loop Through\n");

for (const list of colors) {
    console.log("\nArray Group:\n", list, "\nArray Items:"); // First Print The Full Array
    for (const item of list) {
        console.log(item); // Print Every Array Item Of That Array
    }
}
