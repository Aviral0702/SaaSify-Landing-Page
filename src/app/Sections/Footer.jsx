// components/Sections/Footer.tsx
import { Button } from "@/components/ui/button";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h1 className="text-2xl font-bold text-white">SaaSify</h1>
          <p className="mt-4 text-sm text-gray-400">
            Simplifying your SaaS solutions for seamless productivity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#features" className="hover:text-white">Features</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-white">Testimonials</a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-white">Pricing</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Stay Updated</h2>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter for updates, offers, and more.
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
            <Button>Subscribe</Button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        <p className="text-gray-400">
          © {new Date().getFullYear()} SaaSify. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
