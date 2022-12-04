"use strict";

/* Handle the input from user and search on YouTube */
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.onclick = function() {
  let url = 'https://www.youtube.com/results?search_query=' + searchInput.value;
  window.open(url);
};


// Codes that only execute if tablet mode and desktop mode
if (window.innerWidth > 800) {

  /**** Handle Video tags interaction ****/

  const videos = document.getElementsByClassName("videos index-page");

  // Handle video play on mouse over,
  // for each video tag, add mouseout and mouseover events
  for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener("mouseover", function () {

      // Best practices for video.play() returning a promise
      const playPromise = this.children[0].play();
      if (playPromise !== undefined) {
        playPromise
          .then(function () {
            // Automatic playback started!
          })
          .catch(function (error) {
            // Automatic playback failed.
            // can let the console print out info why.
          });
      }
    });

    // handle video stop and resume event on mouse out
    videos[i].addEventListener("mouseout", function () {
      this.children[0].pause(); // stop playing when mouse is not hovering over
      this.children[0].currentTime = 0; // resume video track time
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
