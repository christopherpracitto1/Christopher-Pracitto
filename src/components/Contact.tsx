import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-navy-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Contact Info */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Contact Our Office
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                Don't face your family law challenges alone. Contact Christopher Pracitto 
                today for expert legal guidance and personalized representation.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Phone</h3>
                      <a 
                        href="tel:+17862601212" 
                        className="text-gold hover:text-gold-light transition-colors text-lg"
                      >
                        (786) 260-1212
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Office Location</h3>
                      <a 
                        href="https://maps.app.goo.gl/8Z5HjLjMxJ3TqW8LA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-colors"
                      >
                        1221 Brickell Ave Suite 900<br />
                        Miami, FL 33131
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <a 
                        href="mailto:MiamiLaw@comcast.net" 
                        className="text-gold hover:text-gold-light transition-colors text-lg"
                      >
                        MiamiLaw@comcast.net
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Office Hours</h3>
                      <div className="text-gray-200">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: By Appointment</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="pt-4">
              <Button variant="hero" size="lg" className="text-lg" asChild>
                <a href="tel:+17862601212">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right Column - Map/Additional Info */}
          <div className="lg:pl-8">
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Why Choose Christopher Pracitto?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Over 15 years of family law experience in Miami-Dade County</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Compassionate approach focused on your family's best interests</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Bilingual services available in English and Spanish</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Initial consultation available to discuss your legal needs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Convenient Brickell office location with easy access</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 italic">
                    "Family law matters require both legal expertise and emotional understanding. 
                    I'm committed to providing both to help you navigate this challenging time."
                  </p>
                  <p className="text-sm font-semibold text-primary mt-2">
                    - Christopher Pracitto, Family Law Attorney
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;