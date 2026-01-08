import { Link } from "react-router-dom";
import { blogPosts } from "@/lib/blogData";
import { Badge } from "@/components/ui/badge";

const TagCloud = () => {
  const allTags = blogPosts.flatMap((post) => post.tags);
  const uniqueTags = [...new Set(allTags)];

  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {uniqueTags.map((tag) => (
          <Link key={tag} to={`/tags/${tag.toLowerCase()}`}>
            <Badge variant="outline">{tag}</Badge>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagCloud;