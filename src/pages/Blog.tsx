import { Helmet } from "react-helmet";
import { Calendar, Clock, Tag, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { useState } from "react";

const Blog = () => {
  const [sortOrder, setSortOrder] = useState<{ [key: string]: 'asc' | 'desc' }>({});

  // Group posts by category
  const categorizedPosts = blogPosts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = [];
    }
    acc[post.category].push(post);
    return acc;
  }, {} as { [key: string]: typeof blogPosts });

  // Sort posts within a category
  const getSortedPosts = (category: string) => {
    const posts = categorizedPosts[category];
    const order = sortOrder[category] || 'desc';
    return [...posts].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return order === 'desc' ? dateB - dateA : dateA - dateB;
    });
  };

  const toggleSortOrder = (category: string) => {
    setSortOrder(prev => ({
      ...prev,
      [category]: prev[category] === 'desc' ? 'asc' : 'desc'
    }));
  };

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

            <Accordion type="multiple" className="space-y-4">
              {Object.keys(categorizedPosts).map((category) => (
                <AccordionItem 
                  key={category} 
                  value={category}
                  className="bg-white rounded-lg shadow-sm border border-blue-100"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-blue-50/50 rounded-t-lg">
                    <div className="flex items-center justify-between w-full pr-4">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-blue-600 text-white">
                          {categorizedPosts[category].length}
                        </Badge>
                        <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="mb-4 flex justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleSortOrder(category)}
                        className="text-sm"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Sort by Date ({sortOrder[category] === 'asc' ? 'Oldest First' : 'Newest First'})
                      </Button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {getSortedPosts(category).map((post) => (
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
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;