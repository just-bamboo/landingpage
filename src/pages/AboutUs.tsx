import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import brunoImage from "@/assets/bruno.png";
import niklasImage from "@/assets/niklas.png";
import eberhardImage from "@/assets/eberhard.png";
import philineImage from "@/assets/philine.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-dark text-warm-white">
      <main className="min-h-screen flex flex-col items-center justify-between p-8">
        
        {/* Header with Back Button */}
        <div className="w-full max-w-4xl flex justify-start pt-8 mb-16">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-warm-beige/60 hover:text-bamboo-light transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-small">Zurück</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
          <h1 className="heading-hero mb-8 text-warm-white animate-fade-up">
            Nachhaltige Kosmetik, die begeistert
          </h1>
          
          <div className="max-w-3xl animate-fade-up delay-300">
            <p className="text-body text-warm-beige/80 mb-8 leading-relaxed">
              Jubam – kurz für „Just Bamboo" – revolutioniert die Kosmetikbranche mit plastikfreien, nachhaltigen Produkten. Unser Highlight: das weltweit erste organische Shampoo und Duschgel in einer natürlichen Bambus-Verpackung – innovativ, umweltfreundlich und einzigartig.
            </p>
            
            <h2 className="text-xl text-bamboo-light font-semibold mb-4">Das Problem</h2>
            <p className="text-body text-warm-beige/70 mb-8 leading-relaxed">
              Jährlich landen 95 % der 120 Milliarden produzierten Kosmetikverpackungen im Müll, nur ein Bruchteil wird recycelt. Unsere Mission: Premium Bio-Kosmetik, die Haut und Haar pflegt und die Umwelt schont.
            </p>
            
            <h2 className="text-xl text-bamboo-light font-semibold mb-4">Unsere Lösung</h2>
            <p className="text-body text-warm-beige/70 mb-8 leading-relaxed">
              In Zusammenarbeit mit den Fraunhofer-Instituten ISC und IGB haben wir eine revolutionäre Bambus-Verpackung entwickelt: biologisch abbaubar, mit einer natürlichen Schutzschicht gegen Feuchtigkeit und Schimmel – langlebig und kompostierbar. Fun Fact: Bambus ist die schnellst wachsende Landpflanze der Welt, was ihn zur perfekten Basis für unsere nachhaltigen Verpackungen macht. Im Inneren verwenden wir zertifizierte Bio-Inhaltsstoffe, die nachhaltig pflegen.
            </p>
            
            <h2 className="text-xl text-bamboo-light font-semibold mb-4">Was uns auszeichnet</h2>
            <div className="text-left mb-8">
              <ul className="space-y-3 text-warm-beige/70">
                <li className="flex items-start">
                  <span className="text-sage-medium mr-3 mt-1">•</span>
                  <span><strong className="text-warm-beige">Nachhaltigkeit:</strong> plastikfrei in jedem Schritt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-medium mr-3 mt-1">•</span>
                  <span><strong className="text-warm-beige">Qualität:</strong> höchste Bio-Standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-medium mr-3 mt-1">•</span>
                  <span><strong className="text-warm-beige">Design:</strong> naturinspiriert und ästhetisch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-medium mr-3 mt-1">•</span>
                  <span><strong className="text-warm-beige">Transparenz:</strong> Vertrauen durch Offenheit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-medium mr-3 mt-1">•</span>
                  <span><strong className="text-warm-beige">Innovation:</strong> mutige Lösungen für die Zukunft</span>
                </li>
              </ul>
            </div>
            
            <h2 className="text-xl text-bamboo-light font-semibold mb-4">Unser Produkt besteht aus:</h2>
            <div className="text-left mb-8">
              <ul className="space-y-3 text-warm-beige/70">
                <li className="flex items-start">
                  <span className="text-sage-medium mr-3 mt-1">•</span>
                  <span><strong className="text-warm-beige">Bambus-Korpus:</strong> natürlich gewachsen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-medium mr-3 mt-1">•</span>
                  <span><strong className="text-warm-beige">Natürliche Schutzschicht:</strong> Fraunhofer-Technologie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-medium mr-3 mt-1">•</span>
                  <span><strong className="text-warm-beige">Bio-Inhaltsstoffe:</strong> sanft zu Haut und Haar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-medium mr-3 mt-1">•</span>
                  <span><strong className="text-warm-beige">Natürliche Versiegelungsfolie:</strong> kompostierbar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-medium mr-3 mt-1">•</span>
                  <span><strong className="text-warm-beige">Biobasierter Verschluss:</strong> umweltfreundlich</span>
                </li>
              </ul>
            </div>
            
            <h2 className="text-xl text-bamboo-light font-semibold mb-4">Unsere Vision</h2>
            <p className="text-body text-warm-beige/70 leading-relaxed">
              Jubam startet mit Shampoo und Duschgel, bald folgen Make-up, Cremes und mehr. Unterstützt vom AHEAD-Programm und den Fraunhofer-Instituten machen wir Plastik überflüssig. Werden Sie Teil unserer Mission: Entdecken Sie nachhaltige Kosmetik, die begeistert, und gestalten Sie mit uns eine grünere Zukunft!
            </p>
          </div>

          {/* Team Section */}
          <div className="mt-20 animate-fade-up delay-700">
            <h2 className="heading-section mb-12 text-warm-white text-center">
              Unser Team
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {/* Bruno Schubert */}
              <div className="text-center group">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-4 rounded-full overflow-hidden bg-warm-beige/10 p-1">
                  <img 
                    src={brunoImage} 
                    alt="Bruno Schubert"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-warm-white mb-1">Bruno Schubert</h3>
                <p className="text-sm text-bamboo-light mb-2">Co-Founder</p>
                <p className="text-xs text-warm-beige/70 mb-3">Finanzen & Einkauf</p>
                <a 
                  href="mailto:bruno.schubert@jubam.de"
                  className="text-xs text-warm-beige/60 hover:text-bamboo-light transition-colors break-all"
                >
                  bruno.schubert@jubam.de
                </a>
              </div>

              {/* Niklas Steinheuer */}
              <div className="text-center group">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-4 rounded-full overflow-hidden bg-warm-beige/10 p-1">
                  <img 
                    src={niklasImage} 
                    alt="Niklas Steinheuer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-warm-white mb-1">Niklas Steinheuer</h3>
                <p className="text-sm text-bamboo-light mb-2">Co-Founder</p>
                <p className="text-xs text-warm-beige/70 mb-3">Operatives Geschäft & Vertrieb</p>
                <a 
                  href="mailto:niklas.steinheuer@jubam.de"
                  className="text-xs text-warm-beige/60 hover:text-bamboo-light transition-colors break-all"
                >
                  niklas.steinheuer@jubam.de
                </a>
              </div>

              {/* Eberhard Raue */}
              <div className="text-center group">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-4 rounded-full overflow-hidden bg-warm-beige/10 p-1">
                  <img 
                    src={eberhardImage} 
                    alt="Eberhard Raue"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-warm-white mb-1">Eberhard Raue</h3>
                <p className="text-sm text-bamboo-light mb-2">Berater</p>
                <p className="text-xs text-warm-beige/70 mb-3">Unternehmensentwicklung & Wachstumsstrategie</p>
                <a 
                  href="mailto:eberhard.raue@jubam.de"
                  className="text-xs text-warm-beige/60 hover:text-bamboo-light transition-colors break-all"
                >
                  eberhard.raue@jubam.de
                </a>
              </div>

              {/* Philine Stoffels */}
              <div className="text-center group">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-4 rounded-full overflow-hidden bg-warm-beige/10 p-1">
                  <img 
                    src={philineImage} 
                    alt="Philine Stoffels"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-warm-white mb-1">Philine Stoffels</h3>
                <p className="text-sm text-bamboo-light mb-2">Marketing Managerin</p>
                <p className="text-xs text-warm-beige/70 mb-3">Public Relations & Marketing</p>
                <a 
                  href="mailto:philine.stoffels@jubam.de"
                  className="text-xs text-warm-beige/60 hover:text-bamboo-light transition-colors break-all"
                >
                  philine.stoffels@jubam.de
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full max-w-4xl animate-fade-up delay-500 mt-24">
          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-12">
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
          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs mb-2">
              <Link 
                to="/ueber-uns" 
                className="text-warm-beige/40 hover:text-bamboo-light transition-colors duration-300"
              >
                Über uns
              </Link>
              <Link 
                to="/impressum" 
                className="text-warm-beige/40 hover:text-bamboo-light transition-colors duration-300"
              >
                Impressum
              </Link>
            </div>
            <p className="text-xs text-warm-beige/40">
              Copyright © 2025 Jubam
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;