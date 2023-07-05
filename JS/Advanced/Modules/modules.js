// Modules, are a new feature since ES6, that allow us to split our code into multiple files

// In this example I'm predefining a function that properly generates a random number

// IMPORTANT! If a script that is linked in the HTML is or uses a module then you have to set the attribute type="module" in the script tag

/*
    There are two ways to import modules:

    1. import {functionName} from './path/to/module.js' | With this you can just use it like it's a normal function
    OR
    2. import * as customMath from './path/to/module.js' | With this you have to use it like you've been using other functions: alias.functionName()
*/

import * as CMath from './customMath.js'

console.log(CMath.rnd(10)) // 0-9

console.log(CMath.rnd(10, 1)) // 1-10