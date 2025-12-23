import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment, Reset } from "./Redux/counterAction";
import Main from "../../Component/Main";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <>
      <Main title={"Counter"}>
        <div className="flex flex-grow flex-col gap-24 justify-center items-center">
          <div className="flex flex-row justify-center items-center gap-5">
            <button
              className="w-16 h-20 text-white text-5xl flex justify-center items-center border-2 rounded-2xl px-16 py-2 border-black dark:border-white leading-none"
              onClick={() => dispatch(Decrement())}
            >
              -
            </button>
            <div className="text-white text-[10vw] border-2 rounded-2xl p-10 border-black dark:border-white leading-none">
              {counter}
            </div>
            <button
              className="w-16 h-20 text-white text-5xl flex justify-center items-center border-2 rounded-2xl px-16 py-2 border-black dark:border-white leading-none"
              onClick={() => dispatch(Increment())}
            >
              +
            </button>
          </div>
          <button
            className=" text-white text-5xl border-2 rounded-2xl px-16 py-2 border-black dark:border-white leading-none"
            onClick={() => dispatch(Reset())}
          >
            Reset
          </button>
        </div>
      </Main>
    </>
  );
}

export default Counter;
