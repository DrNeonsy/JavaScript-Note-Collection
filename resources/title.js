// Get the file name from the URL
const fileName = window.location.pathname.split("/").pop().replace(".html", "");

// Split the file name into an array of words
const words = fileName.split(/[_ ]+/);

// Convert each word to title case and join them with spaces
const title = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Set the title element of the HTML document to the formatted file name
document.title = title;
