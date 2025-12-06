import React, { useEffect } from "react";
import "./TimerThree.css";

function TimerThree({ hours, minutes, second }) {
  useEffect(() => {
    time_3(hours, "hours");
    time_3(minutes, "minutes");
    time_3(second, "seconds");
  });
  const time_3 = (type, group) => {
    var t = type.toString().split("");
    if (t.length < 2) t.unshift("0");
    var f = [".first", ".second"];
    for (let i in f) {
      document.querySelector(
        `.${group}-group ${f[i]} .number-grp-wrp`
      ).style = `transform:translateY(-${t[i]}0%)`;
    }
  };
  return (
    <>
      <div className="timer clock">
        <div className="hours-group clock-display-grp">
          <div className="first number-grp">
            <div className="number-grp-wrp">
              <div className="num num-0">
                <p>0</p>
              </div>
              <div className="num num-1">
                <p>1</p>
              </div>
              <div className="num num-2">
                <p>2</p>
              </div>
              <div className="num num-3">
                <p>3</p>
              </div>
              <div className="num num-4">
                <p>4</p>
              </div>
              <div className="num num-5">
                <p>5</p>
              </div>
              <div className="num num-6">
                <p>6</p>
              </div>
              <div className="num num-7">
                <p>7</p>
              </div>
              <div className="num num-8">
                <p>8</p>
              </div>
              <div className="num num-9">
                <p>9</p>
              </div>
            </div>
          </div>
          <div className="second number-grp">
            <div className="number-grp-wrp">
              <div className="num num-0">
                <p>0</p>
              </div>
              <div className="num num-1">
                <p>1</p>
              </div>
              <div className="num num-2">
                <p>2</p>
              </div>
              <div className="num num-3">
                <p>3</p>
              </div>
              <div className="num num-4">
                <p>4</p>
              </div>
              <div className="num num-5">
                <p>5</p>
              </div>
              <div className="num num-6">
                <p>6</p>
              </div>
              <div className="num num-7">
                <p>7</p>
              </div>
              <div className="num num-8">
                <p>8</p>
              </div>
              <div className="num num-9">
                <p>9</p>
              </div>
            </div>
          </div>
        </div>
        <div className="clock-separator">
          <p>:</p>
        </div>
        <div className="minutes-group clock-display-grp">
          <div className="first number-grp">
            <div className="number-grp-wrp">
              <div className="num num-0">
                <p>0</p>
              </div>
              <div className="num num-1">
                <p>1</p>
              </div>
              <div className="num num-2">
                <p>2</p>
              </div>
              <div className="num num-3">
                <p>3</p>
              </div>
              <div className="num num-4">
                <p>4</p>
              </div>
              <div className="num num-5">
                <p>5</p>
              </div>
              <div className="num num-6">
                <p>6</p>
              </div>
              <div className="num num-7">
                <p>7</p>
              </div>
              <div className="num num-8">
                <p>8</p>
              </div>
              <div className="num num-9">
                <p>9</p>
              </div>
            </div>
          </div>
          <div className="second number-grp">
            <div className="number-grp-wrp">
              <div className="num num-0">
                <p>0</p>
              </div>
              <div className="num num-1">
                <p>1</p>
              </div>
              <div className="num num-2">
                <p>2</p>
              </div>
              <div className="num num-3">
                <p>3</p>
              </div>
              <div className="num num-4">
                <p>4</p>
              </div>
              <div className="num num-5">
                <p>5</p>
              </div>
              <div className="num num-6">
                <p>6</p>
              </div>
              <div className="num num-7">
                <p>7</p>
              </div>
              <div className="num num-8">
                <p>8</p>
              </div>
              <div className="num num-9">
                <p>9</p>
              </div>
            </div>
          </div>
        </div>
        <div className="clock-separator">
          <p>:</p>
        </div>
        <div className="seconds-group clock-display-grp">
          <div className="first number-grp">
            <div className="number-grp-wrp">
              <div className="num num-0">
                <p>0</p>
              </div>
              <div className="num num-1">
                <p>1</p>
              </div>
              <div className="num num-2">
                <p>2</p>
              </div>
              <div className="num num-3">
                <p>3</p>
              </div>
              <div className="num num-4">
                <p>4</p>
              </div>
              <div className="num num-5">
                <p>5</p>
              </div>
              <div className="num num-6">
                <p>6</p>
              </div>
              <div className="num num-7">
                <p>7</p>
              </div>
              <div className="num num-8">
                <p>8</p>
              </div>
              <div className="num num-9">
                <p>9</p>
              </div>
            </div>
          </div>
          <div className="second number-grp">
            <div className="number-grp-wrp">
              <div className="num num-0">
                <p>0</p>
              </div>
              <div className="num num-1">
                <p>1</p>
              </div>
              <div className="num num-2">
                <p>2</p>
              </div>
              <div className="num num-3">
                <p>3</p>
              </div>
              <div className="num num-4">
                <p>4</p>
              </div>
              <div className="num num-5">
                <p>5</p>
              </div>
              <div className="num num-6">
                <p>6</p>
              </div>
              <div className="num num-7">
                <p>7</p>
              </div>
              <div className="num num-8">
                <p>8</p>
              </div>
              <div className="num num-9">
                <p>9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimerThree;
