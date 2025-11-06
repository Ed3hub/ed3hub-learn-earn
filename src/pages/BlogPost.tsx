import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import web3Image from "@/assets/blog/web3-development-guide.png";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  const isWeb3Post = post.slug === "getting-started-with-web3-development";
  const isDataEngineeringPost = post.slug === "data-engineering-best-practices-2025";
  const isCloudNativePost = post.slug === "building-scalable-applications-with-cloud-native-architecture";

  return (
    <>
      <Helmet>
        <title>{post.title} | Ed3Hub Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords || post.tags.join(", ")} />
        <meta name="author" content={post.author || "Ed3Hub Team"} />
        <link rel="canonical" href={`https://ed3hub.com/blog/${post.slug}`} />
        
        {/* Geo Meta Tags for Nigeria-based content */}
        {isCloudNativePost && (
          <>
            <meta name="geo.region" content="NG" />
            <meta name="geo.placename" content="Nigeria" />
            <meta name="geo.position" content="9.0820;8.6753" />
            <meta name="ICBM" content="9.0820, 8.6753" />
          </>
        )}
        
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://ed3hub.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author || "Ed3Hub Team"} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />

        <script type="application/ld+json">
          {JSON.stringify(
            isCloudNativePost
              ? {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "headline": post.title,
                  "alternativeHeadline": "How Cloud-Native Design Enables Scalable and Reliable Software Systems",
                  "description": post.excerpt,
                  "image": "https://ed3hub.com/images/blog/cloud-native-architecture.webp",
                  "author": {
                    "@type": "Organization",
                    "name": "Ed3hub"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Ed3hub",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://ed3hub.com/images/logo.png"
                    }
                  },
                  "mainEntityOfPage": `https://ed3hub.com/blog/${post.slug}`,
                  "datePublished": post.date,
                  "dateModified": post.date,
                  "keywords": post.keywords,
                  "articleSection": post.category,
                  "inLanguage": "en",
                  "contentLocation": {
                    "@type": "Place",
                    "name": "Nigeria",
                    "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": "9.0820",
                      "longitude": "8.6753"
                    }
                  }
                }
              : {
                  "@context": "https://schema.org",
                  "@type": "Article",
                  "headline": post.title,
                  "author": {
                    "@type": "Organization",
                    "name": post.author || "Ed3Hub"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Ed3Hub",
                    "url": "https://ed3hub.com"
                  },
                  "url": `https://ed3hub.com/blog/${post.slug}`,
                  "datePublished": post.date,
                  "keywords": post.keywords || post.tags.join(", "),
                  "description": post.excerpt,
                  "articleSection": post.category
                }
          )}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <article className="max-w-4xl mx-auto px-4 pt-24 pb-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                {post.category}
              </Badge>
              <span className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="border-blue-200 text-blue-600"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            {isWeb3Post && (
              <img 
                src={web3Image} 
                alt="Web3 Development Guide" 
                className="w-full rounded-lg shadow-lg mb-8"
              />
            )}
          </header>

          {isWeb3Post ? (
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Web3 development is redefining how we build and use the internet. Instead of relying on centralized servers and platforms, Web3 empowers developers to create decentralized applications (dApps) that give users ownership of their data, assets, and identities.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Whether you're coming from a Web2 background or starting from scratch, this guide walks you through the essentials of becoming a Web3 developer — the tools, frameworks, languages, and learning roadmap.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is Web3 Development?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Web3 is the next generation of the internet built on blockchain, decentralization, and token-based economies. While Web2 apps run on centralized platforms, Web3 apps run on distributed networks like Ethereum, Polygon, and Solana, giving users control over their data and digital assets.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">Core Elements of Web3:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Blockchain</strong> – A shared, immutable ledger that records transactions.</li>
                  <li><strong>Smart Contracts</strong> – Self-executing code stored on the blockchain.</li>
                  <li><strong>Tokens</strong> – Digital assets representing ownership, utility, or governance.</li>
                  <li><strong>Decentralized Identity (DID)</strong> – User-controlled authentication and reputation.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Web3 vs Web2 Development</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-blue-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Feature</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Web2</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Web3</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">Hosting</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Centralized servers</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Decentralized networks</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">Backend</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Databases (MySQL, Firebase)</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Smart contracts</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">Authentication</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Email / OAuth</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Wallets (MetaMask, WalletConnect)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">Data Control</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Platform-owned</td>
                        <td className="px-6 py-4 text-sm text-gray-700">User-owned</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">Monetization</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Ads, subscriptions</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Tokens, NFTs, DAOs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Tools and Technologies for Web3 Developers</h2>
                
                <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">1. Programming Languages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Solidity</strong> – For Ethereum smart contracts.</li>
                  <li><strong>Vyper</strong> – A Python-like language for Ethereum.</li>
                  <li><strong>Rust</strong> – Used on Solana, NEAR, and Polkadot.</li>
                  <li><strong>JavaScript / TypeScript</strong> – For building and connecting frontends to blockchains.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">2. Frameworks and Libraries</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Hardhat / Truffle</strong> – Development, testing, and deployment tools for smart contracts.</li>
                  <li><strong>Ethers.js / Web3.js</strong> – Libraries for connecting web apps to blockchains.</li>
                  <li><strong>Next.js</strong> – Frontend framework for building responsive dApps.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">3. Blockchain Networks to Explore</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Ethereum</strong> – The foundation of decentralized computing.</li>
                  <li><strong>Polygon</strong> – Low-cost, scalable Ethereum sidechain.</li>
                  <li><strong>Solana</strong> – Fast, high-performance blockchain for DeFi and gaming.</li>
                  <li><strong>BNB Chain</strong> – EVM-compatible blockchain with low fees.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">4. Wallets and Developer Tools</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>MetaMask</strong> – Wallet for connecting to dApps.</li>
                  <li><strong>Remix IDE</strong> – Browser-based Solidity IDE.</li>
                  <li><strong>Alchemy / Infura</strong> – Blockchain APIs for connecting dApps to nodes.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Step-by-Step: How to Get Started with Web3 Development</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 1: Learn Blockchain Fundamentals</h3>
                    <p className="text-gray-700">
                      Understand how transactions, consensus mechanisms, and smart contracts work. Recommended resources include Ed3hub's Introduction to Blockchain Development course, Ethereum Foundation Docs, and "Mastering Ethereum" by Andreas Antonopoulos.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 2: Set Up Your Development Environment</h3>
                    <p className="text-gray-700 mb-2">Install Node.js and Hardhat:</p>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>npm install --global hardhat{'\n'}npm install --save-dev ethers</code>
                    </pre>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 3: Write Your First Smart Contract</h3>
                    <p className="text-gray-700 mb-2">Here's a simple Solidity example:</p>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWeb3 {
    string public message = "Welcome to Web3!";

    function updateMessage(string memory _newMessage) public {
        message = _newMessage;
    }
}`}</code>
                    </pre>
                    <p className="text-gray-700 mt-2">
                      Deploy it using Hardhat, then connect it with MetaMask to test interactions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 4: Build a Simple dApp Frontend</h3>
                    <p className="text-gray-700">
                      Use Next.js and Ethers.js to connect your frontend with the blockchain and interact with the deployed contract.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 5: Experiment and Contribute</h3>
                    <p className="text-gray-700 mb-2">Start small by building:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>NFT minting apps</li>
                      <li>Decentralized voting systems</li>
                      <li>DeFi dashboards</li>
                      <li>DAO participation tools</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                      Join hackathons and open-source Web3 projects to gain real-world experience.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Tips for New Web3 Developers</h2>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Always test on testnets like Sepolia or Mumbai.</li>
                  <li>Keep your private keys secure — never commit them to GitHub.</li>
                  <li>Use block explorers (like Etherscan) to debug and verify transactions.</li>
                  <li>Follow updates in Layer 2 scaling, DeFi, and cross-chain innovation.</li>
                </ul>
              </section>

              <section className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn Web3 the Smart Way with Ed3hub</h2>
                <p className="text-gray-700 mb-4">
                  At Ed3hub, we simplify Web3 education through interactive learning experiences. Whether you want to become a blockchain developer or understand token economies, Ed3hub has a course for you.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Explore topics like:</h3>
                <ul className="space-y-1 text-gray-700 list-disc list-inside mb-4">
                  <li>Blockchain fundamentals</li>
                  <li>Smart contract programming</li>
                  <li>Tokenomics and NFTs</li>
                  <li>Web3 security and auditing</li>
                </ul>
                <Link 
                  to="/courses" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Start Learning Today
                </Link>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
                <p className="text-gray-700 leading-relaxed">
                  Web3 development isn't just a new tech skill — it's an entry point into the next evolution of the internet. With the right tools, knowledge, and mindset, anyone can contribute to a more open, decentralized, and user-owned web.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  So start experimenting, keep learning, and be part of the future. The decentralized web is waiting for you to build it.
                </p>
              </section>
            </div>
          ) : post.content ? (
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  {post.content.introduction}
                </p>
              </section>

              {post.content.sections.map((section, index) => (
                <section key={index} className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  
                  {section.content === "table:evolution" ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-blue-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Era</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Focus</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Key Technologies</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 text-sm text-gray-700">2010–2015</td>
                            <td className="px-6 py-4 text-sm text-gray-700">ETL and Warehousing</td>
                            <td className="px-6 py-4 text-sm text-gray-700">Hadoop, Spark, SQL</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-gray-700">2016–2020</td>
                            <td className="px-6 py-4 text-sm text-gray-700">Cloud Data Warehouses</td>
                            <td className="px-6 py-4 text-sm text-gray-700">BigQuery, Snowflake, Redshift</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-gray-700">2021–2024</td>
                            <td className="px-6 py-4 text-sm text-gray-700">Modern Data Stack</td>
                            <td className="px-6 py-4 text-sm text-gray-700">dbt, Airflow, Fivetran, Looker</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-gray-700">2025 →</td>
                            <td className="px-6 py-4 text-sm text-gray-700">AI-Powered & Real-Time Systems</td>
                            <td className="px-6 py-4 text-sm text-gray-700">Data Mesh, LLMOps, Streaming ETL, Delta Live Tables</td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="text-gray-700 mt-4">
                        By 2025, AI, real-time data processing, and governance are no longer optional — they're at the heart of successful data engineering.
                      </p>
                    </div>
                  ) : section.content === "table:modern-stack" ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-blue-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Layer</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Tools</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 text-sm text-gray-700">Ingestion</td>
                            <td className="px-6 py-4 text-sm text-gray-700">Airbyte, Fivetran</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-gray-700">Storage</td>
                            <td className="px-6 py-4 text-sm text-gray-700">Snowflake, BigQuery, Delta Lake</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-gray-700">Transformation</td>
                            <td className="px-6 py-4 text-sm text-gray-700">dbt, Spark</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-gray-700">Orchestration</td>
                            <td className="px-6 py-4 text-sm text-gray-700">Airflow, Dagster</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-gray-700">Observability</td>
                            <td className="px-6 py-4 text-sm text-gray-700">Monte Carlo, Soda</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-gray-700">Governance</td>
                            <td className="px-6 py-4 text-sm text-gray-700">Collibra, Atlan</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-gray-700">Visualization</td>
                            <td className="px-6 py-4 text-sm text-gray-700">Looker, Power BI, Metabase</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {section.content.split('\n\n').map((paragraph, pIndex) => {
                        if (paragraph.startsWith('•')) {
                          const items = paragraph.split('\n');
                          return (
                            <ul key={pIndex} className="space-y-2 list-disc list-inside mb-4">
                              {items.map((item, iIndex) => (
                                <li key={iIndex}>{item.replace('• ', '')}</li>
                              ))}
                            </ul>
                          );
                        }
                        return (
                          <p key={pIndex} className="mb-4">
                            {paragraph.split('**').map((text, tIndex) => 
                              tIndex % 2 === 0 ? text : <strong key={tIndex}>{text}</strong>
                            )}
                          </p>
                        );
                      })}
                    </div>
                  )}
                </section>
              ))}

              {isDataEngineeringPost && (
                <section className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Master Data Engineering?</h2>
                  <p className="text-gray-700 mb-4">
                    Join Ed3hub and learn from industry experts how to build scalable, secure, and modern data systems.
                  </p>
                  <Link 
                    to="/courses" 
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Explore Our Courses
                  </Link>
                </section>
              )}
              {isCloudNativePost && (
                <section className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Master Cloud-Native Development</h2>
                  <p className="text-gray-700 mb-4">
                    Join Ed3hub and learn how to architect, deploy, and manage scalable applications using modern cloud-native technologies and DevOps practices.
                  </p>
                  <Link 
                    to="/courses" 
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Explore Our Courses
                  </Link>
                </section>
              )}
              {post.slug === "cybersecurity-threats-every-developer-should-know-2025" && (
                <section className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Master Cybersecurity Best Practices</h2>
                  <p className="text-gray-700 mb-4">
                    Join Ed3hub and learn from industry experts how to build secure, resilient applications that protect against modern threats.
                  </p>
                  <Link 
                    to="/courses" 
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Explore Our Courses
                  </Link>
                </section>
              )}
            </div>
          ) : (
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {post.excerpt}
              </p>
              <p className="text-gray-600 italic mt-8">
                Full content for this article is coming soon. Stay tuned for more insights from Ed3hub!
              </p>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
