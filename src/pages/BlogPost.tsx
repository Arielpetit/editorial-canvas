import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin, Copy } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPostById, getRelatedPosts, BlogPost as BlogPostType } from "@/lib/blogData";
import BlogCard from "@/components/blog/BlogCard";
import { toast } from "sonner";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [isDark, setIsDark] = useState(true);
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (id) {
      const foundPost = getPostById(id);
      if (foundPost) {
        setPost(foundPost);
        setRelatedPosts(getRelatedPosts(id, foundPost.tags));
        
        // Extract headings for table of contents
        const content = foundPost.content[language];
        const headingRegex = /^##\s+(.+)$/gm;
        const headings: { id: string; text: string }[] = [];
        let match;
        while ((match = headingRegex.exec(content)) !== null) {
          const text = match[1];
          const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
          headings.push({ id, text });
        }
        setTableOfContents(headings);
      } else {
        navigate("/");
      }
    }
  }, [id, language, navigate]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title[language] || "";
    
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

  const renderContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("## ")) {
        const text = line.replace("## ", "");
        const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
        return (
          <h2 key={index} id={id} className="text-2xl font-bold mt-10 mb-4 scroll-mt-24">
            {text}
          </h2>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-semibold mt-8 mb-3">
            {line.replace("### ", "")}
          </h3>
        );
      }
      if (line.startsWith("> ")) {
        return (
          <blockquote key={index} className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
            {line.replace("> ", "")}
          </blockquote>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="ml-6 list-disc text-muted-foreground">
            {line.replace("- ", "")}
          </li>
        );
      }
      if (/^\d+\.\s/.test(line)) {
        return (
          <li key={index} className="ml-6 list-decimal text-muted-foreground">
            {line.replace(/^\d+\.\s/, "")}
          </li>
        );
      }
      if (line.trim() === "") {
        return <br key={index} />;
      }
      return (
        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
          {line.replace(/\*\*(.+?)\*\*/g, (_, text) => `<strong class="text-foreground font-semibold">${text}</strong>`).split(/<strong class="text-foreground font-semibold">|<\/strong>/).map((part, i) => 
            i % 2 === 1 ? <strong key={i} className="text-foreground font-semibold">{part}</strong> : part
          )}
        </p>
      );
    });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToBlog")}
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
                {post.title[language]}
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="font-medium text-foreground">{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readingTime} {t("readingTime")}
                </span>
              </div>
            </header>

            {/* Cover image */}
            <div className="rounded-2xl overflow-hidden mb-12">
              <img
                src={post.coverImage}
                alt={post.title[language]}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Content with sidebar */}
            <div className="flex gap-12">
              {/* Main content */}
              <div className="flex-1 prose prose-lg max-w-none">
                {renderContent(post.content[language])}
              </div>

              {/* Table of contents - desktop only */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-24">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    {t("tableOfContents")}
                  </h4>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>

                  {/* Share buttons */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      {t("sharePost")}
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
              <h2 className="text-2xl font-bold mb-8">{t("relatedPosts")}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard
                    key={relatedPost.id}
                    id={relatedPost.id}
                    title={relatedPost.title[language]}
                    excerpt={relatedPost.excerpt[language]}
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
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
