import { createClient } from "@/prismicio";

export default async function About() {
  const client = createClient();
  const content = await client.getSingle("about");
  return (
    <div>
      <h1>{content.data.page_title}</h1>
      <p className="lead-text">{content.data.page_lead}</p>
    </div>
  );
}
