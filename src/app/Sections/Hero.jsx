import React from "react";
import { Button } from "@/components/ui/button";
function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-semibold">Revolutionize your workflows</h1>
      <p className="text-2xl">
        Streamline your tasks and boost productivity with our SaaS solution.
      </p>
      <div className="flex gap-4">
        <Button className="mr-4" size="lg" variant="default">
          Get Started
        </Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
    </section>
  );
}

export default Hero;
