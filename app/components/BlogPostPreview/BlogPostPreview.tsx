import React, { Key } from "react";
import { createClient } from "@/prismicio";
import "./BlogPostPreview.css";
import { PrismicNextLink } from "@prismicio/next";
import { BlogPostDocument } from "@/prismicio-types";

interface BlogPostPreviewProps {
  post: BlogPostDocument;
}

async function BlogPostPreview(props: BlogPostPreviewProps) {
  const client = createClient();
  const post = await client.getByUID("blog_post", props.post.uid);
  return (
    <PrismicNextLink className="blog-post-preview" href={`/blog/${post.uid}`}>
      <div className="image-wrapper bg-slate-500 dark:bg-slate-100"></div>
      <div className="text-wrapper">
        <h2>{post.data.post_title}</h2>
        <p>{post.data.post_lead}</p>
      </div>
    </PrismicNextLink>
  );
}

export default BlogPostPreview;
