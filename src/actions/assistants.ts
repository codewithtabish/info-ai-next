"use server";

import { prisma } from "@/utils/db";
import { Assistant } from "@/utils/types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

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
