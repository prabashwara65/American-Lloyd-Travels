import Image from "next/image";

export default function VisaAssistancePage() {
  return (
    <main className="w-full flex-grow bg-white text-slate-700">
      {/* Hero Banner Section */}
      <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden">
        <Image
          src="/assets/visa/img1.jpeg"
          alt="Migration form with pencil"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* Main Content Area */}
      <section className="mx-auto max-w-5xl px-6 py-10 sm:px-10 lg:px-16">
        {/* Title Bar */}
        <div className="mb-8 bg-slate-100 py-4 px-6 rounded-sm">
          <h1 className="text-3xl font-bold uppercase tracking-wide text-[#35487a]">
            VISA ASSISTANCE
          </h1>
        </div>

        {/* Intro Paragraph */}
        <div className="max-w-4xl px-2 text-xs leading-relaxed text-slate-500 sm:text-sm mb-8">
          <p>
            We have an expert team with over three decades of experience in providing visa assistance services. Whether you are a business traveler or a leisure traveler we are here to make your travel plans much easier. Our team regularly updates themselves about the latest regulations and best practices in the industry to ensure that we are capable of providing a service which goes beyond your expectations.
          </p>
        </div>

        {/* Checklist Section */}
        <div className="max-w-4xl px-2">
          <h2 className="text-sm font-bold text-[#35487a] mb-4">
            Things to ensure when applying for a visa.
          </h2>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-500 list-disc list-inside leading-relaxed">
            <li>
              Ensure that passport is valid and expiry is not within the duration of travel period.
            </li>
            <li>
              Ensure that name and other changes are brought to the attention of the travel assistant.
            </li>
            <li>
              Ensure that all details provided are accurate and precise to the best of your knowledge.
            </li>
            <li>
              Ensure that you provide all documents and proof necessary.
            </li>
            <li>
              Ensure that you do not violate any rules and regulations imposed by the embassy.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}