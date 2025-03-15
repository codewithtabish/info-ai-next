import React from 'react'
import AIASSISTANTSTARTBUTTON from './ai-assistant-start-button'

const AIAssistantTitle = () => {
  return (
    <div className='flex justify-between md:flex-row flex-col md:gap-1 gap-5 items-center py-5'>
<div className="text-white px-4 md:px-0">
  <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl">
    <span className="block">Welcome to</span>
    <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
      Your AI Assistant
    </span>
  </h2>
  <p className="mt-4 md:max-w-[70%] text-sm w-full text-gray-400">
    Your personal AI assistant is here to enhance your productivity, provide instant insights, and simplify complex tasks. 
    Whether you need help with research, content creation, or everyday problem-solving, we've got you covered. Let’s unlock 
    new possibilities together!
  </p>
</div>


      <AIASSISTANTSTARTBUTTON/>
    </div>
  )
}

export default AIAssistantTitle
