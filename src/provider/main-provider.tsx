"use client";

import { Assistant } from "@/utils/types";
import { UserAIAssistant } from "@prisma/client";
import React, { createContext, ReactNode, useContext, useState } from "react";

// Define context type
interface UserContextType {
  selectedAssistants: Assistant[];
  setSelectedAssistants: React.Dispatch<React.SetStateAction<Assistant[]>>;
  credits: number;
  setCredits: React.Dispatch<React.SetStateAction<number>>;
  assistant: UserAIAssistant | null;
  setAssistant: React.Dispatch<React.SetStateAction<UserAIAssistant | null>>; // Fix: Allow null
}

// Create context with undefined default (set inside provider)
const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [selectedAssistants, setSelectedAssistants] = useState<Assistant[]>([]);
  const [credits, setCredits] = useState<number>(5000);
  const [assistant, setAssistant] = useState<UserAIAssistant | null>(null); // Fix: Initialize with null

  return (
    <UserContext.Provider
      value={{
        selectedAssistants,
        setSelectedAssistants,
        credits,
        setCredits,
        assistant,
        setAssistant, // Fix: Ensure compatibility
      }}
    >
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
