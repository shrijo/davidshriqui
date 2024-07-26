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
        {settings.data.navigation.map((item) => {
          return (
            <div key={item.navigation_link_title}>
              <PrismicNextLink field={item.navigation_link}>
                <p>{item.navigation_link_title}</p>
              </PrismicNextLink>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Navigation;
