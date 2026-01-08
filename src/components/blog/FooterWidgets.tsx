import RecentPosts from "./RecentPosts";
import Newsletter from "./Newsletter";
import TagCloud from "./TagCloud";

const FooterWidgets = () => {
  return (
    <section className="border-t border-border bg-card py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Decorative pattern */}
        <div className="mb-10 h-4 w-full dot-pattern opacity-30" />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <RecentPosts />
          <TagCloud />
          <Newsletter />
        </div>

        {/* Decorative pattern */}
        <div className="mt-10 h-4 w-full dot-pattern opacity-30" />
      </div>
    </section>
  );
};

export default FooterWidgets;
