"use strict";

// Enable videos on the main page to play automatically on mouse over, stop and resume on mouse out.
const videos = document.getElementsByTagName('video');

for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener('mouseover', function () {
        this.play();    // play when mouse is hovering over
    });
    videos[i].addEventListener('mouseout', function () {
        this.pause();         // stop playing when mouse is not hovering over
        this.currentTime = 0; // resume video track time
    });
}

