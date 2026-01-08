import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/blog/HeroSection";
import FeaturedPosts from "@/components/blog/FeaturedPosts";
import PreviousPosts from "@/components/blog/PreviousPosts";
import PopularTopics from "@/components/blog/PopularTopics";
import FooterWidgets from "@/components/blog/FooterWidgets";

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved preference or default to dark
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      // Default to dark
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

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

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <FeaturedPosts />
        <PreviousPosts />
        <PopularTopics />
        <FooterWidgets />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
