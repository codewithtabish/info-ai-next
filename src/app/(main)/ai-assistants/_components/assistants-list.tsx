"use client";

import React, { useState, useCallback } from "react";
import assistantList from "../../../../lib/assistants";
import AssistantCard from "./assistant-card";
import { Assistant } from "@/utils/types";
import { useUserContext } from "@/provider/main-provider";

const AIASSISTANTLIST = () => {
    const {selectedAssistants, setSelectedAssistants} =useUserContext()
//   const [selectedAssistants, setSelectedAssistants] = useState<Assistant[]>([]);

  const toggleSelection = useCallback((assistant: Assistant) => {
    setSelectedAssistants((prev) =>
      prev.some((item) => item.id === assistant.id)
        ? prev.filter((item) => item.id !== assistant.id)
        : [...prev, assistant]
    );
  }, []);

  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <p className="text-white text-lg mb-4">
        Selected Assistants: {selectedAssistants.length}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {assistantList.map((assistant) => (
          <AssistantCard
            key={assistant.id}
            assistant={assistant}
            isSelected={selectedAssistants.some((item) => item.id === assistant.id)}
            toggleSelection={() => toggleSelection(assistant)}
          />
        ))}
      </div>
    </div>
  );
};

export default AIASSISTANTLIST;
