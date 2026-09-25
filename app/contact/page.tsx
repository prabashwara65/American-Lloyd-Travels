import { PageIntro } from "../components/PageIntro";

export default function ContactPage() {
  return (
    <main className="w-full flex-grow">
      <PageIntro
        eyebrow="Let’s get you there"
        title="Start planning your next journey."
        description="Whether you know exactly where you want to go or need a little inspiration, our team is ready to help."
        image="/assets/img2.jpeg"
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[.75fr_1.25fr] lg:px-16">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#2f5ebb]">Contact us</p>
          <h2 className="font-serif text-4xl font-normal leading-tight text-[#15233d] sm:text-5xl">A real person is ready to help.</h2>
          <div className="mt-8 space-y-5 text-slate-600">
            <p><span className="block text-xs font-bold uppercase tracking-widest text-[#c5a568]">Call</span><a className="mt-1 inline-block text-lg text-[#15233d] hover:text-[#2f5ebb]" href="tel:+94112345790">+94 112 345790</a></p>
            <p><span className="block text-xs font-bold uppercase tracking-widest text-[#c5a568]">Email</span><a className="mt-1 inline-block text-lg text-[#15233d] hover:text-[#2f5ebb]" href="mailto:info@americanlloyd.com">info@americanlloyd.com</a></p>
          </div>
        </div>
        <form className="space-y-5 bg-[#f1f6f6] p-7 sm:p-10" action="mailto:info@americanlloyd.com" method="post" encType="text/plain">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-[#15233d]">Your name<input className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-[#2f5ebb]" name="name" required /></label>
            <label className="text-sm font-semibold text-[#15233d]">Email address<input className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-[#2f5ebb]" type="email" name="email" required /></label>
          </div>
          <label className="block text-sm font-semibold text-[#15233d]">How can we help?<textarea className="mt-2 min-h-36 w-full resize-y border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-[#2f5ebb]" name="message" required /></label>
          <button className="bg-[#2f5ebb] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1e4bb8]" type="submit">Send enquiry →</button>
        </form>
      </section>
    </main>
  );
}
