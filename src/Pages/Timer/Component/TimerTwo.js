import React, { useEffect } from "react";
import "./TimerTwo.css";

function TimerTwo({ hours, minutes, second, fs }) {
  useEffect(() => {
    var timer = JSON.parse(localStorage.getItem("timer"));

    // if start one time work
    if (fs === 0) {
      var hours_set = document.querySelector(".hours .figure");
      var h_s = hours < 10 ? "0" + hours : hours;
      hours_set.children[0].innerHTML = h_s;
      hours_set.children[1].children[0].innerHTML = h_s;

      var min_set = document.querySelector(".min .figure");
      var m_s = minutes < 10 ? "0" + minutes : minutes;
      min_set.children[0].innerHTML = m_s;
      min_set.children[1].children[0].innerHTML = m_s;
    }

    // hours
    // console.log(timer["hours"], hours);
    if (timer["hours"] !== hours) {
      var hoursset = document.querySelector(".hours .figure");
      [0, 2, 3].forEach((i) => hoursset.children[i].classList.remove("tflip"));

      hoursset.children[2].innerHTML = hours < 10 ? "0" + hours : hours;
      hoursset.children[3].children[0].innerHTML =
        hours < 10 ? "0" + hours : hours;

      var hplus = hours + 1;
      var hs = hplus < 10 ? "0" + hplus : hplus;
      hoursset.children[0].innerHTML = hs;
      hoursset.children[1].children[0].innerHTML = hs;
      setTimeout(() => {
        [0, 2, 3].forEach((i) => hoursset.children[i].classList.add("tflip"));
      }, 100);
    }

    //  minutes
    // console.log(timer["minutes"], minutes);
    if (timer["minutes"] !== minutes) {
      var minset = document.querySelector(".min .figure");
      [0, 2, 3].forEach((i) => minset.children[i].classList.remove("tflip"));

      minset.children[2].innerHTML = minutes < 10 ? "0" + minutes : minutes;
      minset.children[3].children[0].innerHTML =
        minutes < 10 ? "0" + minutes : minutes;

      var mplus = minutes + 1;
      var ms = mplus < 10 ? "0" + mplus : mplus;
      minset.children[0].innerHTML = ms;
      minset.children[1].children[0].innerHTML = ms;
      setTimeout(() => {
        [0, 2, 3].forEach((i) => minset.children[i].classList.add("tflip"));
      }, 100);
    }

    // second
    // console.log(timer["second"], second);
    {
      var secset = document.querySelector(".sec .figure");
      [0, 2, 3].forEach((i) => secset.children[i].classList.remove("tflip"));

      secset.children[2].innerHTML = second < 10 ? "0" + second : second;
      secset.children[3].children[0].innerHTML =
        second < 10 ? "0" + second : second;

      var splus = second + 1;
      var ss = splus < 10 ? "0" + splus : splus;
      secset.children[0].innerHTML = ss;
      secset.children[1].children[0].innerHTML = ss;
      setTimeout(() => {
        [0, 2, 3].forEach((i) => secset.children[i].classList.add("tflip"));
      }, 100);
    }
  });

  return (
    <>
      <div className="countdown">
        <div className="bloc-time hours">
          <span className="count-title text-black dark:text-white">Hours</span>

          <div className="figure">
            <span className="top">00</span>
            <span className="top-back">
              <span>00</span>
            </span>
            <span className="bottom">00</span>
            <span className="bottom-back">
              <span>00</span>
            </span>
          </div>
        </div>

        <div className="bloc-time min">
          <span className="count-title text-black dark:text-white">
            Minutes
          </span>

          <div className="figure">
            <span className="top">00</span>
            <span className="top-back">
              <span>00</span>
            </span>
            <span className="bottom">00</span>
            <span className="bottom-back">
              <span>00</span>
            </span>
          </div>
        </div>

        <div className="bloc-time sec">
          <span className="count-title text-black dark:text-white">
            Seconds
          </span>

          <div className="figure">
            <span className="top tflips">00</span>
            <span className="top-back">
              <span>00</span>
            </span>
            <span className="bottom tflips">14</span>
            <span className="bottom-back tflips">
              <span>14</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimerTwo;
