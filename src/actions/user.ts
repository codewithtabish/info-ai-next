"use server";

import { prisma } from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { User } from "@prisma/client";

type CheckAndSaveUserInDBProps = {
  success: boolean;
  message: string;
  user?: User;
};

export const checkAndSaveUser = async (): Promise<CheckAndSaveUserInDBProps> => {
  try {
    // Get user session
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.email) {
      return { success: false, message: "User not found or email is missing" };
    }

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email },
      include:{
        assignments:true
      }
    });

    if (existingUser) {
      return { success: true, message: "User already exists", user: existingUser };
    }

    // Create new user in the database
    const newUser = await prisma.user.create({
      data: {
        email: user.email,
        name: user.given_name || "Unnamed User",
        profilePicture: user.picture || "",
        // creadits: 5000,  // Default values as per schema
        tokens: 5000,
        credits:5
      },
      
    });

    return { success: true, message: "User created successfully", user: newUser };
  } catch (error) {
    console.error("Error in checkAndSaveUser:", error);
    return { success: false, message: "Internal server error" };
  }
};






type UpdateUserTokenProps = {
  success: boolean;
  message: string;
  user?: User;
};

export const updateUserTokenAction = async (tokensToSubtract: number): Promise<UpdateUserTokenProps> => {
  try {
    // Get user session
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.email) {
      return { success: false, message: "User not authenticated or email is missing" };
    }

    // Find user in the database
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (!existingUser) {
      return { success: false, message: "User not found" };
    }

    // Calculate new token count (ensuring it doesn't go below 0)
    const newTokenCount = Math.max((existingUser.tokens ?? 0) - tokensToSubtract, 0);

    // Update user's token count and return updated user
    const updatedUser = await prisma.user.update({
      where: { email: user.email },
      data: { tokens: newTokenCount },
    });

    return { success: true, message: "User tokens updated successfully", user: updatedUser };
  } catch (error) {
    console.error("Error in updateUserTokenAction:", error);
    return { success: false, message: "Internal server error" };
  }
};

