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

// There are two ways to extract part of a String, being slice() and substring().
/*
    Negative indexes: slice() allows negative indexes, while substring() does not.
    Negative indexes count from the end of the string, so -1 refers to the last character in the string, -2 refers to the second-to-last character, and so on.

  Order of arguments: slice() takes the start and end indexes as separate arguments, while substring() takes them as a start index and a length.

  Handling of arguments: If the start index is greater than the end index, slice() will return an empty string, while substring() will swap the arguments and return the substring.
*/

let newString = "This Is A New String";

console.log(newString.slice(5, 7)); // Is

console.log(newString.substring(5, 7)); // Is

console.log(newString.slice(7, 5)); // "empty string"

console.log(newString.substring(7, 5)); // Is

console.log(newString.slice(-6, -4)); // St

console.log(newString.substring(-6, -4)); // "empty string"