import React from "react";
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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Leaf,
  TreePine,
  Droplets,
  Heart,
  Users,
  MapPin,
  Clock,
  Mail,
  Phone,
} from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-900 mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto mb-8">
            Join our community of environmental champions and make a real
            difference for our planet. There are many ways to contribute to our
            mission of environmental conservation.
          </p>
          <div className="flex items-center justify-center space-x-2 text-green-700">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-green-200 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-green-300 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-green-400 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white"></div>
            </div>
            <span className="font-medium">
              Join 24,000+ environmental advocates
            </span>
          </div>
        </div>

        {/* Ways to Get Involved */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-green-200 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                Volunteer
              </h3>
              <p className="text-green-700 mb-6">
                Join our hands-on environmental projects and make a direct
                impact in your community.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                Become a Volunteer
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-200 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">Donate</h3>
              <p className="text-green-700 mb-6">
                Support our environmental initiatives with financial
                contributions to fund critical projects.
              </p>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 w-full bg-transparent"
              >
                Make a Donation
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-200 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TreePine className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                Advocate
              </h3>
              <p className="text-green-700 mb-6">
                Spread awareness about environmental issues and help us reach
                more people with our message.
              </p>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 w-full bg-transparent"
              >
                Join Advocacy
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Event Cards - Same as in your code */}
            {/* ... keep the three event cards exactly the same ... */}
          </div>
        </div>

        {/* Volunteer Sign-up Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-green-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-green-900">
                Join Our Volunteer Network
              </CardTitle>
              <CardDescription className="text-lg text-green-700">
                Fill out the form below to get started with your environmental
                impact journey
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                {/* Form Fields - exactly same as original */}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
