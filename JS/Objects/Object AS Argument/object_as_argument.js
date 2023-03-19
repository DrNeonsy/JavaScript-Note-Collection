/*

    We Can Pass Data Into a Function Which Also Includes Objects

    Seeing That We Don't Have "Strict" Datatypes In JavaScript The Only Thing We Need
    Is A Parameter Name That Is Somewhat Descriptive

    So If We Want To Pass An Object As An Argument We Just Need A Proper Parameter Name
    And Then We Can Do Whatever We Want With That Object

*/

const Banana = {
    name: "Banana",
    price: 3.4,
    color: "Yellow",
};

changeObjectInfo(Banana); // Comment This To See The Changes

displayObjectInfo(Banana);

function displayObjectInfo(obj) {
    console.log(`Name: ${obj.name}`);
    console.log(`Price: ${obj.price}`);
    console.log(`Color: ${obj.color}`);
}

function changeObjectInfo(obj) {
    obj.price = 2.1;
}
