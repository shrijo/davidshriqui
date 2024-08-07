import { createClient } from "@/prismicio";
import "./page.css";

export default async function About() {
  const client = createClient();
  const content = await client.getSingle("about");
  return (
    <div>
      <h1>{content.data.page_title}</h1>
      <p className="lead-text">{content.data.page_lead}</p>
      <h2>{content.data.values_main_title}</h2>
      <div className="values_wrapper">
        {content.data.values.map((value) => (
          <div
            className="value_box border-solid border-black dark:border-white"
            key={value.value_title}
          >
            <h2>{value.value_title}</h2>
            <h3>{value.value_subtitle}</h3>
            <p>{value.value_text}</p>
          </div>
        ))}
      </div>
      <h2>{content.data.cv_main_title}</h2>
      <ul className="cv_wrapper">
        {content.data.curriculum_vitae.map((cv) => (
          <li className="cv_entry" key={cv.job}>
            {cv.job}
          </li>
        ))}
      </ul>
      <h2>{content.data.education_main_title}</h2>
      <ul className="education_wrapper">
        {content.data.education.map((edu) => (
          <li key={edu.education_title}>{edu.education_title}</li>
        ))}
      </ul>
    </div>
  );
}
