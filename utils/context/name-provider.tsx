"use client";

import { createContext, useContext, useState } from "react";

interface NameContext {
  name: string;
  updateName: (name: string) => void;
}

const NameContext = createContext<NameContext | null>(null);

export const useNameContext = () => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error("useNameContext must be used within a NameProvider");
  }
  return context;
};

export default function NameProvider({ children }: any) {
  const [name, setName] = useState("Greger");

  const updateName = (name: string) => {
    setName(name);
  };

  return (
    <NameContext.Provider value={{ name, updateName }}>
      {children}
    </NameContext.Provider>
  );
}
