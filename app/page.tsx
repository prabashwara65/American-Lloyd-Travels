// app/page.tsx
import { Hero } from "./home/Hero";
import { Services } from "./home/Services";
import { Vacation } from "./home/Vacation";
import { VisaHandling } from "./home/VisaHandling";

export default function HomePage() {
  return (
    <main className="w-full flex-grow">
      <Hero />
      <Services />
      <Vacation />
      <VisaHandling />
    </main>
  );
}