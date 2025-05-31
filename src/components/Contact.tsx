
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to enhance your home with custom glass elevators, mirrors, railings, or window solutions? We're here to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">2345 Fairview St<br />123 Danforth St, Mississauga, ON</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">(416) 555-4854</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@altohomes.ca</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                    Find Out More
                  </Button>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  Ready to enhance your home with custom glass elevators, mirrors, railings, or window solutions? Whether you're looking for beautiful crafted designs, whether you're building or renovating, Altohomes is committed to turning your ideas into reality, carefully crafted designs.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div 
              className="w-full h-96 bg-gray-300 rounded-lg overflow-hidden"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg text-center">
                  <MapPin className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Mississauga, ON</p>
                  <p className="text-sm text-gray-600">Serving Greater Toronto Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 mt-16">
          <Instagram className="w-8 h-8 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer transform hover:scale-110" />
          <MessageCircle className="w-8 h-8 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer transform hover:scale-110" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
