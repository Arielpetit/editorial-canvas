import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {t("heroGreeting")}
              <br />
              <span className="text-gradient">{t("heroTitle")}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {t("heroDescription")}
            </p>
            <Button variant="ghost" className="mt-8 gap-2 text-foreground hover:text-primary">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Play className="h-3 w-3" />
              </span>
              {t("heroCta")}
            </Button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -right-4 top-0 h-32 w-32 dot-pattern opacity-60" />
            <div className="absolute bottom-8 left-0 h-24 w-24 dot-pattern opacity-60 lg:left-8" />
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary via-primary/80 to-primary/40 blur-sm" />
              <div className="relative overflow-hidden rounded-xl">
                <img src={heroPortrait} alt="Victoria Nayda" className="h-[400px] w-[320px] object-cover md:h-[480px] md:w-[380px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
