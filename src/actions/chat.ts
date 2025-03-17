// "use server";

// import { cookies } from "next/headers";

// const EDEN_AI_API_KEY = process.env.EDEN_AI_API_KEY;

// export async function chatWithEdenAI(userMessage: string, provider: string = "openai/gpt-4-turbo") {
//     if (!EDEN_AI_API_KEY) throw new Error("Eden AI API key is missing");

//     const url = "https://api.edenai.run/v2/multimodal/chat";
    
//     // Retrieve chat history from cookies (ensure it's awaited)
//     const cookiesStore = cookies();
//     const chatHistory = await cookiesStore.get("chat_history")?.value;
//     const history = chatHistory ? JSON.parse(chatHistory) : [];

//     // Add user message to conversation
//     history.push({
//         role: "user",
//         content: [{ type: "text", content: { text: userMessage } }]
//     });

//     const body = JSON.stringify({
//         providers: [provider],
//         messages: history,
//     });

//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             "Authorization": `Bearer ${EDEN_AI_API_KEY}`,
//             "Content-Type": "application/json"
//         },
//         body,
//     });

//     const result = await response.json();

//     if (!result.success) {
//         throw new Error("Failed to fetch AI response");
//     }

//     // Extract assistant response
//     const assistantReply = result[provider]?.generated_text ?? "I couldn't process your request.";

//     // Add assistant response to conversation history
//     history.push({
//         role: "assistant",
//         content: [{ type: "text", content: { text: assistantReply } }]
//     });

//     // Store updated history in cookies (await cookiesStore before using .set)
//     await cookiesStore.set("chat_history", JSON.stringify(history));

//     return assistantReply;
// }
