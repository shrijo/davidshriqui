import { createClient } from "@/prismicio";
import BlogPostPreview from "../components/BlogPostPreview/BlogPostPreview";

export default async function Blog() {
  const client = createClient();
  const content = await client.getSingle("blog");
  const blogPosts = await client.getAllByType("blog_post");

  return (
    <div>
      <h1>{content.data.page_title}</h1>
      <p>{content.data.page_lead}</p>
      <div>
        {blogPosts.map((post) => (
          <BlogPostPreview key={post.data.post_title} post={post} />
        ))}
      </div>
    </div>
  );
}
