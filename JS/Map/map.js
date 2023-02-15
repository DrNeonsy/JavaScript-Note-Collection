/*
    A Map (Hashmap In Java Or Dictionary In C#) Works With The KVP (Key Value Pair) Principle

    Now Depending On Your Knowledge You Might Be Aware That Objects Are Similar However
    Their Keys Are Restricted To (Numbers, Strings And Characters)

    A Map Can Store Any Datatype As A Key E.G. Arrays Or Objects
*/

// This Is How We Can Create A Map Object. There Is Also A Way Where We Can Directly Input Values.
const productRatings = new Map();

/*  In This Example We Want The Map To Contain A Product As A "Key"
    A Value Is In Itself A Single "Type"
    But In Order To Calculate The Rating We Need A Sum Of All Ratings Divided By The Amount Of Ratings

    So We Can Use Things Like Arrays Or Objects => Choosing Object For This Example
*/

addRating("TV", 4);
addRating("TV", 2.7);
addRating("TV", 3.6);
addRating("TV", 5);

console.log(`The Rating Of The Product "TV" Is: ${getAverageRating("TV")}`);

/*  List Of Common Map Methods

    Get: Gets The Value Based On The Key Provided
    Set: Adds A Key Value Pair To The Map
    Delete: Deletes The Key Value Pair Based On The Key Provided
    Has: Returns Whether The Key Exists Within The Map
*/

// ---------------------------------------------------------------------------------------------------------

function addRating(productID, rating) {
    // If The Product Does Not Exist Already Create An Entry
    if (!productRatings.has(productID)) {
        // The Key Is The "productID" Provided On Function Call
        productRatings.set(productID, {
            totalRating: 0,
            ratingsAmount: 0,
        });
    }

    // Get The Value Information From The Product Provided Into A Variable
    const productData = productRatings.get(productID);

    productData.totalRating += rating; // Add The Rating Provided On Function Call
    productData.ratingsAmount++; // Increment Total Amount Of Ratings

    // Update The Data Inside The Map
    productRatings.set(productID, productData);
}

// Now We Need A Way To Display The Current Rating

function getAverageRating(productId) {
    const productData = productRatings.get(productId);
    if (!productData || productData.ratingsAmount === 0) {
        return null;
    }
    return productData.totalRating / productData.ratingsAmount;
}
