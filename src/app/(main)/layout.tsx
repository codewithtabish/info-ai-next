import NavBar from '@/components/general/navbar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='md:px-6 px-4'>
        <NavBar />
        {children}
      
    </div>
  )
}

export default layout
