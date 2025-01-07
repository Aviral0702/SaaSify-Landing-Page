import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import Features from "./Sections/Features";
import Testimonials from "./Sections/Testimonials";
import Pricing from "./Sections/Pricing";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <Pricing/>
    </div>
  );
}
