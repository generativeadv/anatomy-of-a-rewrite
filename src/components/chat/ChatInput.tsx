"use client";

import { useRef, useCallback, type KeyboardEvent, type FormEvent } from "react";

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  onInputChange: (value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onStop: () => void;
}

export default function ChatInput({
  input,
  isLoading,
  onInputChange,
  onSubmit,
  onStop,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (input.trim() && !isLoading) {
          const form = e.currentTarget.closest("form");
          if (form) {
            form.requestSubmit();
          }
        }
      }
    },
    [input, isLoading]
  );

  const handleInput = useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  }, []);

  return (
    <form onSubmit={onSubmit} className="flex items-end gap-2 p-3 border-t border-stone-100">
      <textarea
        ref={textareaRef}
        value={input}
        onChange={(e) => {
          onInputChange(e.target.value);
          handleInput();
        }}
        onKeyDown={handleKeyDown}
        placeholder="Revise a section, compare versions, or annotate the playbook..."
        rows={1}
        className="flex-1 resize-none rounded-xl border border-stone-200 px-3.5 py-2.5 text-sm leading-relaxed placeholder:text-stone-400 focus:outline-none focus:border-stone-300 focus:ring-1 focus:ring-stone-200 transition-colors"
      />
      {isLoading ? (
        <button
          type="button"
          onClick={onStop}
          className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-stone-800 text-white hover:bg-stone-700 transition-colors cursor-pointer"
          aria-label="Stop generating"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="6" width="12" height="12" rx="1" />
          </svg>
        </button>
      ) : (
        <button
          type="submit"
          disabled={!input.trim()}
          className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-stone-800 text-white hover:bg-stone-700 disabled:bg-stone-300 disabled:cursor-not-allowed transition-colors cursor-pointer"
          aria-label="Send message"
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
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </button>
      )}
    </form>
  );
}
