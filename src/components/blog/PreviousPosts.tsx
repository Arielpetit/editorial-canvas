import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "./BlogCard";
import blogAutumn from "@/assets/blog-autumn.jpg";
import blogGarden from "@/assets/blog-garden.jpg";
import blogInterior from "@/assets/blog-interior.jpg";

const previousPosts = [
  {
    id: "5",
    title: "Strive not to be a success, but rather to be of value",
    excerpt:
      "Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur...",
    coverImage: blogAutumn,
    author: "Victoria Nayda",
    date: "10 November, 2022",
    tags: ["Technology", "Story"],
  },
  {
    id: "6",
    title: "Everything has beauty, but not everyone can see",
    excerpt:
      "Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur...",
    coverImage: blogGarden,
    author: "Victoria Nayda",
    date: "9 November, 2022",
    tags: ["Workflow", "Story", "Rest"],
  },
  {
    id: "7",
    title: "You never really learn much from hearing yourself speak",
    excerpt:
      "Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur...",
    coverImage: blogInterior,
    author: "Victoria Nayda",
    date: "8 November, 2022",
    tags: ["Notes", "Family", "Technology"],
  },
];

const PreviousPosts = () => {
  return (
    <section className="bg-card/50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Previous Posts
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {previousPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button variant="outline" size="sm" className="gap-1" disabled>
            <ChevronLeft className="h-4 w-4" />
            Prev
          </Button>
          <span className="text-sm text-muted-foreground">Page 1 of 3</span>
          <Button variant="outline" size="sm" className="gap-1">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PreviousPosts;
