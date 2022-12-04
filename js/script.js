"use strict";

// Only execute if tablet mode and desktop mode
if (window.innerWidth > 800) {

  /**** Handle Video tags interaction ****/
  const videos = document.getElementsByClassName("videos index-page");
  let isPlaying = false; // make sure pause() does not interupt play() request

  // handle video play on mouse over
  for (let i = 0; i < videos.length; i++) { // For each video tag
    videos[i].addEventListener("mouseover", function () {

      // get video status
      isPlaying =
        this.children[0].currentTime > 0 &&
        !this.children[0].paused &&
        !this.children[0].ended &&
        this.children[0].readyState > this.children[0].HAVE_CURRENT_DATA;

      // play video
      this.children[0].play(); 
    });

    // handle video stop and resume event on mouse out
    videos[i].addEventListener("mouseout", function () {
      if (isPlaying) {
        this.children[0].pause(); // stop playing when mouse is not hovering over
        this.children[0].currentTime = 0; // resume video track time
      }
    });
  }


  /**** Handle Rolling Banner interaction ****/
  const rollingBanner = document.getElementById("rollingBanner");

  rollingBanner.addEventListener("mouseover", function () {
    rollingBanner.firstElementChild.style.animationPlayState = "paused"; // pause animation
    rollingBanner.style.cursor = "pointer";
  });

  rollingBanner.addEventListener("mouseout", function () {
    rollingBanner.firstElementChild.style.animationPlayState = "running"; // run animation
  });


  /**** Handle Button backgroundImage interaction ****/
  const nav = document.getElementById("nav-container");

  // For Chest button
  const chestButton = document.getElementById("chest-button");
  chestButton.children[0].addEventListener("mouseover", function () {
    nav.style.backgroundImage = "url('images/chest.png')";
  });
  chestButton.children[0].addEventListener("mouseout", function () {
    nav.style.backgroundImage = null;
  });

  // For Legs button
  const legsButton = document.getElementById("legs-button");
  legsButton.children[0].addEventListener("mouseover", function () {
    nav.style.backgroundImage = "url('images/legs.png')";
  });
  legsButton.children[0].addEventListener("mouseout", function () {
    nav.style.backgroundImage = null;
  });

  // For Shoulders button
  const shouldersButton = document.getElementById("shoulders-button");
  shouldersButton.children[0].addEventListener("mouseover", function () {
    nav.style.backgroundImage = "url('images/shoulder.png')";
  });
  shouldersButton.children[0].addEventListener("mouseout", function () {
    nav.style.backgroundImage = null;
  });

  // For Back button
  const backButton = document.getElementById("back-button");
  backButton.children[0].addEventListener("mouseover", function () {
    nav.style.backgroundImage = "url('images/back.png')";
  });
  backButton.children[0].addEventListener("mouseout", function () {
    nav.style.backgroundImage = null;
  });
}
