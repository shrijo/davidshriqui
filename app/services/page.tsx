import { createClient } from "@/prismicio";

export default async function Services() {
  const client = createClient();
  const content = await client.getSingle("services");
  const services = await client.getAllByType("service");
  return (
    <div>
      <h1>{content.data.page_title}</h1>
      <p>{content.data.page_lead}</p>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h2>{service.data.service_title}</h2>
            <p>{service.data.service_description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
