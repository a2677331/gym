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


// Add button style on an active page
// const url = window.location.href;   // obtain url of current page
// const muscleName = url.split('/').at(-1).split('.')[0]; // get muscle name
// const button = document.getElementById(muscleName + "-button"); // get button elem
// button.firstElementChild.style.color = "#000";
// button.firstElementChild.style.backgroundColor = "#48f894";

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
//     // divs[0].style.color = "red";
//     if (event.matches) {
//         button.firstElementChild.style.color = "#000";
//         button.firstElementChild.style.backgroundColor = "#48f894";
//     } else {
//         button.firstElementChild.style.color = "#000";
//         button.firstElementChild.style.backgroundColor = "#48f894";
//     }

// });


// #legs-button > div {
//     color: yellow;
// }