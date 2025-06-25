
import { Heart, Code, Palette, MessageSquare, BookOpen, Users, Lightbulb, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

const JoinUs = () => {
  const roles = [
    {
      title: "Course Instructors",
      icon: BookOpen,
      description: "Share your Web3 expertise by creating and teaching courses to our global community.",
      skills: ["Web3 Development", "Smart Contracts", "DeFi", "Teaching"],
      timeCommitment: "5-10 hours/week",
      impact: "Directly educate hundreds of learners"
    },
    {
      title: "Content Creators",
      icon: Palette,
      description: "Produce engaging educational content, tutorials, and learning materials.",
      skills: ["Content Writing", "Video Production", "Graphic Design", "Animation"],
      timeCommitment: "3-8 hours/week",
      impact: "Create resources used by thousands"
    },
    {
      title: "Developers",
      icon: Code,
      description: "Help build and maintain our platform, features, and learning tools.",
      skills: ["React", "Node.js", "Web3.js", "Smart Contracts"],
      timeCommitment: "4-12 hours/week",
      impact: "Shape the platform's future"
    },
    {
      title: "Community Managers",
      icon: MessageSquare,
      description: "Engage with learners, moderate discussions, and foster our community spirit.",
      skills: ["Communication", "Community Building", "Social Media", "Moderation"],
      timeCommitment: "3-6 hours/week",
      impact: "Support and guide community growth"
    },
    {
      title: "Curriculum Designers",
      icon: Lightbulb,
      description: "Design learning paths, assessment strategies, and educational frameworks.",
      skills: ["Educational Design", "Learning Psychology", "Web3 Knowledge", "Research"],
      timeCommitment: "4-8 hours/week",
      impact: "Define learning experiences"
    },
    {
      title: "Marketing & Outreach",
      icon: Globe,
      description: "Spread awareness about Ed3Hub and attract learners to our platform.",
      skills: ["Digital Marketing", "Social Media", "Content Strategy", "Analytics"],
      timeCommitment: "3-7 hours/week",
      impact: "Grow our global reach"
    }
  ];

  const benefits = [
    "Contribute to Web3 education democratization",
    "Build your portfolio and gain experience",
    "Network with Web3 professionals globally",
    "Early access to new courses and features",
    "Recognition in our contributor hall of fame",
    "Potential future opportunities as we grow"
  ];

  const handleApplyClick = () => {
    window.location.href = "mailto:ed3hub@gmail.com?subject=Volunteer Application&body=Hi Ed3Hub team,%0D%0A%0D%0AI'm interested in volunteering with Ed3Hub. Please let me know how I can contribute.%0D%0A%0D%0ABest regards,";
  };

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
            Ed3Hub is powered by passionate volunteers who believe in making Web3 education accessible to everyone. 
            Join us in building the future of decentralized learning.
          </p>
        </div>

        {/* Why Volunteer Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-12 text-white">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 mx-auto mb-4 text-pink-200" />
            <h2 className="text-3xl font-bold mb-4">Why Volunteer with Ed3Hub?</h2>
            <p className="text-purple-100 max-w-2xl mx-auto">
              We're bootstrapping this platform because we believe Web3 education should be community-driven, 
              accessible, and built by people who truly care about the space.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                <div className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0"></div>
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Roles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Volunteer Opportunities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
                      <role.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">{role.title}</CardTitle>
                  </div>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <h4 className="font-medium text-sm text-gray-900 mb-2">Skills Needed:</h4>
                    <div className="flex flex-wrap gap-1">
                      {role.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600">
                      <strong>Time Commitment:</strong> {role.timeCommitment}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Impact:</strong> {role.impact}
                    </div>
                  </div>
                  
                  <Button 
                    className="mt-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    onClick={handleApplyClick}
                  >
                    Apply for This Role
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">How to Get Involved</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Choose Your Role</h3>
              <p className="text-sm text-gray-600">
                Review the volunteer opportunities and pick the one that matches your skills and interests.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Submit Application</h3>
              <p className="text-sm text-gray-600">
                Fill out our simple application form with your background and motivation to volunteer.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Start Contributing</h3>
              <p className="text-sm text-gray-600">
                Join our community, get onboarded, and start making an impact in Web3 education.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <Users className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of volunteers who are already shaping the future of Web3 education. 
              Every contribution, no matter how small, helps democratize access to cutting-edge knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                onClick={handleApplyClick}
              >
                Start Your Application
              </Button>
              <Button variant="outline" size="lg" className="text-gray-900 border-gray-300 hover:bg-gray-50">
                Join Our Discord
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
