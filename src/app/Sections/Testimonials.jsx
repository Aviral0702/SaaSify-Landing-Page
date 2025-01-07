import React from "react";

function Testimonials() {
  const testimonials = [
    { name: "John Doe", text: "This product changed my life!" },
    { name: "Jane Smith", text: "A must-have tool for teams." },
    { name: "Emily Davis", text: "Incredible features and easy to use." },
  ];

  return (
    <section className="py-8 md:py-16 bg-white text-gray-800 px-4 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, ind) => (
            <div
              key={ind}
              className="p-4 md:p-6 bg-gray-100 shadow rounded-lg"
            >
              <p className="italic text-sm md:text-base">"{testimonial.text}"</p>
              <h4 className="mt-4 font-semibold text-base md:text-lg">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;