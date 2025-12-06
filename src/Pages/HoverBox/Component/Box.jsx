import React from "react";

function Box({ img, text, icon, key, active, onHover }) {
  return (
    <>
      <style>
        {`@keyframes upRoof {
            0% {transform: translateY(50px); opacity: 0;}
            100% {transform: translateY(0); opacity: 1;}
        }`}
      </style>
      <div
        id={key}
        onMouseEnter={onHover}
        className={`duration-500 h-[40.7vw] max-h-[1000px] overflow-hidden relative rounded-lg w-[18%] group 
        ${active ? "active w-[33%]" : ""}`}
      >
        <img
          className="np-box-img duration-500 object-[80% 50%] w-full h-full object-cover grayscale group-[.active]:grayscale-0"
          src={img}
          alt="img"
        />
        <p className="absolute left-5 bottom-14 duration-500 opacity-0 line-clamp-5 w-[90%] text-lg text-white z-10 font-bold group-[.active]:animate-[upRoof_0.25s_forwards_0.5s]">
          {text}
        </p>
        <div className="bg-gradient-to-b from-[#10111040] to-[#101110] absolute w-full h-full top-0"></div>
        <div className="h-[20px] duration-500 absolute bottom-5 left-3 group-[.active]:h-[30px] group-[.active]:left-5">
          <img className="w-full h-full" src={icon} alt="img" />
        </div>
      </div>
    </>
  );
}

export default Box;
