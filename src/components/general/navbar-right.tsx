import React from 'react'
import { Badge } from '../ui/badge'
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { checkAndSaveUser } from '@/actions/user';
import { USERAPIRESPONSE } from '@/utils/api-response';
import { User } from '@prisma/client';



const NavbarRightSide = async() => {
//     const {getUser} = getKindeServerSession();
// const user = await getUser();
const response:any= await checkAndSaveUser()
const user:User=response?.user





  return (
    <div>
        <Badge className="px-4 py-1 bg-[#1E293B] text-white hover:scale-105 transition-transform duration-200">
         {
          !user?.email?
            <LoginLink postLoginRedirectURL='/' className='bg-none  font-semibold'>
            Sign In
          </LoginLink>:
         <>
         <p>
            {user?.credits}
         </p>
          <Avatar className='bg-none rounded-lg cursor-pointer'>
          <AvatarImage src={
            user?.profilePicture ?? " "
          } />
          
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

         </>
        
          

         }
        </Badge>
    </div>
  )
}

export default NavbarRightSide
