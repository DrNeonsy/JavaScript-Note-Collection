/*
    A For Loop Is Similar To The While Loop(s) So Which Comes When

    A While Loop Like The Word Suggest Is During An Event
    You Don't During Your Coding How Long That Event Will Last
    That's When You Use Either One Of The While Loop(s)

    If You Know The Amount Of Time(s) You Want To Repeat Code
    You Reach For The For Loop => For Set Amount Of Time
*/

for (let counter = 0; counter <= 10; counter++) {
    console.log(counter);
}

// You Can Also Nest Loops Just Like Method Chains

// For Performance Reasons I Tuned The Numbers Down

// Originally This Was A Time Loop ( Not That Kind Of Time Loop )

for (let x = 0; x <= 3; x++) {
    for (let y = 0; y <= 3; y++) {
        for (let z = 0; z <= 3; z++) {
            console.log("X:", x, "Y:", y, "Z:", z);
        }
    }
}
