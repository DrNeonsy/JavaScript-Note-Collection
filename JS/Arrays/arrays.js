/*
    An Arrays Is Like A Variable That Can Store Multiple Values
    An Array Has A 32 Bit Index Starting With 0 And Binary Is A Number System Of 2
    So The Maximum Amount Of Values You Can Store Is 2³²-2 ( 4,294,967,295 )
*/

let typesOfTea = [
  "Moroccan Peppermint",
  "Earl Grey",
  "Green Tea",
  "Chamomile Tea",
];

console.log("Total Output", typeof typesOfTea, typesOfTea); // As You Can See The Typ Is Called Object

// To Access A Specific Element You The 0 Based Index With []

console.log("Output Fisrt Element", typesOfTea[0]); // First Element

// To Replace You Can Do A Combination Of Variable Assign And Index

typesOfTea[3] = "Fennel Tea";
console.log("Replace Element 4", typesOfTea);

// To Add An Element At The End
typesOfTea.push("Chamomile Tea");
console.log("Add To The End", typesOfTea);

// Add Element To The Beginning
typesOfTea.unshift("Lemon Tee");
console.log("Add To THe Beginning", typesOfTea);

// Remove Last Element
typesOfTea.pop();
console.log("Remove Last Element", typesOfTea);

// Remove First Element
typesOfTea.shift();
console.log("Remove First Element", typesOfTea);

// Get Length From Array
let length = typesOfTea.length;
console.log("Current Array Length", length);

// Get Index Of Value In Array
let indexOf = typesOfTea.indexOf("Earl Grey"); // Returns -1 If It Does Not Exist
console.log("Index Of Earl Grey", indexOf);
