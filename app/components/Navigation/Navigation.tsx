import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import "./Navigation.css";

async function Navigation() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <nav className="bg-white dark:bg-black">
      <div className="nav-first-half">
        <a className="logo" href="/">
          {settings.data.title}
        </a>
      </div>
      <div className="nav-second-half">
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
        <ThemeSwitch />
      </div>
    </nav>
  );
}

export default Navigation;
