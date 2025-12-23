import React, { useRef } from "react";
import Button from "./Component/Button";
import Screen from "./Component/Screen";
import CalProvider from "./CalContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Main from "../../Component/Main";

function Calculator() {
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
      <Main title={"Calculator"} ref={container}>
        <CalProvider>
          <section className="allset p-5 border-2 shadow-lg rounded-3xl dark:shadow-white">
            <Screen key={""} />

            <div className="grid grid-cols-4 gap-4">
              {btn.flat().map((btn, i) => (
                <Button value={btn} keys={i} />
              ))}
            </div>
          </section>
        </CalProvider>
      </Main>
    </>
  );
}

export default Calculator;
