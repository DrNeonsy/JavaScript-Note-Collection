/*
    With The So Called Logical Operators We Get The Ability
    To Check Several Conditions Concurrently

    You Have The AND ( && ) All Conditions Must Be TRUE
    You Have The OR ( || ) One Condition Must Be TRUE
*/

const age = 75;

if (age >= 0 && age <= 12) {
  console.log("You Are Quite Yong");
} else if (age > 12 && age <= 18) {
  console.log("You Are A Teen");
} else if (age > 18 && age <= 30) {
  console.log("You Are A Young Adult");
} else if (age > 30 && age <= 50) {
  console.log("You Are An Adult");
} else if (age > 50 && age <= 65) {
  console.log("You Are Older");
} else if (age > 65 && age <= 90) {
  console.log("You Are A Senior");
} else {
  console.log("Your Age Falls Out Of Scope");
}
