'use client'
import { Assistant } from "@/utils/types";
import React, { createContext, ReactNode, useContext, useState } from "react";

// Define context type
interface UserContextType {
  selectedAssistants: Assistant[];
  setSelectedAssistants: React.Dispatch<React.SetStateAction<Assistant[]>>;
  credits: number;
  setCredits: React.Dispatch<React.SetStateAction<number>>;
}

// Create context with undefined default (will be set inside the provider)
const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [selectedAssistants, setSelectedAssistants] = useState<Assistant[]>([]);
  const [credits, setCredits] = useState<number>(5000);

  return (
    <UserContext.Provider value={{ selectedAssistants, setSelectedAssistants, credits, setCredits }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to safely use context
const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUserContext };
