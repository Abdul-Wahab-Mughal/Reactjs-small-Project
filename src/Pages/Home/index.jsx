import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  const navigate = useNavigate();

  const homelist = useRef();

  useGSAP(() => {
    gsap.from(".card ", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.25,
    });
    gsap.to(".card ", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.25,
    });
  });

  return (
    <>
      <header className="p-0 m-0 py-10 text-center uppercase font-bold text-5xl">
        <h1>React Project</h1>
      </header>
      <div ref={homelist} className="flex gap-5 m-10">
        <button
          className="card border-2 border-black bg-gray-200 text-4xl cursor-pointer rounded-3xl p-5"
          onClick={() => navigate("Todo-list")}
        >
          Todo List
        </button>
        <button
          className="card border-2 border-black bg-gray-200 text-4xl cursor-pointer rounded-3xl p-5"
          onClick={() => navigate("Calculator")}
        >
          Calculator
        </button>
        <button
          className="card border-2 border-black bg-gray-200 text-4xl cursor-pointer rounded-3xl p-5"
          onClick={() => navigate("Kit Gaming")}
        >
          Kit Gaming
        </button>
      </div>
    </>
  );
}
