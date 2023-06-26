/*
    There Is An Easy Way To Accept Input => Which Is Not The Recommended Way

    And There Is One That Requires A Bit More Setup

    Let's Focus On The User Prompt First (Easy Mode)
*/

/* UNCOMMENT TO SEE DEMO
let input = window.prompt("Gimme Some Input, PLEASE!");

if (input.length !== 0)
  if (input.length <= 57) {
    document.getElementById("wpo").innerText += " " + input;
  } else {
    document.getElementById("wpo").innerText += " Input Too Long";
  }
else {
  document.getElementById("wpo").innerText += " Nice Try ;)";
}
*/

// -----------------------------------------------------------------------------

/*
    We Fetch The Button Based On The ID And Assign An Anonymous Function Which
    Just Binds The Statements We Want To Execute
*/

document.getElementById("button").onclick = function () {
    let userInput = document.getElementById("textField").value;

    if (userInput.length !== 0)
        if (userInput.length <= 57) {
            document.getElementById("wpo").innerText = "Output: " + userInput;
        } else {
            document.getElementById("wpo").innerText = "Output: Input Too Long";
        }
    else {
        document.getElementById("wpo").innerText = "Output: Nice Try ;)";
    }
};
