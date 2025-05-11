
import React from "react";

const Process: React.FC = () => {
  return (
    <section id="process" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">SplatAI</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From upload to embed in minutes. Our simple process makes creating and sharing
            3D Gaussian Splats accessible to everyone.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-12 bottom-0 w-1 bg-gradient-to-b from-splat-vividPurple to-splat-blue -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-24">
            <Step
              number={1}
              title="Upload Your Content"
              description="Start by uploading your images, videos, or 3D scans. We accept multiple formats to make it easy for you to get started."
              imagePosition="right"
            />

            <Step
              number={2}
              title="AI Training Process"
              description="Our advanced AI automatically trains a high-quality 3D Gaussian Splat model from your content with optimized settings."
              imagePosition="left"
            />

            <Step
              number={3}
              title="Preview & Customize"
              description="Review your 3D model in our interactive viewer and adjust settings like quality, lighting, and background to match your needs."
              imagePosition="right"
            />

            <Step
              number={4}
              title="Share & Embed"
              description="Get a shareable link or embed code to place your 3D content anywhere on the web - from social media to your own website."
              imagePosition="left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepProps {
  number: number;
  title: string;
  description: string;
  imagePosition: "left" | "right";
}

const Step: React.FC<StepProps> = ({
  number,
  title,
  description,
  imagePosition,
}) => {
  return (
    <div className="relative">
      {/* Circle on Timeline */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -translate-y-1/4 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center border-4 border-splat-vividPurple z-10">
        <span className="font-bold text-splat-vividPurple">{number}</span>
      </div>

      <div
        className={`flex flex-col ${
          imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-8`}
      >
        <div className="w-full md:w-1/2 space-y-4">
          <div className="md:hidden flex w-12 h-12 rounded-full bg-white shadow-md items-center justify-center border-4 border-splat-vividPurple mb-4">
            <span className="font-bold text-splat-vividPurple">{number}</span>
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="w-full md:w-1/2">
          <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center shadow-lg">
            <p className="text-gray-600 text-center p-8">Step {number} visualization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
