
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-gradient-to-r from-green-300/30 to-emerald-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-1/4 h-1/4 bg-gradient-to-r from-emerald-300/20 to-green-300/20 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            A <span className="gradient-text">New Way</span> to Visualize the World
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The complete end-to-end platform for training, hosting, and embedding 
            3D Gaussian Splats. No code required—just plug and play.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button className="btn-gradient text-lg px-8 py-6">Get Started</Button>
            <Button variant="outline" className="text-lg px-8 py-6">
              See Demo
            </Button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-green-200/50 border border-green-100">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-900/5 to-green-500/10">
                <div className="text-center p-8">
                  <h3 className="font-semibold text-xl text-gray-800">3D Visualization Demo</h3>
                  <p className="text-gray-600 mt-2">Interactive 3D visualization would appear here</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-splat-vividGreen/20 rounded-full blur-xl animate-pulse-soft"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-splat-emerald/20 rounded-full blur-xl animate-pulse-soft"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold gradient-text">10x</h3>
            <p className="text-gray-600 mt-2">Faster Training</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold gradient-text">100%</h3>
            <p className="text-gray-600 mt-2">Web Compatible</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold gradient-text">50M+</h3>
            <p className="text-gray-600 mt-2">Splats Served</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold gradient-text">0</h3>
            <p className="text-gray-600 mt-2">Coding Required</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
