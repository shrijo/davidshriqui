import { createClient } from "@/prismicio";
import BlogPostPreview from "../components/BlogPostPreview/BlogPostPreview";

export default async function Blog() {
  const client = createClient();
  const content = await client.getSingle("blog");
  const blogPosts = await client.getAllByType("blog_post");

  return (
    <div>
      <h1 className="text-8xl my-8 mx-8">{content.data.page_title}</h1>
      <p className="text-4xl my-4 mx-8">{content.data.page_lead}</p>
      <div>
        {blogPosts.map((post) => (
          <BlogPostPreview post={post} />
        ))}
      </div>
    </div>
  );
}
