/*
  I Didn't Showcase Radio Buttons In The Checked Section So =>
  You Need To But The Name Attribute With The Same Value On The Radio Buttons
  You Wish To Be Grouped. Otherwise You Can Check Them All
*/

// This Is Just For The Radio Button Interface
document.getElementById("Button").onclick = function () {
    let forEach = document.getElementById("forEach").checked;
    let map = document.getElementById("map").checked;
    let filter = document.getElementById("filter").checked;
    let reduce = document.getElementById("reduce").checked;
    let sortNumbers = document.getElementById("sortNumbers").checked;
    let sortStrings = document.getElementById("sortStrings").checked;

    let options = [forEach, map, filter, reduce, sortNumbers, sortStrings];

    // The Switch Pattern Is True Because I Want To Enter The Case Where It Matches
    switch (true) {
        case options[0]:
            forEachExample();
            break;
        case options[1]:
            mapExample();
            break;
        case options[2]:
            filterOutputF();
            break;
        case options[3]:
            reduceOutputF();
            break;
        case options[4]:
            sortNumbersOutputF();
            break;
        case options[5]:
            sortStringsOutputF();
            break;
    }
};

// ----------------------------------------------------------------------------

function forEachExample() {
    /*
        For Each Which Is Something We Are Used To In Languages Like Java And C#
        Usually Provides Us With A Loop Through Some Kind Of An Array Or List ( Collection )

        In JavaScript forEach Is A Method For "Arrays" That Execute Code Per Element
        The Function Called Via forEach Will Be Teated As A Callback ( Check That Section )
    */

    // So What If We Want Every 2 Character Uppercase

    let names = ["ramsey", "valdez", "casey", "davenport", "liam"];

    // toEvenUpper(names); // Manual Function Way

    // We Are Sending Three Things With This ( currentElement, Index, Array )
    names.forEach(toEvenUpperCallbackExample);

    function toEvenUpper(array) {
        for (let i = 0; i < array.length; i++) {
            for (let char = 0; char < array[i].length; char++) {
                if (char % 2 === 0) {
                    array[i] = array[i].replace(
                        array[i].charAt(char),
                        array[i].charAt(char).toUpperCase()
                    );
                }
            }
        }

        console.log(names);
    }

    function toEvenUpperCallbackExample(element, index, array) {
        for (let char = 0; char < element.length; char++) {
            if (char % 2 === 0) {
                /*
                    In Order For This To Work You Need array[index].replace
                    Because "element" Holds The State Of The Element When
                    First Calling This Function While array[index] Is The
                    Updated State ( The Loop Updates The Element Within The Array )

                    This Is Also Why We Need To Override array[index] =
                    And Not element = 
                    Because element Only Exists Within This Function
                */
                array[index] = array[index].replace(
                    element.charAt(char),
                    element.charAt(char).toUpperCase()
                );
            }
        }
    }

    console.log(names);
}

function mapExample() {
    // This Works Like The ForEach Method With The Addition Of Creating A New Array Out Of The Result

    let someNumbers = [7, 5, 9, 6, 2, 4, 3]; // So We Have A Collection Of Some Numbers

    // Let's Say We Want All Those Numbers Divided By Two But We Wan't To Keep The Original Values

    // Make A New Array With The Values Being "someNumbers" Calling The Half Method On Each Element
    let results = someNumbers.map(half);

    results.forEach((element) => {
        console.log(element);
    });

    function half(currentElement) {
        return currentElement / 2;
    }
}

function filterExample() {
    // Placeholder
}

function reduceExample() {
    // Placeholder
}

function sortNumbersExample() {
    // Placeholder
}

function sortStringsExample() {
    // Placeholder
}
