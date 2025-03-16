'use client';

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
import { toast } from 'sonner'; // ✅ Import toast from sonner

const WorkspaceSetting = () => {
    const { assistant } = useUserContext();

    // State for instruction textarea
    const [instruction, setInstruction] = useState(assistant?.instruction || "");
    
    // State for selected model
    const [selectedModel, setSelectedModel] = useState(assistant?.defautModel ?? models[0]?.name);

    // Loading state
    const [loading, setLoading] = useState(false);

    // Ensure the state updates when `assistant` changes
    useEffect(() => {
        if (assistant?.instruction !== undefined) {
            setInstruction(assistant.instruction);
        }
        if (assistant?.defautModel !== undefined) {
            setSelectedModel(assistant.defautModel ?? models[0]?.name);
        }
    }, [assistant]);

    // Handle input changes
    const handleChange = (name: string, value: string) => {
        if (name === "instruction") {
            setInstruction(value);
        } else if (name === "model") {
            setSelectedModel(value);
        }
    };

    // Handle Save button click
    const handleSave = async () => {
        if (!assistant?.id) {
            toast.error("Assistant not found!");
            return;
        }

        setLoading(true);

        const data = {
            assistantId: assistant.id,
            defautModel: selectedModel,
            instruction: instruction,
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
        <div className='h-screen'>
            <div className='flex flex-row md:max-w-[70%] mx-auto gap-3 items-center'>
                <Image
                    src={assistant?.image ?? '/default-image.png'}
                    alt={assistant?.title ?? 'Assistant Image'}
                    width={80}
                    height={80}
                    className="object-contain w-[80px] mx-auto rounded-md h-[80px]"
                />
                <div>
                    <h2 className='text-xl opacity-[0.6] font-semibold'>{assistant?.name}</h2>
                    <span className='text-sm opacity-[0.6]'>{assistant?.title}</span>
                </div>
            </div>

            <div className='flex flex-col md:max-w-[90%] mt-10 mx-auto'>
                <Select 
                    onValueChange={(value) => handleChange('model', value)} 
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
                                className="hover:bg-[#08152b] hover:text-white focus:text-white cursor-pointer focus:bg-[#08152b] data-[state=checked]:bg-[#08152b] text-white"
                            >
                                {model.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="grid md:max-w-[90%] mt-10 gap-1.5">
                <Textarea
                    placeholder="Type your message here."
                    className="min-h-[100px] mx-5 opacity-[.6]"
                    value={instruction}
                    onChange={(e) => handleChange("instruction", e.target.value)}
                    id="message"
                />
            </div>

            <div className='absolute bottom-5 md:max-w-[90%] mx-auto flex flex-row gap-3 items-center'>
                <Badge
                    className={`md:max-w-[100%] block p-2 text-center cursor-pointer w-[120px] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handleSave}
                    
                    // disabled={loading}
                >
                    {loading ? "Saving..." : "Save"}
                </Badge>
                {/* <Badge className='md:max-w-[50%] cursor-pointer p-2 text-center block w-[120px]' color='red'>
                    Delete
                </Badge> */}
            </div>
        </div>
    );
};

export default WorkspaceSetting;
