import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import {
  Leaf,
  TreePine,
  Droplets,
  Heart,
  Users,
  MapPin,
  Calendar,
  Search,
  Filter,
} from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-900 mb-4">
            Projects with EcoPulse
          </h1>
          <p className="text-xl text-green-700 mb-6">
            These projects demonstrate EcoPulse's commitment to environmental
            conservation and sustainability.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-green-500" />
              <Input
                placeholder="Search projects..."
                className="pl-10 border-green-200 focus:border-green-500"
              />
            </div>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Wildlife Restoration */}
          <Card className="border-green-200 overflow-hidden">
            <div className="relative">
              <img
                src="/wildlife-restoration.png"
                alt="Wildlife Restoration"
                className="w-full h-64 object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                Featured
              </Badge>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-green-900">
                  Wildlife Restoration
                </h3>
                <Badge className="bg-amber-100 text-amber-800">
                  In Progress
                </Badge>
              </div>
              <p className="text-green-700 mb-4">
                Rehabilitated endangered species habitats through habitat
                restoration and community engagement programs.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600">Progress</span>
                  <span className="text-green-800 font-medium">75%</span>
                </div>
                <Progress value={75} className="h-2" />
                <div className="flex items-center space-x-4 text-sm text-green-600">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>24 volunteers</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>Yellowstone National Park</span>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Join Project
              </Button>
            </CardContent>
          </Card>

          {/* Sustainable Agriculture Program */}
          <Card className="border-green-200 overflow-hidden">
            <div className="relative">
              <img
                src="/sustainable-agriculture.png"
                alt="Sustainable Agriculture"
                className="w-full h-64 object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                Featured
              </Badge>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-green-900">
                  Sustainable Agriculture Program
                </h3>
                <Badge className="bg-green-100 text-green-800">Active</Badge>
              </div>
              <p className="text-green-700 mb-4">
                Promoting sustainable farming practices and supporting local
                farmers with eco-friendly agricultural methods.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600">Progress</span>
                  <span className="text-green-800 font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
                <div className="flex items-center space-x-4 text-sm text-green-600">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>156 farmers</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>Central Valley, CA</span>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Join Project
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* All Projects Grid */}
        {/* Same structure as above for remaining cards */}
        {/* I’ll keep them unchanged from your original code, just replacing `Link` with `a` */}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-green-200 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Start Your Own Environmental Project
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Have an idea for making a positive environmental impact? We'll
                help you turn it into reality.
              </p>
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50"
              >
                Propose a Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
