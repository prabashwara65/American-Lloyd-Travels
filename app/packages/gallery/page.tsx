import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "../../components/PageIntro";

const galleryImages = [
  ["/assets/img1.jpeg", "Island mornings"],
  ["/assets/img2.jpeg", "Open horizons"],
  ["/assets/img4.jpeg", "City discoveries"],
  ["/assets/img5.jpeg", "Quiet escapes"],
  ["/assets/img6.jpeg", "A change of pace"],
  ["/assets/img7.jpeg", "Memories in the making"],
] as const;

export default function GalleryPage() {
  return (
    <main className="w-full flex-grow">
      <PageIntro
        eyebrow="The gallery"
        title="A glimpse of what is waiting."
        description="Find inspiration for your next holiday through places, moments, and experiences selected by our travel team."
        image="/assets/img5.jpeg"
      />
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="mb-10 flex items-center justify-between gap-5">
          <h2 className="font-serif text-4xl font-normal text-[#15233d] sm:text-5xl">Travel inspiration</h2>
          <Link href="/packages" className="text-sm font-bold uppercase tracking-wide text-[#2f5ebb] underline underline-offset-8">All packages</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map(([src, title]) => (
            <figure className="group relative aspect-[4/3] overflow-hidden bg-slate-100" key={src}>
              <Image src={src} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-5 pt-12 text-lg font-serif text-white">{title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
