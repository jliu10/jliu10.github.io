//
/*
*/

// Alternating text of my several title descriptions
{
    var interval = setInterval(changeText, 1000);
    var counter = 1;
    var titles = ["programmer", "NAV fan", "J. Cole hater", "photographer (kinda)", "poet (kinda)", "singer (kinda)", "high elo League of Legends player", "League of Legends warding master", "vegetarian", "broke college student", "human bean"];
}

function initialize() {
    // grab the innerHTML of the object with the id "altText"
    // console.log("hi");
    altText = document.getElementById("altText");
    var navDropdowns = document.querySelectorAll('div.dropdown-content');

    console.log("navDropdowns: " + navDropdowns.length);
    // navDropdowns.forEach(clip);
}

// Alternate text, cycling through elements in titles[]
function changeText() {
    if(counter === 11) counter = 0;
    altText.innerHTML = titles[counter] + ".";
    counter++;
}

// Shape navBar dropdown to cut off bottom right corner
function clip(item) {
    item = item.querySelector('.dropdown-content');
    console.log("ran clip");
    console.log("color: " + item.color);
    let w = item.offsetWidth;
    console.log("width: " + w);
    let h = item.offsetHeight;
    console.log("height: " + h);
    // console.log("polygon(100% 0, 100% " + (h - 24) + "px, " + (w - 24) + "px 100%, 0 100%, 0 0)");
    item.style.clipPath = "polygon(100% 0, 100% " + (h - 24) + "px, " + (w - 24) + "px 100%, 0 100%, 0 0)";
    // item.style.clipPath = "polygon(100% 0, 100% 85%, 90% 100%, 0 100%, 0 0)";
    // item.style.clipPath = "polygon(100% 0, 100% 120px, 200px 100%, 0 100%, 0 0)";
}
