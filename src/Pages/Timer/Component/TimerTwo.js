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

    updateFlip("hours", timer["hours"], hours);
    updateFlip("min", timer["minutes"], minutes);
    updateFlip("sec", timer["second"], second);
  });

  function updateFlip(type, oldVal, newVal) {
    if (oldVal === newVal) return;

    var set = document.querySelector(`.${type} .figure`);
    [0, 2, 3].forEach((i) => set.children[i].classList.remove("tflip"));

    set.children[2].innerHTML = newVal < 10 ? "0" + newVal : newVal;
    set.children[3].children[0].innerHTML = newVal < 10 ? "0" + newVal : newVal;

    var plus = newVal + 1;
    var formatted = plus < 10 ? "0" + plus : plus;

    set.children[0].innerHTML = formatted;
    set.children[1].children[0].innerHTML = formatted;

    setTimeout(() => {
      [0, 2, 3].forEach((i) => set.children[i].classList.add("tflip"));
    }, 100);
  }

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
