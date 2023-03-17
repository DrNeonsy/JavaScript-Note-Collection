/*

    The Super Keyword Is Used Within The World Of Inheritance To Pass Information
    From A Child Class To A Parent Class Constructor

    So If You Have Attributes In The Parent Class You Can Use The Super Keyword To Pass The Information To The
    Parent Class Constructor
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    subject;
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

const Student1 = new Student("John", 25, "Math");

console.log(Student1.name);
console.log(Student1.age);
console.log(Student1.subject);
