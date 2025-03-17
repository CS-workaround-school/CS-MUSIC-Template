"use client";
import { useState } from "react";
import html2canvas from "html2canvas";
import "./globals.css";

export default function Home() {
  const [inputText, setInputText] = useState<string>("I AM MUSIC");

  const downloadImage = async () => {
    const element = document.getElementById("cover");
    if (!element) return;
    const canvas = await html2canvas(element);
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "album_cover.png";
    link.click();
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-swiss911 mb-4 text-3xl">I AM MUSIC GENERATOR</h1>

      {/* Album Cover */}
      <div
        id="cover"
        className="relative inline-flex h-[400px] w-[400px] items-center justify-center border-2 bg-white shadow-lg"
      >
        {/* <span className="font-optispire background-text font-hairline absolute text-6xl">
          {inputText.toUpperCase()}
        </span>

        <span className="font-swiss911 font-hairline foreground-text text-6xl">
          {inputText.toUpperCase()}
        </span> */}
        {inputText.split("").map((char, index) => (
          <div key={index} className="relative mr-3">
            <span className="font-optispire absolute top-[48%] left-1/2 origin-center -translate-x-1/2 -translate-y-1/2 scale-x-[2.4] scale-y-[2.2] text-5xl leading-1 font-light">
              {char === " " ? (
                <span className="whitespace-pre"> </span>
              ) : (
                char.toUpperCase()
              )}
            </span>
            <div className="relative inline-flex origin-center translate-x-0.5 scale-x-[3] items-center justify-center">
              <span className="font-swiss911 relative origin-center scale-x-[0.45] scale-y-[0.9] text-5xl font-bold">
                {char === " " ? (
                  <span className="whitespace-pre"> </span>
                ) : (
                  char.toUpperCase()
                )}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <input
        type="text"
        maxLength={20}
        placeholder="I AM MUSIC"
        className="mt-4 rounded-sm border-2 px-2 py-1 focus:ring-1 focus:ring-black focus:outline-none"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />

      {/* Save Button */}
      <button
        className="mt-4 rounded-sm bg-black px-4 py-2 text-white"
        onClick={downloadImage}
      >
        SAVE
      </button>
    </div>
  );
}
