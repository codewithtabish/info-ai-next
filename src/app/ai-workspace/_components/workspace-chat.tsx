"use client";
import Image from "next/image";
import { useUserContext } from "@/provider/main-provider";
import { SendHorizontal } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import EmptyChatState from "./empty-chat-state";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { updateUserTokenAction } from "@/actions/user";
import { User } from "@prisma/client";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";

const CHAT_STORAGE_KEY = "chat_history";

const WorkspaceChat = () => {
  const { assistant, selectedMessage, setSelectedMessage, setMainContextUser, mainContextUser } = useUserContext();
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [updatedUserData, setupdatedUserData] = useState<User | null>(null);

  useEffect(() => {
    const storedMessages = localStorage.getItem(CHAT_STORAGE_KEY);
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    if (!assistant) return;
    setMessages([]);
    localStorage.removeItem(CHAT_STORAGE_KEY);
  }, [assistant]);

  useEffect(() => {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (selectedMessage) {
      handleSendMessage(selectedMessage);
      setSelectedMessage(null);
    }
  }, [selectedMessage]);

  const handleSendMessage = async (msg?: string) => {
    const content = msg || message.trim();
    if (!content) return;
    const tokens = mainContextUser?.tokens;

    // @ts-ignore

    if (tokens <= 20) {
      return toast("You have no tokens left.");
    }

    setLoading(true);
    const userMessage = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);

    if (!msg) setMessage("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: content,
          previousMessages: messages.map((msg) => ({ role: msg.role, text: msg.content })),
        }),
      });

      const data = await response.json();
      updateUserToken(data.reply);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "An error occurred. Try again later." }]);
    }
    setLoading(false);
  };

  const updateUserToken = async (response: string) => {
    if (!response.trim()) return;
    const tokenCount = response.trim().split(/\s+/).length;
    const result = await updateUserTokenAction(tokenCount);

    if (result.success) {
      setMainContextUser(result?.user ?? null);
    } else {
      console.error("Error updating user tokens:", result.message);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#020817] text-white">
      <div className="p-4 border-b border-gray-700 bg-[#0A0F1F] text-lg font-semibold flex justify-between items-center">
        <span>{assistant ? assistant.name : "AI Assistant"}</span>
      </div>

      <div className="flex-1 p-6 pb-28 space-y-4 overflow-y-auto custom-scrollbar">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-end gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "assistant" && (
                <Image
                  src={assistant?.image || "https://avatar.iran.liara.run/public"}
                  alt="Assistant Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <div className={`p-3 rounded-lg max-w-[80%] ${msg.role === "user" ? "bg-blue-600 text-white" : "bg-gray-800 text-white"}`}>
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
              {msg.role === "user" && (
                <Image
                  src="https://avatar.iran.liara.run/public"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
            </motion.div>
          ))
        ) : (
          !loading && <EmptyChatState />
        )}

        {loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="flex items-center gap-2">
            <Image src={assistant?.image || "https://avatar.iran.liara.run/public"} alt="Assistant Avatar" width={40} height={40} className="rounded-full" />
            <Skeleton className="md:w-[70%] mx-auto h-8 bg-gray-700 rounded-md" />
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-700 bg-[#0A0F1F] flex items-center">
        <input
          ref={inputRef}
          type="text"
          className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg focus:outline-none"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={() => handleSendMessage()} className="ml-2 text-white">
          <SendHorizontal />
        </button>
      </div>
    </div>
  );
};

export default WorkspaceChat;