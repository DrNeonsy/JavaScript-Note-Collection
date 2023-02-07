/*
    A Switch Is Similar To An If-Else Statement However They Are Not The Same

    A Switch Is Cleaner Especially If You Have 20 Cases VS 20 If | Else If | Else

    But There Are Probably More Cases Where Conditions Are Better Asked In If Statements
*/

const number = 5;

// if (number === 1) {
//   console.log("Number Is 1");
// } else if (number === 2) {
//   console.log("Number Is 2");
// } else if (number === 3) {
//   console.log("Number Is 3");
// } else if (number === 4) {
//   console.log("Number Is 4");
// } else if (number === 5) {
//   console.log("Number Is 5");
// } else if (number === 6) {
//   console.log("Number Is 6");
// } else if (number === 7) {
//   console.log("Number Is 7");
// } else {
//   console.log("Number Is < 1 || > 7");
// }

// When It Comes To Precision Or You Use Too Many If Statements Try And Switch It Up

switch (
  number // If You Forget A Break The Case Will Enter Where It's Valid
) {
  // And "Fall Through" Until It Hits A Break Or The End Of The Switch
  case 1:
    console.log("Number Is 1");
    break;
  case 2:
    console.log("Number Is 2");
    break;
  case 3:
    console.log("Number Is 3");
    break;
  case 4:
    console.log("Number Is 4");
    break;
  case 5:
    console.log("Number Is 5");
  // break;
  case 6:
    console.log("Number Is 6");
  // break;
  case 7:
    console.log("Number Is 7");
    break;

  default:
    console.log("Number Is < 1 || > 7");
    break;
}
