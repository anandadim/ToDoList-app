import { NoteEditor } from "@/components/NoteEditor";

async function getPlayer() {
  const response = await fetch(
    "https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='dimas@grock.com')",
    {
      cache: "no-cache",
    }
  );
  const data = await response.json();
  return data;
}

export default async function Page() {
  const { items } = await getPlayer();
  return <NoteEditor NoteData={items} />;
}
