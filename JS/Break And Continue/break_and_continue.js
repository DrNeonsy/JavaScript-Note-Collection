/*
    The BREAK Keyword Is Used To Non Destructively Break Or Exit An Execution
    This Applies To Loops And The Switch Case (Mentioned In Switch Section)

    If We Have A Loop That Runs To A Max Number And You Want To Find Out
    Whether Another Number E.G. From A User Is Within The Range
*/

let num = 5;
const MAX = 100;

for (let i = 0; i <= 100; i++) {
  if (num === i) {
    console.log("Num:", i);
    console.log("Exiting Loop Because We Got What We Wanted");
    break;
  }
  console.log(i);
}

// -------------------------------------------------------------------------------

/*
    Now Let's Try The CONTINUE Keyword Which Does Not Leave The Loop Like The BREAK
    But It Skips The Rest Of The Code Within The Scope
    So I'm Going To Create A Loop Outputs Odd Numbers And Counts Even Ones
*/

let evenNumbsTotal = 0;

for (let i = 1; i <= 75; i++) {
  // Yes This Could Also Be Handled With An Else
  if (i % 2 !== 0) {
    console.log(i, "Is An Odd Number");
    continue; // Skipping Rest Of Loop Code
  }
  console.log("Counting An Even Number");
  evenNumbsTotal++;
}

console.log("Even Numbers:", evenNumbsTotal);
