import { createClient } from "@/prismicio";

export default async function About() {
  const client = createClient();
  const content = await client.getSingle("about");
  return (
    <div>
      <h1 className="text-8xl">{content.data.page_title}</h1>
      <p className="text-4xl">{content.data.page_lead}</p>
    </div>
  );
}
