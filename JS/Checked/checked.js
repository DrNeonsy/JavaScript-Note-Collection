/*
    This Is All About Seeing Whether A Checkbox
    Radio Button Or Whatever Has Been Checked
    This Works The Same Way With Either One
*/

document.getElementById("button").onclick = function () {
  if (document.getElementById("checkBox").checked) {
    console.log(
      document.getElementById("checkBox").checked,
      "The Check Box Has Been Checked"
    );
  } else {
    console.log(
      document.getElementById("checkBox").checked,
      "The Checkbox Hasn't Been Checked"
    );
  }
};
