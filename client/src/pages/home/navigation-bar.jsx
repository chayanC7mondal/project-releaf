import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="bg-white/95 backdrop-blur-lg border-b border-green-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Leaf className="h-8 w-8 text-green-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              DigiGreen
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/explore"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Explore
            </Link>
            <Link
              to="/scanner"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Scanner
            </Link>
            <Link
              to="/chatbot"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Chatbot
            </Link>
            <Link
              to="/stations"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Stations
            </Link>
            <Link
              to="/marketplace"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Marketplace
            </Link>
            <Link
              to="/tips"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Tips
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/get-involved"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Get Involved
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/signin">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-green-600 hover:bg-green-50"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/scanner">
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Start Scanning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
