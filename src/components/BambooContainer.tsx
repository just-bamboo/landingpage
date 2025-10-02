import productNew from "@/assets/product-new.png";

export const BambooContainer = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Enhanced Glow Background */}
      <div 
        className="absolute inset-0 rounded-3xl animate-glow-pulse"
        style={{
          background: `radial-gradient(ellipse at center, hsl(var(--bamboo-light) / 0.5) 0%, hsl(var(--sage-medium) / 0.3) 40%, transparent 70%)`,
          filter: `blur(50px)`,
          transform: `scale(2.5)`,
        }}
      />
      
      {/* Product Image - More Prominent */}
      <img 
        src={productNew}
        alt="Jubam Bio-Shampoo in Bambus-Behältnis"
        className="relative z-10 w-56 h-80 md:w-72 md:h-[450px] lg:w-96 lg:h-[600px] object-contain animate-float"
        style={{
          filter: "drop-shadow(0 0 60px hsl(var(--bamboo-light) / 0.9)) drop-shadow(0 15px 40px hsl(var(--forest-deep) / 0.5))",
        }}
      />
      
      {/* Simplified Floating Particles */}
      <div className="absolute w-2 h-2 bg-bamboo-light/70 rounded-full animate-float" 
           style={{ left: '15%', top: '25%', animationDelay: '0s' }} />
      <div className="absolute w-1.5 h-1.5 bg-bamboo-light/50 rounded-full animate-float" 
           style={{ left: '80%', top: '40%', animationDelay: '1.5s' }} />
      <div className="absolute w-2.5 h-2.5 bg-bamboo-light/60 rounded-full animate-float" 
           style={{ left: '25%', top: '75%', animationDelay: '3s' }} />
    </div>
  );
};