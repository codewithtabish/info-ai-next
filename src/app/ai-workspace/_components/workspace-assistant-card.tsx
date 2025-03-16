"use client";

import { useUserContext } from "@/provider/main-provider";
import { UserAIAssistant } from "@prisma/client";
import Image from "next/image";
import { useEffect } from "react";

const WorkspaceAssistantCard = ({
  assignment,
  assistants,
}: {
  assignment: UserAIAssistant;
  assistants: UserAIAssistant[];
}) => {
  const { assistant: selectedAssistant, setAssistant } = useUserContext();

  // Set the first assistant by default
  useEffect(() => {
    if (!selectedAssistant && assistants.length > 0) {
      setAssistant(assistants[0]);
    }
  }, [selectedAssistant, assistants, setAssistant]);

  const handleSelect = () => {
    setAssistant(selectedAssistant?.id === assignment.id ? null : assignment);
  };

  return (
    <div
      key={assignment.id}
      onClick={handleSelect}
      className={`p-2 rounded-md cursor-pointer flex items-center gap-2 transition ${
        selectedAssistant?.id === assignment.id
          ? "bg-blue-700"
          : "bg-gray-800 hover:bg-gray-700"
      }`}
    >
      {assignment.image && (
        <div className="w-10 h-10 overflow-hidden rounded-full border border-gray-600">
          <Image
            src={assignment.image}
            alt={assignment.title}
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <h3 className="text-white text-xs font-medium">{assignment.title}</h3>
    </div>
  );
};

export default WorkspaceAssistantCard;
