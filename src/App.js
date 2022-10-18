import { Fragment } from "react";
import "./App.css";
import React from "react";
import SonicPng from "./assets/sonic.png";
import Grooves from "./assets/Groove.mp3";
//  A function that starts when the website loads
window.addEventListener("load", () => {
  //Adds   timer for 1.25 seconds, and plys  function "applyAnimation"
  setTimeout(applyAnimation, 1250);
  //Adds timer for 2.25 seconds, and executes function "finishapplyAnimation"
  setTimeout(finishApplyAnimation, 2250);
  // varible stores as to not retype the samething
  let getDiv = document.getElementsByTagName("div");
  //console logs the above variable
  console.log(getDiv);

  function applyAnimation() {
    // A for loop tht cycles through all divs EXCEPT ROOT
    for (let i = 1; i < getDiv.length; i++) {
      // changes div style to animation: 1s ease normal none running fadein
      getDiv[i].style.setProperty(
        "animation",
        "1s ease 1 normal none running fadein"
      );
      // Gets any <img> elements and stores it into the variable 'img' as to not repeat document.querySelector
      let img = document.querySelector("img");
      // 'animation: value' Changes the value to whatever is typed after the comma
      img.style.setProperty(
        "animation",
        "1s ease 1 normal none running fadein"
        //would change the style of 'img' -> animation: 6.2831853072s ease infinite normal none running movement  <-(Short hand)
      );
    }
  }

  /**Purpose of the functioin is to give the divs a fade in animtion AFTER the
    text moving animation
  */

  /**
   * Purpose of the function is to finish the fade in animation by
   * keeping the text with the opacity of 1
   *
   * The previous function plays the animation but the text then goes back to hidden
   *
   * This function is for it to permanently be visible after the fade in animation
   */
  function finishApplyAnimation() {
    // foor loop cycles through all divs EXCEPT ROOT
    for (let i = 1; i < getDiv.length; i++) {
      //sets div style to opacity: 1
      getDiv[i].style.setProperty("opacity", "1");
    }
    // Gets any <img> elements and stores it into the variable 'img' as to not repeat document.querySelector
    let img = document.querySelector("img");
    // 'animation: value' Changes the value to whatever is typed after the comma
    img.style.setProperty(
      "opacity",
      "1"
      //would change the style of 'img' -> opacity:1
    );
  }
});

function Title() {
  return (
    <html>
      <h1 class="title"> 15.10.22 Tech Challenge</h1>
    </html>
  );
}

export default Title;

function Creeds() {
  return (
    <Fragment>
      <p class="mindset blue"> I believe nothing is hard just a lot of work</p>
      <p class="fuel yellow">
        {" "}
        I will strive to know myself better and seek self-improvement
      </p>
      <p class="fire orange">
        {" "}
        I believe in the habit of doing more than asked for
      </p>
    </Fragment>
  );
}
export { Creeds };

function Descriptions() {
  return (
    <Fragment>
      <div class="intro blue">
        <div class="descript blue">
          <strong>The Mindset:</strong>
          <div class="blue small">
            I've practiced this creed by having Grit. An example would be
            academics, I've chosen more difficult classes and have even had a
            bad grad or two for a period amount of time but with this mindset I
            was able to improve them. This leadership creed carried me during
            SEALS 2021-2022.
          </div>
        </div>
      </div>
      <div class="intro yellow">
        <div class="descript yellow">
          <strong>The Fuel:</strong>
          <div class="yellow small">
            I've practiced this leadership creed after the SEALS program. I've
            practiced this leadership creed by discovering other passions mine
            and journaling my life to record my experiences. As for
            self-imporvement: Learning the mistakes of others and avoiding the
            cost of my own.
          </div>
        </div>
      </div>
      <div class="intro orange" id="1">
        <div class="descript orange">
          <strong>The Fire:</strong>
          <div class="orange small">
            I've started practicing this leadership from the beginning of my
            Junior year. This one isn't fully cultivated as I've only gotten
            ahead in my studies and trying to self-learn some subjects but I
            want to fully develop this creed into a habit during this SEALS
            program.
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export { Descriptions };

function Sonic() {
  return (
    <img
      class="center"
      // src="https://m.media-amazon.com/images/I/61LrppLm3BL._SY580_.jpg"
      src={SonicPng}
      alt="Sonic"
    ></img>
  );
}

export { Sonic };

function Buttons() {
  function play() {
    // Gets any <img> elements and stores it into the variable 'img' as to not repeat document.querySelector
    let img = document.querySelector("img");
    // 'animation: value' Changes the value to whatever is typed after the comma
    img.style.setProperty(
      "animation",
      "0.30s ease infinite normal none running rotate"
      //would change the style of 'img' -> animation: 6.2831853072s ease infinite normal none running movement  <-(Short hand)
    );
  }

  // This function is what stops the animation when the button 'stop' is clicked
  function stop() {
    // Gets any <img> elements and stores it into the variable 'img' as to not repeat document.querySelector
    let img = document.querySelector("img");
    // 'animation: value' Changes the value to whatever is typed after the comma
    img.style.setProperty(
      "animation",
      "1s ease 1 normal none running invrotate"
    );
    //would change the style of 'img' -> animation: 0s ease 1 normal none running stop  <-(Short hand)
  }
  return (
    <Fragment>
      <button id="btn-left" onClick={play}>
        Play!
      </button>
      <button id="btn-right" onClick={stop}>
        Stop!
      </button>
      <script src="buttons.js"></script>
    </Fragment>
  );
}
export { Buttons };

function Groove() {
  return (
    <iframe
      title="Нет!"
      src={Grooves}
      height="0"
      width="0"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
}
export { Groove };
