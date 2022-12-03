"use strict";

// Enable videos on the main page to play automatically on mouse over, stop and resume on mouse out.
const videos = document.getElementsByClassName("videos index-page"); // Only for index page's videos

for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener('mouseover', function () { // div tag
        this.children[0].play();                          // play video tag
    });

    videos[i].addEventListener('mouseout', function () {
        this.children[0].pause();         // stop playing when mouse is not hovering over
        this.children[0].currentTime = 0; // resume video track time
    });
}


// Pause the rolling banner animation when mouse over, continue to run while the mouse is out.
const rollingBanner = document.getElementById('rollingBanner');

rollingBanner.addEventListener('mouseover', function() {
    rollingBanner.firstElementChild.style.animationPlayState = 'paused'; // pause animation
    rollingBanner.style.cursor = "pointer";
})

rollingBanner.addEventListener('mouseout', function() {
    rollingBanner.firstElementChild.style.animationPlayState = 'running'; // run animation
})