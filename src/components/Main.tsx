import React from "react";
import { FaRegFolderClosed } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import ImageCard from "./ImageCard.tsx";
import NewProject from "./NewProject.tsx";
import SecondHeader from "./SecondHeader.tsx";
export default function Main() {
  return (
    <div className="pr-8 pl-8 bg-primary pt-10 pb-10 md:mt-5">
      <SecondHeader />
      <div className="bg-white mt-10 p-6">
        <div className="flex justify-between">
          <div className="flex gap-4 justify-center items-center">
            <span>
              <FaRegFolderClosed className="w-7 h-7" />
            </span>
            <div className="flex flex-col">
              <span>Default Project</span>
              <span className="text-gray-400 text-xs">1 storyboard</span>
            </div>
          </div>
          <div className="flex gap-4">
            <BsThreeDotsVertical />
            <FaAngleDown />
          </div>
        </div>
        <div className="flex flex-col items-center pt-6 gap-3 md:flex-row">
          <ImageCard />
          <NewProject />
        </div>
      </div>
    </div>
  );
}
