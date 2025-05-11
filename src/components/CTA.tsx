
import React from "react";
import { Button } from "@/components/ui/button";

const CTA: React.FC = () => {
  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="blur-card p-8 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Amazing 3D Experiences?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using SplatAI to bring their content to life in 3D.
            Get started today with our free tier.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <PricingCard 
              tier="Free"
              price="$0"
              features={[
                "1 Project",
                "Basic training",
                "Public hosting",
                "Standard support"
              ]}
              buttonText="Start Free"
              popular={false}
            />
            <PricingCard 
              tier="Pro"
              price="$29"
              period="/month"
              features={[
                "10 Projects",
                "HD quality",
                "Private hosting",
                "Priority support",
                "Custom branding"
              ]}
              buttonText="Go Pro"
              popular={true}
            />
            <PricingCard 
              tier="Business"
              price="$99"
              period="/month"
              features={[
                "Unlimited projects",
                "Max quality",
                "Advanced analytics",
                "API access",
                "Dedicated support"
              ]}
              buttonText="Contact Sales"
              popular={false}
            />
          </div>
          
          <div className="pt-4">
            <p className="text-sm text-gray-500 mb-4">Need a custom solution for your enterprise?</p>
            <Button variant="outline" className="hover:text-splat-vividPurple">
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  tier: string;
  price: string;
  period?: string;
  features: string[];
  buttonText: string;
  popular: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  price,
  period = "",
  features,
  buttonText,
  popular
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 border ${popular ? 'border-splat-vividPurple scale-105 shadow-xl' : 'border-gray-100'} relative flex flex-col`}>
      {popular && (
        <span className="absolute -top-3 left-0 right-0 mx-auto w-fit px-4 py-1 bg-splat-vividPurple text-white text-sm rounded-full font-medium">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold mb-2">{tier}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-gray-500">{period}</span>
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-splat-vividPurple to-splat-blue mr-3"></div>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={popular ? "btn-gradient w-full" : "w-full"} variant={popular ? "default" : "outline"}>
        {buttonText}
      </Button>
    </div>
  );
};

export default CTA;
