import blogSpices from "@/assets/blog-spices.jpg";
import blogPerson from "@/assets/blog-person.jpg";
import blogFamily from "@/assets/blog-family.jpg";
import blogInterior from "@/assets/blog-interior.jpg";
import blogAutumn from "@/assets/blog-autumn.jpg";
import blogGarden from "@/assets/blog-garden.jpg";

const galleryImages = [
  { src: blogSpices, alt: "Colorful spices" },
  { src: blogPerson, alt: "Portrait" },
  { src: blogFamily, alt: "Family moment" },
  { src: blogInterior, alt: "Interior design" },
  { src: blogAutumn, alt: "Autumn scene" },
  { src: blogGarden, alt: "Garden" },
];

const Gallery = () => {
  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold">Gallery</h3>
      <div className="grid grid-cols-3 gap-2">
        {galleryImages.map((image, index) => (
          <button
            key={index}
            className="group relative aspect-square overflow-hidden rounded-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/20" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
