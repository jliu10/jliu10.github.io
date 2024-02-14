var cursorFollow;
var mouseX = 0;
var mouseY = 0;

function photoInitialize() {
    console.log("script.js is running");
    cursorFollow = document.getElementById('cursorFollow');
    var images = document.querySelectorAll('div.column > img');
    images.forEach(makePhoto);
}

// Make photos hoverable
function makePhoto(item) {
    item.setAttribute('onmouseover','showImageName(this)');
    item.setAttribute('onmouseout', 'hideImageName(this)');
    item.setAttribute('loading','lazy');
}

function updateMousePos(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    cursorFollow.style.left = mouseX + "px";
    cursorFollow.style.top = mouseY + "px";
}
// Show photo name when hovered over
function showImageName(x) {
    let text = String(x.src);
    console.log(text);
    let index = text.lastIndexOf('/');
    text = text.substring(index + 1);
    index = text.lastIndexOf('.');
    text = text.substring(0, index);
    if(text.includes('%20')) { // replace spaces with actual spaces
        let arr = text.split('%20');
        text = arr.join(' ');
    }
    cursorFollow.innerHTML = text;

    x = $(x);
    let offset = x.offset();
    let width = x.width();
    let height = x.height();
    let centerX = offset.left + width / 2;
    let centerY = offset.top + height / 2;
    // cursorFollow.style.left = centerX + "px";
    // cursorFollow.style.top = centerY + "px";
    cursorFollow.style.display = "table-cell";
}
// Hide photo name when unhovered
function hideImageName(x) {
    cursorFollow.style.display = "none";
}
