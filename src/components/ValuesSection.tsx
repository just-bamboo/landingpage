import { Leaf, Award, Palette, Shield, Zap } from "lucide-react";

export const ValuesSection = () => {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-bamboo-light to-warm-white">
      <div className="relative max-w-4xl mx-auto">
        
        {/* Mobile Layout: Two distinct rows */}
        <div className="block md:hidden">
          {/* First Row: Umwelt, Qualität, Design */}
          <div className="flex justify-between items-center mb-12 px-4">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-glow flex items-center justify-center mx-auto mb-3">
                <Leaf className="w-8 h-8 text-bamboo-light" strokeWidth={1.5} />
              </div>
              <h3 className="text-xs font-medium">Umwelt</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-glow flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-sage-medium" strokeWidth={1.5} />
              </div>
              <h3 className="text-xs font-medium">Qualität</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-glow flex items-center justify-center mx-auto mb-3">
                <Palette className="w-8 h-8 text-forest-deep" strokeWidth={1.5} />
              </div>
              <h3 className="text-xs font-medium">Design</h3>
            </div>
          </div>
          
          {/* Second Row: Vertrauen, Innovation */}
          <div className="flex justify-center items-center gap-16">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-glow flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-warm-beige" strokeWidth={1.5} />
              </div>
              <h3 className="text-xs font-medium">Vertrauen</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-glow flex items-center justify-center mx-auto mb-3">
                <Zap className="w-8 h-8 text-sage-medium" strokeWidth={1.5} />
              </div>
              <h3 className="text-xs font-medium">Innovation</h3>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Single row */}
        <div className="hidden md:flex justify-center items-center gap-12">
          <div className="text-center group">
            <div className="w-20 h-20 rounded-2xl bg-gradient-glow flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Leaf className="w-10 h-10 text-bamboo-light" strokeWidth={1.5} />
            </div>
            <h3 className="text-small font-medium group-hover:text-sage-medium transition-colors duration-300">Umwelt</h3>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 rounded-2xl bg-gradient-glow flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-10 h-10 text-sage-medium" strokeWidth={1.5} />
            </div>
            <h3 className="text-small font-medium group-hover:text-sage-medium transition-colors duration-300">Qualität</h3>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 rounded-2xl bg-gradient-glow flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Palette className="w-10 h-10 text-forest-deep" strokeWidth={1.5} />
            </div>
            <h3 className="text-small font-medium group-hover:text-sage-medium transition-colors duration-300">Design</h3>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 rounded-2xl bg-gradient-glow flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-10 h-10 text-warm-beige" strokeWidth={1.5} />
            </div>
            <h3 className="text-small font-medium group-hover:text-sage-medium transition-colors duration-300">Vertrauen</h3>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 rounded-2xl bg-gradient-glow flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-10 h-10 text-sage-medium" strokeWidth={1.5} />
            </div>
            <h3 className="text-small font-medium group-hover:text-sage-medium transition-colors duration-300">Innovation</h3>
          </div>
        </div>

      </div>
    </section>
  );
};