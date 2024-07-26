"use client";

import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";

async function Navigation() {
  const client = createClient();
  const settings = await client.getSingle("settings"); // UPDATE THE UID TO MATCH YOURS

  return (
    <nav>
      <h1>{settings.data.title}</h1>
      <ul className="inline-flex">
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
