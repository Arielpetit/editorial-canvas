import { Link } from "react-router-dom";
import { blogPosts } from "@/lib/blogData";

const RecentPosts = () => {
  const recentPosts = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

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
                src={post.coverImage}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
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
