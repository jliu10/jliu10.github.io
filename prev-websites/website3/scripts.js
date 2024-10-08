var music = document.getElementById("music");
const playlist = ["PinkPantheress-Whisker", "PinkPantheress-Its_fine", "PinkPantheress-Your_eyes", "Aventura-Mi_Corazoncito"];
var song = -1;
var iPodImage = document.getElementById("ipod-image");
var musicSource = document.getElementById("music-source");
var projectsWindow = document.getElementById("projects");
var jobsWindow = document.getElementById("jobs");
var internshipsWindow = document.getElementById("internships");
var outsideWindow = document.getElementById("outside-window");
var iPodImageText = iPodImage.firstElementChild;
var iPodInterval = setInterval(blinkIPodText, 100);

function mod(n, m) {
    return ((n % m) + m) % m;
}

function toggleMusic() {
    clearInterval(iPodInterval);
    console.log("Interval cleared");
    iPodImageText.style.opacity = 0;
    if (music.paused) {
        if (song == -1) {
            song = 0;
            iPodImage.style.backgroundImage = `url(playlist/${playlist[song]}.jpg)`;
        }
        music.play();
    } else {
        music.pause();
    }
}

function nextSong() {
    song = mod( (song + 1), playlist.length);
    console.log(song);
    musicSource.src = `playlist/${playlist[song]}.mp3`;
    iPodImage.style.backgroundImage = `url(playlist/${playlist[song]}.jpg)`;
    music.currentTime = 0;
    music.load();
    music.play();
}

function prevSong() {
    song = mod( (song - 1), playlist.length);
    console.log(song);
    musicSource.src = `playlist/${playlist[song]}.mp3`;
    iPodImage.style.backgroundImage = `url(playlist/${playlist[song]}.jpg)`;
    music.currentTime = 0;
    music.load();
    music.play();
}

music.addEventListener("ended", nextSong);

function displayProjects() {
    console.log("Displaying Projects");
    outsideWindow.style.display = 'block';
    projectsWindow.style.display = 'block';
}

function displayInternships() {
    console.log("Displaying Internships");
    outsideWindow.style.display = 'block';
    internshipsWindow.style.display = 'block';
}

function displayJobs() {
    console.log("Displaying Jobs");
    outsideWindow.style.display = 'block';
    jobsWindow.style.display = 'block';
}

function exitWindow() {
    console.log("Exiting window");
    outsideWindow.style.display = 'none';
    projectsWindow.style.display = 'none';
    internshipsWindow.style.display = 'none';
    jobsWindow.style.display = 'none';
}

function blinkIPodText() {
    // console.log("Blink");
    // iPodImageText.style.opacity = (iPodImageText.style.opacity == 1) ? 0 : 1;
    // val = -0.1;
    if (iPodImageText.style.opacity == 1) {
        val = -0.1;
        // console.log(`Set val to ${val} (decreasing)`)
    }
    if (iPodImageText.style.opacity <= 0.1) {
        val = 0.1;
        // console.log(`Set val to ${val} (increasing)`)
    }
    // console.log(`Now will try to add ${parseFloat(iPodImageText.style.opacity)} with ${val}`)
    iPodImageText.style.opacity = (parseFloat(iPodImageText.style.opacity) + val);
}