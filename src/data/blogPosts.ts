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
    date: "2025-10-25",
    readTime: "9 min read",
    tags: ["Big Data", "ETL", "Cloud Computing", "Data Pipelines", "AI Infrastructure"],
    slug: "data-engineering-best-practices-2025",
    author: "Ed3hub Team",
    keywords: "data engineering, best practices 2025, data pipelines, ETL, data governance, AI data infrastructure, modern data stack, Ed3hub",
    content: {
      introduction: "As we step deeper into the era of AI-driven innovation, data engineering has become one of the most critical disciplines in technology. In 2025, data engineering isn't just about moving data from point A to point B — it's about building intelligent, scalable, and ethical data systems that fuel analytics, machine learning, and real-time decision-making.",
      sections: [
        {
          title: "What Is Data Engineering?",
          content: "Data engineering is the process of designing, building, and maintaining systems that collect, process, and store data for analysis and decision-making. In today's data-driven world, engineers are responsible for ensuring data is accurate, accessible, secure, and ready for AI and analytics. Modern data engineering blends software engineering, data architecture, and DevOps to deliver reliable pipelines and infrastructures."
        },
        {
          title: "Top Data Engineering Best Practices for 2025",
          content: "1. **Design for Scalability and Real-Time Processing**: Adopt event-driven architectures and streaming frameworks like Apache Kafka, Apache Flink, and Databricks Delta Live Tables.\n\n2. **Automate ETL/ELT with Modern Tools**: Use Airbyte/Fivetran for ingestion, dbt for transformation, and Dagster/Airflow for orchestration.\n\n3. **Prioritize Data Governance and Compliance**: Define clear data ownership and lineage, implement access controls, and use metadata management tools.\n\n4. **Embrace Data Mesh Principles**: Apply decentralized approaches with domain-oriented ownership and federated governance.\n\n5. **Integrate AI and Machine Learning Pipelines**: Design feature stores for ML and feed real-time AI models.\n\n6. **Implement Data Observability**: Use tools like Monte Carlo and Soda to detect anomalies before they affect production.\n\n7. **Optimize for Cost and Sustainability**: Use cost monitoring tools and serverless autoscaling compute.\n\n8. **Document and Share Knowledge**: Centralize pipeline diagrams, schema definitions, and data contracts.\n\n9. **Adopt a Security-First Mindset**: Follow zero-trust principles with encryption and IAM.\n\n10. **Continuously Learn and Upskill**: Stay current with open-source releases and industry developments."
        },
        {
          title: "Learn Data Engineering with Ed3hub",
          content: "At Ed3hub, you can learn how to build efficient, secure, and modern data pipelines from industry experts. Our upcoming courses cover ETL & ELT design, Modern Data Stack implementation, Data governance and AI ethics, and Building real-time analytics pipelines. Start learning today at ed3hub.com — and earn while you learn."
        }
      ]
    }
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
