/*
    Functions Allow You To Write Code Once And Use It As Many Times
    And At Several Places As You Want To By Simply Calling Their Name

    DRY Principle: Don't Repeat Yourself

    Copy Pasting The Same Code Over And Over Is A Clear Indication To Use Functions
*/

// 1. A Function That Executes Code

// This Is In The Global Scope => Every Function Declared On The Outer Layer Has Access

let uName = "Neonsy";

ExampleOneGreet(); // You Can Call A Function Before You Write It As Long As All Variables Are Declared

function ExampleOneGreet() {
    // If You Call Greetings() Before "let uName" You Would Get An Error
    console.log("Hello", uName);
}

/*
    If I Were To Declare This Variable Inside A Function Another Function
    On The Same "Outer / Global Layer" Wouldn't Have Access E.G. 2
*/

// 2. A Function That Receives Information

ExampleTwoReceive();

function ExampleTwoReceive() {
    let num1 = 5; // These Variables Only Exist Within The Scope Of This Function
    let num2 = 7; // These Variables Only Exist Within The Scope Of This Function

    functionThatGetsInfo(num1, num2); // We Need To Pass The Values We Want To Use To This Function
}

function functionThatGetsInfo(valueOne, valueTwo) {
    /* 
        Because You Don't Know All Of The Possible Names Of Variables That Will Be Used
        With This Function The Name In The Parameter List Should Be Generic ( Universally Describing )
    */
    console.log(valueOne + valueTwo);
}

// 3. A Function That Returns Information

ExampleThreeReturn();

function ExampleThreeReturn() {
    let digit1 = 42;
    let digit2 = 72;

    let sum = functionThatReturnsInfo(digit1, digit2); // Instead Of Just Printing The Value We Might Want To Store The Result

    console.log("Direct Sum Output:", functionThatReturnsInfo(digit1, digit2));
    console.log("Variable Sum Output:", sum);
}

function functionThatReturnsInfo(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

/*
    So What Is The Difference Between Let And Var

    If You Have A Block Scope Like An If Statement The Let Keyword Would Only Allow The
    Variable To Be Accessed Within That If {} Block Scope And Further Down

    Which Is Also How It's Being Done With Most If Not All Static Programming Languages

    However Tha Var Keyword Allows You To Create A Variable You Can Access No Matter
    Where You Are (Within The Function You Declared It In) => Function Wide Access

    NOTE: If A Var Variable Is Declared Within The Global Scope Which As Mentioned Before
    Is Outside Any Function ( Top Most Layer ) It Will Change Browser Window Properties
    Doing That Without Knowing ( Unintentionally ) Can Cause Avoidable Errors
*/

varExample();

function varExample() {
    if (3 === 3) {
        let yes = true;
        var yeah = true;
    }
    // console.log(yes); // Yes Is Not Defined ERROR
    console.log("Yeah", typeof yeah, yeah);
}
