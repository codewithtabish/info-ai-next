"use server";

import { prisma } from "@/utils/db";
import { Assistant } from "@/utils/types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserAIAssistant } from "@prisma/client";

type CreateAIAssistantResponse = {
  success: boolean;
  message: string;
  data?: any;
};

export const createAIAssistants = async (
  assistants: Assistant[]
): Promise<CreateAIAssistantResponse> => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.email) {
    return { success: false, message: "User not found or email is missing." };
  }

  try {
    // Find the authenticated user in the database
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email },
      include: { assignments: true }, // Fetch user's existing assistants
    });

    if (!existingUser) {
      return { success: false, message: "User does not exist in the database." };
    }

    // Filter out assistants that already exist to prevent duplicates
    const existingAssistantNames = new Set(
      existingUser.assignments.map((assistant) => assistant.name)
    );

    const newAssistants = assistants.filter(
      (assistant) => !existingAssistantNames.has(assistant.name)
    );

    if (newAssistants.length === 0) {
      return { success: false, message: "No new assistants to add (duplicates skipped)." };
    }

    // Prepare assistants with userId
    const assistantsWithUserId = newAssistants.map((assistant) => ({
      name: assistant.name,
      title: assistant.title,
      image: assistant.image,
      instruction: assistant.instruction,
      userInstruction: assistant.userInstruction,
      sampleQuestions: assistant.sampleQuestions,
      userId: existingUser.id,
    }));

    // Store multiple assistants in a single database call
    await prisma.userAIAssistant.createMany({
      data: assistantsWithUserId,
    });

    // ✅ Update `isAIAssistants` to true
    await prisma.user.update({
      where: { id: existingUser.id },
      data: { isAIAssistants: true },
    });

    return {
      success: true,
      message: "AI Assistants created successfully.",
      data: assistantsWithUserId,
    };
  } catch (error) {
    console.error("Error creating AI Assistants:", error);
    return { success: false, message: "An error occurred while creating AI Assistants." };
  }
};




// Define an interface for the return type
interface UpdateAIAssistantResponse {
    success: boolean;
    message: string;
    assistant?: UserAIAssistant;
}

interface UpdateDataProps {
    assistantId: string;
    defautModel?: string;
    instruction?: string;
}

export const updateAIAssistant = async (data: UpdateDataProps): Promise<UpdateAIAssistantResponse> => {
    const { assistantId, defautModel, instruction } = data;

    try {
        const assistant = await prisma.userAIAssistant.update({
            where: { id: assistantId },
            data: {
                defautModel: defautModel || undefined, // Update only if provided
                instruction: instruction || undefined, // Update only if provided
            },
        });

        return {
            success: true,
            message: "AI assistant updated successfully.",
            assistant, // Return the updated assistant
        };
    } catch (error) {
        console.error("Error updating AI assistant:", error);
        return {
            success: false,
            message: "Failed to update AI assistant.",
        };
    }
};
