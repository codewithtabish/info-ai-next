'use server'

import { checkAndSaveUser } from '@/actions/user'
import { User, UserAIAssistant } from '@prisma/client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import WorkspaceAssistantCard from './workspace-assistant-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const WorkSpaceAssistantList = async () => {
    const response: { user?: User & { assignments?: UserAIAssistant[] } } = await checkAndSaveUser();
    const user = response?.user;
    const assignments = user?.assignments || [];

    return (
        <div className=" w-full min-h-[100vh] max-w-xs mx-auto shadow-md">
            <h2 className="text-xs text-right cursor-pointer font-medium text-gray-400 mb-3 hover:text-white">+ Add More</h2>
            {
                // assignments[0]?.defautModel
            }

            {assignments.length === 0 ? (
                <p className="text-gray-500 text-sm text-center">No assistants found.</p>
            ) : (
                <div className="h-[300px] overflow-y-auto space-y-2 custom-scrollbar">
                    {assignments.map((assignment, index:any) => (
                      <WorkspaceAssistantCard
                      key={index}
                       assignment={assignment
                      }
                      assistants={assignments}
                      
                      />
                    ))}
                </div>

            )}
            <div className='cursor-pointer absolute flex flex-row items-center gap-3.5 bottom-5 left-4'>

               <Avatar className=" rounded-lg ml-3 border border-gray-500">
            <AvatarImage src={user?.profilePicture ?? " "} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='flex flex-col gap-1'>
          <span className='text-sm'>{user?.name}</span>
          <span className='text-[10px]'>Free Plan</span>

          </div>
            </div>
        </div>
    )
}

export default WorkSpaceAssistantList
