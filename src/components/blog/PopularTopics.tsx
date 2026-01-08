import { Link } from "react-router-dom";
import blogFamily from "@/assets/blog-family.jpg";
import blogHobby from "@/assets/blog-hobby.jpg";
import blogInterior from "@/assets/blog-interior.jpg";
import blogKitchen from "@/assets/blog-kitchen.jpg";
import blogGarden from "@/assets/blog-garden.jpg";
import blogAutumn from "@/assets/blog-autumn.jpg";

const topics = [
  { name: "Family", image: blogFamily, slug: "family" },
  { name: "Hobby", image: blogHobby, slug: "hobby" },
  { name: "Interior", image: blogInterior, slug: "interior" },
  { name: "Kitchen", image: blogKitchen, slug: "kitchen" },
  { name: "Learn", image: blogGarden, slug: "learn" },
  { name: "Lifestyle", image: blogAutumn, slug: "lifestyle" },
];

const PopularTopics = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Popular Topics
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              to={`/topic/${topic.slug}`}
              className="group relative flex-shrink-0 overflow-hidden rounded-xl"
            >
              <div className="relative h-32 w-28 md:h-40 md:w-36">
                <img
                  src={topic.image}
                  alt={topic.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <span className="absolute bottom-3 left-3 text-sm font-medium text-foreground">
                  {topic.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTopics;
