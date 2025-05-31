
import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Icons */}
        <div className="flex justify-center space-x-8 mb-16">
          <Instagram className="w-8 h-8 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" />
          <MessageCircle className="w-8 h-8 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" />
        </div>

        {/* About Us Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">ABOUT US</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are the best Custom Glass, Railings, Mirrors installation, and Partitions in Toronto Canada
          </p>
        </div>

        {/* Expert Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            "Expert Custom Glass Installation, Railings, and Mirrors for Your Home"
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Remodel your <span className="font-semibold">custom glasswork</span> to enhance the interior of your house in 
                a uniquely sophisticated manner. Glass Coziest specializes in creating 
                unique custom glass railings with glass panels to enhance the safety of 
                your staircase. Our glass panels not only provide safety but also add 
                sophistication to your space.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Custom mirrors are not only for reflection; they also add brightness to a 
                room, make spaces look larger and serve as décor. Features like elegantly 
                crafted glass staircases, frameless glass shower enclosures or the latest 
                modern mirrors with the right lighting make any room perfectly 
                sophisticated and elegant.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Appeal to your sense of special glamour that adds beauty and unique 
                appeal to your interiors with technology that no other interiors would 
                match.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Modern glass staircase installation"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Custom glass railings"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="space-y-6 order-1 md:order-2">
            <h4 className="text-xl font-bold text-gray-900">
              Custom glass installation has transitioned from traditional roles to essential features, combining custom railings, innovative designs, and bespoke services that create both functional and stylish.
            </h4>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 leading-relaxed italic">
                "At Altohomes, we specialize in creating custom glass railings, mirrors, and select window solutions 
                that elevate the beauty and functionality of homes in Toronto, Canada. Our team collaborates closely with 
                you to design and install pieces that are tailored to your style and space. We focus on delivering precision 
                craftsmanship using high-quality materials and offering bespoke glass artwork, custom mirrors, and railing we 
                guarantee excellence every time with a commitment to uncompromising service and expert craftsmanship, we 
                transform visions into stunning reality."
              </p>
              <div className="mt-6 text-right">
                <span className="text-gray-500 text-sm">Established since • registration • google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
