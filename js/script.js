"use strict";

// Only execute if tablet mode and desktop mode
if (window.innerWidth > 800) {
  // Enable videos on the main page to play automatically on mouse over, stop and resume on mouse out.
  const videos = document.getElementsByClassName("videos index-page"); // Only for index page's videos

  for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener("mouseover", function () {

      this.children[0].play(); // play the video tag

      // const playPromise = this.children[0].play(); // play the video tag
      // if (playPromise !== null) {
      //   playPromise.catch(() => {
      //     this.children[0].play();
      //   });
      // }
      
    });

    videos[i].addEventListener("mouseout", function () {
      this.children[0].pause(); // stop playing when mouse is not hovering over
      this.children[0].currentTime = 0; // resume video track time
    });
  }

  // Pause the rolling banner when mouse is hovering over, resume to run while the mouse is out.
  const rollingBanner = document.getElementById("rollingBanner");

  rollingBanner.addEventListener("mouseover", function () {
    rollingBanner.firstElementChild.style.animationPlayState = "paused"; // pause animation
    rollingBanner.style.cursor = "pointer";
  });

  rollingBanner.addEventListener("mouseout", function () {
    rollingBanner.firstElementChild.style.animationPlayState = "running"; // run animation
  });
}
