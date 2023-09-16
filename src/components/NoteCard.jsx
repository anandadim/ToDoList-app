"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const NoteCard = ({ content, id }) => {
  const router = useRouter();
  const [NewContent, SetNewContent] = useState(content);
  const [editMode, setEditMode] = useState(false);

  async function handlingDeleteNote() {
    await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "DELETE",
      }
    );

    router.refresh();
  }

  async function handlingUpdateNote() {
    const res = await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: NewContent }),
      }
    );
    const data = await res.json();
    setEditMode(false);
    router.refresh();
  }

  return (
    <div className="flex justify-between border-3 p-3 rounded-lg shadow space-x-4 text-center text-just bg-green-200">
      {editMode ? (
        <input
          value={NewContent || content}
          onChange={(e) => SetNewContent(e.target.value)}
        />
      ) : (
        <div>{content}</div>
      )}

      <div className="flex gap-4">
        {editMode ? (
          <button onClick={handlingUpdateNote} className="w-20">
            Add
          </button>
        ) : (
          <button onClick={() => setEditMode(true)} className="w-20">
            Edit
          </button>
        )}

        <button className="w-20" onClick={handlingDeleteNote}>
          Delete
        </button>
      </div>
    </div>
  );
};
