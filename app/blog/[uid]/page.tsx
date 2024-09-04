import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";

import "./page.css";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  console.log(page.data.post_chapters);

  return (
    <div>
      <div className="narrow">
        <a href="/blog">Back to blog</a>
        <h1>{page.data.post_title}</h1>
        <PrismicNextImage
          field={page.data.post_preview_image}
        ></PrismicNextImage>

        <PrismicRichText field={page.data.post_content}></PrismicRichText>
        <div className="content-layout">
          <div className="content-left">
            {page.data.post_chapters && page.data.post_chapters.length > 0 && (
              <>
                <h4>Inhaltsverzeichnis:</h4>
                <ul className="table-of-contents">
                  {page.data.post_chapters.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        href={`#chapter-${index}`}
                        className="table-of-contents-link"
                      >
                        {item.post_chapter_title}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="content-right">
            {page.data.post_chapters.map((item: any, index: any) => (
              <div
                className="chapter-wrapper"
                id={`chapter-${index}`}
                key={index}
              >
                <h3>{item.post_chapter_title}</h3>
                <PrismicRichText field={item.post_chapter_text} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blog_post");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
