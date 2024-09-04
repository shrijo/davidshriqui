import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("contact");

  return (
    <div className="narrow">
      <h1>{page.data.page_title}</h1>
      <p className="lead-text">{page.data.page_lead}</p>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("services");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
