import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "./BlogCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/lib/blogData";

const PreviousPosts = () => {
  const { t, language } = useLanguage();
  const previousPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section className="bg-card/50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {t("previousPosts")}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {previousPosts.map((post) => (
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

        {/* Pagination */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button variant="outline" size="sm" className="gap-1" disabled>
            <ChevronLeft className="h-4 w-4" />
            {t("prev")}
          </Button>
          <span className="text-sm text-muted-foreground">{t("page")} 1 of 3</span>
          <Button variant="outline" size="sm" className="gap-1">
            {t("next")}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PreviousPosts;
