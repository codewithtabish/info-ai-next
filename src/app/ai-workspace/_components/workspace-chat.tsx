'use client'
import { useUserContext } from '@/provider/main-provider'
import { SendHorizontal } from 'lucide-react'
import React from 'react'

const WorkspaceChat = () => {
    const {assistant}=useUserContext()
  return (
    <div className="flex flex-col h-screen bg-[#020817] text-white relative">
      {/* Chat Messages */}
      <div className="flex-1 p-6 space-y-4 overflow-y-auto custom-scrollbar">

      {assistant?.sampleQuestions?.map((message, index) => (
    <p key={index}>{message}</p>
))}

        

    

     
      </div>

      {/* Fixed Input Box */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#0A0F1F] p-4 border-t border-gray-700 flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#121826] text-white"
        />
        <button className="ml-3 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition">
          <SendHorizontal size={20} />
        </button>
      </div>
    </div>
  )
}

export default WorkspaceChat
