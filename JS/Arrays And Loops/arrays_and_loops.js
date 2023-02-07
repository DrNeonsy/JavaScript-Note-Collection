/*
    While You Can Use One Of The Many Loops Available To You    
    There Are Three Ways That I Will Show You In This File

    For Loop => When You Are In Need Of An Index
    ForOfLoop => When You Want To Iterate And You Don't Need A Loop
    ForEachMethod => Part Of An Object Collection
*/

// Featuring Simple Output In This Example

let colors = [
    "red",
    "green",
    "blue",
    "cyan",
    "aqua",
    "orange",
    "yellow",
    "brown",
];

// For Loop

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
console.log("\n");

// For Each "Loop" // Check Out Array Functions

colors.forEach((color) => {
    console.log(color);
});
console.log("\n");

// For Of Loop

for (let color of colors) {
    console.log(color);
}
