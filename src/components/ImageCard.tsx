import React from "react";

export default function ImageCard() {
  return (
    <div className="flex flex-col border-solid border-2  border-grey-400">
      <img src="./images/project-img.jpg" alt="forest" className="w-80 h-40" />
      <div className="pl-3 pb-3 pt-5">
        <p>Ai Character Demo Storyboard</p>
        <p className="text-gray-400">Updated 19 Mar 24</p>
      </div>
    </div>
  );
}
