import React from "react";
import Header from "./Header";
import Theme from "./Theme";

export default function Main({ children, title, ref }) {
  return (
    <div className="theme">
      <div
        ref={ref}
        className="w-full h-screen flex flex-col bg-gray-100 dark:bg-gray-800 pb-5"
      >
        <div className="flex flex-col sm:flex-row sm:gap-10 items-center gap-0 mb-5 w-fit m-auto">
          <Header name={title} />
          <Theme />
        </div>
        <div className="h-screen flex flex-grow justify-center items-center min-h-[550px]">
          {children}
        </div>
      </div>
    </div>
  );
}
