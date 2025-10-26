
import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Trophy, BookOpen, Code, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EmailCollectionForm from "@/components/EmailCollectionForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [showExploreForm, setShowExploreForm] = useState(false);
  const [showGetStartedForm, setShowGetStartedForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-40 right-1/4 w-64 h-64 bg-blue-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent inline-block animate-scale-in">
              Learn Web3.
            </span>
            <br />
            <span className="text-gray-900 inline-block animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Grow Skills. Earn Rewards.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Join Ed3Hub, the community-driven platform where you can master Web3 technologies, 
            contribute to the ecosystem, and earn while you learn. Built by the community, for the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 hover-scale"
              onClick={() => setShowExploreForm(true)}
            >
              Explore Courses
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-scale">
              <Link to="/join-us">Join Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Ed3Hub?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Comprehensive Learning</CardTitle>
                <CardDescription>
                  From blockchain basics to advanced DeFi protocols, we cover both technical and non-technical aspects of Web3.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Community-Driven</CardTitle>
                <CardDescription>
                  Built by passionate contributors who believe in democratizing Web3 education and fostering inclusive growth.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Learn & Earn</CardTitle>
                <CardDescription>
                  Complete courses, contribute to projects, and earn rewards while building your Web3 expertise.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Start Your Web3 Journey?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of learners who are building the future of the internet, one course at a time.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => setShowGetStartedForm(true)}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />

      <EmailCollectionForm
        isOpen={showExploreForm}
        onClose={() => setShowExploreForm(false)}
        title="Get Early Access to Courses"
        description="Be the first to know when Ed3Hub launches with our comprehensive Web3 courses."
      />

      <EmailCollectionForm
        isOpen={showGetStartedForm}
        onClose={() => setShowGetStartedForm(false)}
        title="Join the Waitlist"
        description="Get notified when Ed3Hub is ready and start your Web3 learning journey."
      />
    </div>
  );
};

export default Index;
