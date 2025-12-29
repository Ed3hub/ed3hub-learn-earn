import React, { useEffect, useState } from "react";
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
          defaultValue=""
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

const EnrollmentForm: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const course = courseDetailData.find((c) => c.slug === slug);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      Full_name: formData.get("fullName"),
      Email_address: formData.get("email"),
      Phone_number: formData.get("phoneNumber"),
      Course_of_interest: formData.get("course"),
      Experience_level: formData.get("experience"),
      How_did_you_hear_about_this_cohort: formData.get("howHear"),
      Location: formData.get("location"),
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/cohort_leads`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        (e.target as HTMLFormElement).reset();
        // Reset course field to original value
        (document.getElementById("course") as HTMLSelectElement).value =
          course.title;
        window.open("https://paystack.shop/pay/ed3hub-cohorts", "_blank");
      } else {
        const errorText = await response.text();
        console.error("API Error:", response.status, errorText);
        setError(
          `Failed to submit: ${
            response.status === 401
              ? "Authentication failed"
              : response.status === 403
              ? "Access denied"
              : "Server error"
          }`
        );
      }
    } catch (error) {
      console.error("Network Error:", error);
      if (error.name === "TypeError" && error.message.includes("fetch")) {
        setError(
          "CORS error: Please check Supabase CORS settings or use a proxy."
        );
      } else {
        setError("Network error. Please check your connection and try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!course) {
    return <div className="text-center p-10 text-xl">Course not found.</div>;
  }

  return (
    <div className="flex justify-center p-4 sm:p-8">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl">
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

        <form className="p-6 sm:p-8" onSubmit={handleSubmit}>
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

          <FormInput
            label="Phone Number"
            id="phoneNumber"
            placeholder="+1 (555) 000-0000"
          />

          <div className="mb-6">
            <label
              htmlFor="course"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Course of Interest <span className="text-red-500">*</span>
            </label>
            <select
              id="course"
              name="course"
              defaultValue={course.title}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm appearance-none bg-white pr-8"
            >
              <option value={course.title}>{course.title}</option>
              {courseDetailData
                .filter((c) => c.id !== course.id)
                .map((c) => (
                  <option key={c.id} value={c.title}>
                    {c.title}
                  </option>
                ))}
            </select>
          </div>

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
              "Advertisement",
            ]}
          />

          <FormInput
            label="Location (City, Country)"
            id="location"
            placeholder="e.g., New York, USA"
          />

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

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
              disabled={isLoading}
              className="w-full sm:w-1/2 ml-0 sm:ml-3 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
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
                </>
              )}
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
