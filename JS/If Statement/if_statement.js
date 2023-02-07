/*
    If Statements Provide You With A Tool For Decision Making

    If A Condition Is True => Execute Code

    (If Not) Try This Condition And If It's True => Execute This Code

    Else (If Nothing Is True) => Execute This Code
*/

let age = Number(window.prompt("Enter An Age"));

// Using An ! Inverts The Condition Like != Or !==

if (!isNaN(age)) {
    // If It's Not Not A Number ( If It Is A Number )
    if (age >= 18) {
        // If The Value Is Greater Or Equals 18
        console.log("You Are An Adult, Legally"); // Execute This
    } else if (age <= 0) {
        // Otherwise If It's Less Or Equal To 0
        console.log("Invalid Input"); // Execute This
    } else {
        // If Nothing Is True ( Then Everything Is A Lie 🎂 )
        console.log("You Are A Youngling, Legally"); // Execute This
    }
} else {
    // If It's Not A Number
    console.log("No Number Was Provided :/"); // Execute This
}

// --------------------------------------------------------------------------

/*
    A Condition Is Either True Or False Like A Boolean Which Is Why
    You Can Just Simply But It Into The Condition Field ()
*/

let teaPerson = true;

console.log("teaPerson", typeof teaPerson, teaPerson);

if (teaPerson) {
    console.log("Welcome To The Tea Club");
} else {
    console.log("WHYYYYYYYY, NOOOOOOO, AHHHHH");
}

/*
    It Is Important To Know That We Don't Have Compile ( Set In Stone ) Datatypes
    So In Static Programming Languages Like C C++ C# And Java Datatypes Are Set In Size

    In JavaScript Which Is A Dynamic Language You Can Compare Conditions In 2 Ways

    == Which Is Based On Value
    === Which Is Based On Value And Type ( Numeric, String, Boolean )
    This Also Applies To PHP And Python
*/
