import Image from "next/image";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import Features from "./Sections/Features";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
    </div>
  );
}
