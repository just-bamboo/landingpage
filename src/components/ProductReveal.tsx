import { useEffect, useState } from "react";
import productOutline from "@/assets/product-outline.png";

interface ProductRevealProps {
  scrollY: number;
}

export const ProductReveal = ({ scrollY }: ProductRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show product when scrolled past first section
      if (scrollPosition > windowHeight * 0.5) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax transforms
  const productTransform = Math.max(0, 100 - (scrollY * 0.1));
  const glowIntensity = Math.min(1, Math.max(0, (scrollY - 500) / 1000));

  return (
    <section className="relative min-h-[200vh] parallax-container">
      {/* Background gradient that changes with scroll */}
      <div 
        className="fixed inset-0 bg-gradient-to-b from-warm-white via-bamboo-light to-sage-medium/20"
        style={{ 
          opacity: Math.min(1, scrollY / 1000),
          zIndex: -1 
        }}
      />

      {/* Product Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Product Outline */}
        <div 
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          style={{ 
            transform: `translateY(${productTransform}px) scale(${0.8 + glowIntensity * 0.4})`,
          }}
        >
          {/* Glow Effect */}
          <div 
            className="absolute inset-0 rounded-3xl animate-glow-pulse"
            style={{
              background: `radial-gradient(ellipse at center, hsl(var(--sage-medium) / ${0.3 + glowIntensity * 0.5}) 0%, transparent 70%)`,
              filter: `blur(${20 + glowIntensity * 30}px)`,
              transform: `scale(${1.5 + glowIntensity * 0.5})`,
            }}
          />
          
          {/* Product Image */}
          <img 
            src={productOutline} 
            alt="Jubam Product Outline" 
            className="relative z-10 h-64 md:h-96 lg:h-[500px] w-auto object-contain product-glow animate-float"
            style={{
              filter: `drop-shadow(0 0 ${20 + glowIntensity * 60}px hsl(var(--sage-medium) / ${0.4 + glowIntensity * 0.4}))`,
            }}
          />
          
          {/* Outline Stroke Effect */}
          <div 
            className="absolute inset-0 rounded-3xl border-2 animate-pulse"
            style={{
              borderColor: `hsl(var(--sage-medium) / ${0.3 + glowIntensity * 0.7})`,
              boxShadow: `inset 0 0 ${30 + glowIntensity * 50}px hsl(var(--sage-medium) / ${0.2 + glowIntensity * 0.3})`,
            }}
          />
        </div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-bamboo-light rounded-full opacity-40"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              transform: `translateY(${Math.sin((scrollY + i * 100) * 0.01) * 20}px)`,
            }}
          />
        ))}
      </div>

      {/* Text Overlay */}
      <div 
        className="absolute inset-x-0 bottom-1/4 text-center px-4"
        style={{
          opacity: Math.min(1, Math.max(0, (scrollY - 800) / 400)),
          transform: `translateY(${Math.max(0, 50 - (scrollY - 800) * 0.1)}px)`,
        }}
      >
        <h3 className="heading-main mb-4 text-gradient">
          Sustainable Beauty
        </h3>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          Grown by nature, crafted for you. The first cosmetic container that's as organic as its content.
        </p>
      </div>
    </section>
  );
};