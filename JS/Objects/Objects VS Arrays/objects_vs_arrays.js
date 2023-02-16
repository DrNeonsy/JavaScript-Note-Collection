/*
    As You May Know From The Array Basics, Arrays Are "typeOf()" Object. Now We Are Looking At Objects So...
    What's The Difference?

    //--------------------------------------------------------------------------------------------------------
    Basic Explanation:

    In Javascript, An Array Is A Specialized Type Of Object That Has A Length Property And Methods
    To Manipulate The Data It Contains. While An Array Is Technically An Object,
    It Has A Different Set Of Behaviors And Use Cases Compared To A Standard Javascript Object.

    So An Array Can Use The Length Method To Get The Amount Of Elements Contained And It Has Certain Methods
    Some Of Which I've Covered In The Array Basics.

    So Which To Use When Exactly?

    Arrays Are Generally Used For Storing And Working With Ordered Collections Of Data, Such As A List Of Items.
    Objects Are Generally Used For Storing And Working With Named Data, Such As Properties Of An Object.

    Arrays Describe What They Are Holding Via VariableName While An Object Can Be More Complex.

    Note: In Order To Get They Amount Of Keys / The Amount Of Information An Object Is Holding Use The "Keys" Method.
*/

const exampleArray = [1, 2, 3];
const exampleObject = {
    name: "Demire",
    age: 24,
    city: "New York",
};

console.log(typeof exampleArray); // "object"
console.log(typeof exampleObject); // "object"

console.log(exampleArray.length); // 3
console.log(Object.keys(exampleObject).length); // 3

exampleArray.push(4); // Adding 4 To The End
exampleObject.email = "demire@space.com"; // Add Property Named EMail With The Value Assigned Like A Variable

console.log(exampleArray); // [1, 2, 3, 4]
console.log(exampleObject); // { name: "John", age: 25, city: "New York", email: "john@example.com" }
