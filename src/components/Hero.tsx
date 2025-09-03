import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/ba689d20-ddbd-4560-a191-76b35b179cc4.png')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-gold font-semibold">Trusted Family Law Attorney</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Protecting Your Family's
              <span className="text-gold block">Future</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-2xl">
              Experienced family law representation in Miami. Christopher Pracitto provides 
              compassionate, skilled legal guidance for divorce, child custody, and family matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Phone className="h-5 w-5 mr-2" />
                Contact Attorney
              </Button>
              <Button 
                variant="outline-hero" 
                size="lg" 
                className="text-lg"
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  servicesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm text-gray-300">Call Now</p>
                  <a href="tel:+17862601212" className="text-lg font-semibold hover:text-gold transition-colors">
                    (786) 260-1212
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm text-gray-300">Office Location</p>
                  <a 
                    href="https://maps.app.goo.gl/8Z5HjLjMxJ3TqW8LA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold hover:text-gold transition-colors"
                  >
                    1221 Brickell Ave Suite 900
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Attorney Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="/lovable-uploads/fbe915ed-83bc-4ccc-8ebd-509fa147ebbd.png"
                  alt="Christopher Pracitto - Family Law Attorney"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-navy px-6 py-3 rounded-xl shadow-lg">
                <p className="font-bold text-lg">Christopher Pracitto</p>
                <p className="text-sm">Family Law Attorney</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;