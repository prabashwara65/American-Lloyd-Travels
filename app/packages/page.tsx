import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { services } from "../data/home";

export default function PackagesPage() {
  return (
    <main className="w-full flex-grow">
      <PageIntro
        eyebrow="Go further"
        title="Packages made for your kind of travel."
        description="From quick escapes to carefully planned adventures, choose a journey that fits the way you want to see the world."
        image="/assets/img3.jpeg"
      />
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#2f5ebb]">Travel, thoughtfully arranged</p>
            <h2 className="font-serif text-4xl font-normal text-[#15233d] sm:text-5xl">Explore our packages</h2>
          </div>
          <Link href="/packages/gallery" className="text-sm font-bold uppercase tracking-wide text-[#2f5ebb] underline underline-offset-8">View gallery <span className="ml-2 text-lg">↗</span></Link>
        </div>
        <div className="grid gap-px bg-[#d9dfe7] sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([number, title, text]) => (
            <article className="min-h-56 bg-white p-7 transition-colors hover:bg-[#f1f6f6]" key={number}>
              <span className="text-sm font-serif text-[#c5a568]">{number}</span>
              <h3 className="mt-8 font-serif text-2xl font-normal text-[#15233d]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              <Link href="/contact" className="mt-7 inline-block text-xs font-bold uppercase tracking-wide text-[#2f5ebb]">Plan this journey →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
