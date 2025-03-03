"use client";

import Terminal from "./components/terminal";

export default function Page() {
  

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-2xl text-emerald-500 font-bold">Chat with AI</h1>
      <p>This terminal uses groq cloud to allow user to chat with llama-3.1.</p>
      <Terminal />
    </div>
  );
}
