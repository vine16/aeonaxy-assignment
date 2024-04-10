import React, { useState, createContext } from "react";

export interface ContextValueType {
  isFormOpen: boolean;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormOpenContext = createContext<ContextValueType | null>(null);

export default function StoryFormOpen({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const contextValue: ContextValueType = { isFormOpen, setIsFormOpen };
  return (
    <FormOpenContext.Provider value={contextValue}>
      {children}
    </FormOpenContext.Provider>
  );
}
