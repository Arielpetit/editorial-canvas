import BlogCard from "./BlogCard";
import blogSpices from "@/assets/blog-spices.jpg";
import blogPerson from "@/assets/blog-person.jpg";
import blogFamily from "@/assets/blog-family.jpg";
import blogInterior from "@/assets/blog-interior.jpg";

const featuredPosts = [
  {
    id: "1",
    title: "What you do speaks so loudly that I cannot hear what you say",
    coverImage: blogSpices,
    author: "Victoria Nayda",
    date: "7 Nov, 2022",
    tags: ["Workflow", "Hobby"],
  },
  {
    id: "2",
    title: "Remember that happiness is a way of travel, not a destination",
    coverImage: blogPerson,
    author: "Victoria Nayda",
    date: "24 Apr, 2022",
    tags: ["Story", "Lifestyle"],
  },
  {
    id: "3",
    title: "If you cannot do great things, do small things in a great way",
    coverImage: blogFamily,
    author: "Victoria Nayda",
    date: "23 Apr, 2022",
    tags: ["Family", "Notes"],
  },
  {
    id: "4",
    title: "A journey of a thousand leagues begins beneath one's feet",
    coverImage: blogInterior,
    author: "Victoria Nayda",
    date: "29 Mar, 2022",
    tags: ["Interior", "Design"],
  },
];

const FeaturedPosts = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Featured Posts
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} {...post} variant="featured" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
