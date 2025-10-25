export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  author?: string;
  keywords?: string;
  content?: {
    introduction: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Web3 Development: A Comprehensive Guide",
    excerpt: "Learn the fundamentals of Web3 development, from blockchain basics to smart contract deployment. Perfect for beginners looking to enter the decentralized web.",
    category: "Web3",
    date: "2025-10-25",
    readTime: "8 min read",
    tags: ["Blockchain", "Smart Contracts", "Ethereum"],
    slug: "getting-started-with-web3-development",
    author: "Ed3hub Team",
    keywords: "Web3 development, blockchain, smart contracts, decentralized apps, dApp development, Ethereum, Solidity, Ed3hub"
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
