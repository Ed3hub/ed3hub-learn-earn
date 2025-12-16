// src/cohort/components/CohortSummary.tsx
import React from "react";
import { SummaryData } from "../data";

interface CohortSummaryProps {
  summary: SummaryData;
}

const CohortSummary: React.FC<CohortSummaryProps> = ({ summary }) => {
  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-3 rounded-xl bg-white p-4 shadow-sm border-1 border-gray-200">
        {/* Total Courses */}
        <div className="py-2 px-4">
          <div className="text-md text-gray-600">Total Courses</div>
          <div className="text-lg text-gray-800">{summary.totalCourses}</div>
        </div>

        {/* Total Spots */}
        <div className="py-2 px-4">
          <div className="text-md text-gray-600">Total Spots</div>
          <div className="text-lg text-gray-800">{summary.totalSpots}</div>
        </div>

        {/* Students Enrolled */}
        {/* <div className="py-2 px-4">
          <div className="text-md text-gray-600">Students Enrolled</div>
          <div className="text-lg text-gray-800">
            {summary.studentsEnrolled}
          </div>
        </div> */}

        {/* Cohort Start */}
        <div className="py-2 px-4">
          <div className="text-md text-gray-600">Cohort Start</div>
          <div className="text-lg text-gray-800">{summary.cohortStart}</div>
        </div>
      </div>
    </div>
  );
};

export default CohortSummary;
