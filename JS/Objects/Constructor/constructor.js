/*
    A Constructor Is A Unique Method Of A Class That Takes Arguments And Assigns Those To Properties
    To Help Create A More Dynamic Set Of p1s, Something We Weren't Able Until Now (Based On Learning Steps)

    The Constructor Method Is Called Automatically When A New Object Is Created And It Also Must Be Written In Camel Case, Using The Word "constructor"
*/

class Person {
    constructor(name, age, favNum = null, favCol = null, favAnim = null) {
        this.name = name;
        this.age = age;
        this.favNum = favNum;
        this.favCol = favCol;
        this.favAnim = favAnim;
    }
}

const p1 = new Person("Timothy", 22, 5, "Blue", "Siberian tiger");

/*
    Using The ForIn Code Snippet From VSC We Can Output Our Properties Like This

        for (const key in p1) {
        if (p1.hasOwnProperty.call(p1, key)) {
            const element = p1[key];
            console.log(element);
        }
    }
*/

// Alternative We Can Just Do This

for (const property in p1) {
    console.log(`${property}: ${p1[property]}`);
}