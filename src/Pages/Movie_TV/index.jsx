import React from "react";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MovieTV() {
  return (
    <>
      <div className="bg-gray-700 min-h-screen flex flex-col">
        <header className=" w-full">
          <h1 className="text-white px-5 py-2 text-6xl text-center uppercase font-bold tracking-widest shadow-xl">
            Entertainment Hub
          </h1>
        </header>

        <div className="flex-grow">
          <div className="text-center text-white px-5 my-2">
            Discover Movies
          </div>
          <div className="checkbox px-5 my-2 flex flex-row gap-2 justify-center">
            <span className="px-4 py-1 bg-white rounded-2xl font-semibold cursor-pointer">
              Horror
            </span>
            <span className="px-4 py-1 bg-white rounded-2xl font-semibold cursor-pointer">
              Drama
            </span>
            <span className="px-4 py-1 bg-white rounded-2xl font-semibold cursor-pointer">
              Family
            </span>
          </div>
          <div className="flex flex-row justify-center gap-5">
            {/*  */}
            <div className="min-w-30 w-full max-w-60 bg-slate-500 p-2 rounded-xl cursor-pointer">
              <img
                src="https://image.tmdb.org/t/p/w300/gDVgC9jd917NdAcqBdRRDUYi4Tq.jpg"
                alt="Movie Tv"
                className="rounded-lg"
              />
              <div className="text-white font-bold text-center py-2">
                Name of Movie
              </div>
              <div className="flex flex-row justify-between text-white">
                <span>Release</span>
                <span>12-12-25</span>
              </div>
            </div>
            {/*  */}
          </div>
        </div>

        <div className="w-full bottom-0 left-0 px-5 py-2 border-t-[1px] border-gray-500 flex flex-row gap-20 justify-center">
          <button className="flex flex-col text-white">
            <FontAwesomeIcon icon={faClapperboard} />
            Trending
          </button>
          <button className="flex flex-col text-white">
            <FontAwesomeIcon icon={faClapperboard} />
            Movies
          </button>
          <button className="flex flex-col text-white">
            <FontAwesomeIcon icon={faClapperboard} />
            TV
          </button>
          <button className="flex flex-col text-white">
            <FontAwesomeIcon icon={faClapperboard} />
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default MovieTV;
