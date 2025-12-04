import React, { useCallback, useEffect, useState } from "react";
import Header from "../../Component/Header";
import Theme from "../../Component/Theme";
import "./style.css";
import TimerOne from "./Component/TimerOne";
import TimerTwo from "./Component/TimerTwo";
import TimerThree from "./Component/TimerThree";

function Timer() {
  const [isStart, setisStart] = useState(false);
  const [isPause, setisPause] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [second, setSecond] = useState(0);
  const [timerId, setTimerId] = useState(0);
  const [fs, setfs] = useState(0);

  const runTimer = useCallback(
    (sec, min, hr, tid) => {
      if (hr === 0 && min === 0 && sec === 0) {
        setHours(0);
        setMinutes(0);
        setSecond(0);
        clearInterval(tid);
      } else if (sec > 0) {
        setSecond((s) => s - 1);
      } else if (sec === 0 && min > 0) {
        setMinutes((m) => m - 1);
        setSecond(59);
      } else {
        setHours((h) => h - 1);
        setMinutes(59);
        setSecond(59);
      }

      var timer = { hours: hours, minutes: minutes, second: second };
      localStorage.setItem("timer", JSON.stringify(timer));
    },
    [hours, minutes, second]
  );

  useEffect(() => {
    if (!isStart) return;

    var timer = setInterval(() => {
      runTimer(second, minutes, hours, timer);
      setfs((fs) => fs + 1);
    }, 1000);
    setTimerId(timer);

    return () => clearInterval(timer);
  }, [isStart, hours, minutes, second, runTimer]);

  // console.log(hours, minutes, second);
  const start = () => {
    if (minutes && !second) {
      setSecond(0);
    } else if (hours && !minutes && !second) {
      setMinutes(0);
      setSecond(0);
    }
    if (second || minutes || hours) setisStart(true);
    var timer = { hours: hours, minutes: minutes, second: second };
    localStorage.setItem("timer", JSON.stringify(timer));
    localStorage.setItem("resettimer", JSON.stringify(timer));
    setfs(0);
  };
  const restart = () => {
    var timer = JSON.parse(localStorage.getItem("resettimer"));
    setHours(timer["hours"]);
    setMinutes(timer["minutes"]);
    setSecond(timer["second"]);
    timer = { hours: hours, minutes: minutes, second: second };
    localStorage.setItem("timer", JSON.stringify(timer));
  };
  const pause = () => {
    setisPause(true);
    clearInterval(timerId);
  };
  const resume = () => {
    setisPause(false);
    runTimer(second, minutes, hours);
  };
  const stop = () => {
    setHours(0);
    setMinutes(0);
    setSecond(0);
    setisStart(false);
  };

  const handelInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    if (id === "HH") setHours(value);
    if (id === "MM") setMinutes(value);
    if (id === "SS") setSecond(value);
  };

  return (
    <>
      <div className="theme">
        <div className="dark:bg-gray-800 min-h-screen h-full overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:gap-10 items-center gap-0 mb-5 w-fit m-auto">
            <Header name={"Timer"} />
            <Theme />
          </div>
          {/* Input number */}
          <div className="min-h-[55em] h-screen flex flex-col gap-3 justify-center items-center overflow-hidden">
            {!isStart && (
              <div className="flex flex-col gap-10 items-center">
                <div className="text-[3em] flex gap-2 border-2 bg-slate-200 rounded-3xl overflow-hidden">
                  <input
                    type="text"
                    id="HH"
                    onChange={handelInput}
                    placeholder="HH"
                    maxLength="2"
                    className="w-[100px] bg-slate-200 focus:outline-none"
                  />
                  <span>:</span>
                  <input
                    type="text"
                    id="MM"
                    onChange={handelInput}
                    placeholder="MM"
                    maxLength="2"
                    className="w-[100px] bg-slate-200 focus:outline-none"
                  />
                  <span>:</span>
                  <input
                    type="text"
                    id="SS"
                    onChange={handelInput}
                    placeholder="SS"
                    maxLength="2"
                    className="w-[100px] bg-slate-200 focus:outline-none"
                  />
                </div>
                <div className="flex">
                  <button
                    className="border-2 border-black text-[2em] uppercase bg-green-500 rounded-3xl py-2 px-5 font-bold"
                    onClick={start}
                  >
                    Start
                  </button>
                </div>
              </div>
            )}
            {isStart && (
              <div className="flex flex-col gap-5 w-full">
                <div className="flex gap-5 w-fit m-auto">
                  <button
                    className="border-2 border-black text-[2em] uppercase bg-green-500 rounded-3xl py-2 px-5 font-bold"
                    onClick={restart}
                  >
                    Restart
                  </button>
                  {!isPause && (
                    <button
                      className="border-2 border-black text-[2em] uppercase bg-green-500 rounded-3xl py-2 px-5 font-bold"
                      onClick={pause}
                    >
                      Pause
                    </button>
                  )}
                  {isPause && (
                    <button
                      className="border-2 border-black text-[2em] uppercase bg-green-500 rounded-3xl py-2 px-5 font-bold"
                      onClick={resume}
                    >
                      Resume
                    </button>
                  )}
                  <button
                    className="border-2 border-black text-[2em] uppercase bg-green-500 rounded-3xl py-2 px-5 font-bold"
                    onClick={stop}
                  >
                    Stop
                  </button>
                </div>
                <div className="flex flex-col items-center gap-5">
                  <TimerOne hours={hours} minutes={minutes} second={second} />
                  <TimerTwo
                    hours={hours}
                    minutes={minutes}
                    second={second}
                    fs={fs}
                  />
                  <TimerThree hours={hours} minutes={minutes} second={second} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
