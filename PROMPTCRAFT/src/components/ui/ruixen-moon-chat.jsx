"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ImageIcon,
  FileUp,
  MonitorIcon,
  CircleUserRound,
  ArrowUpIcon,
  Paperclip,
  Code2,
  Palette,
  Layers,
  Rocket,
} from "lucide-react";

function useAutoResizeTextarea({ minHeight, maxHeight }) {
  const textareaRef = useRef(null);

  const adjustHeight = useCallback(
    (reset) => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }
      textarea.style.height = `${minHeight}px`;
      const newHeight = Math.max(
        minHeight,
        Math.min(textarea.scrollHeight, maxHeight ?? Infinity)
      );
      textarea.style.height = `${newHeight}px`;
    },
    [minHeight, maxHeight]
  );

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = `${minHeight}px`;
    }
  }, [minHeight]);

  return { textareaRef, adjustHeight };
}

export default function RuixenMoonChat({ onSubmit, onQuickAction }) {
  const [message, setMessage] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 48,
    maxHeight: 150,
  });

  const hasMessage = message.trim().length > 0;

  const handleSubmit = () => {
    if (hasMessage && onSubmit) {
      onSubmit(message.trim());
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center"
      style={{
        backgroundImage:
          "url('https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_moon_2.png')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Centered title */}
      <div className="flex-1 w-full flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-white drop-shadow-sm">
            PromptCraft ✦
          </h1>
          <p className="mt-2 text-neutral-200">
            Engineer better AI prompts — just describe your task below.
          </p>
        </div>
      </div>

      {/* Input section */}
      <div className="w-full max-w-3xl mb-[20vh] px-4">
        <div className="relative bg-black/60 backdrop-blur-md rounded-xl border border-neutral-700">
          <Textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              adjustHeight();
            }}
            onKeyDown={handleKeyDown}
            placeholder="Describe what you need a prompt for..."
            className={cn(
              "w-full px-4 py-3 resize-none border-none",
              "bg-transparent text-white text-sm",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "placeholder:text-neutral-400 min-h-[48px]"
            )}
            style={{ overflow: "hidden" }}
          />

          <div className="flex items-center justify-between p-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-neutral-400 hover:text-white hover:bg-neutral-700"
            >
              <Paperclip className="w-4 h-4" />
            </Button>

            <Button
              onClick={handleSubmit}
              disabled={!hasMessage}
              className={cn(
                "flex items-center gap-1 px-3 py-2 rounded-lg transition-all",
                hasMessage
                  ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/40"
                  : "bg-neutral-700 text-neutral-400 cursor-not-allowed"
              )}
            >
              <ArrowUpIcon className="w-4 h-4" />
              <span className="sr-only">Generate prompt</span>
            </Button>
          </div>
        </div>

        {/* Quick action pills */}
        <div className="flex items-center justify-center flex-wrap gap-3 mt-6">
          <QuickAction
            icon={<Code2 className="w-4 h-4" />}
            label="Generate Code"
            onClick={() => onQuickAction?.("code")}
          />
          <QuickAction
            icon={<Rocket className="w-4 h-4" />}
            label="Launch App"
            onClick={() => onQuickAction?.("app")}
          />
          <QuickAction
            icon={<Layers className="w-4 h-4" />}
            label="UI Components"
            onClick={() => onQuickAction?.("ui")}
          />
          <QuickAction
            icon={<Palette className="w-4 h-4" />}
            label="Theme Ideas"
            onClick={() => onQuickAction?.("theme")}
          />
          <QuickAction
            icon={<CircleUserRound className="w-4 h-4" />}
            label="User Dashboard"
            onClick={() => onQuickAction?.("dashboard")}
          />
          <QuickAction
            icon={<MonitorIcon className="w-4 h-4" />}
            label="Landing Page"
            onClick={() => onQuickAction?.("landing")}
          />
          <QuickAction
            icon={<FileUp className="w-4 h-4" />}
            label="Upload Docs"
            onClick={() => onQuickAction?.("docs")}
          />
          <QuickAction
            icon={<ImageIcon className="w-4 h-4" />}
            label="Image Assets"
            onClick={() => onQuickAction?.("image")}
          />
        </div>
      </div>
    </div>
  );
}

function QuickAction({ icon, label, onClick }) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className="flex items-center gap-2 rounded-full border-neutral-700 bg-black/50 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-all"
    >
      {icon}
      <span className="text-xs">{label}</span>
    </Button>
  );
}
