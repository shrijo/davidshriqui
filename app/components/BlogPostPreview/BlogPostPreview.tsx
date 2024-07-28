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
    <div className="blog-post-preview">
      <PrismicNextLink href={`/blog/${post.uid}`}>
        <h2>{post.data.post_title}</h2>
        <p>{post.data.post_lead}</p>
      </PrismicNextLink>
    </div>
  );
}

export default BlogPostPreview;
