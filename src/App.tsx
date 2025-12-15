import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navigation from "./components/Navigation";
import LoadingScreen from "./components/LoadingScreen";
import { useVisitorTracking } from "./hooks/useVisitorTracking";

const Index = lazy(() => import("./pages/Index"));
const Courses = lazy(() => import("./pages/Courses"));
const JoinUs = lazy(() => import("./pages/JoinUs"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();
// the import below is for cohort courses
const Cohort = lazy(() => import("./cohort/components/CourseEnrollmentPage"));
const CohortDetailPage = lazy(() => import("./cohort/components/CourseDetailPage"));
const EnrollmentForm = lazy(() => import("./enroll/EnrollmentForm"));

const App = () => {
  useVisitorTracking();
  
  return (
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="*" element={<NotFound />} />
            {/* the below is for cohort courses */}
            <Route path="/cohort" element={<Cohort />} />
            <Route path="/cohort/:slug" element={<CohortDetailPage />} />
            <Route path="/enroll/:slug" element={<EnrollmentForm />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
