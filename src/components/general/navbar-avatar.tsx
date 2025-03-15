"use client";

import React, { useState } from "react";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "@prisma/client";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";


const NavbarAvatar = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-row gap-3 items-center border-r-red-700 relative">
   

   {
    !user?.isAIAssistants &&
    <Link href={"/ai-assistants"} className="font-semibold mx-5 text-white">
    AI ASSISTANTS
  </Link>
   }

      {/* Dropdown Menu */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Avatar className="cursor-pointer rounded-lg ml-3 border border-gray-500">
            <AvatarImage src={user?.profilePicture ?? " "} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="absolute mt-2 right-0 min-w-[160px] outline-none"
            align="end"
            asChild
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="bg-[#0A0F1A] shadow-lg border border-gray-700 rounded-lg p-2"
            >
              <DropdownMenu.Item asChild>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md"
                >
                  Profile
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md"
                >
                  Settings
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <button
                  className="w-full text-left px-4 py-2 text-sm cursor-pointer text-red-500 hover:bg-red-900 rounded-md"
                //   onClick={() => alert("Logging out...")}
                >
                    <LogoutLink postLogoutRedirectURL='/' className='bg-none cursor-pointer  font-semibold'>

                  Logout
                    </LogoutLink>
                </button>
              </DropdownMenu.Item>
            </motion.div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default NavbarAvatar;
