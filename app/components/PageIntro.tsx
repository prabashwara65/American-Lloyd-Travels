import Image from "next/image";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export function PageIntro({ eyebrow, title, description, image }: PageIntroProps) {
  return (
    <section className="relative flex min-h-[360px] items-end overflow-hidden bg-[#102c4c] text-white sm:min-h-[430px]">
      <Image src={image} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,31,56,.82),rgba(9,31,56,.2))]" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 sm:px-10 lg:px-16">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d2b879]">{eyebrow}</p>
        <h1 className="max-w-3xl font-serif text-5xl font-normal leading-none sm:text-7xl">{title}</h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/85">{description}</p>
      </div>
    </section>
  );
}
