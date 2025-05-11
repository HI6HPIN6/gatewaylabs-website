
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className="font-bold text-2xl gradient-text">Gateway Labs</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-splat-vividGreen font-medium">
            Features
          </a>
          <a href="#process" className="text-gray-700 hover:text-splat-vividGreen font-medium">
            How It Works
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-splat-vividGreen font-medium">
            Pricing
          </a>
          <Button className="btn-gradient">Try for Free</Button>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#features" className="text-gray-700 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#process" className="text-gray-700 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
              How It Works
            </a>
            <a href="#pricing" className="text-gray-700 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Pricing
            </a>
            <Button className="btn-gradient w-full">Try for Free</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
