"use client";

import Markdown from "react-markdown";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  if (role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-br-md bg-stone-800 text-white text-sm leading-relaxed">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start">
      <div className="max-w-[95%] px-4 py-2.5 rounded-2xl rounded-bl-md border border-stone-200 bg-white text-sm leading-relaxed prose prose-stone prose-sm max-w-none prose-p:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-0.5 prose-headings:mt-3 prose-headings:mb-1.5 prose-headings:text-sm prose-blockquote:my-2 prose-blockquote:text-stone-500">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}

export function ThinkingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="px-4 py-3 rounded-2xl rounded-bl-md border border-stone-200 bg-white">
        <div className="flex items-center gap-2 text-sm text-stone-400">
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-300 animate-[pulse_1.4s_ease-in-out_infinite]" />
            <span className="w-1.5 h-1.5 rounded-full bg-stone-300 animate-[pulse_1.4s_ease-in-out_0.2s_infinite]" />
            <span className="w-1.5 h-1.5 rounded-full bg-stone-300 animate-[pulse_1.4s_ease-in-out_0.4s_infinite]" />
          </div>
          <span className="italic">The Rewrite Desk is drafting&hellip;</span>
        </div>
      </div>
    </div>
  );
}
