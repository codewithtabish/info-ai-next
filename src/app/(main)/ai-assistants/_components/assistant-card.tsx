"use client";

import { Lens } from "@/components/magicui/lens";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Assistant } from "@/utils/types";

interface AssistantCardProps {
  assistant: Assistant;
  isSelected: boolean;
  toggleSelection: () => void;
}

const AssistantCard: React.FC<AssistantCardProps> = ({ assistant, isSelected, toggleSelection }) => {
  return (
    <Card className="relative max-w-md shadow-lg bg-[#020817] p-0 rounded-2xl overflow-hidden transition-transform hover:scale-105 duration-300">
      <CardHeader className="p-0 relative">
        <Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
          <img
            src={assistant.image || "/placeholder.jpg"}
            alt={assistant.name || "Assistant Image"}
            width={500}
            height={500}
            className="object-cover rounded-lg w-full h-48"
          />
        </Lens>
      </CardHeader>
      <CardContent className="p-4 text-white pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-semibold flex-1">{assistant.name}</CardTitle>
          <Checkbox
            className="h-6 w-6 rounded-sm"
            checked={isSelected}
            onCheckedChange={toggleSelection}
          />
        </div>
        <CardDescription className="text-gray-400">{assistant.title}</CardDescription>
        <CardDescription className="text-gray-400 line-clamp-2">{assistant.instruction}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default AssistantCard;
