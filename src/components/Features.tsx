
import React from "react";
import { Upload, Globe, Link, Calendar } from "lucide-react";

const Features: React.FC = () => {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white to-purple-50/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">All-in-One</span> Gaussian Splat Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Streamline your 3D content workflow with our comprehensive tool suite,
            from training to publishing in one seamless platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            icon={<Upload className="w-12 h-12 text-splat-vividPurple" />}
            title="Easy Training"
            description="Upload your images or videos and let our AI handle the training process. No technical knowledge required."
            highlights={["Supports images, videos, or 3D scans", "Auto-optimized for quality", "Fast cloud processing"]}
          />
          
          <FeatureCard
            icon={<Calendar className="w-12 h-12 text-splat-vividPurple" />}
            title="Managed Hosting"
            description="We handle the complex infrastructure so your 3D content loads fast for your visitors, anywhere in the world."
            highlights={["Global CDN distribution", "Automatic optimization", "High-performance servers"]}
          />

          <FeatureCard
            icon={<Link className="w-12 h-12 text-splat-vividPurple" />}
            title="Embeddable Links"
            description="Share your 3D content anywhere with a simple link or embed it directly on your website with one line of code."
            highlights={["Simple embed code", "Custom viewer options", "Responsive on all devices"]}
          />

          <FeatureCard
            icon={<Globe className="w-12 h-12 text-splat-vividPurple" />}
            title="Web Compatible"
            description="Your 3D content works seamlessly on any modern browser. No plugins or downloads required for your viewers."
            highlights={["Works on all modern browsers", "Mobile-friendly viewing", "No special software needed"]}
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  highlights,
}) => {
  return (
    <div className="blur-card p-8 flex flex-col h-full card-hover">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="mt-auto space-y-2">
        {highlights.map((item, index) => (
          <li key={index} className="flex items-start">
            <div className="mr-2 mt-1 min-w-4 h-4 rounded-full bg-gradient-to-r from-splat-vividPurple to-splat-blue"></div>
            <span className="text-sm text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
