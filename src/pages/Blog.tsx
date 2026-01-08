import { useState } from "react";
import { translations } from "@/lib/translations";
import { blogPosts, BlogPost } from "@/lib/blogData";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const t = translations["en"];
  const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))];

  const filterByTag = (tag: string) => {
    if (tag === "all") {
      setPosts(blogPosts);
    } else {
      const filteredPosts = blogPosts.filter((post) => post.tags.includes(tag));
      setPosts(filteredPosts);
    }
  };

  const sortPosts = (order: "newest" | "oldest") => {
    const sortedPosts = [...posts].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return order === "newest" ? dateB - dateA : dateA - dateB;
    });
    setPosts(sortedPosts);
    setSortOrder(order);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold tracking-tight mb-8">{t.blog}</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto justify-between">
              <span>{t.filterByTopic}</span> <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full sm:w-56">
            <DropdownMenuItem onClick={() => filterByTag("all")}>
              {t.allTopics}
            </DropdownMenuItem>
            {allTags.map((tag) => (
              <DropdownMenuItem key={tag} onClick={() => filterByTag(tag)}>
                {tag}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto justify-between">
              <span>{t.sortByDate}</span> <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full sm:w-56">
            <DropdownMenuItem onClick={() => sortPosts("newest")}>
              {t.newest}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => sortPosts("oldest")}>
              {t.oldest}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
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
    </div>
  );
};

export default Blog;