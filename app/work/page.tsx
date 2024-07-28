import { Metadata } from "next";
import { createClient } from "@/prismicio";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("work");

  return (
    <div>
      <h1>{page.data.page_title}</h1>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("work");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
