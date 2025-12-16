// src/cohort/components/CourseDetailPage.tsx
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { courseDetailData } from "../data";
import "./CourseCard.css";

const CourseDetailPage: React.FC = () => {
  const { slug: courseSlug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [courseSlug]);

  const course = courseDetailData.find((c) => c.slug === courseSlug);

  if (!course) {
    return <div className="text-center p-10 text-xl">Course not found.</div>;
  }

  const {
    title,
    level,
    full_description,
    image,
    duration,
    instructorDetails: instructor,
    classSize,
    schedule,
    cohort,
    learningObjectives,
    price,
  } = course;

  const [enrolled, total] = cohort.enrollment
    .split(" ")[0]
    .split("/")
    .map(Number);
  const enrollmentPercentage = (enrolled / total) * 100;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto pt-6 px-4">
        <Link
          to="/cohort"
          className="text-gray-500 hover:text-gray-800 flex items-center mb-4"
        >
          <span className="text-xl mr-1">←</span> Back to Courses
        </Link>
      </div>

      <div className="course-card max-w-4xl mx-auto bg-white shadow-xl rounded-b-xl mb-10">
        <div className="relative h-72 overflow-hidden">
          <div
            className="course-image w-full h-full bg-cover bg-center rounded-t-xl "
            style={{ backgroundImage: `url(${image})` }}
          ></div>

          <div className="absolute inset-0 max-w-4xl mx-auto flex flex-col justify-end p-4 sm:p-6 lg:p-8">
            <span className="px-3 py-1 text-md font-normal rounded-full w-fit mb-0 bg-white">
              {level}
            </span>
          </div>
        </div>
        <div className=" flex flex-col justify-end p-4 sm:p-6 lg:p-8">
          <h1 className="text-l text-black mb-2">{title}</h1>
          <p className="text-md text-gray-600">{full_description}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-md px-4 sm:px-6 lg:px-8">
          {[
            {
              label: "Duration",
              value: duration,
              icon: (
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
              ),
            },
            {
              label: "Instructor",
              value: instructor.name,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="8.196" r="4.446" />
                    <path d="M19.608 20.25a7.608 7.608 0 0 0-15.216 0" />
                  </g>
                </svg>
              ),
            },
            {
              label: "Class Size",
              value: classSize,
              icon: (
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
              ),
            },
            {
              label: "Schedule",
              value: schedule,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96m0 0v288"
                  />
                </svg>
              ),
            },
          ].map((item, index) => (
            <div key={index} className="p-4 bg-[#F8FAFC] rounded-md">
              <div className="text-md text-gray-500 mb-1 flex gap-2">
                <span>{item.icon} </span>
                <span className="mt-[-3px]">{item.label}</span>
              </div>
              <div className="text-gray-800">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="p-6 md:p-8 space-y-8">
          <div className="bg-blue-50 p-6 rounded-xl border-[#BEDBFF] border-1">
            <div className="flex gap-2 mb-4">
              <span className="text-[#155DFC]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 4.625H7a4 4 0 0 0-4 4v8.75a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-8.75a4 4 0 0 0-4-4m-14 6h18m-4-8v4m-10-4v4"
                  />
                </svg>
              </span>
              <h2 className="text-l text-gray-800 mt-0 ">Cohort Information</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-md text-gray-600">Start Date</div>
                <div className="text-gray-900">{cohort.startDate}</div>
              </div>
              <div>
                <div className="text-md text-gray-600">End Date</div>
                <div className="text-gray-900">{cohort.endDate}</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-md text-gray-600">Class Schedule</div>
              <div className="text-gray-900">{cohort.classSchedule}</div>
            </div>

            {/* <div className="my-2">
              <div className="flex justify-between items-center text-md mb-2">
                <span className="text-gray-700">Enrollment Status</span>
                <span className="text-gray-800">
                  {`${cohort.enrollment} enrolled (${cohort.spotsLeft} spots left)`}
                </span>
              </div>
              <div className="h-3 bg-blue-200 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${enrollmentPercentage}%` }}
                ></div>
              </div>
            </div> */}
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              What You'll Learn
            </h2>
            <ul className="space-y-3">
              {learningObjectives.map((objective, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="flex-shrink-0 mr-3 mt-0 text-blue-600 bg-[#DBEAFE] px-2 rounded-full">
                    {index + 1}
                  </span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F7F6FF] p-6 rounded-xl border-1 border-purple-200">
            <div className="flex gap-2 mb-4">
              <span className="text-purple-800 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0M9 16.42v3.049l3-1.8l3 1.8v-3.05A8 8 0 0 1 12 17a8 8 0 0 1-3-.581M12 15a6 6 0 1 0 0-12a6 6 0 0 0 0 12"
                  />
                </svg>
              </span>
              <h2 className="text-l mt-[-3px]">Meet Your Instructor</h2>
            </div>
            <div className="flex items-center md:items-start flex-col md:flex-row  justify-center">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-28 h-28 rounded-full object-cover mr-6 flex-shrink-0"
              />
              <div>
                <h3 className="text-lg text-gray-900">{instructor.name}</h3>
                <p className="text-md text-purple-600 mb-3 mt-2 flex gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                        d="M15 21V4.8a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8V21M4.4 7h15.2A2.4 2.4 0 0 1 22 9.4v9.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 18.6V9.4A2.4 2.4 0 0 1 4.4 7"
                      />
                    </svg>
                  </span>{" "}
                  <span className="mt-[-3px]">{instructor.title}</span>
                </p>
                <p className="text-md text-gray-700 text-justify">
                  {instructor.bio}
                </p>
                <div className="mt-0 pt-4">
                  <div className="text-md text-gray-700 mb-2">
                    Areas of Expertise:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {instructor.areasOfExpertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-md bg-white rounded-full border-1 border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-5 flex justify-between items-center rounded-xl mt-8">
            <div>
              <div className="text-l text-gray-400">Course Price</div>
              <div className="text-xl text-gray-400">
                <span className="text-white">N {price.toLocaleString()}</span>{" "}
                Naira
              </div>
              <p className="text-md text-gray-400 mt-1">
                Includes all course materials, lifetime access to recordings,
                and a certificate of completion
              </p>
            </div>
            <button
              onClick={() => navigate(`/enroll/${courseSlug}`)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-150"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
