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
  Filter,
  ShoppingCart,
  Star,
  Heart,
  Zap,
  TreePine,
  Recycle,
} from "lucide-react";

export default function MarketplacePage() {
  const products = [
    {
      id: 1,
      name: "Solar Power Bank",
      price: "$49.99",
      originalPrice: "$69.99",
      rating: 4.8,
      reviews: 124,
      image: "/solar-power-bank.png",
      category: "Energy",
      sustainability: "95%",
      description: "Portable solar charger with 20,000mAh capacity",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Bamboo Toothbrush Set",
      price: "$12.99",
      originalPrice: "$18.99",
      rating: 4.9,
      reviews: 89,
      image: "/placeholder-4usy0.png",
      category: "Personal Care",
      sustainability: "100%",
      description: "Biodegradable bamboo toothbrushes - pack of 4",
      badge: "Eco Choice",
    },
    {
      id: 3,
      name: "Reusable Water Bottle",
      price: "$24.99",
      originalPrice: null,
      rating: 4.7,
      reviews: 203,
      image: "/stainless-steel-bottle.png",
      category: "Lifestyle",
      sustainability: "90%",
      description: "Insulated stainless steel bottle - 32oz",
      badge: null,
    },
    {
      id: 4,
      name: "LED Smart Bulbs",
      price: "$34.99",
      originalPrice: "$44.99",
      rating: 4.6,
      reviews: 156,
      image: "/led-smart-bulbs.png",
      category: "Energy",
      sustainability: "85%",
      description: "Energy-efficient smart LED bulbs - 4 pack",
      badge: "Energy Star",
    },
    {
      id: 5,
      name: "Organic Cotton Tote Bag",
      price: "$16.99",
      originalPrice: null,
      rating: 4.8,
      reviews: 67,
      image: "/organic-cotton-tote-bag.png",
      category: "Lifestyle",
      sustainability: "98%",
      description: "Durable organic cotton shopping bag",
      badge: "Organic",
    },
    {
      id: 6,
      name: "Compost Bin Kit",
      price: "$89.99",
      originalPrice: "$119.99",
      rating: 4.5,
      reviews: 92,
      image: "/outdoor-compost-bin.png",
      category: "Garden",
      sustainability: "100%",
      description: "Complete home composting system",
      badge: "New",
    },
  ];

  const categories = [
    { name: "Energy", icon: Zap, count: 45, color: "text-amber-600" },
    { name: "Personal Care", icon: Heart, count: 32, color: "text-pink-600" },
    { name: "Lifestyle", icon: Leaf, count: 67, color: "text-green-600" },
    { name: "Garden", icon: TreePine, count: 28, color: "text-emerald-600" },
    { name: "Recycling", icon: Recycle, count: 19, color: "text-blue-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Navigation Bar */}
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

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: "Explore", href: "/explore" },
                { name: "Scanner", href: "/scanner" },
                { name: "Chatbot", href: "/chatbot" },
                { name: "Stations", href: "/stations" },
                { name: "Marketplace", href: "/marketplace", active: true },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-green-700 hover:text-green-900 font-medium ${
                    link.active ? "border-b-2 border-green-600" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart (0)
              </Button>
              <Link href="/signin">
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-900 mb-4">
            Green Marketplace
          </h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Discover and purchase eco-friendly products, sustainable
            alternatives, and green technologies
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-green-500" />
            <Input
              placeholder="Search eco-friendly products..."
              className="pl-10 border-green-200 focus:border-green-500"
            />
          </div>
          <Button
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
          >
            <Filter className="h-4 w-4 mr-2" /> Filter
          </Button>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900">Categories</CardTitle>
                <CardDescription>Browse by product type</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map(({ name, icon: Icon, count, color }, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-green-50 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`h-5 w-5 ${color}`} />
                      <span className="text-green-900 font-medium">{name}</span>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-green-300 text-green-700"
                    >
                      {count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Sustainability Filters */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900">
                  Sustainability Filter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Organic Certified",
                  "Recycled Materials",
                  "Renewable Energy",
                  "Biodegradable",
                ].map((label, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={label}
                      className="text-green-600"
                    />
                    <label htmlFor={label} className="text-green-700">
                      {label}
                    </label>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort Options */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-green-900">
                Featured Products
              </h2>
              <select className="border border-green-200 rounded-lg px-3 py-2 text-green-700 focus:border-green-500">
                <option>Sort by: Best Match</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
                <option>Most Sustainable</option>
              </select>
            </div>

            {/* Product Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="border-green-200 hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Product Image */}
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {product.badge && (
                      <Badge className="absolute top-2 left-2 bg-green-600 text-white">
                        {product.badge}
                      </Badge>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Product Info */}
                  <CardContent className="p-4">
                    <div className="mb-2">
                      <Badge
                        variant="outline"
                        className="border-green-300 text-green-700 text-xs"
                      >
                        {product.category}
                      </Badge>
                    </div>

                    <h3 className="font-semibold text-green-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-green-600 mb-3">
                      {product.description}
                    </p>

                    {/* Ratings */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current text-amber-500" />
                        <span className="text-sm text-green-700">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-sm text-green-600">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Price & Sustainability */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-green-900">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-green-600">
                          Sustainability
                        </div>
                        <div className="text-sm font-semibold text-green-700">
                          {product.sustainability}
                        </div>
                      </div>
                    </div>

                    {/* Add to Cart */}
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
