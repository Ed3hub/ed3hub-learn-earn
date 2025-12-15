// src/cohort/components/CourseList.tsx
import React from 'react';
import CourseCard from './CourseCard';
import { CourseDetail } from '../data';

interface CourseListProps {
  courses: CourseDetail[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;