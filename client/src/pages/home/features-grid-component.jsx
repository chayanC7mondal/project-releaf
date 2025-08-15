import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Scan,
  MessageCircle,
  MapPin,
  ShoppingCart,
  Lightbulb,
  Info,
} from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: Scan,
      title: "Smart Scanner",
      description:
        "AI-powered scanning with 99% accuracy. Upload photos, use webcam, or scan live to get instant environmental insights.",
      buttonText: "Try Scanner",
      buttonColor:
        "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
      cardBg: "bg-gradient-to-br from-white to-green-50",
      href: "/scanner",
    },
    {
      icon: MessageCircle,
      title: "AI Chatbot",
      description:
        "Get instant answers about recycling, sustainability, and environmental questions from our intelligent assistant.",
      buttonText: "Chat Now",
      buttonColor:
        "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
      cardBg: "bg-gradient-to-br from-white to-blue-50",
      href: "/chatbot",
    },
    {
      icon: MapPin,
      title: "Eco Stations",
      description:
        "Find nearby recycling centers, e-waste drop-offs, and environmental stations with real-time availability.",
      buttonText: "Find Stations",
      buttonColor:
        "border-2 border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
      cardBg: "bg-gradient-to-br from-white to-purple-50",
      href: "/stations",
    },
    {
      icon: ShoppingCart,
      title: "Green Marketplace",
      description:
        "Discover eco-friendly products, donate e-waste, and shop sustainable alternatives from verified sellers.",
      buttonText: "Shop Green",
      buttonColor:
        "border-2 border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
      cardBg: "bg-gradient-to-br from-white to-amber-50",
      href: "/marketplace",
    },
    {
      icon: Lightbulb,
      title: "Daily Tips",
      description:
        "Receive personalized sustainability tips, reminders, and actionable advice to reduce your environmental impact.",
      buttonText: "Get Tips",
      buttonColor:
        "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 bg-transparent",
      iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
      cardBg: "bg-gradient-to-br from-white to-indigo-50",
      href: "/tips",
    },
    {
      icon: Info,
      title: "Explore Data",
      description:
        "Access environmental research, impact reports, and educational content to stay informed and engaged.",
      buttonText: "Start Exploring",
      buttonColor:
        "border-2 border-red-600 text-red-600 hover:bg-red-50 bg-transparent",
      iconBg: "bg-gradient-to-br from-red-500 to-pink-600",
      cardBg: "bg-gradient-to-br from-white to-red-50",
      href: "/explore",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm font-medium mb-4">
            Platform Features
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital tools designed to make environmental action
            accessible and impactful
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 ${feature.cardBg}`}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <a href={feature.href}>
                  <Button
                    variant={
                      feature.buttonColor.includes("bg-gradient")
                        ? "default"
                        : "outline"
                    }
                    className={`${feature.buttonColor} shadow-lg hover:shadow-xl transition-all`}
                  >
                    {feature.buttonText}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
