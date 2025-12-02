// src/courses/components/CourseEnrollmentPage.tsx
import React, { useEffect } from "react";
import CohortHeader from "./CohortHeader";
import CourseList from "./CourseList";
import CohortSummary from "./CohortSummary";
import { courseDetailData, summaryData } from "../data";

const CourseEnrollmentPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    // Max width container for centering and overall page padding
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 min-h-screen">
      <CohortHeader />

      <main className="mb-10">
        <CourseList courses={courseDetailData} />
      </main>

      <CohortSummary summary={summaryData} />
    </div>
  );
};

export default CourseEnrollmentPage;