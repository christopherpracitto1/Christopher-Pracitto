import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              Law Office of Christopher Pracitto, P.A.
            </h1>
            <p className="text-sm text-muted-foreground">Family Law Attorney</p>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-accent" />
              <a href="tel:+17862601212" className="hover:text-accent transition-colors">
                (786) 260-1212
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-accent" />
              <span>Miami, FL</span>
            </div>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="hero" size="sm" asChild>
              <a href="tel:+17862601212">
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;