import { getGallery } from "@/lib/data";
import { PageHero } from "@/components/pages/PageHero";
import { MarmilixImage } from "@/components/ui/MarmilixImage";

const gallery = getGallery();

export default function GalleryPage() {
  return (
    <>
      <PageHero title={gallery.title} subtitle={gallery.subtitle} />
      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-3 md:gap-6 md:px-6 lg:grid-cols-4">
          {gallery.images.map((image) => (
            <div key={image.id} className="relative aspect-square overflow-hidden rounded-xl bg-stone-100 shadow-sm">
              <MarmilixImage src={image.src} alt={image.alt} fill />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
