import React, { Key } from "react";
import { ReactNode } from "react"; // Add this line to import the ReactNode type
import { createClient } from "@/prismicio";
import "./BlogPostPreview.css";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { BlogPostDocument } from "@/prismicio-types";

interface BlogPostPreviewProps {
  post: BlogPostDocument;
}

async function BlogPostPreview(props: BlogPostPreviewProps) {
  const client = createClient();
  const post = await client.getByUID("blog_post", props.post.uid);
  return (
    <PrismicNextLink className="blog-post-preview" href={`/blog/${post.uid}`}>
      <div className="image-wrapper">
        <PrismicNextImage
          field={post.data.post_preview_image}
        ></PrismicNextImage>
      </div>
      <div className="text-wrapper">
        <h2>{post.data.post_title}</h2>
        <p>{post.data.post_lead}</p>
      </div>
    </PrismicNextLink>
  );
}

export default BlogPostPreview;
