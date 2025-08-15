import { Leaf } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    features: [
      { name: "Smart Scanner", href: "/scanner" },
      { name: "AI Chatbot", href: "/chatbot" },
      { name: "Eco Stations", href: "/stations" },
      { name: "Marketplace", href: "/marketplace" },
    ],
    resources: [
      { name: "Daily Tips", href: "/tips" },
      { name: "Environmental Data", href: "/explore" },
      { name: "About Us", href: "/about" },
      { name: "Help Center", href: "#" },
    ],
    connect: [
      { name: "Community Forum", href: "#" },
      { name: "Developer API", href: "#" },
      { name: "Partner Program", href: "#" },
      { name: "Environmental Reports", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">DigiGreen</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering individuals and communities to make sustainable choices
              through innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">
              Features
            </h3>
            <div className="space-y-3">
              {footerLinks.features.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">
              Resources
            </h3>
            <div className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-400">
              Connect
            </h3>
            <div className="space-y-3">
              {footerLinks.connect.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 DigiGreen. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
