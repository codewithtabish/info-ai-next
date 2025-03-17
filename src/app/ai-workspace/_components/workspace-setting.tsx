"use client";

import { useUserContext } from '@/provider/main-provider';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from '@/components/ui/badge';
import models from '../../../lib/model-options';
import { updateAIAssistant } from '@/actions/assistants';
import { toast } from 'sonner';

const WorkspaceSetting = () => {
    const { assistant, setAssistant } = useUserContext();

    const [instruction, setInstruction] = useState(assistant?.instruction || "");
    const [selectedModel, setSelectedModel] = useState(assistant?.defautModel ?? models[0]?.name);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setInstruction(assistant?.instruction || "");
        setSelectedModel(assistant?.defautModel ?? models[0]?.name);
    }, [assistant]);

    const handleChange = (name: string, value: string) => {
        if (name === "instruction") {
            setInstruction(value);
        } else if (name === "model") {
            setSelectedModel(value);
        }
    };

    const handleSave = async () => {
        if (!assistant?.id) {
            toast.error("Assistant not found!");
            return;
        }

        setLoading(true);

        const data = {
            assistantId: assistant.id,
            defautModel: selectedModel,
            instruction,
        };

        const response = await updateAIAssistant(data);
        setLoading(false);

        if (response.success) {
            toast.success("AI Assistant updated successfully!");
        } else {
            toast.error("Failed to update AI Assistant.");
        }
    };

    return (
        <div className="h-full flex flex-col overflow-y-auto">
            <div className="flex flex-row md:max-w-[70%] mx-auto gap-3 items-center">
                <Image
                    src={assistant?.image ?? '/default-image.png'}
                    alt={assistant?.title ?? 'Assistant Image'}
                    width={80}
                    height={80}
                    className="object-contain w-[80px] mx-auto rounded-md h-[80px]"
                />
                <div>
                    <h2 className="text-xl opacity-[0.6] font-semibold">{assistant?.name}</h2>
                    <span className="text-sm opacity-[0.6]">{assistant?.title}</span>
                </div>
            </div>

            <div className="flex flex-col md:max-w-[90%] mt-10 mx-auto">
                <Select
                    onValueChange={(value) => handleChange("model", value)}
                    value={selectedModel}
                >
                    <SelectTrigger className="w-full bg-[#020817] text-white border-gray-700">
                        <SelectValue placeholder="Select model" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#020817] text-white border-gray-700">
                        {models.map((model, index) => (
                            <SelectItem
                                key={index}
                                value={model.name}
                                className="hover:bg-[#08152b] hover:text-white cursor-pointer"
                            >
                                {model.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="grid md:max-w-[90%] mt-10 gap-1.5 flex-1">
                <Textarea
                    placeholder="Type your message here."
                    className="min-h-[100px] mx-5 opacity-[.6]"
                    value={instruction}
                    onChange={(e) => handleChange("instruction", e.target.value)}
                />
            </div>

            {/* Save Button Positioned Correctly */}
            <div className="p-4 flex justify-center border-t border-gray-700">
                <Badge
                    className={`w-[120px] text-center p-2 cursor-pointer ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handleSave}
                >
                    {loading ? "Saving..." : "Save"}
                </Badge>
            </div>
        </div>
    );
};

export default WorkspaceSetting;
