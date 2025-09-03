import { Phone, MapPin, Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-gold" />
              <div>
                <h3 className="text-xl font-bold">Law Office of</h3>
                <h3 className="text-xl font-bold">Christopher Pracitto, P.A.</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dedicated family law attorney serving Miami-Dade County with 
              compassionate, experienced legal representation for divorce, 
              child custody, and family matters.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <a href="tel:+17862601212" className="hover:text-gold transition-colors">
                  (786) 260-1212
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gold mt-1" />
                <a 
                  href="https://maps.app.goo.gl/8Z5HjLjMxJ3TqW8LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  1221 Brickell Ave Suite 900<br />
                  Miami, FL 33131
                </a>
              </div>
            </div>
          </div>
          
          {/* Legal Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">Areas of Practice</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Divorce & Separation</li>
              <li>• Child Custody & Visitation</li>
              <li>• Child Support</li>
              <li>• Spousal Support/Alimony</li>
              <li>• Property Division</li>
              <li>• Family Mediation</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © 2024 Law Office of Christopher Pracitto, P.A. All rights reserved.
            </p>
            <p className="text-xs text-gray-400">
              Attorney Advertising. Prior results do not guarantee a similar outcome.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;