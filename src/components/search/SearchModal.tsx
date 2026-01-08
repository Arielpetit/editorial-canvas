import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { searchPosts, BlogPost } from "@/lib/blogData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<BlogPost[]>([]);
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 1) {
      const searchResults = searchPosts(query, language);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query, language]);

  const handleSelect = (postId: string) => {
    onClose();
    setQuery("");
    navigate(`/post/${postId}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 gap-0">
        <div className="flex items-center border-b border-border px-4">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="border-0 focus-visible:ring-0 text-lg h-14"
            autoFocus
          />
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-md">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="max-h-96 overflow-y-auto p-2">
          {query.length > 1 && results.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">
              {t("noResults")}
            </div>
          )}
          
          {results.map((post) => (
            <button
              key={post.id}
              onClick={() => handleSelect(post.id)}
              className="w-full text-left p-4 rounded-lg hover:bg-muted transition-colors flex gap-4"
            >
              <img
                src={post.coverImage}
                alt={post.title[language]}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium line-clamp-1">{post.title[language]}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {post.excerpt[language]}
                </p>
                <div className="flex gap-2 mt-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
