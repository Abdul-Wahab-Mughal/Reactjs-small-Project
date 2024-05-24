import React, { useEffect, useRef, useState } from "react";
import Button from "./Component/Button";
import Screen from "./Component/Screen";
import CalProvider from "./CalContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

function Calculator() {
  const [theme, setTheme] = useState(
    localStorage.getItem("calculatortheme")
      ? localStorage.getItem("calculatortheme")
      : "false"
  );

  useEffect(() => {
    if (theme === "true")
      document.getElementById("theme").classList.add("dark");
    else document.getElementById("theme").classList.remove("dark");
  }, [theme]);

  const btn = [
    ["AC", "DE", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  const handleTheme = () => {
    localStorage.setItem(
      "calculatortheme",
      theme === "true" ? "false" : "true"
    );
    setTheme(theme === "true" ? "false" : "true");
  };

  const container = useRef();

  useGSAP(() => {
    gsap.from(".allset", {
      y: 250,
      opacity: 0,
      duration: 0.5,
      stagger: 0.25,
    });
    gsap.to(".allset", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.25,
    });
  });

  return (
    <>
      <div id="theme">
        <div
          ref={container}
          className="w-full min-h-screen bg-gray-100 dark:bg-gray-800"
        >
          <div className="mx-auto max-w-screen-sm px-0 sm:px-32 pb-5 relative">
            <header className="todo p-0 m-0 py-10 text-center uppercase font-bold text-5xl dark:text-white">
              <h1>calculator</h1>
            </header>
            <button
              onClick={handleTheme}
              className="absolute top-24 end-0 border-2 border-black px-5 rounded-full m-1 mx-32 dark:border-white dark:text-white"
            >
              {theme === "true" ? (
                <FontAwesomeIcon icon={faMoon} />
              ) : (
                <FontAwesomeIcon icon={faSun} />
              )}
            </button>

            <CalProvider>
              <section className="allset p-5 border-2 shadow-lg rounded-3xl dark:shadow-white">
                <Screen />

                <div className="grid grid-cols-4 gap-4">
                  {btn.flat().map((btn, i) => (
                    <Button value={btn} keys={i} />
                  ))}
                </div>
              </section>
            </CalProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
