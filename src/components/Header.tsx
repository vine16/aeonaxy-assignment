import React from "react";
import { FaSearch } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import NameLogo from "./NameLogo.tsx";

export default function Header() {
  const ImgUrl = "./images/B-logo.png";
  return (
    <header className="h-44 flex flex-col justify-evenly  items-center md:flex-row md:h-full md:mt-4 md:justify-between">
      <div className="flex flex-row  items-center">
        <div className="w-8 mx-2 md:w-10">
          <img src={ImgUrl} alt="B-logo" />
        </div>
        <p className="font-black mx-2 xl:text-3xl	md:text-2xl">
          Project Dashboard
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center xl:items-start">
        <div>
          <div className="w-72 flex h-9 border-solid border-2 border-slate-400 rounded-sm xl:h-11 xl:w-80">
            <label
              htmlFor="searchInput"
              className="cursor-pointer flex items-center justify-center px-1"
            >
              <FaSearch className="size-4 text-slate-400" />
            </label>
            <input
              id="searchInput"
              placeholder="Search my storyboards"
              className="h-full pl-1 outline-none w-full"
            />
          </div>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="flex  w-72 justify-evenly items-center md:justify-start">
            <div className="flex bg-cyan-50 w-42 border-solid border-cyan-100 border-4 rounded-md px-2 py-1 justify-center items-center xl:h-13 xl:ml-4 lg:ml-3 md:ml-2 sm:ml-1">
              <CountdownCircleTimer
                isPlaying
                duration={10}
                colors="#6BBBF4"
                size={40}
                strokeWidth={6}
              >
                {({ remainingTime }) => remainingTime}
              </CountdownCircleTimer>
              <span className="ml-2 font-semibold">Quick Start</span>
            </div>
            <span className="w-10 h-10 xl:ml-5 lg:ml-4 md:ml-3 sm:ml-2">
              <NameLogo name={"A"} />
            </span>
            <span
              className="inline-flex w-8 h-8  justify-center items-center bg-black
            rounded-full md:rounded-none md:rounded-l-full md:w-8 md:h-9 md:absolute md:right-0"
            >
              <SlEnergy className="text-white" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
