/*

    Inheritance Is A Way To Make Your Code More Flexible
    
    It Also Allows You To Prevent Repeating Your Code By Bundling Your Code Based On Common Sets Of Behaviors

    Example: An Animal Can Be Alive. A Dog Can Be Alive. A Cat Can Be Alive. A Rabbit Can Be Alive
    So Instead Of Haven 3 Classes With Their Own Booleans, You Can Use Inheritance

    The Same Can Be Done With Methods
*/

class Animal {
    alive = true;

    eat() {
        console.log(`This Animal ${this.name} is eating`);
    }
    sleep() {
        console.log(`This Animal ${this.name} is sleeping`);
    }
    aliveCheck() {
        console.log(`This Animal ${this.name} is alive ${this.alive}`);
    }
}

class Dog extends Animal {
    name = "Dog";
    bark() {
        console.log(`This Dog ${this.name} is barking`);
    }
}

class Cat extends Animal {
    name = "Cat";
    climb() {
        console.log(`This Cat ${this.name} is climbing`);
    }
}

class Fish extends Animal {
    name = "Fish";
    swim() {
        console.log(`This Fish ${this.name} is swimming`);
    }
}

const dog = new Dog();
const cat = new Cat();
const fish = new Fish();

dog.aliveCheck();
cat.aliveCheck();
fish.aliveCheck();

dog.eat();
dog.sleep();
dog.bark();

cat.eat();
cat.sleep();
cat.climb();

fish.eat();
fish.sleep();
fish.swim();
