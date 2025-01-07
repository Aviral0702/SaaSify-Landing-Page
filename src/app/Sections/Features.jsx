import { CheckCircle } from "lucide-react";

const features = [
  { title: "Automate Tasks", description: "Save time with automation." },
  {
    title: "Real-Time Collaboration",
    description: "Work seamlessly with your team.",
  },
  {
    title: "Powerful Analytics",
    description: "Gain insights with robust analytics.",
  },
];

export default function Features() {
  return (
    <section className="features py-8 md:py-16 bg-gray-100 text-gray-800 px-4 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-4 md:p-6 bg-white shadow rounded-lg">
              <CheckCircle className="text-blue-500 w-8 h-8 mb-4 mx-auto" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}