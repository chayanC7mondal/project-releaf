import React from "react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Progress } from "./components/ui/progress";
import {
  Leaf,
  TrendingUp,
  TreePine,
  Droplets,
  Zap,
  AlertTriangle,
  BarChart3,
  Map,
  Calendar,
} from "lucide-react";

export default function ExplorePage() {
  const environmentalData = [
    {
      title: "Global Temperature",
      value: "+1.2°C",
      change: "+0.1°C this year",
      trend: "up",
      description:
        "Average global temperature increase since pre-industrial times",
    },
    {
      title: "CO2 Levels",
      value: "421 ppm",
      change: "+2.4 ppm this year",
      trend: "up",
      description: "Atmospheric carbon dioxide concentration",
    },
    {
      title: "Forest Coverage",
      value: "31%",
      change: "-0.2% this year",
      trend: "down",
      description: "Percentage of Earth's land covered by forests",
    },
    {
      title: "Renewable Energy",
      value: "29%",
      change: "+3.1% this year",
      trend: "up",
      description: "Global renewable energy capacity",
    },
  ];

  const researchArticles = [
    {
      id: 1,
      title: "Impact of Urban Green Spaces on Air Quality",
      author: "Dr. Sarah Johnson",
      date: "March 10, 2024",
      category: "Air Quality",
      readTime: "8 min read",
      summary:
        "New research shows urban parks can reduce air pollution by up to 60% in surrounding areas.",
      image: "/placeholder-jm0vd.png",
    },
    {
      id: 2,
      title: "Ocean Plastic Cleanup Technologies",
      author: "Marine Research Institute",
      date: "March 8, 2024",
      category: "Ocean Conservation",
      readTime: "12 min read",
      summary:
        "Breakthrough technologies are making ocean plastic cleanup more efficient and cost-effective.",
      image: "/ocean-cleanup-technology.png",
    },
    {
      id: 3,
      title: "Solar Panel Efficiency Reaches New Heights",
      author: "Clean Energy Lab",
      date: "March 5, 2024",
      category: "Renewable Energy",
      readTime: "6 min read",
      summary:
        "Latest solar panel technology achieves 47% efficiency, making renewable energy more viable.",
      image: "/solar-panel-efficiency.png",
    },
  ];

  const initiatives = [
    {
      name: "Global Reforestation Project",
      progress: 78,
      target: "1 billion trees by 2025",
      participants: "2.3M volunteers",
      impact: "450M trees planted",
    },
    {
      name: "Ocean Cleanup Initiative",
      progress: 34,
      target: "Remove 90% of ocean plastic",
      participants: "156 countries",
      impact: "2.1M tons removed",
    },
    {
      name: "Renewable Energy Transition",
      progress: 67,
      target: "100% renewable by 2030",
      participants: "89 cities",
      impact: "45% reduction in emissions",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">
                DigiGreen
              </span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/explore"
                className="text-green-700 hover:text-green-900 font-medium border-b-2 border-green-600"
              >
                Explore
              </a>
              <a
                href="/scanner"
                className="text-green-700 hover:text-green-900 font-medium"
              >
                Scanner
              </a>
              <a
                href="/chatbot"
                className="text-green-700 hover:text-green-900 font-medium"
              >
                Chatbot
              </a>
              <a
                href="/stations"
                className="text-green-700 hover:text-green-900 font-medium"
              >
                Stations
              </a>
              <a
                href="/marketplace"
                className="text-green-700 hover:text-green-900 font-medium"
              >
                Marketplace
              </a>
            </div>
            <a href="/signin">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                Sign In
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-900 mb-4">
            Explore Environmental Data
          </h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Discover real-time environmental data, research findings, and global
            sustainability initiatives
          </p>
        </div>

        {/* Environmental Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {environmentalData.map((metric, index) => (
            <Card key={index} className="border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-green-900">
                    {metric.title}
                  </h3>
                  <TrendingUp
                    className={`h-4 w-4 ${
                      metric.trend === "up" ? "text-red-500" : "text-green-500"
                    }`}
                  />
                </div>
                <div className="text-3xl font-bold text-green-900 mb-1">
                  {metric.value}
                </div>
                <div
                  className={`text-sm ${
                    metric.trend === "up" ? "text-red-600" : "text-green-600"
                  } mb-2`}
                >
                  {metric.change}
                </div>
                <p className="text-xs text-green-600">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Research Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Latest Research
            </h2>
            <div className="space-y-6">
              {researchArticles.map((article) => (
                <Card
                  key={article.id}
                  className="border-green-200 hover:shadow-lg transition-shadow"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover rounded-l-lg"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className="bg-green-100 text-green-800">
                          {article.category}
                        </Badge>
                        <span className="text-sm text-green-600">
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-green-900 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-green-700 mb-3">{article.summary}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-green-600">
                          <span>By {article.author}</span>
                          <span className="mx-2">•</span>
                          <span>{article.date}</span>
                        </div>
                        <Button
                          variant="outline"
                          className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Global Initiatives */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900">
                  Global Initiatives
                </CardTitle>
                <CardDescription>
                  Worldwide environmental projects and their progress
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {initiatives.map((initiative, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-green-900 text-sm">
                        {initiative.name}
                      </h4>
                      <span className="text-sm text-green-600">
                        {initiative.progress}%
                      </span>
                    </div>
                    <Progress value={initiative.progress} className="h-2" />
                    <div className="space-y-1 text-xs text-green-600">
                      <div>Target: {initiative.target}</div>
                      <div>Participants: {initiative.participants}</div>
                      <div>Impact: {initiative.impact}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900">Today's Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <TreePine className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-green-900">
                      12,847
                    </div>
                    <div className="text-sm text-green-600">
                      Trees planted today
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Droplets className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-green-900">
                      2.3M
                    </div>
                    <div className="text-sm text-green-600">
                      Gallons water saved
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-8 w-8 text-amber-600" />
                  <div>
                    <div className="text-2xl font-bold text-green-900">
                      45.6K
                    </div>
                    <div className="text-sm text-green-600">
                      kWh renewable energy
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Environmental Alerts */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                  Environmental Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-amber-50 rounded-lg">
                  <div className="font-semibold text-amber-900 text-sm">
                    Air Quality Alert
                  </div>
                  <div className="text-xs text-amber-700">
                    High pollution levels in major cities
                  </div>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <div className="font-semibold text-red-900 text-sm">
                    Wildfire Warning
                  </div>
                  <div className="text-xs text-red-700">
                    Increased fire risk in western regions
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-semibold text-blue-900 text-sm">
                    Water Conservation
                  </div>
                  <div className="text-xs text-blue-700">
                    Drought conditions in southwestern areas
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Tools */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900">
                  Interactive Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Carbon Footprint Calculator
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <Map className="h-4 w-4 mr-2" />
                  Environmental Impact Map
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Sustainability Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
