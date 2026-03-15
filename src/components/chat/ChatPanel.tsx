"use client";

import { useRef, useEffect, useCallback, useState, type FormEvent } from "react";
import { useChat } from "@ai-sdk/react";
import { useChatContext } from "./ChatProvider";
import ChatMessage, { ThinkingIndicator } from "./ChatMessage";
import ChatInput from "./ChatInput";

const SUGGESTED_PROMPTS = [
  "Rewrite the Overview section in a more accessible tone",
  "Compare how Client Original and Opus 4.6 handled the FAQ section",
  "What are the biggest weaknesses in the Fergus v2 rewrite?",
  "Draft a cover note to send with the revised playbook",
];

/** Extract plain text from a UIMessage's parts array */
function getMessageText(message: { parts: Array<{ type: string; text?: string }> }): string {
  return message.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");
}

export default function ChatPanel() {
  const { isOpen, isMinimized, closeChat, toggleMinimize } = useChatContext();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");

  const {
    messages,
    sendMessage,
    status,
    stop,
    error,
    regenerate,
  } = useChat();

  const isLoading = status === "submitted" || status === "streaming";

  // Auto-scroll to bottom when new messages arrive or during streaming
  useEffect(() => {
    if (messagesEndRef.current && !isMinimized) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, status, isMinimized]);

  const handleSuggestedPrompt = useCallback(
    (prompt: string) => {
      sendMessage({ text: prompt });
    },
    [sendMessage]
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (input.trim() && !isLoading) {
        sendMessage({ text: input.trim() });
        setInput("");
      }
    },
    [input, isLoading, sendMessage]
  );

  // Show thinking indicator when loading and the last message is from the user
  const showThinking =
    status === "submitted" &&
    messages.length > 0 &&
    messages[messages.length - 1].role === "user";

  if (!isOpen) return null;

  // Minimized pill
  if (isMinimized) {
    return (
      <button
        onClick={toggleMinimize}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-stone-800 text-white shadow-lg hover:bg-stone-700 hover:shadow-xl transition-all duration-200 cursor-pointer"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
        <span className="text-sm font-medium">The Rewrite Desk</span>
        {messages.length > 0 && (
          <span className="w-2 h-2 rounded-full bg-amber-400" />
        )}
      </button>
    );
  }

  // Full chat panel
  return (
    <div className="fixed bottom-4 right-4 z-50 w-[420px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-2rem)] flex flex-col rounded-2xl border border-stone-200 bg-stone-50 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-stone-200 bg-white rounded-t-2xl">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-stone-800 text-white">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </div>
          <h2 className="text-sm font-semibold text-stone-800">
            The Rewrite Desk
          </h2>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={toggleMinimize}
            className="w-7 h-7 flex items-center justify-center rounded-md text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Minimize"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
          <button
            onClick={closeChat}
            className="w-7 h-7 flex items-center justify-center rounded-md text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
      >
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-stone-100 text-stone-400 mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-stone-700 mb-1">
              The Rewrite Desk
            </p>
            <p className="text-xs text-stone-400 mb-6 max-w-[260px]">
              Revise the playbook, compare versions, or annotate what works.
            </p>
            <div className="w-full space-y-2">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSuggestedPrompt(prompt)}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-xs text-stone-600 hover:border-stone-300 hover:bg-stone-50 hover:text-stone-800 transition-all duration-150 cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role as "user" | "assistant"}
                content={getMessageText(message)}
              />
            ))}
            {showThinking && <ThinkingIndicator />}
            {error && (
              <div className="flex justify-center">
                <div className="px-4 py-2.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600">
                  Something went wrong.{" "}
                  <button
                    onClick={() => regenerate()}
                    className="underline hover:text-red-800 cursor-pointer"
                  >
                    Try again
                  </button>
                </div>
              </div>
            )}
          </>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput
        input={input}
        isLoading={isLoading}
        onInputChange={setInput}
        onSubmit={handleSubmit}
        onStop={stop}
      />
    </div>
  );
}
