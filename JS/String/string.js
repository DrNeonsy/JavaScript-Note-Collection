/*
    This Is A List Of Useful / Well Known String "Actions"
*/

let text = "Timothy Enderson";
let trimText = "   Timothy  Enderson     ";
let replaceText =
    "Th-is/I-s/Re-ada-b-l-e/If/Y-o-u/R-e-p-l-ac-e/C-e-rt-a-in/Ch-a-rs";

// Length Of The String As Number
console.log(text.length);

// Returns Char At Index Which Is Starting At 0
console.log(text.charAt(3));

// Returns Index Of The First Occurrences Of The Letter
console.log(text.indexOf("o"));

// Returns Index Of The Last Occupance Of The Letter
console.log(text.lastIndexOf("o"));

// Cuts The WhiteSpace At The Beginning And End Of A String
console.log(trimText);
console.log(trimText.trim());

// Turns Everything Uppercase
console.log(text.toUpperCase());

// Turns Everything Lowercase
console.log(text.toLowerCase());

// Replaces All Occurrences With The Second Parameter
console.log(replaceText);
console.log(replaceText.replaceAll("-", "").replaceAll("/", " "));
