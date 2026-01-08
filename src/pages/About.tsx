import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
    } else {
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
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="mb-6 text-lg text-muted-foreground">
            Hi, I'm Victoria Nayda — a designer and illustrator passionate about
            creating beautiful, meaningful experiences.
          </p>
          <p className="mb-6 text-muted-foreground">
            With over 10 years of experience in the creative industry, I've had
            the privilege of working with amazing clients and brands from around
            the world. My work spans illustration, branding, web design, and
            creative direction.
          </p>
          <p className="mb-6 text-muted-foreground">
            When I'm not designing, you'll find me exploring new coffee shops,
            reading about art history, or working on personal creative projects.
            I believe in the power of visual storytelling and strive to bring
            that philosophy to every project I take on.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="rounded-xl bg-card p-6">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="rounded-xl bg-card p-6">
              <p className="text-3xl font-bold text-primary">200+</p>
              <p className="text-sm text-muted-foreground">Projects Done</p>
            </div>
            <div className="rounded-xl bg-card p-6">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
