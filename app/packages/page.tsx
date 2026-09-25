import Image from "next/image";

export default function PackagesPage() {
  return (
    <main className="w-full flex-grow bg-white text-slate-700">
      {/* Hero Banner Section */}
      <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden">
        <Image
          src="/assets/packages/camp.jpeg"
          alt="Camping overlooking mountain landscape"
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
          <h1 className="text-5xl font-bold tracking-wide text-[#35487a]">
            Packages
          </h1>
        </div>

        {/* Descriptive Text */}
        <div className="max-w-4xl px-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
          <p>
            <strong className="font-semibold text-slate-600">Our planet</strong> is a beautiful and vast place, with so much to see and explore. As human beings, we have an innate desire to explore the world around us and to experience all that it has to offer. However, planning a holiday can often be a daunting and time-consuming task, which is where our dedicated holidays team comes in. We understand that everyone has their own unique interests and desires when it comes to travel. That&apos;s why we offer an exclusive range of luxury packages, designed to cater to a wide range of tastes and preferences. From hiking tours in the highest places on Earth, to diving in the deepest oceans, or simply relaxing on a shopping tour, we have just the right package for you. If you don&apos;t find our ready-made packages interesting, don&apos;t worry! We can tailor-make a package to your specific requirements and inspirations. So drop us a call, sit down, relax and we will make the magic happen.
          </p>
        </div>
      </section>
    </main>
  );
}