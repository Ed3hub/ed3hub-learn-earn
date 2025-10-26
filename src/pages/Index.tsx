
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[600px] flex items-center">
        {/* Animated background elements with floating motion */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-[bounce_4s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-[bounce_6s_ease-in-out_infinite]" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-40 right-1/4 w-64 h-64 bg-blue-300/25 rounded-full blur-3xl animate-[bounce_5s_ease-in-out_infinite]" style={{ animationDelay: "2s" }}></div>
          
          {/* Geometric floating shapes */}
          <div className="absolute top-32 right-20 w-16 h-16 border-4 border-blue-400/40 rotate-45 animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-500/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          <div className="absolute top-1/2 left-10 w-8 h-8 border-4 border-blue-300/40 animate-[spin_15s_linear_infinite_reverse]"></div>
          <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-blue-400/40 rotate-12 animate-[bounce_4s_ease-in-out_infinite]" style={{ animationDelay: "0.5s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent inline-block animate-[fade-in_1s_ease-out,scale-in_0.5s_ease-out] bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]">
              Learn Web3.
            </span>
            <br />
            <span className="text-gray-900 inline-block animate-[fade-in_1s_ease-out_0.3s_both,slide-in-right_0.6s_ease-out_0.3s_both]">
              Grow Skills. Earn Rewards.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-[fade-in_1s_ease-out_0.6s_both]">
            Join Ed3Hub, the community-driven platform where you can master Web3 technologies, 
            contribute to the ecosystem, and earn while you learn. Built by the community, for the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fade-in_1s_ease-out_0.9s_both]">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 hover-scale animate-[bounce_1s_ease-in-out_1.2s]"
              onClick={() => setShowExploreForm(true)}
            >
              Explore Courses
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-scale animate-[bounce_1s_ease-in-out_1.4s]">
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
