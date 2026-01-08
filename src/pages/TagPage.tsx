import { useParams } from "react-router-dom";
import { blogPosts } from "@/lib/blogData";
import BlogCard from "@/components/blog/BlogCard";
const TagPage = () => {
  const { tag } = useParams();
  const filteredPosts = blogPosts.filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag)
  );

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-3xl font-bold capitalize">
          Posts tagged: {tag}
        </h1>
        {filteredPosts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                coverImage={post.coverImage}
                author={post.author}
                date={post.date}
                tags={post.tags}
              />
            ))}
          </div>
        ) : (
          <p>No posts found with this tag.</p>
        )}
      </div>
    </section>
  );
};

export default TagPage;