import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import "./page.css";

export default async function Services() {
  const client = createClient();
  const content = await client.getSingle("services");
  const services = await client.getAllByType("service");
  return (
    <div className="narrow">
      <h1>{content.data.page_title}</h1>
      <p className="lead-text">{content.data.page_lead}</p>
      <div className="services-wrapper">
        {services.map((service) => (
          <div
            className="service-block bg-gray-100 dark:bg-neutral-800"
            key={service.id}
          >
            <h2>{service.data.service_title}</h2>
            <PrismicRichText field={service.data.service_description} />
            {/* <PrismicRichText field={service.data.service_description} /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
