import { NextRequest, NextResponse } from "next/server";

interface Message {
  role: "user" | "assistant";
  text: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { message, previousMessages = [] }: { message: string; previousMessages: Message[] } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Missing message" }, { status: 400 });
    }

    const AI_API_URL = "https://api.edenai.run/v2/multimodal/chat";
    const API_KEY = process.env.EDEN_AI_KEY;

    if (!API_KEY) {
      return NextResponse.json({ error: "Missing AI API key" }, { status: 500 });
    }

    const formattedMessages = previousMessages.map((msg) => ({
      role: msg.role,
      content: [{ type: "text", content: { text: msg.text } }],
    }));

    formattedMessages.push({
      role: "user",
      content: [{ type: "text", content: { text: message } }],
    });

    const body = JSON.stringify({
      providers: ["google/gemini-1.5-flash"],
      messages: formattedMessages,
    });

    console.log("🔹 Sending request to AI API:", body);

    const response = await fetch(AI_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body,
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    console.log("🔹 AI API Response:", result);

    const reply = result?.["google/gemini-1.5-flash"]?.generated_text || "Sorry, I couldn't understand.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json({ reply: "An error occurred. Try again later." }, { status: 500 });
  }
}
