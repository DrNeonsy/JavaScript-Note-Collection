/*  The Static Keyword Makes An Attribute Or Method Available To The Entire Class
    So In Contrast: The Attribute Or Method Does Not Belong To An Object
    
    This Can Be Useful For "Utility Methods" Or "Shared Information"
*/

class Fruit {
    name;
    price;

    static numberOfFruits = 0;

    constructor(name, price) {
        this.name = name;
        this.price = price;
        Fruit.numberOfFruits++;
    }
}

const f1 = new Fruit("Apple", 10);
const f2 = new Fruit("Banana", 20);
const f3 = new Fruit("Orange", 30);

console.log(f1.numberOfFruits); // Undefined Because Fruit.numberOfFruits Is Not Part Of The Object
console.log(Fruit.numberOfFruits); // This Works
