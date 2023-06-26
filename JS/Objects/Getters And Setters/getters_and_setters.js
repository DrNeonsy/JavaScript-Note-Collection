/*

    Getters / Setters: Are Used To Bind An Attribute To A Function / Method

    Important: Naming Convention For Attributes That Are "Protected" Via
    Getters / Setters
    Begin With An Underscore

    Getters Are Used To Get / Retrieve Attributes
    Setters Are Used To Set / Modify Attributes

    Because We Use Setters To Modify Attributes We Can Implement Rules To Prevent "Illegal" Modifications
*/

class CPU {
    constructor(speed) {
        this._speed = speed;
        this._unpacked = false;
    }
    get speed() {
        return `The Speed Is ${this._speed} MHz`;
    }
    get unpacked() {
        return `The CPU Is Unpacked: ${this._unpacked}`;
    }
    set unpacked(value) {
        if (!this._unpacked && value) this._unpacked = value;
    }
}

const cpu = new CPU(3400);

console.log(cpu.speed);
console.log(cpu.unpacked);

cpu.unpacked = true;

console.log(cpu.unpacked);