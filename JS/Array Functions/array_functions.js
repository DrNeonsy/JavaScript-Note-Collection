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
            forEachOutputF();
            break;
        case options[1]:
            mapOutputF();
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

function forEachOutputF() {
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

    function toEvenUpperCallbackExample(element, i, array) {
        for (let char = 0; char < element.length; char++) {
            if (char % 2 === 0) {
                /*
                    In Order For This To Work You Need array[i].replace
                    Because "element" Holds The State Of The Element When
                    First Calling This Function While array[i] Is The
                    Updated State ( The Loop Updates The Element Within The Array )

                    This Is Also Why We Need To Override array[i] =
                    And Not element = 
                    Because element Only Exists Within This Function
                */
                array[i] = array[i].replace(
                    element.charAt(char),
                    element.charAt(char).toUpperCase()
                );
            }
        }
    }

    console.log(names);
}

function mapOutputF() {
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

function filterOutputF() {
    // Creates A New Array With All The Values That Pass Through A Filter (Boolean Function)

    let moreNumbers = [
        2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 90, 20,
    ];

    let primeNumbers = moreNumbers.filter(primeNumber);

    primeNumbers.forEach((element) => {
        console.log(element);
    });

    function primeNumber(element) {
        for (let i = 2; i < element; i++) {
            if (element % i == 0) {
                return false;
            }
        }
        return true;
    }
}

function reduceOutputF() {
    // Placeholder
}

function sortNumbersOutputF() {
    // Placeholder
}

function sortStringsOutputF() {
    // Placeholder
}
