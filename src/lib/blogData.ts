import matter from "gray-matter";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  date: string;
  tags: string[];
  readingTime: number;
  content: string;
}

// Import all markdown files from the posts directory
const postModules = import.meta.glob("/src/posts/*.md", { as: "raw", eager: true });

// Process the imported markdown files
export const blogPosts: BlogPost[] = Object.values(postModules).map((rawContent) => {
  const { data, content } = matter(rawContent);
  return {
    id: data.id,
    title: data.title,
    excerpt: data.excerpt,
    coverImage: data.cover,
    author: data.author,
    date: data.date,
    tags: data.tags,
    readingTime: data.readingTime,
    content: content,
  };
});

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.id === id);
};

export const searchPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getRelatedPosts = (currentId: string, tags: string[]): BlogPost[] => {
  return blogPosts
    .filter((post) => post.id !== currentId && post.tags.some((tag) => tags.includes(tag)))
    .slice(0, 3);
};
