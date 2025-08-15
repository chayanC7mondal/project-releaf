import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
          Ready to Make a <span className="text-green-200">Difference?</span>
        </h2>
        <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join our community of environmental champions and start your journey
          towards a more sustainable future today.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="/scanner">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Start Scanning Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="/signin">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Join Community
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
