import React from "react";
import { MdWatchLater } from "react-icons/md";
export default function Noti() {
  return (
    <div
      className="bg-yellow-200 min-w-44 flex flex-col items-center md:flex-row
  py-3"
    >
      <p className="bg-yellow-400 w-42 rounded-full flex justify-center items-center p-1 cursor-pointer md:mx-2">
        <span className="px-1">
          <MdWatchLater />
        </span>
        One-Time Offer
      </p>
      <p className="font-medium py-1 md:py-0 md:mx-2">
        Your AI Storyboarding Bundle Discount expires in{" "}
        <span className="bg-yellow-300 px-2 py-0.5 rounded-md text-red-200">
          <span>5:01</span>
        </span>
      </p>
      <button className="bg-red-400 rounded-md px-2.5 md:mx-2 py-2 font-medium">
        Claim Discount
      </button>
    </div>
  );
}
