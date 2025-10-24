
import { useState } from "react";
import { Clock, Users, Star, Code, BookOpen, TrendingUp, Database, Shield, PenTool, Palette, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import EmailCollectionForm from "@/components/EmailCollectionForm";
import Footer from "@/components/Footer";

const Courses = () => {
  const [filter, setFilter] = useState("all");
  const [showEmailForm, setShowEmailForm] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Blockchain Fundamentals",
      description: "Learn the basics of blockchain technology, cryptography, and decentralized systems.",
      category: "non-technical",
      level: "Beginner",
      duration: "4 weeks",
      students: 1247,
      rating: 4.8,
      instructor: "Sarah Chen",
      image: "photo-1605810230434-7631ac76ec81"
    },
    {
      id: 2,
      title: "Smart Contract Development with Solidity",
      description: "Master Solidity programming and build secure smart contracts on Ethereum.",
      category: "technical",
      level: "Intermediate",
      duration: "8 weeks", 
      students: 892,
      rating: 4.9,
      instructor: "Alex Rodriguez",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      id: 3,
      title: "Data Engineering Fundamentals",
      description: "Master data pipelines, ETL processes, and big data technologies like Spark and Kafka.",
      category: "technical",
      level: "Intermediate",
      duration: "10 weeks",
      students: 1543,
      rating: 4.9,
      instructor: "James Patterson",
      image: "photo-1551288049-bebda4e38f71"
    },
    {
      id: 4,
      title: "Cybersecurity Essentials",
      description: "Learn network security, ethical hacking, penetration testing, and threat detection.",
      category: "technical",
      level: "Intermediate",
      duration: "8 weeks",
      students: 2156,
      rating: 4.8,
      instructor: "Maya Johnson",
      image: "photo-1550751827-4bd374c3f58b"
    },
    {
      id: 5,
      title: "Technical Writing for Developers",
      description: "Create clear documentation, API guides, and technical content that developers love.",
      category: "non-technical",
      level: "Beginner",
      duration: "5 weeks",
      students: 987,
      rating: 4.7,
      instructor: "Rachel Green",
      image: "photo-1455390582262-044cdead277a"
    },
    {
      id: 6,
      title: "Creative Writing Masterclass",
      description: "Develop your storytelling skills, craft compelling narratives, and find your unique voice.",
      category: "non-technical",
      level: "Beginner",
      duration: "6 weeks",
      students: 1876,
      rating: 4.9,
      instructor: "Thomas Wright",
      image: "photo-1471107340929-a87cd0f5b5f3"
    },
    {
      id: 7,
      title: "DeFi Protocol Analysis",
      description: "Understand how decentralized finance protocols work and their economic models.",
      category: "non-technical",
      level: "Intermediate",
      duration: "6 weeks",
      students: 634,
      rating: 4.7,
      instructor: "Michael Kim",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 8,
      title: "Web3 Frontend Development",
      description: "Build decentralized applications using React, Web3.js, and modern development tools.",
      category: "technical",
      level: "Advanced",
      duration: "10 weeks",
      students: 543,
      rating: 4.9,
      instructor: "Emma Thompson",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      id: 9,
      title: "Cloud Computing & DevOps",
      description: "Master AWS, Docker, Kubernetes, CI/CD pipelines, and modern infrastructure practices.",
      category: "technical",
      level: "Intermediate",
      duration: "9 weeks",
      students: 1832,
      rating: 4.8,
      instructor: "Carlos Mendez",
      image: "photo-1451187580459-43490279c0fa"
    },
    {
      id: 10,
      title: "UI/UX Design with Figma",
      description: "Design beautiful, user-centered interfaces and prototypes using industry-standard tools.",
      category: "technical",
      level: "Beginner",
      duration: "7 weeks",
      students: 2341,
      rating: 4.9,
      instructor: "Sophie Martinez",
      image: "photo-1561070791-2526d30994b5"
    },
    {
      id: 11,
      title: "Digital Marketing Strategy",
      description: "Learn SEO, content marketing, social media strategy, and analytics to grow your brand.",
      category: "non-technical",
      level: "Beginner",
      duration: "6 weeks",
      students: 1654,
      rating: 4.6,
      instructor: "Amanda Cooper",
      image: "photo-1460925895917-afdab827c52f"
    },
    {
      id: 12,
      title: "NFT Marketplace Business Models",
      description: "Explore the business side of NFTs, marketplaces, and digital asset monetization.",
      category: "non-technical",
      level: "Beginner",
      duration: "3 weeks",
      students: 789,
      rating: 4.6,
      instructor: "David Park",
      image: "photo-1519389950473-47ba0277781c"
    },
    {
      id: 13,
      title: "Advanced Cryptography for Developers",
      description: "Deep dive into cryptographic primitives, zero-knowledge proofs, and privacy solutions.",
      category: "technical",
      level: "Advanced",
      duration: "12 weeks",
      students: 321,
      rating: 4.8,
      instructor: "Dr. Lisa Wang",
      image: "photo-1526374965328-7f61d4dc18c5"
    },
    {
      id: 14,
      title: "Product Management Essentials",
      description: "Learn product strategy, roadmapping, user research, and stakeholder management.",
      category: "non-technical",
      level: "Intermediate",
      duration: "8 weeks",
      students: 1432,
      rating: 4.7,
      instructor: "Nina Patel",
      image: "photo-1454165804606-c3d57bc86b40"
    }
  ];

  const filteredCourses = filter === "all" ? courses : courses.filter(course => course.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Explore Our Courses
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From Web3 to Data Engineering, Cybersecurity to Creative Writing - master in-demand skills with courses designed by industry experts.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm border">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              All Courses
            </button>
            <button
              onClick={() => setFilter("technical")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "technical"
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              <Code className="w-4 h-4 inline mr-2" />
              Technical
            </button>
            <button
              onClick={() => setFilter("non-technical")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "non-technical"
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              <BookOpen className="w-4 h-4 inline mr-2" />
              Non-Technical
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${course.image}?auto=format&fit=crop&w=400&q=80`}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  className={`absolute top-3 left-3 ${
                    course.category === "technical" 
                      ? "bg-blue-600 hover:bg-blue-700" 
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {course.category === "technical" ? (
                    <><Code className="w-3 h-3 mr-1" /> Technical</>
                  ) : (
                    <><BookOpen className="w-3 h-3 mr-1" /> Business</>
                  )}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs">
                    {course.level}
                  </Badge>
                  <div className="flex items-center text-sm text-yellow-600">
                    <Star className="w-4 h-4 fill-current mr-1" />
                    {course.rating}
                  </div>
                </div>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription className="text-sm">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 mb-4">
                  Instructor: <span className="font-medium">{course.instructor}</span>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  onClick={() => setShowEmailForm(true)}
                >
                  Get Notified
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border">
            <TrendingUp className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Ready to Level Up Your Skills?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our community of learners and master the skills that matter. 
              Every course is designed to give you real-world knowledge you can apply immediately.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              onClick={() => setShowEmailForm(true)}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>

      <Footer />

      <EmailCollectionForm
        isOpen={showEmailForm}
        onClose={() => setShowEmailForm(false)}
        title="Get Course Updates"
        description="Be the first to know when this course becomes available on Ed3Hub."
      />
    </div>
  );
};

export default Courses;
