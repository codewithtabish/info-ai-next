import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { User } from "@prisma/client";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // For animations

interface ProfileDialogProps {
  user: User | null;
  isDialogOpen: boolean;
  onClose: () => void;
}

const ProfileDialog = ({ user, isDialogOpen, onClose }: ProfileDialogProps) => {
  return (
    <Dialog open={isDialogOpen} onOpenChange={onClose}>
      <DialogContent
        className="bg-gradient-to-r from-[#020817] to-[#07122B] text-white rounded-lg p-6 max-w-lg mx-auto shadow-xl"
        // initial={{ opacity: 0, scale: 0.95 }}
        // animate={{ opacity: 1, scale: 1 }}
        // exit={{ opacity: 0, scale: 0.95 }}
        // transition={{ duration: 0.3 }}
      >
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-semibold">Profile Information</DialogTitle>
        </DialogHeader>

        <DialogDescription>
          <div className="flex gap-4 items-center py-4">
            <Avatar className="rounded-full border-2 border-gray-600">
              <AvatarImage
                src={user?.profilePicture ?? " "}
                width={80}
                height={80}
                alt={user?.name ?? "User Avatar"}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xl font-medium text-gray-200">{user?.name ?? "Guest"}</p>
              <p className="text-sm text-gray-400">{user?.email ?? "user@example.com"}</p>
            </div>
          </div>

          <hr className="border-gray-500 my-4" />

          <div className="py-4">
            <div className="flex justify-between items-center">
              {/* <span className="text-xl text-gray-300">Credits</span> */}
              {user?.credits}
              <p className="text-sm text-gray-500 font-semibold">{user?.tokens}/5000</p>
            </div>

            <Progress
              value={0}
              className="bg-gradient-to-r from-[#020817] to-[#07122B] h-2 rounded-lg mt-2"
            />

            <div className="flex justify-between pt-5 items-center">
              <h3 className="text-lg text-gray-300">Current Plan</h3>
              <Badge className="text-sm text-white bg-gray-600">Free</Badge>
            </div>

            {/* Subscription Box */}
            <div className="border-2 my-5 p-4 rounded-lg border-gray-600">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg text-gray-300">Subscription</h3>
                  <p className="text-sm text-gray-500">Unlimited Access</p>
                </div>
                <div className="text-xl font-semibold text-gray-300">$30 / month</div>
              </div>
              <div className="mt-3">
                <hr className="border-gray-500" />
              </div>
              <div className="mt-6">
                <Button className="w-full text-lg py-2 bg-gradient-to-r from-[#020817] to-[#07122B] hover:scale-105 transition-all ease-in-out duration-300">
                  Upgrade Plan
                </Button>
              </div>
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;
