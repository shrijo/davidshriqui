import { createClient } from "@/prismicio";

export default async function Home() {
  const client = createClient();
  const content = await client.getSingle("home");
  return (
    <div>
      <h1>{content.data.page_title}</h1>
      <p>{content.data.page_lead}</p>
    </div>
  );
}
