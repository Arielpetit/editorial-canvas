import HeroSection from "@/components/blog/HeroSection";
import FeaturedPosts from "@/components/blog/FeaturedPosts";
import PreviousPosts from "@/components/blog/PreviousPosts";
import PopularTopics from "@/components/blog/PopularTopics";
import FooterWidgets from "@/components/blog/FooterWidgets";

const Index = () => {
  return (
    <>
      <HeroSection />
      <FeaturedPosts />
      <PreviousPosts />
      <PopularTopics />
      <FooterWidgets />
    </>
  );
};

export default Index;
