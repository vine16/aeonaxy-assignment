import React, { useState, useEffect, useContext } from "react";
import { RxCross2, RxSwitch } from "react-icons/rx";
import { FormOpenContext } from "../contexts/StoryFormOpen.tsx";

export default function NewStoryForm() {
  const contextValue = useContext(FormOpenContext);

  const { isFormOpen, setIsFormOpen } = contextValue || {
    isFormOpen: false,
    setIsFormOpen: () => {},
  };
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Landscape(16:9)");
  const [name, setName] = useState("");
  function handleClose() {
    setIsFormOpen(false);
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  useEffect(() => {
    const handleBlur = () => {
      setTimeout(() => setShowOptions(false), 100);
    };

    window.addEventListener("click", handleBlur);

    return () => {
      window.removeEventListener("click", handleBlur);
    };
  }, []);

  const handleInputClick = (event) => {
    event.stopPropagation();
    setShowOptions(true);
  };

  return isFormOpen ? (
    <div className="absolute inset-0 flex justify-center items-center w-full h-screen z-50">
      <div className="p-7 w-fit rounded-lg bg-white">
        <div className="flex justify-between">
          <h1 className="text-xl font-extrabold">New Storyboard</h1>
          <span
            className="w-7 h-7 bg-gray-100 cursor-pointer flex justify-center items-center rounded-full right-0"
            onClick={handleClose}
          >
            <RxCross2 />
          </span>
        </div>
        <form className="mt-8" onSubmit={handleClose}>
          <label htmlFor="storyboard-name">Storyboard Name</label>
          <div className="w-96 h-11 border-solid border-2 border-gray-300 flex items-center pl-2 mt-1">
            <input
              onChange={(e) => setName(e.target.value)}
              className="w-full outline-none"
              type="text"
              value={name}
              id="storyboard-name"
              placeholder="e.g. Default Project Storyboard"
            />
          </div>

          <div className="relative mt-5">
            <label htmlFor="frame-size">Frame Size</label>
            <div className="w-96 h-11 border-solid border-2 border-gray-300 flex items-center pl-2 relative mt-1">
              <input
                type="text"
                id="frame-size"
                name="frame-size"
                readOnly={true}
                value={selectedOption}
                className="w-full h-full bg-transparent focus:outline-none cursor-pointer"
                onClick={handleInputClick}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className={`h-4 w-4 text-gray-700`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 10l7 7 7-7"
                  ></path>
                </svg>
              </div>
            </div>
            {showOptions && (
              <div className="absolute mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    role="menuitem"
                    onClick={() => handleOptionSelect("Landscape(16:9)")}
                  >
                    Landscape(16:9)
                  </div>
                  <div
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    role="menuitem"
                    onClick={() => handleOptionSelect("Square(1:1)")}
                  >
                    Square(1:1)
                  </div>
                  <div
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    role="menuitem"
                    onClick={() => handleOptionSelect("Classic(3:2)")}
                  >
                    Classic(3:2)
                  </div>
                  <div
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    role="menuitem"
                    onClick={() => handleOptionSelect("Portrait(5:4)")}
                  >
                    Portrait(5:4)
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
        <div className="mt-10 flex justify-between">
          <div className="flex items-center gap-2">
            <span>
              <RxSwitch />
            </span>
            <span className="text-sm">AI Assistant</span>
          </div>
          <button
            type="submit"
            className={` ${
              name.length > 0 ? "bg-gray-950" : "bg-gray-200"
            } border-2 border-solid p-2 rounded-md text-sm bg-gray-200 text-white ${
              name.length > 0 ? "disabled" : ""
            }`}
            onClick={handleClose}
          >
            Create Storyboard
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
