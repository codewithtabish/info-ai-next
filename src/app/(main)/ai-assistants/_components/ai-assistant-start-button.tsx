"use client";

import { useState } from "react";
import { createAIAssistants } from "@/actions/assistants";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/provider/main-provider";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const AIASSISTANTSTARTBUTTON = () => {
  const { selectedAssistants } = useUserContext();
  const [loading, setLoading] = useState(false);
  const router=useRouter()

  const handleAssistantCreation = async () => {
    if (selectedAssistants.length === 0 || loading) return;

    setLoading(true);
    try {
      const response = await createAIAssistants(selectedAssistants);

      if (response.success) {
        toast.success("AI Assistants created successfully!");
        router.replace("/ai-workspace");

      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Unexpected error occurred. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      className="md:w-36 w-full flex items-center justify-center gap-2 cursor-pointer bg-[#020817] text-white disabled:opacity-50"
      variant="outline"
      disabled={selectedAssistants.length === 0 || loading}
      onClick={handleAssistantCreation}
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin w-5 h-5" />
          Processing...
        </>
      ) : (
        "Start"
      )}
    </Button>
  );
};

export default AIASSISTANTSTARTBUTTON;
