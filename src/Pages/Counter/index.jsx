import React, { useState } from "react";
import Header from "../../Component/Header";
import Theme from "../../Component/Theme";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="theme">
        <div className="w-full h-screen flex flex-col bg-gray-100 dark:bg-gray-800 pb-5">
          <div className="flex flex-col sm:flex-row sm:gap-10 items-center gap-0 mb-5 w-fit m-auto">
            <Header name={"Counter"} />
            <Theme />
          </div>
          <div className="h-screen flex flex-grow flex-col gap-24 justify-center items-center min min-h-[550px]">
            <div className="flex flex-row justify-center items-center gap-5">
              <button
                className="w-40 h-fit text-white text-5xl border-2 rounded-2xl px-16 py-2 border-black dark:border-white leading-none"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
              <div className="text-white text-[10vw] border-2 rounded-2xl p-10 border-black dark:border-white leading-none">
                {count}
              </div>
              <button
                className="w-40 h-fit text-white text-5xl border-2 rounded-2xl px-16 py-2 border-black dark:border-white leading-none"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
            </div>
            <button
              className=" text-white text-5xl border-2 rounded-2xl px-16 py-2 border-black dark:border-white leading-none"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
