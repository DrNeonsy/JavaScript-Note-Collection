/*
    A Class Is A Blueprint For Creating Objects. It Defines A Set Of Properties And Methods
    That Are Common To All Instances Of The Class.
    
    The Class Can Be Used To Create Multiple Objects,
    Each With Their Own Unique Values For The Properties.

    In This Context: An Object Is Often Referred To As An Instance Of A Class.
*/

class exampleClass {
    name = "Generic Name";
    age = 22;

    output() {
        console.log(`My Name Is ${this.name} And I'm ${this.age} Old`);
    }
}

// In Order To Create An Instance Of That ExampleClass We Need A New Keyword, That Being The "new" Keyword 😜

const objectNameHere = new exampleClass(); // Why ()? You'll Learn That In The Constructor Section

// We Could Add More Objects But I Will Save That For The Constructor Lesson

objectNameHere.output();

objectNameHere.name = "Miranda"; // You Can Still Modify Their Values | Yes I'm Using Multi-Line-Editing 😎
objectNameHere.age = 27; // You Can Still Modify Their Values | Yes I'm Using Multi-Line-Editing 😎

objectNameHere.output();
