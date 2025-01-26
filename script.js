console.log("script.js running");
const panel1 = document.getElementById("panel1");
const panel2 = document.getElementById("panel2");
const panel3 = document.getElementById("panel3");
const threefold = document.querySelector(".threefold");
const sidePanels = document.querySelectorAll(".side-panel");
let textCreative = document.getElementById("creative");
const white = "#F0EEF1";
const black = "#2B2B2B";
let gallery = document.getElementById("gallery");
const buttonMap = {};
const buttons = [];
const carousels = [];
let x = document.getElementById("x");
let imageExpansion = document.getElementById("img-expansion");
const imageIdToText = {
    "Exovite-Thumb-8" : "Back in the day (maybe still today, I wouldn't know), some Roblox players would have a game just to put a personalized thumbnail on. This is my favorite self thumbnail, and one of my favorite graphic designs ever.",
    "Freeman-Alley-p1" : "A recent graphic I did. One day after a photoshoot with a friend, she showed me a graphic she made, so you know I had to one up her.",
    "Freeman-Alley-p2-cybershot" : "Same story as the previous one.",
    "website-3" : "One of the more experimental websites I've made. It features a working music player. Not my most recent, but one of my coolest works.",
    "website-4" : "The last website I made. I wanted to try something more simple but with a solid and interesting theme, with cryptic and gothic vibes.",
    "arnav-website" : "A design I made for my Physics + Math major friend.",
    "9host_tech-startup" : "The starting screen of a concept design I made, inspired by the Nissan 300ZX dash and Seton Kim's iconic Xbox UI design. I could definitely implement it but I haven't felt like it yet. Also my first Figma project.",
    "website-2" : "Minimalist and video game-themed.",
    "website-1" : "My first personal website that I made in college. I had a website in high school too, but it seems to be lost due to my high school Google account being deleted.",
    "ghostfreak-timb-l" : "Left Timberland boot drawn on with Sharpie pens. Started off with a bandana design, then pivoted to a punk theme along with Ghostfreak from Ben 10.",
    "ghostfreak-timb-r" : "Right Timberland boot drawn on with Sharpie pens. Started off with a really shitty Ghostfreak theme which was basically random lines and eyes. I fixed it by adding shit in the spaces.",
    "ghillie-shirt-b" : "A shirt I designed (modified) by hand-stitching bandanas on. I was inspired by ghillie suits and wanted a street + gothic vibe. The cut ends are intended to resemble a ghost. Also my first sewing project.",
    "echoes-of-silence" : "'Echoes of silence', 2025-Jan-15. My first time using a stump.",
    "emo" : "2024-Sep-20",
    "loneliness-2" : "'Loneliness 2', 2023-Nov-03",
    "dream-2023-09-02" : "'Dream 2023-09-02', 2023-Oct-30",
    "lets-leave" : "'Let's leave.', 2023-Oct-14",
    "tides" : "A design for my school's Asian magazine club Generasian. It's a cover for a writer's piece.",
    "hayley" : "Also for Generasian and the same writer. But this one didn't end up in the magazine."
};
const imageIdToLinks = {
    "website-1" : "prev-websites/website1/index.html",
    "website-2" : "prev-websites/website2/index.html",
    "website-3" : "prev-websites/website3/index.html",
    "website-4" : "prev-websites/website4/index.html",
};
let visit = document.getElementById("visit");
const body = document.querySelector("body");
let downArrows = document.getElementById("down-arrows");

window.addEventListener('load', function () {
    console.log("Loaded");
    sizeFuncs();
    wireNavButtons();
    wireImageExpansions();
    adjustVh();
  })

window.addEventListener('resize', function () {
    console.log("Resized");
    sizeFuncs();
    adjustVh();
  })

if (x) {
    x.addEventListener('click', function () {
        exitExpansion();
    })
}

function sizeFuncs() {
    setThreefoldHeight();
    alignPanelImgs();
    adjustPanel1Height();
}

function setThreefoldHeight() {
    if (!(panel3 && threefold)) return;
    if (window.innerHeight < 726) return;
    threefold.style.height = window.innerHeight;
}

function alignVerticalText() {
    if (!(panel1 || panel3 || sidePanels)) return;

    for (const panel of sidePanels) {
        panel.style.alignItems = "center";
    }
    
    if (window.innerWidth <= 910) {
        for (const panel of sidePanels) {
            for (const text of panel.children) {
                text.style.top = "0px";
            }
        }
        return;
    }
    let vertTexts = [];
    let minYPos = Infinity;
    for (const panel of sidePanels) {
        for (const text of panel.children) {
            vertTexts.push(text);
            text.style.top = "0px";
            yPos = text.getBoundingClientRect().top
            if (yPos < minYPos) minYPos = yPos;
        }
    }

    for (const panel of sidePanels) {
        panel.style.alignItems = "normal";
    }
    for (const text of vertTexts) {
        if (minYPos >= 0) {
            text.style.top = `${minYPos}px`;
        }
    }
}

function alignPanelImgs() {
    if (!panel2) return;
    const imgs = panel2.children;
    if (window.innerWidth <= 572) {
        imgs[0].style.marginTop = 0;
        imgs[imgs.length - 1].style.marginBottom = 0;
        return;
    }
    const topOffset = (window.innerHeight - imgs[0].height) / 2;
    const botOffset = (window.innerHeight - imgs[imgs.length - 1].height) / 2;
    if (topOffset >= 0) {
        imgs[0].style.marginTop = `${topOffset}px`;
        imgs[imgs.length - 1].style.marginBottom = `${botOffset}px`;
    } else {
        imgs[0].style.marginTop = "0px";
        imgs[0].style.marginTop = "0px";
    }
}

function adjustPanel1Height() {
    if (window.innerWidth > 910) {
        panel1.style.height = `${panel3.offsetHeight}px`;
        return;
    }
    const newHeight = window.innerHeight - panel3.offsetHeight;
    if (newHeight >= 480) panel1.style.height = `${newHeight}px`;
}

function wireNavButtons() {
    if (gallery) {
        for (const button of gallery.querySelector("nav").children) {
            buttons.push(button);
            button.addEventListener("click", () => displayCarousel(button));
        }
        for (const carousel of document.getElementById("carousel").children) {
            carousels.push(carousel);
        }
        for (let i = 0; i < buttons.length; i++) {
            buttonMap[buttons[i].id] = carousels[i];
        }
    }
}

function displayCarousel(button) {
    for (const button_ of buttons) {
        button_.style.fontWeight = "normal";
    }
    for (const carousel of carousels) {
        carousel.style.display = "none";
    }
    buttonMap[button.id].style.display = "flex";
    document.getElementById("carousel").scrollLeft = 0;
    button.style.fontWeight = 1000;
}

function exitExpansion() {
    imageExpansion.style.visibility = "hidden";
    body.style.overflow = "auto";
    visit.style.visibility = "hidden";
}

function expandImage(id) {
    if (!imageExpansion) return;
    console.log(`Clicked with id = ${id}`);
    // Set text
    let text = imageExpansion.querySelector("p").childNodes[0];
    text.textContent = imageIdToText[id];
    // Set img
    let img = imageExpansion.querySelector("img");
    let origImg = document.getElementById(id).querySelector("img");
    img.src = origImg.src;
    console.log(origImg.src);
    if (!(id in imageIdToLinks)) {
        if (!visit) return;
        console.log("Not a website");
        visit.style.visibility = "hidden";
    } else {
        // Show and set link
        visit.style.visibility = "visible";
        visit.href = imageIdToLinks[id];
    }
    imageExpansion.style.visibility = "visible";
    // imageExpansion.style.display = "flex";
    body.style.overflow = "hidden";
}

function wireImageExpansions() {
    if (!gallery) return;
    for (const imageId of Object.keys(imageIdToText)) {
        let imageContainer = document.getElementById(imageId);
        if (imageContainer) {
            console.log(`Wiring id = ${imageId}`);
            imageContainer.addEventListener("click", () => expandImage(imageId));
        }
    }
}

function adjustVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}