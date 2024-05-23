/* eslint-disable no-eval */
import React, { useContext } from "react";
import { CalContext } from "../CalContext";

const getStyleName = (btn) => {
  const className = {
    "/": "bg-green-500",
    "*": "bg-green-500",
    "-": "bg-green-500",
    "+": "bg-green-500",
    "=": " bg-orange-600",
  };
  return className[btn];
};

function Button({ value, keys }) {
  const { cal, setCal } = useContext(CalContext);

  //    user click comma
  const CommaClick = () => {
    var sp = cal.num.split(/[X^*-+%/]/);
    setCal({
      ...cal,
      num: !sp[sp.length - 1].includes(".") ? cal.num + value : cal.num,
    });
  };

  //   user Click Back
  const backClick = () => {
    setCal({
      ...cal,
      num: cal.num.split("").slice(0, -1).join(""),
    });
  };

  //   user click reset
  const resetClick = () => {
    setCal({ sign: "", num: "0" });
  };

  //   User click number
  const handleClickBtn = () => {
    setCal({
      ...cal,
      num: cal.num === "0" ? value.toString() : cal.num + value.toString(),
    });
  };

  //   User sign Click
  const signClick = () => {
    if (cal.num.split("")[cal.num.length - 1] !== value) {
      var t = cal.num + value;
      setCal({ ...cal, num: t });
    }
  };

  //   User Click Equal
  const EqualClick = () => {
    setCal({ ...cal, num: eval(cal.num).toString() });
  };

  const handleClick = () => {
    switch (value) {
      case "/":
      case "*":
      case "-":
      case "+":
        return signClick();
      case "=":
        return EqualClick();
      case ".":
        return CommaClick();
      case "DE":
        return backClick();
      case "AC":
        return resetClick();
      default:
        return handleClickBtn();
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`p-5 text-center cursor-pointer rounded-3xl font-bold shadow-lg shadow-gray-600 text-xl active:shadow-inner transition-all
         ${keys === 17 || keys === 0 ? "col-span-2" : ""} ${getStyleName(
          value
        )}`}
        key={keys}
      >
        {value}
      </div>
    </>
  );
}

export default Button;
