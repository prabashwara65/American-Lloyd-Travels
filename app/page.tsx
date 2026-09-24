import { CookieNotice } from "./components/CookieNotice";
import { Footer } from "./home/Footer";
import { Hero } from "./home/Hero";
import { Navbar } from "./home/Navbar";
import { Services } from "./home/Services";
import { Vacation } from "./home/Vacation";
import { VisaHandling } from "./home/VisaHandling";

export default function Home() {
  return (
    <div className="site-shell bg-[#FFFFFF] min-h-screen">
      <Navbar />
      <main id="top">
        <Hero />
        <Services />
        <Vacation />
        <VisaHandling />
      </main>
      <Footer />
      <CookieNotice />
    </div>
  );
}
