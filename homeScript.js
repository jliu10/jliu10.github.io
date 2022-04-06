console.log("homeScript has run");

// Alternating text of my several designations
var interval = setInterval(changeText, 1000);
var counter = 1;
var titles = ["programmer", "NAV fan", "J. Cole hater", "photographer (kinda)", "poet (kinda)", "singer (kinda)", "high elo League of Legends player", "League of Legends warding master", "vegetarian", "broke college student", "human bean"];

function homeInitialize() {
    // grab the innerHTML of the object with the id "altText"
    altText = document.getElementById("altText");
}

// Alternate text, cycling through elements in titles[]
function changeText() {
    if(counter === 11) counter = 0;
    altText.innerHTML = titles[counter] + ".";
    counter++;
}
