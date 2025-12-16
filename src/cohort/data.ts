// src/cohort/data.ts

import feechiNwanna from "../assets/feechi_nwanna.png";
import perpetuaOnuoraEbere from "../assets/pepertua_onuora_ebere.png";
import olabisiAdelaja from "../assets/olabisi_adelaja.png";
import ayanfeOluwaniiseAkinboboye from "../assets/ayanfeoluwaniise_akinboboye.png";
import akintolaOlawaleSolomon from "../assets/akintola_olawale_solomon.png";

export interface InstructorDetails {
  name: string;
  title: string;
  bio: string;
  areasOfExpertise: string[];
  image: string;
}

export interface Cohort {
  startDate: string;
  endDate: string;
  classSchedule: string;
  enrollment: string;
  spotsLeft: string;
}

export interface CourseDetail {
  id: number;
  slug: string;
  title: string;
  level: string;
  description: string;
  full_description: string;
  image: string;
  duration: string;
  weeks: string;
  enrollment: string;
  spotsLeft: string;
  classSize: string;
  schedule: string;
  cohort: Cohort;
  learningObjectives: string[];
  instructorDetails: InstructorDetails;
  instructor: string;
  price: number;
}

export interface SummaryData {
  totalCourses: number;
  totalSpots: number;
  studentsEnrolled: number;
  cohortStart: string;
}

export const courseDetailData: CourseDetail[] = [
  {
    id: 1,
    slug: "content-writing",
    title: "Content Writing",
    level: "Beginner",
    description:
      "Crafting clear, engaging, audience-targeted messages across platforms.",
    full_description:
      "Content writing is a strategic craft blending audience insight, clarity, and persuasion. It shapes messages across platforms, optimizes for search, informs, engages, and converts readers into loyal, informed customers.",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29udGVudCUyMHdyaXRpbmd8ZW58MHx8MHx8fDA%3D",
    duration: "10 weeks",
    weeks: "10",
    enrollment: "30",
    spotsLeft: "Nil",
    classSize: "30 students",
    schedule: "Nil",
    cohort: {
      startDate: "January 14, 2026",
      endDate: "March, 2026",
      classSchedule: "Nil",
      // classSchedule: "Tuesday & Thursday, 6:00 PM - 9:00 PM EST",
      enrollment: "30",
      spotsLeft: "Nil",
    },
    learningObjectives: [
      "Master Research and Verification",
      "Write High-Converting Content",
      "Simplify Complex Information",
      "Apply Strategic Storytelling",
      "Write across Industries",
      "Build Effective Content Structures",
    ],
    instructorDetails: {
      name: "Feechi Nwanna",
      title: "Content Writer",
      bio: "Feechi Nwanna is a pharmacist-turned-content educator, specializing in content writing, SEO strategy, and education. She creates SEO blogs, emails, social content, and newsletters for wellness brands, emphasizing research, claim verification, clarity, and conversions.",
      areasOfExpertise: [
        "Research",
        "Writing",
        "Communicating",
        "Complex Information",
      ],
      image: feechiNwanna,
    },
    instructor: "Feechi Nwanna",
    price: 15000,
  },
  {
    id: 2,
    slug: "project-management",
    title: "Project Management",
    level: "Beginner",
    description:
      "Project management entails planning, coordinating, leading tasks to achieve objectives.",
    full_description:
      "Project management is the structured process of planning, coordinating, and leading tasks, people, and resources to achieve specific objectives within a defined scope, timeline, and budget. It involves setting goals, managing risks, tracking progress, and ensuring quality delivery while meeting stakeholder expectations.",
    image:
      "https://plus.unsplash.com/premium_photo-1723291359453-aea7e6bcbebd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvamVjdCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D",
    duration: "12 weeks",
    weeks: "12",
    enrollment: "30",
    spotsLeft: "Nil",
    classSize: "30 students",
    schedule: "Nil",
    cohort: {
      startDate: "January 14, 2026",
      endDate: "April, 2026",
      classSchedule: "Nil",
      enrollment: "30",
      spotsLeft: "Nil",
    },
    learningObjectives: [
      "Project Management Fundamentals",
      "monday.com Setup and Customization",
      "Workflow Automation",
      "CRM & Team Management Systems",
      "Agile & Modern PM Methodologies",
      "Practical Problem-Solving Skills",
      "Real Client-Ready Deliverables",
    ],
    instructorDetails: {
      name: "Pepertua Onuora Ebere",
      title: "Project Manager",
      bio: "Pepertua Onuora Ebere is a certified Monday.com ambassador and freelance project manager with 5+ years in workflow automation, CRM setup, and agile methods. She simplifies complex processes, supports Upwork/Fiverr clients, and teaches hands-on, results-driven skills.",
      areasOfExpertise: [
        "Workflow automation",
        "CRM setup",
        "Agile methodologies",
        "Monday.com board configuration and optimization",
        "Task automation and team efficiency",
      ],
      image: perpetuaOnuoraEbere,
    },
    instructor: "Pepertua Onuora Ebere",
    price: 15000,
  },
  {
    id: 3,
    slug: "web3-marketing",
    title: "Web 3 Marketing",
    level: "Beginner",
    description:
      "Web3 marketing - decentralized, community-driven, token incentives, on-chain engagement.",
    full_description:
      "Web3 marketing focuses on promoting decentralized products and platforms using community-driven strategies, blockchain technology, and transparency. It emphasizes trust, user ownership, token-based incentives, and engagement through DAOs, NFTs, social communities, and on-chain analytics rather than traditional centralized advertising models.",
    image:
      "https://plus.unsplash.com/premium_photo-1681400668073-a1947604dd36?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViM3xlbnwwfHwwfHx8MA%3D%3D",
    duration: "6-8 weeks",
    weeks: "6-8",
    enrollment: "30",
    spotsLeft: "Nil",
    classSize: "30 students",
    schedule: "Nil",
    cohort: {
      startDate: "January 14, 2026",
      endDate: "March, 2026",
      classSchedule: "Nil",
      enrollment: "30",
      spotsLeft: "Nil",
    },
    learningObjectives: [
      "How Web3 marketing differs from traditional marketing",
      "Community building, growth loops, and virality in Web3",
      "Product-led and data-driven marketing strategies",
      "How to design and execute a Web3 go-to-market plan",
      "Content and storytelling frameworks for Web3 audiences",
      "How to attract users, retain them, and scale growth",
      "Influencer, KOL, and ecosystem collaboration strategies",
      "Practical tools, platforms, and on-chain/off-chain marketing tactics",
    ],
    instructorDetails: {
      name: "Olabisi Adelaja",
      title: "Web3 Growth Marketer",
      bio: "Olabisi Adelaja is a Web3 Growth Marketer, podcaster, and founder of Node Narrative, a Web3 content agency. She drives growth, community building, and content strategies, delivering hands-on teaching in growth, influencer marketing, and product-led storytelling.",
      areasOfExpertise: [
        "Web3 growth Marketing",
        "Content strategy and creation",
        "Influencer and ecosystem marketing",
        "Product-led storytelling",
        "Community building and growth hacking",
      ],
      image: olabisiAdelaja,
    },
    instructor: "Olabisi Adelaja",
    price: 15000,
  },
  {
    id: 4,
    slug: "ui-ux-design",
    title: "UI/UX Design",
    level: "Beginner",
    description:
      "UI/UX design creates user-friendly interfaces enhancing usability and experience.",
    full_description:
      "UI/UX design is the process of creating visually appealing, user-friendly digital interfaces that enhance usability and user experience. It focuses on understanding user needs, designing intuitive layouts, improving accessibility, and ensuring seamless interaction between users and digital products or applications.",
    image:
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dWklMkZ1eHxlbnwwfHwwfHx8MA%3D%3D",
    duration: "12 weeks",
    weeks: "12",
    enrollment: "30",
    spotsLeft: "Nil",
    classSize: "30 students",
    schedule: "Nil",
    cohort: {
      startDate: "February 14, 2026",
      endDate: "April, 2026",
      classSchedule: "Nil",
      enrollment: "30",
      spotsLeft: "Nil",
    },
    learningObjectives: [
      "Foundations of UI/UX and Product Design",
      "User Research and Insight Development",
      "Psychology, UX Laws & Behavioral Principles",
      "Information Architecture, UI Fundamentals & Visual Craft",
      "Design Systems, Components & Prototyping",
      "Testing, UX Writing, Product Thinking & Career Prep",
    ],
    instructorDetails: {
      name: "AyanfeOluwaniise Akinboboye ",
      title: "UI/UX Designer ",
      bio: "AyanfeOluwaniise Akinboboye is a UI/UX Designer and Digital Illustrator focused on creating human-centered, visually engaging digital experiences. She combines user experience principles with strong visual storytelling to design intuitive interfaces that solve real problems and connect with users.",
      areasOfExpertise: [
        "User-centered design and research",
        "Visual storytelling and UI aesthetics",
        "Interaction design and usability",
        "Digital illustration and visual communication",
      ],
      image: ayanfeOluwaniiseAkinboboye,
    },
    instructor: "AyanfeOluwaniise Akinboboye",
    price: 15000,
  },
  {
    id: 5,
    slug: "data-analysis",
    title: "Data Analysis",
    level: "Beginner",
    description:
      "Data analysis uncovers patterns to inform decisions and performance.",
    full_description:
      "Data analysis is the process of collecting, cleaning, and examining data to uncover patterns, trends, and insights. It involves using statistical methods, tools, and visualization techniques to support decision-making, solve problems, and improve performance across various fields and industries. ",
    image:
      "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww",
    duration: "12 weeks",
    weeks: "12",
    enrollment: "30",
    spotsLeft: "Nil",
    classSize: "30 students",
    schedule: "Nil",
    cohort: {
      startDate: "January 14, 2026",
      endDate: "April, 2026",
      classSchedule: "Nil",
      enrollment: "30",
      spotsLeft: "Nil",
    },
    learningObjectives: [
      "Data Analytics Foundations and Tooling",
      "Data Collection, Cleaning, and Preparation",
      "Descriptive Analytics with Microsoft Excel",
      "Data Querying and Management with SQL",
      "Data Analysis and Automation with Python",
      "Push notifications",
      "Data Visualization, Storytelling, and Capstone Project",
    ],
    instructorDetails: {
      name: "Akintola Olawale Solomon ",
      title: "Data Analyst",
      bio: "Akintola Olawale Solomon is a detail-oriented Data Analyst skilled in Python, Excel, Power BI, and SQL. He creates dashboards, performs EDA, builds predictive models, and translates analytics into clear, decision-ready insights for diverse stakeholders.",
      areasOfExpertise: [
        "Data analysis and visualization",
        "Python, SQL, and BI tooling (Power BI)",
        "Data cleaning and exploratory data analysis",
        "Predictive modeling and statistical analysis",
        "Translating analytics into actionable business insights",
      ],
      image: akintolaOlawaleSolomon,
    },
    instructor: "Akintola Olawale Solomon",
    price: 15000,
  },
];

export const summaryData: SummaryData = {
  totalCourses: 5,
  totalSpots: 148,
  studentsEnrolled: 110,
  cohortStart: "January 2026",
};
