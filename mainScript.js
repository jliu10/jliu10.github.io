console.log("mainScript has run");

function initialize() {
    console.log("mainScript.initialize() has run");
    var navDropdowns = document.querySelectorAll('div.dropdown');
    navDropdowns.forEach(addHoverEvent);
    console.log("navDropdowns: " + navDropdowns.length);
    // navDropdowns.forEach(clip);
}

// Add onmouseover event to item
function addHoverEvent(item) {
    item.setAttribute('onmouseover', 'clip(this)');
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
