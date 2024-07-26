import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import "./Navigation.css";

async function Navigation() {
  const client = createClient();
  const settings = await client.getSingle("settings"); // UPDATE THE UID TO MATCH YOURS

  return (
    <nav>
      <p className="logo">{settings.data.title}</p>
      <div className="nav-links">
        {settings.data.navigation.map((item) => (
          <a key={item.navigation_link_title} field={item.navigation_link}>
            <p>{item.navigation_link_title}</p>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
