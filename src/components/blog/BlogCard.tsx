import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt?: string;
  coverImage: string;
  author: string;
  date: string;
  tags: string[];
  variant?: "default" | "featured";
}

const BlogCard = ({
  id,
  title,
  excerpt,
  coverImage,
  author,
  date,
  tags,
  variant = "default",
}: BlogCardProps) => {
  const isFeatured = variant === "featured";

  return (
    <Link
      to={`/post/${id}`}
      className={`group block overflow-hidden rounded-xl bg-card transition-all duration-300 hover-lift ${
        isFeatured ? "h-full" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          isFeatured ? "h-48 md:h-56" : "h-40 md:h-48"
        }`}
      >
        <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Meta info */}
        <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{author}</span>
          <span>–</span>
          <span>{date}</span>
        </div>

        {/* Title */}
        <h3
          className={`font-semibold leading-snug transition-colors group-hover:text-primary ${
            isFeatured ? "text-lg md:text-xl" : "text-base md:text-lg"
          }`}
        >
          {title}
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {excerpt}
          </p>
        )}

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags && tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
