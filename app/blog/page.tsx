import { createClient } from "@/prismicio";
import BlogPostPreview from "../components/BlogPostPreview/BlogPostPreview";
import { PrismicRichText } from "@prismicio/react";
import "./page.css";

export default async function Blog() {
  const client = createClient();
  const content = await client.getSingle("blog");
  const blogPosts = await client.getAllByType("blog_post");

  return (
    <div className="page narrow">
      <h1>{content.data.page_title}</h1>
      <PrismicRichText field={content.data.blog_lead} />
      <div className="posts-wrapper">
        <div className="posts-grid">
          {blogPosts.map((post) => (
            <BlogPostPreview key={post.data.post_title} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
