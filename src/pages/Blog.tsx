import { Helmet } from "react-helmet";
import { Calendar, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Web3 Development: A Comprehensive Guide",
    excerpt: "Learn the fundamentals of Web3 development, from blockchain basics to smart contract deployment. Perfect for beginners looking to enter the decentralized web.",
    category: "Web3",
    date: "2025-02-01",
    readTime: "8 min read",
    tags: ["Blockchain", "Smart Contracts", "Ethereum"],
    slug: "getting-started-web3-development"
  },
  {
    id: 2,
    title: "Data Engineering Best Practices for 2025",
    excerpt: "Explore modern data engineering practices, including data pipeline optimization, cloud-native architectures, and real-time data processing strategies.",
    category: "Data Engineering",
    date: "2025-01-28",
    readTime: "10 min read",
    tags: ["Big Data", "ETL", "Cloud Computing"],
    slug: "data-engineering-best-practices-2025"
  },
  {
    id: 3,
    title: "Cybersecurity Threats Every Developer Should Know",
    excerpt: "Stay ahead of cyber threats with our guide to common security vulnerabilities, attack vectors, and essential defensive programming techniques.",
    category: "Cybersecurity",
    date: "2025-01-25",
    readTime: "12 min read",
    tags: ["Security", "Encryption", "Web Security"],
    slug: "cybersecurity-threats-developers"
  },
  {
    id: 4,
    title: "Machine Learning Model Deployment: From Training to Production",
    excerpt: "A step-by-step guide to deploying machine learning models in production environments, covering MLOps, monitoring, and scaling strategies.",
    category: "Machine Learning",
    date: "2025-01-22",
    readTime: "15 min read",
    tags: ["MLOps", "AI", "Production"],
    slug: "ml-model-deployment-guide"
  },
  {
    id: 5,
    title: "The Art of Technical Writing: Communicating Complex Ideas Simply",
    excerpt: "Master the craft of technical writing with proven techniques for creating clear, concise documentation that developers actually want to read.",
    category: "Technical Writing",
    date: "2025-01-20",
    readTime: "7 min read",
    tags: ["Documentation", "Writing", "Communication"],
    slug: "art-of-technical-writing"
  },
  {
    id: 6,
    title: "Building Scalable Applications with Cloud-Native Architecture",
    excerpt: "Discover how to architect and deploy cloud-native applications that scale effortlessly using containers, microservices, and serverless technologies.",
    category: "Cloud Computing",
    date: "2025-01-18",
    readTime: "11 min read",
    tags: ["Cloud", "DevOps", "Microservices"],
    slug: "cloud-native-architecture"
  },
  {
    id: 7,
    title: "UI/UX Design Principles for Developer-Friendly Interfaces",
    excerpt: "Learn essential UI/UX principles that help create intuitive, accessible, and beautiful user interfaces for modern web applications.",
    category: "UI/UX Design",
    date: "2025-01-15",
    readTime: "9 min read",
    tags: ["Design", "UX", "Accessibility"],
    slug: "uiux-design-principles"
  },
  {
    id: 8,
    title: "Creative Writing for Tech: Telling Stories with Code",
    excerpt: "Explore the intersection of creative writing and technology, and learn how storytelling can enhance your technical content and presentations.",
    category: "Creative Writing",
    date: "2025-01-12",
    readTime: "6 min read",
    tags: ["Writing", "Storytelling", "Content"],
    slug: "creative-writing-for-tech"
  }
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Ed3Hub Blog - Web3, Data Engineering, Cybersecurity & Tech Insights</title>
        <meta name="description" content="Stay updated with the latest insights on Web3 development, data engineering, cybersecurity, machine learning, and more. Expert articles, tutorials, and best practices from Ed3Hub." />
        <meta name="keywords" content="Web3 blog, blockchain tutorials, data engineering articles, cybersecurity tips, machine learning guides, technical writing, tech blog, programming tutorials" />
        <link rel="canonical" href="https://ed3hub.com/blog" />
        
        <meta property="og:title" content="Ed3Hub Blog - Tech Education Insights & Tutorials" />
        <meta property="og:description" content="Expert articles on Web3, data engineering, cybersecurity, machine learning, and more. Learn from industry professionals." />
        <meta property="og:url" content="https://ed3hub.com/blog" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Ed3Hub Blog - Tech Education Insights" />
        <meta name="twitter:description" content="Expert articles on Web3, data engineering, cybersecurity, and more." />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <section className="pt-20 pb-12 px-4">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Ed3Hub Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead with the latest insights, tutorials, and best practices in Web3, data engineering, cybersecurity, and emerging technologies.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <article key={post.id}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-blue-100">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="flex items-center text-sm text-gray-500 mt-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="outline" 
                            className="text-xs border-blue-200 text-blue-600"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;