"use client";

import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import "./Navigation.css";

async function Navigation() {
  const client = createClient();
  const settings = await client.getSingle("settings"); // UPDATE THE UID TO MATCH YOURS

  return (
    <nav>
      <PrismicNextLink href="/" className="logo">
        {settings.data.title}
      </PrismicNextLink>
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
