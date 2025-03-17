"use client";

import { useEffect, useState, useRef } from "react";
import { checkAndSaveUser } from "@/actions/user";
import { User, UserAIAssistant } from "@prisma/client";
import WorkspaceAssistantCard from "./workspace-assistant-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProfileDialog from "./profile-dialouge";
import { useUserContext } from "@/provider/main-provider";

const WorkSpaceAssistantList = () => {
  const [user, setUser] = useState<User | null>(null);
  const [assignments, setAssignments] = useState<UserAIAssistant[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);  // State to manage dialog visibility
  const containerRef = useRef<HTMLDivElement>(null);
  const {mainContextUser} =useUserContext()

  useEffect(() => {
    const fetchData = async () => {
      const response: { user?: User & { assignments?: UserAIAssistant[] } } = await checkAndSaveUser();
      setUser(response?.user || null);
      setAssignments(response?.user?.assignments || []);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-[100vh] max-w-xs mx-auto shadow-md relative">
      <h2 className="text-xs text-right cursor-pointer font-medium text-gray-400 mb-3 hover:text-white">
        + Add More
      </h2>

      {assignments.length === 0 ? (
        <p className="text-gray-500 text-sm text-center">No assistants found.</p>
      ) : (
        <div ref={containerRef} className="h-[300px] overflow-y-auto space-y-2 hide-scrollbar">
          {assignments.map((assignment, index) => (
            <WorkspaceAssistantCard key={index} assignment={assignment} assistants={assignments} />
          ))}
        </div>
      )}

      {/* Profile Dropdown */}
      <div className="absolute bottom-10 w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className="cursor-pointer absolute flex flex-row items-center gap-3.5 bottom-10 w-full px-4 py-2 rounded-lg transition-colors"
            >
              <Avatar className="rounded-lg border border-gray-500">
                <AvatarImage src={user?.profilePicture ?? " "} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-white">{user?.name ?? "Guest"}</span>
                <span className="text-[10px] text-gray-400">Free Plan</span>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#020817] hover:bg-[#07122B] text-white border border-gray-700">
            <DropdownMenuItem
              onClick={() => setIsDialogOpen(true)}  // Open the dialog when Profile is clicked
              className="hover:bg-[#07122B] focus:bg-[#07122B] cursor-pointer focus:text-white"
            >
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#07122B] focus:bg-[#07122B] cursor-pointer focus:text-white">
              logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Pass user, dialog state, and onClose function to the ProfileDialog */}
      <ProfileDialog
        user={mainContextUser}
        isDialogOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}  // Close dialog
      />
    </div>
  );
};

export default WorkSpaceAssistantList;
