import React from "react";

function Testimonials() {
  const testimonials = [
    { name: "John Doe", text: "This product changed my life!" },
    { name: "Jane Smith", text: "A must-have tool for teams." },
    { name: "Emily Davis", text: "Incredible features and easy to use." },
  ];
  return (
    <section className="py-16 bg-white text-gray-800 min-h-1.5">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, ind) => (
            <div key={ind} className="p-6 bg-gray-100 shadow rounded-lg">
              <p className="italic">"{testimonial.text}"</p>
              <h4 className="mt-4 font-semibold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
