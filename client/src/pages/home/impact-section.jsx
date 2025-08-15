import { TreePine, Recycle, Users, Award } from "lucide-react";

export default function ImpactSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Environmental Impact
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Together, we're making a measurable difference for our planet
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <TreePine className="h-10 w-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">1.2M</div>
            <div className="text-green-100">Trees Saved</div>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Recycle className="h-10 w-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">850K</div>
            <div className="text-green-100">Items Recycled</div>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Users className="h-10 w-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">500K</div>
            <div className="text-green-100">Community Members</div>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Award className="h-10 w-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-green-100">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
