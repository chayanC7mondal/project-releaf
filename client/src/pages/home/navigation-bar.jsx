import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="bg-white/95 backdrop-blur-lg border-b border-green-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Leaf className="h-8 w-8 text-green-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              DigiGreen
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/explore"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Explore
            </a>
            <a
              href="/scanner"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Scanner
            </a>
            <a
              href="/chatbot"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Chatbot
            </a>
            <a
              href="/stations"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Stations
            </a>
            <a
              href="/marketplace"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Marketplace
            </a>
            <a
              href="/tips"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Tips
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              About
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/signin">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-green-600 hover:bg-green-50"
              >
                Sign In
              </Button>
            </a>
            <a href="/scanner">
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Start Scanning
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
