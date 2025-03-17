"use server";

import { checkAndSaveUser } from "@/actions/user";
import { User } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";
import WorkSpaceAssistantList from "./_components/workspace-assistantlist";
import WorkspaceChat from "./_components/workspace-chat";

const AIWorkSpacePage = async () => {
  const response: any = await checkAndSaveUser();
  const user: User = response?.user;
  

  if (!user?.isAIAssistants) {
    redirect("/ai-assistants");
  }


  return (
    <div className="flex h-screen overflow-hidden bg-[#0d1117] text-white">
      {/* Sidebar - Assistant List (Left) */}
      <aside className="w-[280px] p-4 border-r border-gray-700 hidden md:flex flex-col overflow-y-auto h-full">
        <h2 className="text-sm text-gray-400 font-semibold mb-3">Assistants</h2>
        <div className="flex-1 overflow-y-hidden">
          <WorkSpaceAssistantList />
        </div>
      </aside>

      {/* Main Chat Section */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <WorkspaceChat />
      </main>
    </div>
  );
};

export default AIWorkSpacePage;
