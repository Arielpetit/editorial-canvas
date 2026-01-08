import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Clock, Facebook, Twitter, Linkedin, Copy } from "lucide-react";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { translations } from "@/lib/translations";
import { getPostById, getRelatedPosts, BlogPost as BlogPostType } from "@/lib/blogData";
import BlogCard from "@/components/blog/BlogCard";
import Sidebar from "@/components/blog/Sidebar";
import { toast } from "sonner";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const t = translations["en"];
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string; level: number }[]>([]);

  useEffect(() => {
    if (id) {
      const foundPost = getPostById(id);
      if (foundPost) {
        setPost(foundPost);
        setRelatedPosts(getRelatedPosts(id, foundPost.tags));
        
        // Extract headings for table of contents
        const content = foundPost.content;
        const headingRegex = /^(##|###)\s+(.+)$/gm;
        const headings: { id: string; text: string; level: number }[] = [];
        let match;
        while ((match = headingRegex.exec(content)) !== null) {
          const level = match[1].length;
          const text = match[2];
          const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
          headings.push({ id, text, level });
        }
        setTableOfContents(headings);
      } else {
        navigate("/");
      }
    }
  }, [id, navigate]);


  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || "";
    
    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, "_blank");
        break;
      case "linkedin":
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, "_blank");
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
        break;
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex gap-12">
        <Sidebar tableOfContents={tableOfContents} />
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.backToBlog}
        </Link>

        {/* Article header */}
        <article>
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="font-medium text-foreground">{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime} {t.readingTime}
              </span>
            </div>
          </header>

          {/* Cover image */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Content with sidebar */}
          <div className="flex gap-12">
            {/* Main content */}
            <div className="flex-1 prose prose-lg max-w-none">
              <ReactMarkdown rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}>{post.content}</ReactMarkdown>
            </div>

            {/* Share buttons */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    {t.sharePost}
                  </h4>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleShare("facebook")}
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleShare("twitter")}
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleShare("linkedin")}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleShare("copy")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-8">{t.relatedPosts}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <BlogCard
                  key={relatedPost.id}
                  id={relatedPost.id}
                  title={relatedPost.title}
                  excerpt={relatedPost.excerpt}
                  coverImage={relatedPost.coverImage}
                  author={relatedPost.author}
                  date={relatedPost.date}
                  tags={relatedPost.tags}
                />
              ))}
            </div>
          </section>
        )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
