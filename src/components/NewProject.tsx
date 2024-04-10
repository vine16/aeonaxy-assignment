import React, { useContext } from "react";
import { FormOpenContext } from "../contexts/StoryFormOpen.tsx";
import { CiCirclePlus } from "react-icons/ci";
export default function NewProject() {
  const contextValue = useContext(FormOpenContext);

  const { setIsFormOpen } = contextValue || { setIsFormOpen: () => {} };
  function handleOnClick() {
    setIsFormOpen(true);
  }
  return (
    <div
      onClick={handleOnClick}
      className="flex justify-center items-center w-80 h-60  bg-primary cursor-pointer"
    >
      <CiCirclePlus className="w-16 h-16 text-gray-400" />
    </div>
  );
}
