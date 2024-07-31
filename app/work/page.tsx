import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";

import "./page.css";

export default async function Services() {
  const client = createClient();
  const content = await client.getSingle("work");
  return (
    <div>
      <h1>{content.data.page_title}</h1>
      <p className="lead-text">{content.data.page_description}</p>
      {content.data.projects.map((project) => (
        <div className="work-box" key={project.project_title}>
          <h2>{project.project_title}</h2>
          <PrismicRichText field={project.project_description} />
          {/* <PrismicRichText field={service.data.service_description} /> */}
        </div>
      ))}
    </div>
  );
}
