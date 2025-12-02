// src/courses/components/CohortHeader.tsx
import React from 'react';

const CohortHeader: React.FC = () => {
  return (
    <header className="mb-8 text-center md:text-left">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">2026 Winter Cohort</h1>
      <p className="text-md text-gray-500 max-w-2xl mx-auto md:mx-0">
        Join our upcoming cohort and learn from industry experts. Choose from five comprehensive
        courses designed to accelerate your career in tech.
      </p>
    </header>
  );
};

export default CohortHeader;