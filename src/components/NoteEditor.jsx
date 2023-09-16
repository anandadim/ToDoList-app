"use client";
// perlu use client utk mnenggunakan state

import { NoteCard } from "./NoteCard";
import { NoteInput } from "./NoteInput";

export const NoteEditor = ({ NoteData }) => {
  return (
    <div className="space-y-6 border-lime-800">
      <NoteInput />
      <div className="space-y-3">
        {NoteData.map(({ content, id }) => {
          return <NoteCard key={id} content={content} id={id} />;
        })}
      </div>
    </div>
  );
};
