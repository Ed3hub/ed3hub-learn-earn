// src/cohort/components/CourseCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { CourseDetail } from "../data";
import "./CourseCard.css";

interface CourseCardProps {
  course: CourseDetail;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const {
    title,
    level,
    description,
    weeks,
    enrollment,
    spotsLeft,
    instructorDetails: instructor,
    slug,
    image,
  } = course;

  // Calculate percentage for the enrollment bar
  const [enrolledCount, totalSpots] = (enrollment || "0/0")
    .split("/")
    .map(Number);
  const enrollmentPercentage = (enrolledCount / totalSpots) * 100 || 0;

  return (
    <Link to={`/cohort/${slug}`} className="block">
      <div className="course-card bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition duration-300 hover:shadow-xl cursor-pointer">
        {/* Course Image & Level Tag */}
        <div className="relative h-48">
          <div
            className="course-image w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
          </div>

          {/* Level Tag */}
          <span className="absolute top-3 right-3 px-3 py-1 text-md font-normal rounded-full bg-white">
            {level}
          </span>
        </div>

        {/* Course Details */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="course-title text-l font-normal text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-md text-gray-600 flex-grow">{description}</p>
          {/* Weeks */}
          <div className="my-4 flex gap-4 items-center text-md">
            <span className="text-gray-600 flex gap-[3px]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 30 30"
                >
                  <path
                    fill="currentColor"
                    d="M3.74 14.47c0-2.04.51-3.93 1.52-5.66s2.38-3.1 4.11-4.11s3.61-1.51 5.64-1.51c1.52 0 2.98.3 4.37.89s2.58 1.4 3.59 2.4s1.81 2.2 2.4 3.6s.89 2.85.89 4.39c0 1.52-.3 2.98-.89 4.37s-1.4 2.59-2.4 3.59s-2.2 1.8-3.59 2.39s-2.84.89-4.37.89s-3-.3-4.39-.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58s-.88-2.84-.88-4.37m2.48 0c0 2.37.86 4.43 2.59 6.18c1.73 1.73 3.79 2.59 6.2 2.59c1.58 0 3.05-.39 4.39-1.18s2.42-1.85 3.21-3.2s1.19-2.81 1.19-4.39s-.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05.39-4.39 1.18S8.2 8.72 7.4 10.07s-1.18 2.82-1.18 4.4m7.92 0V7.81c0-.23.08-.43.24-.59s.36-.24.59-.24s.43.08.59.24s.24.36.24.59v6.15l3.59 2.09c.2.12.32.29.38.51s.03.43-.09.62q-.24.42-.72.42q-.255 0-.42-.12l-3.82-2.23c-.17-.05-.31-.15-.42-.29s-.16-.3-.16-.49"
                  />
                </svg>
              </span>
              <span className="mt-[-3px]">{weeks} weeks</span>
            </span>
            <span className="text-gray-600 flex gap-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="currentColor"
                    d="M5 8.9c1.44 0 2.68.252 3.575.855C9.502 10.38 10 11.343 10 12.6a.501.501 0 0 1-1 0c0-.958-.358-1.596-.983-2.017C7.359 10.141 6.35 9.9 5 9.9s-2.36.241-3.017.684C1.358 11.005 1 11.643 1 12.601a.501.501 0 0 1-1 0c0-1.258.497-2.221 1.424-2.846C2.319 9.152 3.56 8.9 5 8.9m4.975 0c1.439 0 2.68.252 3.575.855c.927.625 1.425 1.588 1.425 2.846a.5.5 0 0 1-1 0c0-.958-.358-1.596-.984-2.017c-.518-.349-1.253-.57-2.202-.65a4.5 4.5 0 0 0-.87-1.033zM5 1.85a3.151 3.151 0 0 1 0 6.3a3.15 3.15 0 1 1 0-6.3m4.975 0a3.15 3.15 0 0 1 0 6.3c-.524 0-1.016-.13-1.45-.356a4.5 4.5 0 0 0 .534-.852a2.15 2.15 0 1 0 0-3.887a4.5 4.5 0 0 0-.535-.85a3.1 3.1 0 0 1 1.45-.355M5 2.85a2.151 2.151 0 0 0 0 4.3a2.15 2.15 0 0 0 0-4.3"
                  />
                </svg>
              </span>
              <span className="mt-[-2px]">{enrollment}</span>
            </span>
          </div>
          {/* Enrollment Section */}
          <div className="mb-4">
            <div className="flex justify-between items-center text-md mb-1">
              <span className="text-gray-600">Enrollment</span>
              <span className="">{spotsLeft} spots left</span>
            </div>

            {/* Enrollment Bar */}
            <div className="h-2 bg-gray-200 rounded-full relative">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${enrollmentPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Instructor */}
          <div className="pt-3 border-t border-gray-100 mt-auto flex justify-between items-center text-md">
            <div className="flex justify-between items-center cursor-pointer w-full">
              <div className="flex flex-col">
                <span className="text-gray-500">Instructor</span>
                <span className="">{instructor.name}</span>
              </div>
              <span className="course-arrow text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;