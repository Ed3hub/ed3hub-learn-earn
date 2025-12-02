import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courseDetailData } from "../cohort/data";

interface FormInputProps {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  isSelect?: boolean;
  options?: string[];
  children?: React.ReactNode;
}

// --- Reusable Input Component ---
const FormInput: React.FC<FormInputProps> = ({
  label,
  id,
  type = "text",
  placeholder,
  isSelect = false,
  options = [],
  children,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      {isSelect ? (
        <select
          id={id}
          name={id}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm appearance-none bg-white pr-8"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          {children}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      )}
    </div>
  );
};

// --- Main Enrollment Form Component ---
const EnrollmentForm: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const course = courseDetailData.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!course) {
    return <div className="text-center p-10 text-xl">Course not found.</div>;
  }

  return (
    <div className="flex justify-center p-4 sm:p-8">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl">
        {/* Header Section */}
        <header className="bg-blue-600 text-white rounded-t-xl p-6">
          <button
            className="flex items-center text-sm mb-4 opacity-80 hover:opacity-100"
            onClick={() => navigate(`/cohort/${slug}`)}
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Back to Course
          </button>
          <h1 className="text-3xl font-bold mb-1">Enroll in Course</h1>
          <p className="text-lg opacity-90">{course.title}</p>
        </header>

        {/* Form Body */}
        <form className="p-6 sm:p-8">
          {/* Form Fields */}
          <FormInput
            label="Full Name"
            id="fullName"
            placeholder="Enter your full name"
          />

          <FormInput
            label="Email Address"
            id="email"
            type="email"
            placeholder="your.email@example.com"
          />

          {/* Note: In a real app, this might use a library for phone masking/validation */}
          <FormInput
            label="Phone Number"
            id="phoneNumber"
            placeholder="+1 (555) 000-0000"
          />

          <FormInput
            label="Course of Interest"
            id="course"
            placeholder={course.title}
            isSelect
          >
            <option value={course.title} selected>
              {course.title}
            </option>
            {courseDetailData
              .filter((c) => c.id !== course.id)
              .map((c) => (
                <option key={c.id} value={c.title}>
                  {c.title}
                </option>
              ))}
          </FormInput>

          <FormInput
            label="Experience Level"
            id="experience"
            placeholder="Select your experience level"
            isSelect
            options={["Beginner", "Intermediate", "Advanced"]}
          />

          <FormInput
            label="How did you hear about this cohort?"
            id="howHear"
            placeholder="Select an option"
            isSelect
            options={[
              "Social Media",
              "Friend/Referral",
              "Online Search",
              "Advertisment",
            ]}
          />

          <FormInput
            label="Location (City, Country)"
            id="location"
            placeholder="e.g., New York, USA"
          />

          {/* Buttons and Required Fields Text */}
          <div className="flex flex-col sm:flex-row justify-between pt-4">
            <button
              type="button"
              className="w-full sm:w-1/2 mr-0 sm:mr-3 mb-3 sm:mb-0 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-150 ease-in-out"
              onClick={() => navigate(`/cohort/${slug}`)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-1/2 ml-0 sm:ml-3 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center transition duration-150 ease-in-out"
            >
              Submit Enrollment
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>

          <p className="text-center text-xs text-gray-500 mt-4">
            * All fields are required
          </p>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;