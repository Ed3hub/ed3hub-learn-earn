
import { Mail, Lightbulb, Users, Globe, Code, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const JoinUs = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:ed3hub@gmail.com?subject=Interest in Ed3Hub Project&body=Hi Ed3Hub team,%0D%0A%0D%0AI'm interested in learning more about how my expertise can contribute to the Ed3Hub project. I'd love to discuss potential collaboration opportunities.%0D%0A%0D%0ABest regards,";
  };

  const features = [
    {
      title: "Shape the Future of Education",
      icon: Lightbulb,
      description: "Contribute to building a platform that will democratize Web3 education globally."
    },
    {
      title: "Technical Innovation",
      icon: Code,
      description: "Work with cutting-edge technologies and help develop innovative learning solutions."
    },
    {
      title: "Content Creation",
      icon: BookOpen,
      description: "Help create comprehensive, accessible educational content for the Web3 community."
    },
    {
      title: "Community Building",
      icon: Users,
      description: "Foster a vibrant learning community and connect Web3 enthusiasts worldwide."
    },
    {
      title: "Global Impact",
      icon: Globe,
      description: "Make education accessible to learners across different backgrounds and geographies."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Join Our Mission
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ed3Hub is more than just an educational platform - it's a movement to democratize Web3 knowledge. 
            We're building something special, and we'd love to explore how your expertise can be part of this journey.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-purple-100 max-w-2xl mx-auto text-lg">
              We believe Web3 education should be accessible, community-driven, and built by people who truly understand 
              the transformative power of decentralized technologies.
            </p>
          </div>
        </div>

        {/* Impact Areas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Ways to Make an Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg w-fit mb-4">
                    <feature.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-center">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Join Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Why Join Ed3Hub?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-600">For Educators & Content Creators</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Share your knowledge with a global audience</li>
                <li>• Build your reputation in the Web3 space</li>
                <li>• Create lasting educational impact</li>
                <li>• Connect with like-minded educators</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">For Developers & Technologists</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Work on innovative educational technology</li>
                <li>• Contribute to open-source initiatives</li>
                <li>• Shape the future of learning platforms</li>
                <li>• Collaborate with industry experts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <Mail className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Opportunities?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you're an educator, developer, content creator, or Web3 enthusiast, we'd love to hear from you. 
              Let's discuss how your unique skills and perspective can help shape the future of Web3 education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                onClick={handleContactClick}
              >
                Contact Us
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-gray-900 border-gray-300 hover:bg-gray-50"
                onClick={() => window.open('https://x.com/ed3hub', '_blank')}
              >
                Join us on X
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JoinUs;
