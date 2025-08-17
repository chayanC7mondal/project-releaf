import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scan, Play, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>

      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 px-4 py-2 text-sm font-medium">
                  🌱 AI-Powered Environmental Solutions
                </Badge>
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Transform
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Our Planet
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Digitally
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Harness the power of AI to scan, analyze, and make sustainable
                  choices. Join millions in creating a greener future through
                  smart technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/scanner">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Start Scanning{" "}
                    <Scan className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  </Button>
                </a>
                <a href="/explore">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg group bg-transparent"
                  >
                    <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </Button>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">2.5M+</div>
                  <div className="text-sm text-gray-600">Items Scanned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">150K+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                {/* Modern SVG Illustration */}
                <div className="w-full max-w-lg mx-auto">
                  <svg
                    viewBox="0 0 400 400"
                    className="w-full h-auto drop-shadow-2xl"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                      <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#dcfce7" />
                        <stop offset="100%" stopColor="#bbf7d0" />
                      </linearGradient>
                      <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#16a34a" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Background Circle */}
                    <circle cx="200" cy="200" r="180" fill="url(#phoneGrad)" opacity="0.1" className="animate-pulse" />
                    
                    {/* Phone Device */}
                    <rect x="150" y="100" width="100" height="200" rx="20" fill="url(#phoneGrad)" className="drop-shadow-lg" />
                    <rect x="155" y="110" width="90" height="180" rx="15" fill="url(#screenGrad)" />
                    
                    {/* Screen Content - Scanning Interface */}
                    <rect x="165" y="130" width="70" height="50" rx="8" fill="#ffffff" opacity="0.9" />
                    <text x="200" y="150" textAnchor="middle" fontSize="8" fill="#059669" fontWeight="bold">AI SCAN</text>
                    <text x="200" y="165" textAnchor="middle" fontSize="6" fill="#6b7280">99.2% Match</text>
                    
                    {/* Scanning Beam */}
                    <rect x="160" y="190" width="80" height="2" fill="#22c55e" opacity="0.8" className="animate-pulse">
                      <animate attributeName="y" values="190;240;190" dur="2s" repeatCount="indefinite"/>
                    </rect>
                    
                    {/* Floating Leaves */}
                    <g className="animate-bounce" style={{animationDuration: '3s'}}>
                      <path d="M120 150 Q110 140 120 130 Q130 140 120 150" fill="url(#leafGrad)" filter="url(#glow)" />
                      <line x1="120" y1="150" x2="115" y2="155" stroke="#16a34a" strokeWidth="1"/>
                    </g>
                    
                    <g className="animate-bounce" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}>
                      <path d="M290 180 Q300 170 290 160 Q280 170 290 180" fill="url(#leafGrad)" filter="url(#glow)" />
                      <line x1="290" y1="180" x2="295" y2="185" stroke="#16a34a" strokeWidth="1"/>
                    </g>
                    
                    <g className="animate-bounce" style={{animationDuration: '2.8s', animationDelay: '1s'}}>
                      <path d="M110 280 Q100 270 110 260 Q120 270 110 280" fill="url(#leafGrad)" filter="url(#glow)" />
                      <line x1="110" y1="280" x2="105" y2="285" stroke="#16a34a" strokeWidth="1"/>
                    </g>
                    
                    <g className="animate-bounce" style={{animationDuration: '3.2s', animationDelay: '1.5s'}}>
                      <path d="M310 250 Q320 240 310 230 Q300 240 310 250" fill="url(#leafGrad)" filter="url(#glow)" />
                      <line x1="310" y1="250" x2="315" y2="255" stroke="#16a34a" strokeWidth="1"/>
                    </g>
                    
                    {/* Data Visualization Elements */}
                    <g opacity="0.7">
                      <circle cx="280" cy="130" r="3" fill="#10b981" className="animate-pulse" />
                      <circle cx="300" cy="140" r="2" fill="#059669" className="animate-pulse" style={{animationDelay: '0.3s'}} />
                      <circle cx="320" cy="135" r="2.5" fill="#22c55e" className="animate-pulse" style={{animationDelay: '0.6s'}} />
                      <path d="M280 130 L300 140 L320 135" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.5"/>
                    </g>
                    
                    <g opacity="0.7">
                      <circle cx="80" cy="220" r="3" fill="#10b981" className="animate-pulse" style={{animationDelay: '1s'}} />
                      <circle cx="100" cy="210" r="2" fill="#059669" className="animate-pulse" style={{animationDelay: '1.3s'}} />
                      <circle cx="120" cy="215" r="2.5" fill="#22c55e" className="animate-pulse" style={{animationDelay: '1.6s'}} />
                      <path d="M80 220 L100 210 L120 215" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.5"/>
                    </g>
                    
                    {/* Recycling Symbol */}
                    <g transform="translate(200,320)">
                      <path d="M-8,-8 Q-12,-4 -8,0 Q-4,4 0,0 Q4,-4 8,0 Q12,4 8,8 Q4,12 0,8 Q-4,4 -8,8 Q-12,12 -8,8 Q-4,4 0,4 Q4,0 8,4" 
                            fill="none" 
                            stroke="#10b981" 
                            strokeWidth="2" 
                            className="animate-spin" 
                            style={{animationDuration: '10s'}} />
                    </g>
                    
                    {/* Progress Rings */}
                    <circle cx="200" cy="200" r="160" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.2" strokeDasharray="10,5" className="animate-spin" style={{animationDuration: '20s'}} />
                    <circle cx="200" cy="200" r="140" fill="none" stroke="#059669" strokeWidth="1" opacity="0.3" strokeDasharray="8,4" className="animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}} />
                  </svg>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-green-100 animate-bounce">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">
                      AI Scanning Active
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-green-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      99.2%
                    </div>
                    <div className="text-xs text-gray-600">Recyclable</div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-8 bg-white rounded-2xl p-3 shadow-xl border border-green-100">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">
                      Eco Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}