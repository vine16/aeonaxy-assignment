import React, { useContext } from "react";
import NameLogo from "./NameLogo.tsx";
import { FormOpenContext } from "../contexts/StoryFormOpen.tsx";
export default function SecondHeader() {
  const { setIsFormOpen } = useContext(FormOpenContext);
  function handleClick() {
    setIsFormOpen(true);
  }
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10">
          <NameLogo name={"A"} />
        </div>
        <p className="font-bold">Adam Cooper Team</p>
      </div>
      <button
        onClick={handleClick}
        className="bg-black text-white w-32 h-10 rounded-lg"
      >
        New Project
      </button>
    </div>
  );
}
