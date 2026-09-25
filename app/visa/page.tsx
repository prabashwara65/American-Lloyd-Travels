import Link from "next/link";
import { PageIntro } from "../components/PageIntro";

const visaSteps = [
  ["01", "Tell us where you are going", "Share your destination, travel dates, and the purpose of your trip."],
  ["02", "Prepare with confidence", "Our team explains the requirements and helps you gather the right documents."],
  ["03", "Leave the details to us", "We guide your application from submission through to the next step."],
] as const;

export default function VisaPage() {
  return (
    <main className="w-full flex-grow">
      <PageIntro
        eyebrow="Travel with ease"
        title="Visa handling, made easy."
        description="Professional, friendly support for the paperwork that comes before the journey."
        image="/assets/img8.jpeg"
      />
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#2f5ebb]">A clearer way forward</p>
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#15233d] sm:text-5xl">More confidence before take-off.</h2>
          </div>
          <div className="space-y-7">
            {visaSteps.map(([number, title, text]) => (
              <article className="flex gap-5 border-b border-slate-200 pb-7" key={number}>
                <span className="font-serif text-lg text-[#c5a568]">{number}</span>
                <div><h3 className="text-xl font-semibold text-[#15233d]">{title}</h3><p className="mt-2 leading-7 text-slate-600">{text}</p></div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-14 bg-[#f1f6f6] p-8 sm:p-10">
          <h2 className="font-serif text-3xl text-[#15233d]">Ready to start?</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">Tell us about your plans and our travel consultants will help you understand the next steps.</p>
          <Link href="/contact" className="mt-6 inline-block bg-[#2f5ebb] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1e4bb8]">Contact our team →</Link>
        </div>
      </section>
    </main>
  );
}
