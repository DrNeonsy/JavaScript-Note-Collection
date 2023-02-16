/*
    Object Destructuring Is A Technique In Javascript That Allows You To Extract Properties From An Object
    And Assign Them To Variables With The Same Name As The Property.

    You Can Do That By Defining The Variable Type (Const, Let, Var) {LIST OF PROPERTIES} = OBJECT_NAME;
    This Would Result In The Variable Name To Be The Same As The Property Name But You Can Change That

    Optionally (Rename Variables): { propertyName: variableName, propertyName: variableName };

    This Process Allows You To Get Several Properties In One Line Keeping The Code More Concise
*/

const object = {
    name: "Sam",
    age: 33,
    location: "California",
    occupation: "Consulting",
    salary: 100000,
    yearsOfExperience: 5,
    education: "Bachelor",
    interests: ["reading", "traveling", "hiking"],
};

// Normal Extraction

// const {name, age} = object;

// "Named Extraction"

const { name: firstName, age } = object;

console.log(firstName);
console.log(age);
