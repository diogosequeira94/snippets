import { db } from "@/db";

export default async function Home() {
  const snippes = await db.snippet.findMany();

  const renderedSnippets = snippes.map((snippet) => {
    return <div key={snippet.id}>{snippet.title}</div>;
  });

  return (
    <div>
     {renderedSnippets}
    </div>
  );
}
