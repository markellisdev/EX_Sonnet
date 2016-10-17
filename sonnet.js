// Paste the code below into your HTML file.


// Take the contents of the sonnet div and place it in a variable

var theSonnet = document.getElementById("sonnet").innerHTML;
console.log("theSonnet", theSonnet);

// Find and output the starting position of the word "orphans"

var orphanStart = theSonnet.indexOf("orphans");
console.log("orphanStart", orphanStart);


// Output the number of characters in the sonnet

var numberOfChar = theSonnet.length;
console.log("numberOfChar", numberOfChar);


// Replace the first occurance of the string "winter" with "yuletide"

var replaceWinter = theSonnet.replace("winter", "yuletide");
console.log("replaceWinter", replaceWinter);

// Replace all occurances of the string "the" with "a large"

var replaceThe = theSonnet.replace(/ the | The |The /gi, " a large ");
console.log("replaceThe", replaceThe);

// Set the content of the sonnet div with the new string

var whatever = document.getElementById("sonnet");
whatever.innerHTML = replaceThe;