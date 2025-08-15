import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      text: "DigiGreen's scanner is incredibly accurate! I've learned so much about proper recycling and reduced my waste by 60%.",
      name: "Sarah Chen",
      title: "Environmental Advocate",
      initial: "S",
      bgGradient: "from-green-400 to-emerald-500",
      cardBg: "from-green-50 to-emerald-50",
    },
    {
      rating: 5,
      text: "The chatbot is like having an environmental expert in my pocket. Quick answers and great tips for sustainable living!",
      name: "Marcus Johnson",
      title: "Sustainability Consultant",
      initial: "M",
      bgGradient: "from-blue-400 to-indigo-500",
      cardBg: "from-blue-50 to-indigo-50",
    },
    {
      rating: 5,
      text: "Found the perfect recycling station for my e-waste through DigiGreen. The platform makes environmental action so easy!",
      name: "Aisha Patel",
      title: "Tech Professional",
      initial: "A",
      bgGradient: "from-purple-400 to-pink-500",
      cardBg: "from-purple-50 to-pink-50",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Loved by Eco Warriors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of users making a difference with DigiGreen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg bg-gradient-to-br ${testimonial.cardBg}`}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${testimonial.bgGradient} rounded-full flex items-center justify-center text-white font-bold mr-4`}
                  >
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
