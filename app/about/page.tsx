import { createClient } from "@/prismicio";

export default async function About() {
  const client = createClient();
  const content = await client.getSingle("about");
  return (
    <div>
      <h1>{content.data.page_title}</h1>
      <p className="lead-text">{content.data.page_lead}</p>
      {content.data.values.map((value) => (
        <div key={value.value_title}>
          <h2>{value.value_title}</h2>
          <h3>{value.value_subtitle}</h3>
          <p>{value.value_text}</p>
        </div>
      ))}
      <ul>
        {content.data.curriculum_vitae.map((cv) => (
          <li key={cv.job}>{cv.job}</li>
        ))}
        {content.data.education.map((edu) => (
          <li key={edu.education_title}>{edu.education_title}</li>
        ))}
      </ul>
    </div>
  );
}
