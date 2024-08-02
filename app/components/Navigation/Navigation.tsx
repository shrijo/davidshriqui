import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import "./Navigation.css";
import Menu from "@geist-ui/icons/menu";
import Cross from "@geist-ui/icons/x";

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
        <input type="checkbox" id="sidebar-active" />
        <div className="nav-links">
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <Cross />
          </label>
          {settings.data.navigation.map((item) => (
            <PrismicNextLink
              key={item.navigation_link_title}
              field={item.navigation_link}
            >
              <p>{item.navigation_link_title}</p>
            </PrismicNextLink>
          ))}
          <div className="toggle-theme">
            <ThemeSwitch />
          </div>
        </div>

        <label htmlFor="sidebar-active" className="open-sidebar-button">
          <Menu />
        </label>
      </div>
    </nav>
  );
}

export default Navigation;
