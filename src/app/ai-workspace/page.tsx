'use server'

import { checkAndSaveUser } from '@/actions/user'
import { User } from '@prisma/client'
import { redirect } from 'next/navigation'
import React from 'react'
import WorkSpaceAssistantList from './_components/workspace-assistantlist'
import WorkspaceChat from './_components/workspace-chat'
import WorkspaceSetting from './_components/workspace-setting'

const AIWorkSpacePage = async () => {
    const response: any = await checkAndSaveUser()
    const user: User = response?.user

    if (!user?.isAIAssistants) {
        redirect("/ai-assistants")
    }

    return (
        <div className="flex min-h-screen max-h-screen md:overflow-hidden bg-[#0d1117] text-white relative">
            {/* Sidebar - Assistant List */}
            <aside className="w-1/4 p-4 border-r border-gray-700 hidden md:flex flex-col">
                <h2 className="text-sm text-gray-400 font-semibold mb-3">Assistants</h2>
                <WorkSpaceAssistantList />
            </aside>

            {/* Main Chat Section */}
            <main className="flex-1 flex flex-col relative">
             <WorkspaceChat/>
             
            </main>

            {/* Sidebar - Chat History */}
            <aside className="w-1/4 p-4 h-screen border-l border-gray-700 hidden lg:flex flex-col">
         
              <WorkspaceSetting/>
            </aside>
        </div>
    )
}

export default AIWorkSpacePage
