//
/*
*/

// Alternating text of my several title descriptions
{
    var interval = setInterval(changeText, 1000);
    var counter = 0;
    var titles = ["programmer", "NAV fan", "photographer (kinda)", "poet (kinda)", "singer (kinda)", "high elo League of Legends player", "League of Legends warding master", "vegetarian"]
}

function initialize() {
    // grab the innerHTML of the object with the id "flashing-text"
    altText = document.getElementById("altText");
}

function changeText() {
    if(counter === 8) counter = 0;
    altText.innerHTML = titles[counter];
    counter++;
}
