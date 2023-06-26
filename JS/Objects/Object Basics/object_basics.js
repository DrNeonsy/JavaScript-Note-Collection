/*
    I've Already Hinted What An Object Is Inside The Map Section Though Now We Can Solely Focus On Objects

    In Javascript, An Object Is A Collection Of Key Value Pairs Where Each Key Is A String
    And Each Value Can Be Any Data Type, Including Other Objects.

    You May Recall From The Map Section That I Told You About Using Numbers As Keys For Objects.
    This Is True However They Are Being Converted Into Strings As Well.

    Besides Properties An Object Can Also Hold Methods.
*/

// Let's Create An Example Object

/*
    In Order To Understand Why This Variable Is Const And We Are Still Able To Manipulate Properties
    Head To The Variable Reference Section
*/
const exampleObject = {
    name: "Demire",
    age: 24,
    city: "New York",

    greet: function () {
        console.log(`Hello, My Name Is ${this.name}`);
    },
};

/*
    This Is A Special Keyword That Is Used To Refer To The Object That A Method Is Attached To.
    It Allows The Function To Access And Modify The Object's Properties And Methods.

    So If You Want To Use An Objects Property, Use The "This" Keyword But Keep In Mind:

    The Value Of This Depends On How The Function Is Called. If A Function Is Called As A Method Of An Object,
    Then This Will Refer To The Object.
    
    If A Function Is Called In The Global Scope, Then This Will Refer To The Global Object (E.G. Window In A Browser)
*/

// Output => Can Be Done With A "." (Member Access Operator) Or []

exampleObject.greet();

console.log(exampleObject.name); // "Demire"
console.log(exampleObject["age"]); // 24

exampleObject.email = "demire@space.com"; // Add A New Property
exampleObject.age = 27; // Modify An Existing Property
exampleObject.tellAge = function () {
    // Add A New Function To An Existing Object (You Can Also Add Function That Already Exist)
    console.log(`I'm ${this.age} Years Old`);
};

exampleObject.tellAge();
console.log(exampleObject);

delete exampleObject.city; // Remove A Property

console.log(exampleObject);
