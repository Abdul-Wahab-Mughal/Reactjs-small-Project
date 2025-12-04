import React, { useState } from "react";
import Theme from "../../Component/Theme";

function RandomColor() {
  const [colors, setColors] = useState();
  const generator = () => {
    const chars = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      color += chars.charAt(randomIndex);
    }
    return "#" + color;
  };
  const handleGenerator = () => {
    setColors(generator());
  };
  return (
    <>
      <div className="theme">
        <div
          className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 pb-5"
          style={{ backgroundColor: colors }}
        >
          <Theme style={{ display: "none" }} />
          <h1
            className="text-[10vw] font-bold text-shadow-2xs"
            style={{ textShadow: "0 0 10px white" }}
          >
            Random Color
          </h1>
          <button
            className="sm:text-5xl text-2xl p-[2vw] border-2 border-black rounded-full font-medium bg-white"
            onClick={handleGenerator}
          >
            Generate color
          </button>
          <p
            className="text-[5vw] font-bold"
            style={{ textShadow: "0 0 10px white" }}
          >
            {colors}
          </p>
        </div>
      </div>
    </>
  );
}

export default RandomColor;
