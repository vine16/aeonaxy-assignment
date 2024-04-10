import React, { useContext } from "react";
import { FormOpenContext } from "../contexts/StoryFormOpen.tsx";

const GrayOverlay = () => {
  const contextValue = useContext(FormOpenContext);

  const isFormOpen = contextValue ? contextValue.isFormOpen : false;
  return (
    <div
      className={` ${
        isFormOpen ? "bg-gray-700 fixed inset-0 opacity-50 z-40" : ""
      } `}
    ></div>
  );
};

export default GrayOverlay;
