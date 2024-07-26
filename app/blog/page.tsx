import { createClient } from "@/prismicio";

export default async function Blog() {
  const client = createClient();
  const content = await client.getSingle("blog");
  const blogPosts = await client.getAllByType("blog_post");

  return (
    <div>
      <h1 className="text-8xl">{content.data.page_title}</h1>
      <p className="text-4xl">{content.data.page_lead}</p>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <h2 className="text-8xl">{post.data.post_title}</h2>
            <p className="text-4xl">{post.data.post_lead}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
