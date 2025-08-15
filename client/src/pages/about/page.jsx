import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Users,
  Target,
  Award,
  Globe,
  TreePine,
  Lightbulb,
  Heart,
} from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      bio: "Environmental scientist with 15+ years in sustainability research",
      image: "/professional-woman-scientist.png",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      bio: "Tech innovator specializing in AI and environmental monitoring",
      image: "/professional-engineer.png",
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Research",
      bio: "Climate change researcher and data analysis expert",
      image: "/professional-woman-researcher.png",
    },
    {
      name: "James Park",
      role: "Product Manager",
      bio: "Sustainable technology advocate and user experience designer",
      image: "/professional-man-designer.png",
    },
  ];

  const achievements = [
    {
      icon: TreePine,
      number: "2.5M+",
      label: "Trees Identified",
      description: "Through our AI scanning technology",
    },
    {
      icon: Users,
      number: "500K+",
      label: "Active Users",
      description: "Making sustainable choices daily",
    },
    {
      icon: Globe,
      number: "150+",
      label: "Countries",
      description: "Where DigiGreen is making an impact",
    },
    {
      icon: Award,
      number: "25+",
      label: "Awards",
      description: "For environmental innovation",
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Using cutting-edge technology to solve environmental challenges",
    },
    {
      icon: Heart,
      title: "Sustainability",
      description:
        "Committed to practices that protect our planet for future generations",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a global network of environmentally conscious individuals",
    },
    {
      icon: Target,
      title: "Impact",
      description: "Measuring and maximizing our positive environmental impact",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-900 mb-6">
            About DigiGreen
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto mb-8">
            We're on a mission to democratize environmental awareness through
            technology...
          </p>
          <div className="flex items-center justify-center space-x-2 text-green-700">
            <Badge className="bg-green-100 text-green-800">
              Founded in 2020
            </Badge>
            <Badge className="bg-blue-100 text-blue-800">AI-Powered</Badge>
            <Badge className="bg-purple-100 text-purple-800">
              Global Impact
            </Badge>
          </div>
        </div>

        {/* Sections below remain same */}
        {/* ... Paste rest of the code exactly as in your original file ... */}
      </div>
    </div>
  );
}
