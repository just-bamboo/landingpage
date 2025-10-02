import fraunhoferLogo from "@/assets/fraunhofer-venture.jpg";
import euLogo from "@/assets/eu-emblem.jpg";
import berlinLogo from "@/assets/berlin-logo.png";

export const PartnerLogos = () => {
  return (
    <div className="mt-8 pt-8 border-t border-warm-beige/10">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-xs text-warm-beige/40 text-center">
          Unterstützt von
        </p>
        <div className="flex items-center justify-center space-x-6 sm:space-x-8 flex-wrap gap-4">
          <img 
            src={fraunhoferLogo}
            alt="Fraunhofer Venture"
            className="h-8 sm:h-10 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity"
          />
          <img 
            src={euLogo}
            alt="Europäische Union"
            className="h-8 sm:h-10 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity"
          />
          <img 
            src={berlinLogo}
            alt="Berlin"
            className="h-8 sm:h-10 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};