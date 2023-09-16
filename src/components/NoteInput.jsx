"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const NoteInput = () => {
  const router = useRouter();
  const [content, setContent] = useState("");

  async function handlingCreateNote() {
    const response = await fetch(
      "https://devscale-mockapi.fly.dev/api/collections/notes/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: content, user: "dimas@grock.com" }),
      }
    );
    const data = await response.json();
    setContent("");
    router.refresh();
  }

  return (
    <div className="text-xl text-center font-thin uppercase mb-2 ">
      <div className="flex gap-4">
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add your next task.."
        />
        <button className="w-20" onClick={handlingCreateNote}>
          Create
        </button>
      </div>
    </div>
  );
};
