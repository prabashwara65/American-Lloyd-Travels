import { PageIntro } from "../components/PageIntro";

export default function AboutPage() {
  return (
    <main className="w-full flex-grow">
      <PageIntro
        eyebrow="Since 1987"
        title="Travel expertise with a human touch."
        description="American Lloyd Travels Ltd helps people plan, book, and enjoy better journeys through experience, care, and thoughtful service."
        image="/assets/img8.jpeg"
      />
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#2f5ebb]">About American Lloyd</p>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#15233d] sm:text-5xl">A trusted starting point for journeys around the world.</h2>
          </div>
          <div className="space-y-5 leading-8 text-slate-600">
            <p>American Lloyd Travels is a forerunner in fully fledged BSP ticketing, specializing in business and leisure travel with IATA accreditation.</p>
            <p>Established in 1987, we use world-class technology and practical travel knowledge to help people plan and book from millions of travel options at the best prices.</p>
            <p>Our team brings professionalism, service efficiency, and a genuine understanding of what makes every journey different.</p>
          </div>
        </div>
        <div className="mt-16 grid gap-px bg-[#d9dfe7] sm:grid-cols-2">
          <article className="bg-[#f1f6f6] p-8 sm:p-10">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#c5a568]">Our vision</p>
            <p className="font-serif text-2xl leading-snug text-[#15233d]">To be the best one-stop solution provider for all your travel needs.</p>
          </article>
          <article className="bg-white p-8 sm:p-10">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#c5a568]">Our mission</p>
            <p className="font-serif text-2xl leading-snug text-[#15233d]">To create differentiated travel experiences that exceed expectations through professionalism, technology, and knowledge.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
