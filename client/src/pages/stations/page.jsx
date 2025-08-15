import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Leaf,
  MapPin,
  Search,
  Navigation,
  Zap,
  Recycle,
  Droplets,
  TreePine,
  Clock,
  Star,
} from "lucide-react";

// Station Data
const stations = [
  {
    id: 1,
    name: "Central Park Eco Station",
    type: "Recycling Center",
    distance: "0.5 miles",
    rating: 4.8,
    address: "123 Green Ave, New York, NY",
    services: ["Plastic Recycling", "E-waste", "Composting"],
    hours: "8:00 AM - 6:00 PM",
    icon: Recycle,
    color: "bg-blue-600",
  },
  {
    id: 2,
    name: "Solar Charging Hub",
    type: "Charging Station",
    distance: "1.2 miles",
    rating: 4.9,
    address: "456 Solar St, New York, NY",
    services: ["EV Charging", "Device Charging", "Solar Power"],
    hours: "24/7",
    icon: Zap,
    color: "bg-amber-600",
  },
  {
    id: 3,
    name: "Water Quality Monitor",
    type: "Environmental Monitor",
    distance: "0.8 miles",
    rating: 4.6,
    address: "789 River Rd, New York, NY",
    services: ["Water Testing", "Air Quality", "Data Collection"],
    hours: "24/7 Monitoring",
    icon: Droplets,
    color: "bg-cyan-600",
  },
  {
    id: 4,
    name: "Community Garden Station",
    type: "Green Space",
    distance: "1.5 miles",
    rating: 4.7,
    address: "321 Garden Way, New York, NY",
    services: ["Plant Exchange", "Composting", "Education"],
    hours: "9:00 AM - 5:00 PM",
    icon: TreePine,
    color: "bg-green-600",
  },
];

// Station Type Filters
const stationTypes = [
  {
    icon: Recycle,
    label: "Recycling Centers",
    color: "text-blue-600",
    count: 12,
  },
  { icon: Zap, label: "Charging Stations", color: "text-amber-600", count: 8 },
  { icon: Droplets, label: "Water Monitors", color: "text-cyan-600", count: 5 },
  { icon: TreePine, label: "Green Spaces", color: "text-green-600", count: 15 },
];

export default function StationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">
                DigiGreen
              </span>
            </Link>

            {/* Menu Links */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { href: "/explore", label: "Explore" },
                { href: "/scanner", label: "Scanner" },
                { href: "/chatbot", label: "Chatbot" },
                { href: "/stations", label: "Stations", active: true },
                { href: "/marketplace", label: "Marketplace" },
              ].map(({ href, label, active }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-green-700 hover:text-green-900 font-medium ${
                    active ? "border-b-2 border-green-600" : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Sign In */}
            <Link href="/signin">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-900 mb-4">
            Eco Stations Near You
          </h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Find nearby recycling centers, charging stations, and environmental
            monitoring points
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-green-500" />
            <Input
              placeholder="Search by location or station type..."
              className="pl-10 border-green-200 focus:border-green-500"
            />
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Navigation className="h-4 w-4 mr-2" />
            Use My Location
          </Button>
        </div>

        {/* Station Type Filters */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {stationTypes.map(({ icon: Icon, label, color, count }) => (
            <Card
              key={label}
              className="border-green-200 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="p-4 text-center">
                <Icon className={`h-8 w-8 ${color} mx-auto mb-2`} />
                <h3 className="font-semibold text-green-900">{label}</h3>
                <p className="text-sm text-green-600">{count} nearby</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stations List */}
        <div className="grid lg:grid-cols-2 gap-6">
          {stations.map((station) => (
            <Card
              key={station.id}
              className="border-green-200 hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div
                    className={`w-12 h-12 ${station.color} rounded-lg flex items-center justify-center`}
                  >
                    <station.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900">
                      {station.name}
                    </h3>
                    <Badge className="bg-green-100 text-green-800 mb-2">
                      {station.type}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-green-600">
                      <MapPin className="h-4 w-4" />
                      <span>{station.distance}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-amber-500 fill-current" />
                        <span>{station.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-green-700">
                    <MapPin className="h-4 w-4" />
                    <span>{station.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-green-700">
                    <Clock className="h-4 w-4" />
                    <span>{station.hours}</span>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">
                    Services:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {station.services.map((service, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-green-300 text-green-700"
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                    Get Directions
                  </Button>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50"
                  >
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Placeholder */}
        <Card className="border-green-200 mt-8">
          <CardHeader>
            <CardTitle className="text-green-900">Station Map</CardTitle>
            <CardDescription>
              Interactive map showing all nearby eco stations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p>Interactive map will be displayed here</p>
                <p className="text-sm">
                  Showing {stations.length} stations in your area
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
