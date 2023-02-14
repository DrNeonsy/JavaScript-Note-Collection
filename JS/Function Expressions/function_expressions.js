/*
    I'm Going To Show You Both The Normal Function Expression And The Arrow Version In This Section

    A Function Expression Is Simply A Block Of Code That Is Suppose To Be Executed "So Like Every Function"
    However They Are "Anonymous" Because They Won't Have A Unique Function Name Which Is Useful If You Want
    To "Scope" Executions Like In A Function But You Know That This Set Of Code Won't Be Needed Anywhere Else

    Depending On The Future Order Of The Section You Might've Seen Me Use This Technique On Buttons
    Which Makes Sense If A Button Does Something Special Which Is Only Suppose To Be Happening Once
*/

/*  An Anonymous Function Can Be Bound To A Variable And Lives Within It
    In That Case The Variable Is Your Access Way To The Function
    If You Decide Not To Store Something Within A Variable The Function Becomes Truly Anonymous
*/

let value = 0;
let output = document.getElementById("value");

// Now This Is Not Inside Of A Let Or Const Variable But We Assign The Function To The Onclick Event
document.getElementById("increase").onclick = function () {
    value++;
    output.innerHTML = value;
};

document.getElementById("decrease").onclick = function () {
    value--;
    output.innerHTML = value;
};

// You Could Also For Example Write An Actual Function With A Parameter That Decides Whether To Increase Or Decrease
// Based On DRY: Don't Repeat Yourself This Execution Already Shows That The Output Change Can Probably Be "Merged"

// Now To Take A Look At Arrow Function Expressions Which Are Basically A More Compact Way To Write A Function Expressions
// Note: An Arrow Expression Must Have A Return Value

/*
    Here Is A Syntax Example

    How A Normal Function Looks Like:
    function functionName(a, b) { statements... return (c) };

    How A Function Expression Looks Like
    let variableName = function(a, b) { statements... return (c) };

    And At Last An Arrow Expression
    let variableName = (x, y) => { statements... return (z) }; 

    For Arrow Functions The Following Rule Applies For Syntax:

    If You Have No Arguments You Need An Empty Pair Of ()
    If You Have On Argument You Can Have A Pair Of ()
    If You Have Two Or More Arguments You Need A Pair Of ()
    If You Only Have One Statement You Don't Need {} Just Like With If Statements

    If You Don't Want To Memorize This You Can Always Just Use ()
*/

//  Name            Parameter(s)  Code
let consoleTrigger = (message) => console.log(message);

consoleTrigger("Console Log Triggered");
