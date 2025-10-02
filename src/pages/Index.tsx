import { BambooContainer } from "@/components/BambooContainer";
import { Card } from "@/components/ui/card";
import { Leaf, Award, Palette, Shield, Zap } from "lucide-react";
import fraunhoferLogo from "@/assets/fraunhofer-venture.jpg";
import euLogo from "@/assets/eu-emblem.jpg";
import berlinLogo from "@/assets/berlin-logo.png";

const values = [
  {
    icon: Leaf,
    title: "Umwelt",
  },
  {
    icon: Award,
    title: "Qualität", 
  },
  {
    icon: Palette,
    title: "Design",
  },
  {
    icon: Shield,
    title: "Vertrauen",
  },
  {
    icon: Zap,
    title: "Innovation",
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark text-warm-white">
      {/* Main Content - Single Screen Layout */}
      <main className="min-h-screen flex flex-col items-center justify-between p-8">
        
        {/* Header */}
        <div className="text-center pt-16 animate-fade-up">
          <h1 className="heading-hero mb-4 text-warm-white">
            Jubam
          </h1>
          <p className="text-body text-warm-beige/80">
            Just Bamboo
          </p>
        </div>

        {/* Product Container */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto">
          <BambooContainer />
          
          {/* Product Description */}
          <div className="text-center mt-12 sm:mt-16 mb-8 sm:mb-12 animate-fade-up delay-300 px-4">
            <h2 className="heading-main mb-6 sm:mb-8 text-warm-white max-w-3xl mx-auto leading-tight">
              Das weltweit erste Bio-Shampoo in einem natürlich gewachsenen Behältnis - BAMBUS
            </h2>
            
            <p className="text-body text-warm-beige/70 mb-8 sm:mb-12">
              COMING SOON
            </p>
          </div>
        </div>

        {/* Values Icons */}
        <div className="w-full max-w-4xl animate-fade-up delay-500">
          <div className="grid grid-cols-5 gap-4 sm:gap-8 justify-items-center mb-24">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title}
                  className="text-center group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-glow/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto mb-2 sm:mb-3">
                    <Icon 
                      className="w-5 h-5 sm:w-6 sm:h-6 text-bamboo-light/80" 
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="text-xs text-warm-beige/60 px-1">
                    {value.title}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Partner Logos */}
          <div className="w-full max-w-4xl mb-16 px-4">
            <div className="flex flex-col items-center space-y-4 sm:space-y-6">
              <p className="text-xs sm:text-sm text-warm-beige/40 text-center">
                Unterstützt von
              </p>
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 md:space-x-6 flex-wrap gap-3 sm:gap-4">
                <Card className="bg-white border-white p-2 sm:p-3 md:p-4 hover:scale-105 transition-transform duration-300 shadow-lg">
                  <img 
                    src={fraunhoferLogo}
                    alt="Fraunhofer Venture"
                    className="h-5 sm:h-6 md:h-8 w-auto object-contain"
                  />
                </Card>
                <Card className="bg-white border-white p-2 sm:p-3 md:p-4 hover:scale-105 transition-transform duration-300 shadow-lg">
                  <img 
                    src={euLogo}
                    alt="Europäische Union"
                    className="h-5 sm:h-6 md:h-8 w-auto object-contain"
                  />
                </Card>
                <Card className="bg-white border-white p-2 sm:p-3 md:p-4 hover:scale-105 transition-transform duration-300 shadow-lg">
                  <img 
                    src={berlinLogo}
                    alt="Berlin"
                    className="h-5 sm:h-6 md:h-8 w-auto object-contain"
                  />
                </Card>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 sm:space-x-8 mb-16">
            <a 
              href="https://www.instagram.com/jubam.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-beige/60 hover:text-bamboo-light transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/jubam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-beige/60 hover:text-bamboo-light transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/jubam.official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-beige/60 hover:text-bamboo-light transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
          
          {/* Footer Links */}
          <div className="text-center px-4">
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs mb-2">
              <a 
                href="/ueber-uns" 
                className="text-warm-beige/40 hover:text-bamboo-light transition-colors duration-300"
              >
                Über uns
              </a>
              <a 
                href="/impressum" 
                className="text-warm-beige/40 hover:text-bamboo-light transition-colors duration-300"
              >
                Impressum
              </a>
            </div>
            <p className="text-xs text-warm-beige/40">
              Copyright © 2025 Jubam
            </p>
          </div>
        </div>
      </main>
    </div>
  )
};

export default Index;