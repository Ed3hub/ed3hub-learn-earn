// src/cohort/data.ts

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
  spotsLeft: number;
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
  weeks: number;
  enrollment: string;
  spotsLeft: number;
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
    slug: "full-stack-web-development",
    title: "Full-Stack Web Development",
    level: "Intermediate",
    description:
      "Master modern web development with React, Node.js, and databases",
    full_description:
      "Deep dive into full-stack web development and learn to build scalable web applications from scratch. This comprehensive course covers frontend frameworks, backend APIs, database design, and deployment strategies.",
    image:
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjM5NzY0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "12 weeks",
    weeks: 12,
    enrollment: "22/30",
    spotsLeft: 8,
    classSize: "30 students",
    schedule: "Tuesday & Thursday",
    cohort: {
      startDate: "January 15, 2026",
      endDate: "April 8, 2026",
      classSchedule: "Tuesday & Thursday, 6:00 PM - 9:00 PM EST",
      enrollment: "22/30",
      spotsLeft: 8,
    },
    learningObjectives: [
      "HTML, CSS, and JavaScript fundamentals",
      "React and modern frontend development",
      "Node.js and Express.js backend",
      "Database design with PostgreSQL",
      "RESTful API development",
      "Authentication and security",
      "Deployment and DevOps basics",
    ],
    instructorDetails: {
      name: "Sarah Johnson",
      title: "Senior Web Developer",
      bio: "Sarah Johnson is a seasoned web developer with over 10 years of experience in full-stack development. She has worked on numerous projects, from small startups to large enterprises, and is passionate about teaching and sharing her knowledge.",
      areasOfExpertise: ["React.js", "Node.js", "PostgreSQL", "DevOps"],
      image:
        "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDA1NjU5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    instructor: "Sarah Johnson",
    price: 2499,
  },
  {
    id: 2,
    slug: "data-science-&-machine-learning",
    title: "Data Science & Machine Learning",
    level: "Advanced",
    description:
      "Learn data analysis, visualization, and machine learning algorithms",
    full_description:
      "Transform your career with data science and machine learning expertise. Learn to analyze complex datasets, build predictive models, and deploy machine learning solutions in production environments.",
    image:
      "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjQwNTUxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "10 weeks",
    weeks: 10,
    enrollment: "18/25",
    spotsLeft: 7,
    classSize: "25 students",
    schedule: "Monday & Wednesday",
    cohort: {
      startDate: "February 1, 2026",
      endDate: "April 12, 2026",
      classSchedule: "Monday & Wednesday, 7:00 PM - 10:00 PM EST",
      enrollment: "18 / 25 ",
      spotsLeft: 7,
    },
    learningObjectives: [
      "Python for data science",
      "Data manipulation with Pandas and NumPy",
      "Data visualization with Matplotlib and Seaborn",
      "Statistical analysis and hypothesis testing",
      "Machine learning algorithms",
      "Deep learning fundamentals",
      "Model deployment and MLOps",
    ],
    instructorDetails: {
      name: "Dr. Michael Chen",
      title: "Data Scientist",
      bio: "Dr. Michael Chen is a data scientist with a Ph.D. in Computer Science. He has published numerous research papers and has extensive experience in both academia and industry. Dr. Chen is passionate about teaching and helping students develop their data science skills.",
      areasOfExpertise: [
        "Python",
        "Pandas",
        "NumPy",
        "Machine Learning",
        "Deep Learning",
      ],
      image:
        "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQxMzg1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    instructor: "Michael Chen",
    price: 2999,
  },
  {
    id: 3,
    slug: "ui-ux-design-masterclass",
    title: "UI/UX Design Masterclass",
    level: "Beginner",
    description:
      "Create beautiful, user-centered designs with industry-standard tools",
    full_description:
      "Master the art and science of user experience design. Learn design thinking, prototyping, user research, and create portfolio-worthy projects using Figma and other industry-standard tools.",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQwNTgwODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "8 weeks",
    weeks: 8,
    enrollment: "31/35",
    spotsLeft: 4,
    classSize: "35 students",
    schedule: "Saturday",
    cohort: {
      startDate: "January 22, 2026",
      endDate: "March 19, 2026",
      classSchedule: "Saturday, 10:00 AM - 2:00 PM EST",
      enrollment: "31/35",
      spotsLeft: 4,
    },
    learningObjectives: [
      "Design thinking and user research",
      "Wireframing and prototyping",
      "Visual design principles",
      "Figma mastery",
      "Interaction design",
      "Usability testing",
      "Building a design portfolio",
    ],
    instructorDetails: {
      name: "Emma Rodriguez",
      title: "UI/UX Designer",
      bio: "Emma Rodriguez is a UI/UX designer with over 5 years of experience. He has worked on a variety of projects, from mobile apps to web applications, and is passionate about creating intuitive and user-friendly designs.",
      areasOfExpertise: [
        "Figma",
        "Design Thinking",
        "User Research",
        "Prototyping",
      ],
      image:
        "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQxMzg1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    instructor: "Emma Rodriguez",
    price: 1799,
  },
  {
    id: 4,
    slug: "cloud-computing-&-devOps",
    title: "Cloud Computing & DevOps",
    level: "Intermediate",
    description: "Master AWS, containerization, and modern DevOps practices",
    full_description:
      "Become a cloud and DevOps expert with hands-on experience in AWS, Docker, Kubernetes, and CI/CD pipelines. Learn to architect, deploy, and manage scalable cloud infrastructure.",
    image:
      "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzY0MDI0ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "10 weeks",
    weeks: 10,
    enrollment: "15/28",
    spotsLeft: 13,
    classSize: "28 students",
    schedule: "Tuesday & Thursday",
    cohort: {
      startDate: "February 8, 2026",
      endDate: "April 19, 2026",
      classSchedule: "Tuesday & Thursday, 7:00 PM - 9:30 PM EST",
      enrollment: "15/28",
      spotsLeft: 13,
    },
    learningObjectives: [
      "Cloud computing fundamentals",
      "AWS core services (EC2, S3, RDS, Lambda)",
      "Docker and containerization",
      "Kubernetes orchestration",
      "CI/CD pipelines",
      "Infrastructure as Code (Terraform)",
      "Monitoring and logging",
    ],
    instructorDetails: {
      name: "James Williams",
      title: "DevOps Engineer",
      bio: "James Williams is a DevOps engineer with over 8 years of experience in cloud computing and DevOps practices. He has worked with various cloud providers, including AWS, and is passionate about teaching and sharing his knowledge.",
      areasOfExpertise: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      image:
        "https://images.unsplash.com/photo-1554651802-57f1d69a4944?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    },
    instructor: "James Williams",
    price: 2699,
  },
  {
    id: 5,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    level: "Intermediate",
    description:
      "Build native and cross-platform mobile apps for iOS and Android",
    full_description:
      "Learn to build professional mobile applications using React Native. Create cross-platform apps that work seamlessly on both iOS and Android, with native performance and user experience.",
    image:
      "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjQwNjk3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "12 weeks",
    weeks: 12,
    enrollment: "24/30",
    spotsLeft: 6,
    classSize: "30 students",
    schedule: "Monday & Wednesday",
    cohort: {
      startDate: "January 29, 2026",
      endDate: "April 23, 2026",
      classSchedule: "Monday & Wednesday, 6:30 PM - 9:30 PM EST",
      enrollment: "24/30",
      spotsLeft: 6,
    },
    learningObjectives: [
      "Mobile development fundamentals",
      "React Native setup and basics",
      "Navigation and routing",
      "State management in mobile apps",
      "Native device features (camera, GPS, etc.)",
      "Push notifications",
      "App deployment to App Store and Play Store",
    ],
    instructorDetails: {
      name: "Lisa Anderson",
      title: "Mobile App Developer",
      bio: "Lisa Anderson is a mobile app developer with over 7 years of experience in building native and cross-platform applications. She has worked on a variety of projects, from small startups to large enterprises, and is passionate about teaching and sharing her knowledge.",
      areasOfExpertise: ["React Native", "iOS", "Android", "App Deployment"],
      image:
        "https://images.unsplash.com/photo-1585612935006-3868737d43e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFkeSUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    instructor: "Lisa Anderson",
    price: 2599,
  },
];

export const summaryData: SummaryData = {
  totalCourses: 5,
  totalSpots: 148,
  studentsEnrolled: 110,
  cohortStart: "January 2026",
};