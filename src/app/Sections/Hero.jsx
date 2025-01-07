import React from "react";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
        Revolutionize your workflows
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl">
        Streamline your tasks and boost productivity with our SaaS solution.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" variant="default">
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