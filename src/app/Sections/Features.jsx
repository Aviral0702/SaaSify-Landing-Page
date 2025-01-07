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
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow rounded-lg">
              <CheckCircle className="text-blue-500 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
