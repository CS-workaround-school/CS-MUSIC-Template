"use client";
import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState<string>("");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl">I AM MUSIC GENERATOR</h1>
      {inputText || "I AM MUSIC"}
      <input
        type="text"
        maxLength={20}
        placeholder="I AM MUSIC"
        className="border-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-black py-1 px-2"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button className="bg-black text-white px-4 py-2 rounded-sm mt-4">
        SAVE
      </button>
    </div>
  );
}
