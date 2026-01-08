import BlogCard from "./BlogCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/lib/blogData";

const FeaturedPosts = () => {
  const { t, language } = useLanguage();
  const featuredPosts = blogPosts.slice(0, 4);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {t("featuredPosts")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPosts.map((post) => (
            <BlogCard 
              key={post.id} 
              id={post.id}
              title={post.title[language]}
              excerpt={post.excerpt[language]}
              coverImage={post.coverImage}
              author={post.author}
              date={post.date}
              tags={post.tags}
              variant="featured" 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
