import { Helmet } from "react-helmet";
import { Calendar, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

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