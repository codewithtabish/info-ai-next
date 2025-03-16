"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="flex min-h-screen max-h-screen bg-[#0d1117] text-white">
            {/* Sidebar - Assistant List */}
            <aside className="w-1/4 p-4 border-r border-gray-700 hidden md:flex flex-col">
                <Skeleton className="h-6 w-3/4 bg-gray-800 rounded-md mb-3" />
                <Skeleton className="h-10 w-full bg-gray-900 rounded-md mb-2" />
                <Skeleton className="h-10 w-full bg-gray-900 rounded-md mb-2" />
                <Skeleton className="h-10 w-full bg-gray-900 rounded-md mb-2" />
            </aside>

            {/* Main Chat Section */}
            <main className="flex-1 flex flex-col relative p-4">
                <Skeleton className="h-6 w-1/3 bg-gray-800 rounded-md mx-auto mb-4" />
                <Skeleton className="h-[70vh] w-full bg-gray-900 rounded-md" />
                <Skeleton className="h-12 w-full bg-gray-800 rounded-md mt-4" />
            </main>

            {/* Sidebar - Chat History */}
            <aside className="w-1/4 p-4 border-l border-gray-700 hidden lg:flex flex-col">
                <Skeleton className="h-6 w-3/4 bg-gray-800 rounded-md mb-3" />
                <Skeleton className="h-10 w-full bg-gray-900 rounded-md mb-2" />
                <Skeleton className="h-10 w-full bg-gray-900 rounded-md mb-2" />
                <Skeleton className="h-10 w-full bg-gray-900 rounded-md mb-2" />
            </aside>
        </div>
    );
}
