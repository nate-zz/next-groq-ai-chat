import { createGroq } from "@ai-sdk/groq";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const groq = createGroq({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_AI_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: groq("llama-3.1-8b-instant"),
    messages,
  });
  return result.toDataStreamResponse();
}
