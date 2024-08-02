import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import "./page.css";

export default async function Services() {
  const client = createClient();
  const content = await client.getSingle("work");
  console.log(content);
  return (
    <div>
      <h1>{content.data.page_title}</h1>
      <p className="lead-text">{content.data.page_description}</p>
      {content.data.projects.map((project) => (
        <div className="work-box" key={project.project_title}>
          <PrismicNextImage field={project.project_image} />
          <div>
            <h2>{project.project_title}</h2>
            <PrismicRichText field={project.project_description} />
            <div className="tags">
              <PrismicNextLink
                className="tag bg-black dark:bg-white text-white dark:text-black"
                field={project.project_type}
              >
                Link
              </PrismicNextLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
