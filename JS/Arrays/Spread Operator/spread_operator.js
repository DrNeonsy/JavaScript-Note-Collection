/*
 *  The Spread Operator "Spreads" Something That Can Be Iterated E.G. An Object Or Array Or Even A String
 *  So When We Need To Access Each Element Within A Collection We Can Use The Spread Operator To Do So
 */

// The Math.Max Function Needs Values To Determine Which Number Is The Biggest One And An Array Is Only Holding Values

let numbers = [4, 9, 5, 6, 8, 7, 1, 2, 3]; // You Can Change Or Add Values To This And It'll Work

const MAX = Math.max(...numbers); // We Are "Spreading" All Numbers From That Array Across As Parameters

console.log(MAX);

// If We Have Two Arrays And We Want To Add Elements From One To The Other We "Can't" To The Following

let fruits = ["Kiwi", "Apple", "Banana", "Blueberry", "Mango"];
let vegetables = ["Bell Peppers", "Potatoes", "Tomatoes", "Carrots"];

let food = [fruits]; // You Need [] To Signal That It Is An Array Otherwise You Will Assign The Same Array Reference

// food.push(vegetables); This Will Add The Array Not The Elements

food.push(...vegetables); // This Works
food.sort();

console.log(`Food: ${food}`);
