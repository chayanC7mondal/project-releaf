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
  Search,
  Lightbulb,
  TreePine,
  Droplets,
  Zap,
  Recycle,
  Home,
  Car,
  ShoppingBag,
  Clock,
  Star,
} from "lucide-react";

export default function TipsPage() {
  const tipCategories = [
    { name: "Energy Saving", icon: Zap, count: 24, color: "text-amber-600" },
    {
      name: "Water Conservation",
      icon: Droplets,
      count: 18,
      color: "text-blue-600",
    },
    {
      name: "Waste Reduction",
      icon: Recycle,
      count: 32,
      color: "text-green-600",
    },
    {
      name: "Sustainable Living",
      icon: Home,
      count: 28,
      color: "text-purple-600",
    },
    {
      name: "Green Transportation",
      icon: Car,
      count: 15,
      color: "text-indigo-600",
    },
    {
      name: "Eco Shopping",
      icon: ShoppingBag,
      count: 21,
      color: "text-pink-600",
    },
  ];

  const featuredTips = [
    {
      id: 1,
      title: "Switch to LED Light Bulbs",
      category: "Energy Saving",
      difficulty: "Easy",
      timeToImplement: "5 minutes",
      impact: "High",
      description:
        "LED bulbs use 75% less energy and last 25 times longer than incandescent bulbs.",
      steps: [
        "Replace incandescent bulbs with LED equivalents",
        "Choose warm white (2700K) for living areas",
        "Use daylight (5000K) for work spaces",
        "Look for ENERGY STAR certified bulbs",
      ],
      savings: "$75/year",
      co2Reduction: "450 lbs CO2/year",
    },
    {
      id: 2,
      title: "Start Home Composting",
      category: "Waste Reduction",
      difficulty: "Medium",
      timeToImplement: "30 minutes",
      impact: "High",
      description:
        "Turn kitchen scraps into nutrient-rich soil while reducing landfill waste.",
      steps: [
        "Choose a composting method (bin, tumbler, or pile)",
        "Collect brown materials (leaves, paper) and green materials (food scraps)",
        "Maintain proper moisture and turn regularly",
        "Use finished compost in your garden",
      ],
      savings: "$200/year",
      co2Reduction: "300 lbs CO2/year",
    },
    {
      id: 3,
      title: "Install Low-Flow Showerheads",
      category: "Water Conservation",
      difficulty: "Easy",
      timeToImplement: "15 minutes",
      impact: "Medium",
      description:
        "Reduce water usage by up to 50% without sacrificing water pressure.",
      steps: [
        "Remove old showerhead with wrench",
        "Clean threads and apply plumber's tape",
        "Install new low-flow showerhead",
        "Test for leaks and adjust flow rate",
      ],
      savings: "$120/year",
      co2Reduction: "200 lbs CO2/year",
    },
  ];

  const quickTips = [
    "Unplug electronics when not in use to eliminate phantom energy draw",
    "Use cold water for washing clothes - saves 90% of energy used by washing machine",
    "Plant native species in your garden - they require less water and maintenance",
    "Buy in bulk to reduce packaging waste and save money",
    "Use a programmable thermostat to optimize heating and cooling",
    "Choose reusable bags, bottles, and containers over single-use items",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">
                DigiGreen
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {[
                "Explore",
                "Scanner",
                "Chatbot",
                "Stations",
                "Marketplace",
                "Tips",
              ].map((label) => (
                <Link
                  key={label}
                  href={`/${label.toLowerCase()}`}
                  className={`text-green-700 hover:text-green-900 font-medium ${
                    label === "Tips" ? "border-b-2 border-green-600" : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-900 mb-4">
            Sustainability Tips & Guides
          </h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Practical tips and step-by-step guides for living a more sustainable
            lifestyle
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-3 h-4 w-4 text-green-500" />
          <Input
            placeholder="Search sustainability tips..."
            className="pl-10 border-green-200 focus:border-green-500"
          />
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {tipCategories.map((category) => (
            <Card
              key={category.name}
              className="border-green-200 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="p-4 text-center">
                <category.icon
                  className={`h-8 w-8 ${category.color} mx-auto mb-2`}
                />
                <h3 className="font-semibold text-green-900 text-sm">
                  {category.name}
                </h3>
                <p className="text-xs text-green-600">{category.count} tips</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Tips */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Featured Tips
            </h2>
            <div className="space-y-6">
              {featuredTips.map((tip) => (
                <Card
                  key={tip.id}
                  className="border-green-200 hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-green-900">
                          {tip.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {tip.description}
                        </CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        {tip.category}
                      </Badge>
                    </div>

                    <div className="flex items-center space-x-4 mt-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-amber-500" />
                        <span className="text-sm text-green-700">
                          Difficulty: {tip.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-blue-500" />
                        <span className="text-sm text-green-700">
                          {tip.timeToImplement}
                        </span>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-green-300 text-green-700"
                      >
                        {tip.impact} Impact
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-900 mb-3">
                          Steps to Follow:
                        </h4>
                        <ol className="space-y-2">
                          {tip.steps.map((step, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <span className="flex-shrink-0 w-5 h-5 bg-green-600 text-white text-xs rounded-full flex items-center justify-center">
                                {idx + 1}
                              </span>
                              <span className="text-sm text-green-700">
                                {step}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-900 mb-2">
                            Environmental Impact:
                          </h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-green-700">
                                Annual Savings:
                              </span>
                              <span className="text-sm font-semibold text-green-900">
                                {tip.savings}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-green-700">
                                CO2 Reduction:
                              </span>
                              <span className="text-sm font-semibold text-green-900">
                                {tip.co2Reduction}
                              </span>
                            </div>
                          </div>
                        </div>

                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <Lightbulb className="h-4 w-4 mr-2" />
                          Get Detailed Guide
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Tips */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900">Quick Tips</CardTitle>
                <CardDescription>
                  Simple actions you can take today
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickTips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-2 p-3 bg-green-50 rounded-lg"
                  >
                    <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-green-700">{tip}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tip of the Day */}
            <Card className="border-green-200 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
              <CardHeader>
                <CardTitle className="text-white">Tip of the Day</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3">
                  <TreePine className="h-8 w-8 text-green-200 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Plant a Tree</h4>
                    <p className="text-green-100 text-sm">
                      A single tree can absorb 48 pounds of CO2 per year and
                      produce enough oxygen for two people. Consider planting
                      native species in your area.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900">Weekly Tips</CardTitle>
                <CardDescription>
                  Get sustainability tips delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input
                    placeholder="Enter your email"
                    className="border-green-200 focus:border-green-500"
                  />
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
