'use client';

import { Assistant } from "@/utils/types";
import { User, UserAIAssistant } from "@prisma/client";
import React, { createContext, ReactNode, useContext, useState } from "react";

// Define context type
interface UserContextType {
  selectedAssistants: Assistant[];
  setSelectedAssistants: React.Dispatch<React.SetStateAction<Assistant[]>>;
  credits: number;
  setCredits: React.Dispatch<React.SetStateAction<number>>;
  assistant: UserAIAssistant | null;
  setAssistant: React.Dispatch<React.SetStateAction<UserAIAssistant | null>>; 
  selectedMessage: string | null;
  setSelectedMessage: React.Dispatch<React.SetStateAction<string | null>>;
  response: string | null;
  fetchResponse: (message: string) => void;
  mainContextUser: User | null;
  setMainContextUser: React.Dispatch<React.SetStateAction<any >>
}

// Create context
const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [selectedAssistants, setSelectedAssistants] = useState<Assistant[]>([]);
  const [credits, setCredits] = useState<number>(5000);
  const [assistant, setAssistant] = useState<UserAIAssistant | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);
  const [mainContextUser, setMainContextUser] = useState<User|null>(null)

  // Function to fetch response (simulate API request)
  const fetchResponse = async (message: string) => {
    setSelectedMessage(message);
    try {
      // Simulate API request (Replace with actual API call)
      const fakeResponse = `Here is a response for: "${message}"`;
      setTimeout(() => setResponse(fakeResponse), 1000);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        selectedAssistants,
        setSelectedAssistants,
        credits,
        setCredits,
        assistant,
        setAssistant,
        selectedMessage,
        setSelectedMessage,
        response,
        fetchResponse,
        mainContextUser,
        setMainContextUser,  // Add this line for user authentication context
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the context
const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUserContext };
