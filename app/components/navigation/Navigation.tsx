import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import "./Navigation.css";

async function Navigation() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <nav>
      <p className="logo">{settings.data.title}</p>
      <div className="nav-links">
        {settings.data.navigation.map((item) => (
          <PrismicNextLink
            key={item.navigation_link_title}
            field={item.navigation_link}
          >
            <p>{item.navigation_link_title}</p>
          </PrismicNextLink>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
