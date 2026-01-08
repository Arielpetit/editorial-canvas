import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import blogSpices from "@/assets/blog-spices.jpg";
import blogPerson from "@/assets/blog-person.jpg";

const recentPosts = [
  {
    id: "1",
    title: "That which does not kill us makes us stronger",
    date: "November 14, 2022",
    image: blogSpices,
    hasVideo: true,
  },
  {
    id: "2",
    title: "Do what you can, with what you have, where you are",
    date: "November 12, 2022",
    image: blogPerson,
    hasVideo: false,
  },
];

const RecentPosts = () => {
  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold">Recent Posts</h3>
      <div className="space-y-4">
        {recentPosts.map((post) => (
          <Link
            key={post.id}
            to={`/post/${post.id}`}
            className="group flex items-center gap-4"
          >
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {post.hasVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/30">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <Play className="h-3 w-3 text-primary-foreground" />
                  </div>
                </div>
              )}
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{post.date}</p>
              <h4 className="mt-1 text-sm font-medium leading-snug transition-colors group-hover:text-primary">
                {post.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
