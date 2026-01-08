import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="text-gradient">Victoria Nayda</span>.
              <br />
              Designer, Illustrator
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              I spend a lot of time creating cool things
            </p>
            <Button
              variant="ghost"
              className="mt-8 gap-2 text-foreground hover:text-primary"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Play className="h-3 w-3" />
              </span>
              Read about my past
            </Button>
          </div>

          {/* Right image with decorative elements */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative dot patterns */}
            <div className="absolute -right-4 top-0 h-32 w-32 dot-pattern opacity-60" />
            <div className="absolute bottom-8 left-0 h-24 w-24 dot-pattern opacity-60 lg:left-8" />

            {/* Image with gradient border */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary via-primary/80 to-primary/40 blur-sm" />
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={heroPortrait}
                  alt="Victoria Nayda - Designer and Illustrator"
                  className="h-[400px] w-[320px] object-cover md:h-[480px] md:w-[380px]"
                />
              </div>
              {/* Gradient overlay on right edge */}
              <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-primary via-primary/60 to-primary/20 rounded-r-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
