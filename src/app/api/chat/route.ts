import { anthropic } from "@ai-sdk/anthropic";
import { streamText, convertToModelMessages } from "ai";
import { buildSystemPrompt } from "@/data/chat-system-prompt";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const modelMessages = await convertToModelMessages(messages);

  const result = streamText({
    model: anthropic("claude-opus-4-20250514"),
    system: buildSystemPrompt(),
    messages: modelMessages,
    maxOutputTokens: 8192,
  });

  return result.toUIMessageStreamResponse();
}
