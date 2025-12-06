import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Header from "../Component/Header";
import Theme from "../Component/Theme";
import Rptext from "../Component/Rptext";

export default function Home() {
  const homelist = useRef();
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [filters, setFilters] = useState([]);
  const scrollRef = useRef(null);
  const pos = useRef({ left: 0, x: 0, dragging: false });

  const startDrag = (e) => {
    pos.current = {
      left: scrollRef.current.scrollLeft,
      x: e.clientX,
      dragging: true,
    };
    scrollRef.current.style.cursor = "grabbing";
  };

  const stopDrag = () => {
    pos.current.dragging = false;
    scrollRef.current.style.cursor = "grab";
  };

  const onDrag = (e) => {
    if (!pos.current.dragging) return;
    const dx = e.clientX - pos.current.x;
    scrollRef.current.scrollLeft = pos.current.left - dx;
  };

  // AUTO READ FILTERS FROM HTML
  useEffect(() => {
    if (!homelist.current) return;

    // Get all children inside filter-container
    const filtersArray = Array.from(homelist.current.children)
      .map((el) => el.className.trim()) // read filter class
      .filter(Boolean); // remove empty ones

    // Optional: split multiple classes and get unique ones
    const uniqueFilters = [
      ...new Set(filtersArray.flatMap((f) => f.split(" "))),
    ];
    uniqueFilters.shift();

    setFilters(uniqueFilters.sort());
    // console.log("AUTO FILTER ARRAY:", uniqueFilters.sort());
  }, []);

  useEffect(() => {
    isotope.current = new Isotope("#filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

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

  const handleIsotope = (text) => setFilterKey(text);

  return (
    <>
      <style>
        {`
      .scrollbar_b::-webkit-scrollbar {
        height: 5px;
      }
      .scrollbar_b::-webkit-scrollbar-thumb {
        background: #888; /* Customize thumb color */
        border-radius: 4px; /* Add rounded corners to the thumb */
      }
      `}
      </style>
      <div className="theme">
        <div className="dark:bg-gray-800 min-h-screen h-full overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:gap-10 items-center gap-0 mb-5 w-fit m-auto">
            <Header name={"React Project"} />
            <Theme />
          </div>
          <div
            ref={scrollRef}
            id="isotope_dis"
            className="scrollbar_b text-3xl text-white flex flex-row gap-5 px-5 pb-5 border-b-2 overflow-x-scroll"
            onMouseDown={startDrag}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onMouseMove={onDrag}
          >
            <button
              className="border-2 px-5 py-2 rounded-xl uppercase font-bold"
              onClick={() => handleIsotope("*")}
            >
              All
            </button>
            {filters.map((x, i) => (
              <button
                key={i}
                className="border-2 px-5 py-2 rounded-xl uppercase font-bold"
                onClick={() => handleIsotope(`${x}`)}
              >
                {x}
              </button>
            ))}
          </div>
          <div
            ref={homelist}
            id="filter-container"
            className=" flex flex-col flex-wrap gap-5 mx-5 sm:flex-row sm:mx-10 pb-5 !h-full"
          >
            <Rptext name={"Todo List"} filter="list" />
            <Rptext name={"Calculator"} filter="calcuator" />
            <Rptext name={"RandomColor"} filter="randomcolor" />
            <Rptext name={"Counter"} filter="number" />
            <Rptext name={"Clock"} filter="number" />
            <Rptext name={"Timer"} filter="number" />
            <Rptext name={"Hover Box"} filter="website animation" />

            <Rptext name={"Kit Gaming"} progress={true} filter="website" />
          </div>
        </div>
      </div>
    </>
  );
}
