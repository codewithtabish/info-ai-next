'use server'
import React from 'react'
import AIAssistantTitle from './_components/ai-assistant-title'
import AIASSISTANTLIST from './_components/assistants-list'
import { checkAndSaveUser } from '@/actions/user'
import { User } from '@prisma/client'
import { redirect } from 'next/navigation'

const AIAssistantPage = async() => {
    // const user = await getUser();
    const response:any= await checkAndSaveUser()
    const user:User=response?.user
    if(user?.isAIAssistants){
        redirect("/ai-workspace")
    }

    
  return (
    <div className='md:max-w-5xl mx-auto pt-18'>
        <AIAssistantTitle/>
        <AIASSISTANTLIST/>

  
  
      
    </div>
  )
}

export default AIAssistantPage
