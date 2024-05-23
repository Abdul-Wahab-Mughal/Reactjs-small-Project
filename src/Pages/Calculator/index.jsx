import React, { useRef, useState } from "react";
import Button from "./Component/Button";
import Screen from "./Component/Screen";
import CalProvider from "./CalContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

function Calculator() {
  const [theme, setTheme] = useState(false);

  const btn = [
    ["AC", "DE", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

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
      <div ref={container} className="bg-gray-100 h-screen w-full">
        <div className="mx-auto max-w-screen-sm px-32 pb-5 relative">
          <header className="todo p-0 m-0 py-10 text-center uppercase font-bold text-5xl">
            <h1>calculator</h1>
          </header>
          <button
            onClick={() => setTheme(!theme)}
            className="absolute top-24 end-0 border-2 border-black px-5 rounded-full m-1 mx-32"
          >
            {theme ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>

          <CalProvider>
            <section className="allset p-5 border-2 shadow-lg rounded-md">
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
    </>
  );
}

export default Calculator;
