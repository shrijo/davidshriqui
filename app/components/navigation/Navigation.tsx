import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import "./Navigation.css";

async function Navigation() {
  const client = createClient();
  const settings = await client.getSingle("settings"); // UPDATE THE UID TO MATCH YOURS

  return (
    <nav>
      <a href="/" className="logo">
        {settings.data.title}
      </a>
      <ul className="nav-links">
        {/* Renders top-level links. */}
        {settings.data.navigation.map((item) => {
          return (
            <li key={item.navigation_link_title}>
              <PrismicNextLink field={item.navigation_link}>
                <p>{item.navigation_link_title}</p>
              </PrismicNextLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
