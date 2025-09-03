import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Shield, Scale } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Divorce & Separation",
    description: "Compassionate guidance through divorce proceedings, property division, and spousal support matters."
  },
  {
    icon: Users,
    title: "Child Custody",
    description: "Protecting your parental rights and ensuring the best interests of your children are prioritized."
  },
  {
    icon: Shield,
    title: "Child Support",
    description: "Fair calculation and enforcement of child support to secure your child's financial future."
  },
  {
    icon: Scale,
    title: "Family Mediation",
    description: "Alternative dispute resolution to help families reach amicable agreements outside of court."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Family Law Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Providing comprehensive legal representation for all your family law needs 
            with expertise, compassion, and dedication.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-gold-light rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;