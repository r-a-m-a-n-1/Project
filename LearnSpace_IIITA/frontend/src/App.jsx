// // src/App.jsx
// import React, { useEffect } from "react";
// import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import FloatingShape from "./components/FloatingShape";
// import Navbar from "./pages/Navbar";
// import HomePage from "./pages/HomePage";
// import SignUpPage from "./pages/SignUpPage";
// import LoginPage from "./pages/AdminLoginPage";
// import EmailVerificationPage from "./pages/EmailVerificationPage";
// import DashboardPage from "./pages/DashboardPage";
// import ForgotPasswordPage from "./pages/ForgotPasswordPage";
// import ResetPasswordPage from "./pages/ResetPasswordPage";
// import AboutPage from "./pages/AboutPage";
// import AmazingFeaturePage from "./pages/AmazingFeaturesPages";
// import ChooseSemesterPage from "./pages/ChooseSemesterPage";
// import LoadingSpinner from "./components/LoadingSpinner";
// import { Toaster } from "react-hot-toast";
// import TechTitaniumTeam from "./pages/TechTitaniumTeam";

// // Import Sem1 Pages
// import Sem1Page from "./pages/Sem1/Sem1Page";

// // Import Sem1 Video & Subject Pages
// import Sem1_Vedio from "./pages/Sem1/Sem1_vedio_playlist/Sem1_Vedio";
// import EngineeringPhysics from "./pages/Sem1/Sem1_vedio_playlist/EngineeringPhysics";
// import FundamentalElectrical from "./pages/Sem1/Sem1_vedio_playlist/FundamentalElectrical";
// import LinearAlgebra from "./pages/Sem1/Sem1_vedio_playlist/LinearAlgebra";
// import ProblemSolving from "./pages/Sem1/Sem1_vedio_playlist/ProblemSolving";
// import TechnicalCommunication from "./pages/Sem1/Sem1_vedio_playlist/TechnicalCommunication";
// import ProfessionalEthics from "./pages/Sem1/Sem1_vedio_playlist/ProfessionalEthics";

// // Import new Sem1 Lecture Notes and Previous Year Papers Pages
// import Sem1_LectureNotes from "./pages/Sem1/Sem1_LecurePlaylist/Sem1_LectureNotes";
// import Sem1_PreviousYearPaper from "./pages/Sem1/Sem1_PreviousYearPaper/Sem1_PreviousYearPaper";

// // Import Sem2 Home Page (used for Sem2 route)
// import Sem2_HomePage from "./pages/Sem2/Sem2_HomePage";

// // Import new Sem2 Department Home Pages
// import Sem2_IT_HomePage from "./pages/Sem2/IT/Sem2_IT_Homepage";
// import Sem2_ITBI_HomePage from "./pages/Sem2/IT_BI/Sem2_ITBI_Homepage";
// import Sem2_ECE_HomePage from "./pages/Sem2/ECE/Sem2_ECE_Homepage";

// // Import new Sem2 ECE Video, Lecture Notes and Previous Year Papers Pages
// import Sem2_ece_VedioPlaylist from "./pages/Sem2/ECE/Sem2_ece_VedioPlaylist/Sem2_ece_Vedio.jsx";
// import Sem2_ece_LectureNotes from "./pages/Sem2/ECE/Sem2_ece_LectureNotes/Sem2_ece_LectureNotes.jsx";
// import Sem2_ece_PreviousPapers from "./pages/Sem2/ECE/Sem2_ece_PreviousYearPapers/Sem2_ece_PreviousPapers.jsx";

// // Import new Sem2 IT Video, Lecture Notes and Previous Year Papers Pages
// import Sem2_it_VedioPlaylist from "./pages/Sem2/IT/Sem2_it_VedioPlaylist/Sem2_it_Vedio.jsx";
// import Sem2_it_LectureNotes from "./pages/Sem2/IT/Sem2_it_LectureNotes/Sem2_it_LectureNotes.jsx";
// import Sem2_it_PreviousPapers from "./pages/Sem2/IT/Sem2_it_PreviousYearPapers/Sem2_it_PreviousPapers.jsx";

// // Import new Sem2 IT-BI Video, Lecture Notes and Previous Year Papers Pages
// import Sem2_itbi_VedioPlaylist from "./pages/Sem2/IT_BI/Sem2_itbi_VedioPlaylist/Sem2_itbi_Vedio.jsx";
// import Sem2_itbi_LectureNotes from "./pages/Sem2/IT_BI/Sem2_itbi_LectureNotes/Sem2_itbi_LectureNotes.jsx";
// import Sem2_itbi_PreviousPapers from "./pages/Sem2/IT_BI/Sem2_itbi_PreviousYearPapers/Sem2_itbi_PreviousPapers.jsx";

// // Import Sem3 Home Page
// import Sem3_HomePage from "./pages/Sem3/Sem3_HomePage";

// // Import new Sem3 Department Home Pages
// import Sem3_IT_HomePage from "./pages/Sem3/IT/Sem3_IT_Homepage";
// import Sem3_ITBI_HomePage from "./pages/Sem3/IT_BI/Sem3_ITBI_Homepage";
// import Sem3_ECE_HomePage from "./pages/Sem3/ECE/Sem3_ECE_Homepage";

// // Import new Sem3 ECE Video, Lecture Notes and Previous Year Papers Pages
// import Sem3_ece_VedioPlaylist from "./pages/Sem3/ECE/Sem3_ece_VedioPlaylist/Sem3_ece_Vedio.jsx";
// import Sem3_ece_LectureNotes from "./pages/Sem3/ECE/Sem3_ece_LectureNotes/Sem3_ece_LectureNotes.jsx";
// import Sem3_ece_PreviousPapers from "./pages/Sem3/ECE/Sem3_ece_PreviousYearPapers/Sem3_ece_PreviousPapers.jsx";

// // Import new Sem3 IT Video, Lecture Notes and Previous Year Papers Pages
// import Sem3_it_VedioPlaylist from "./pages/Sem3/IT/Sem3_it_VedioPlaylist/Sem3_it_Vedio.jsx";
// import Sem3_it_LectureNotes from "./pages/Sem3/IT/Sem3_it_LectureNotes/Sem3_it_LectureNotes.jsx";
// import Sem3_it_PreviousPapers from "./pages/Sem3/IT/Sem3_it_PreviousYearPapers/Sem3_it_PreviousPapers.jsx";

// // Import new Sem3 IT-BI Video, Lecture Notes and Previous Year Papers Pages
// import Sem3_itbi_VedioPlaylist from "./pages/Sem3/IT_BI/Sem3_itbi_VedioPlaylist/Sem3_itbi_Vedio.jsx";
// import Sem3_itbi_LectureNotes from "./pages/Sem3/IT_BI/Sem3_itbi_LectureNotes/Sem3_itbi_LectureNotes.jsx";
// import Sem3_itbi_PreviousPapers from "./pages/Sem3/IT_BI/Sem3_itbi_PreviousYearPapers/Sem3_itbi_PreviousPapers.jsx";

// // Import Sem4 Home Page
// import Sem4_HomePage from "./pages/Sem4/Sem4_HomePage";

// // Import new Sem4 Department Home Pages
// import Sem4_IT_HomePage from "./pages/Sem4/IT/Sem4_IT_Homepage";
// import Sem4_ITBI_HomePage from "./pages/Sem4/IT_BI/Sem4_ITBI_Homepage";
// import Sem4_ECE_HomePage from "./pages/Sem4/ECE/Sem4_ECE_Homepage";

// // Import new Sem4 ECE Video, Lecture Notes and Previous Year Papers Pages
// import Sem4_ece_VedioPlaylist from "./pages/Sem4/ECE/Sem4_ece_VedioPlaylist/Sem4_ece_Vedio.jsx";
// import Sem4_ece_LectureNotes from "./pages/Sem4/ECE/Sem4_ece_LectureNotes/Sem4_ece_LectureNotes.jsx";
// import Sem4_ece_PreviousPapers from "./pages/Sem4/ECE/Sem4_ece_PreviousYearPapers/Sem4_ece_PreviousPapers.jsx";

// // Import new Sem4 IT Video, Lecture Notes and Previous Year Papers Pages
// import Sem4_it_VedioPlaylist from "./pages/Sem4/IT/Sem4_it_VedioPlaylist/Sem4_it_Vedio.jsx";
// import Sem4_it_LectureNotes from "./pages/Sem4/IT/Sem4_it_LectureNotes/Sem4_it_LectureNotes.jsx";
// import Sem4_it_PreviousPapers from "./pages/Sem4/IT/Sem4_it_PreviousYearPapers/Sem4_it_PreviousPapers.jsx";

// // Import new Sem4 IT-BI Video, Lecture Notes and Previous Year Papers Pages
// import Sem4_itbi_VedioPlaylist from "./pages/Sem4/IT_BI/Sem4_itbi_VedioPlaylist/Sem4_itbi_Vedio.jsx";
// import Sem4_itbi_LectureNotes from "./pages/Sem4/IT_BI/Sem4_itbi_LectureNotes/Sem4_itbi_LectureNotes.jsx";
// import Sem4_itbi_PreviousPapers from "./pages/Sem4/IT_BI/Sem4_itbi_PreviousYearPapers/Sem4_itbi_PreviousPapers.jsx";

// // Import Sem5 Home Page
// import Sem5_HomePage from "./pages/Sem5/Sem5_HomePage";

// // Import new Sem5 Department Home Pages
// import Sem5_IT_HomePage from "./pages/Sem5/IT/Sem5_IT_Homepage";
// import Sem5_ITBI_HomePage from "./pages/Sem5/IT_BI/Sem5_ITBI_Homepage";
// import Sem5_ECE_HomePage from "./pages/Sem5/ECE/Sem5_ECE_Homepage";

// // Import new Sem5 ECE Video, Lecture Notes and Previous Year Papers Pages
// import Sem5_ece_VedioPlaylist from "./pages/Sem5/ECE/Sem5_ece_VedioPlaylist/Sem5_ece_Vedio.jsx";
// import Sem5_ece_LectureNotes from "./pages/Sem5/ECE/Sem5_ece_LectureNotes/Sem5_ece_LectureNotes.jsx";
// import Sem5_ece_PreviousPapers from "./pages/Sem5/ECE/Sem5_ece_PreviousYearPapers/Sem5_ece_PreviousPapers.jsx";

// // Import new Sem5 IT Video, Lecture Notes and Previous Year Papers Pages
// import Sem5_it_VedioPlaylist from "./pages/Sem5/IT/Sem5_it_VedioPlaylist/Sem5_it_Vedio.jsx";
// import Sem5_it_LectureNotes from "./pages/Sem5/IT/Sem5_it_LectureNotes/Sem5_it_LectureNotes.jsx";
// import Sem5_it_PreviousPapers from "./pages/Sem5/IT/Sem5_it_PreviousYearPapers/Sem5_it_PreviousPapers.jsx";

// // Import new Sem5 IT-BI Video, Lecture Notes and Previous Year Papers Pages
// import Sem5_itbi_VedioPlaylist from "./pages/Sem5/IT_BI/Sem5_itbi_VedioPlaylist/Sem5_itbi_Vedio.jsx";
// import Sem5_itbi_LectureNotes from "./pages/Sem5/IT_BI/Sem5_itbi_LectureNotes/Sem5_itbi_LectureNotes.jsx";
// import Sem5_itbi_PreviousPapers from "./pages/Sem5/IT_BI/Sem5_itbi_PreviousYearPapers/Sem5_itbi_PreviousPapers.jsx";

// // Import Sem6 Home Page
// import Sem6_HomePage from "./pages/Sem6/Sem6_HomePage";

// // Import new Sem6 Department Home Pages
// import Sem6_IT_HomePage from "./pages/Sem6/IT/Sem6_IT_Homepage";
// import Sem6_ITBI_HomePage from "./pages/Sem6/IT_BI/Sem6_ITBI_Homepage";
// import Sem6_ECE_HomePage from "./pages/Sem6/ECE/Sem6_ECE_Homepage";

// // Import new Sem6 ECE Video, Lecture Notes and Previous Year Papers Pages
// import Sem6_ece_VedioPlaylist from "./pages/Sem6/ECE/Sem6_ece_VedioPlaylist/Sem6_ece_Vedio.jsx";
// import Sem6_ece_LectureNotes from "./pages/Sem6/ECE/Sem6_ece_LectureNotes/Sem6_ece_LectureNotes.jsx";
// import Sem6_ece_PreviousPapers from "./pages/Sem6/ECE/Sem6_ece_PreviousYearPapers/Sem6_ece_PreviousPapers.jsx";

// // Import new Sem6 IT Video, Lecture Notes and Previous Year Papers Routes
// import Sem6_it_VedioPlaylist from "./pages/Sem6/IT/Sem6_it_VedioPlaylist/Sem6_it_Vedio.jsx";
// import Sem6_it_LectureNotes from "./pages/Sem6/IT/Sem6_it_LectureNotes/Sem6_it_LectureNotes.jsx";
// import Sem6_it_PreviousPapers from "./pages/Sem6/IT/Sem6_it_PreviousYearPapers/Sem6_it_PreviousPapers.jsx";

// // Import new Sem6 IT-BI Video, Lecture Notes and Previous Year Papers Routes
// import Sem6_itbi_VedioPlaylist from "./pages/Sem6/IT_BI/Sem6_itbi_VedioPlaylist/Sem6_itbi_Vedio.jsx";
// import Sem6_itbi_LectureNotes from "./pages/Sem6/IT_BI/Sem6_itbi_LectureNotes/Sem6_itbi_LectureNotes.jsx";
// import Sem6_itbi_PreviousPapers from "./pages/Sem6/IT_BI/Sem6_itbi_PreviousYearPapers/Sem6_itbi_PreviousPapers.jsx";

// // Import Sem7 Home Page
// import Sem7_HomePage from "./pages/Sem7/Sem7_HomePage";

// // Import new Sem7 Department Home Pages
// import Sem7_IT_HomePage from "./pages/Sem7/IT/Sem7_IT_Homepage";
// import Sem7_ITBI_HomePage from "./pages/Sem7/IT_BI/Sem7_ITBI_Homepage";
// import Sem7_ECE_HomePage from "./pages/Sem7/ECE/Sem7_ECE_Homepage";

// // Import new Sem7 ECE Video, Lecture Notes and Previous Year Papers Pages
// import Sem7_ece_VedioPlaylist from "./pages/Sem7/ECE/Sem7_ece_VedioPlaylist/Sem7_ece_Vedio.jsx";
// import Sem7_ece_LectureNotes from "./pages/Sem7/ECE/Sem7_ece_LectureNotes/Sem7_ece_LectureNotes.jsx";
// import Sem7_ece_PreviousPapers from "./pages/Sem7/ECE/Sem7_ece_PreviousYearPapers/Sem7_ece_PreviousPapers.jsx";

// // Import new Sem7 IT Video, Lecture Notes and Previous Year Papers Pages
// import Sem7_it_VedioPlaylist from "./pages/Sem7/IT/Sem7_it_VedioPlaylist/Sem7_it_Vedio.jsx";
// import Sem7_it_LectureNotes from "./pages/Sem7/IT/Sem7_it_LectureNotes/Sem7_it_LectureNotes.jsx";
// import Sem7_it_PreviousPapers from "./pages/Sem7/IT/Sem7_it_PreviousYearPapers/Sem7_it_PreviousPapers.jsx";

// // Import new Sem7 IT-BI Video, Lecture Notes and Previous Year Papers Pages
// import Sem7_itbi_VedioPlaylist from "./pages/Sem7/IT_BI/Sem7_itbi_VedioPlaylist/Sem7_itbi_Vedio.jsx";
// import Sem7_itbi_LectureNotes from "./pages/Sem7/IT_BI/Sem7_itbi_LectureNotes/Sem7_itbi_LectureNotes.jsx";
// import Sem7_itbi_PreviousPapers from "./pages/Sem7/IT_BI/Sem7_itbi_PreviousYearPapers/Sem7_itbi_PreviousPapers.jsx";

// // Import Sem8 Home Page
// import Sem8_HomePage from "./pages/Sem8/Sem8_HomePage";

// // Import new Sem8 Department Home Pages
// import Sem8_IT_HomePage from "./pages/Sem8/IT/Sem8_IT_Homepage";
// import Sem8_ITBI_HomePage from "./pages/Sem8/IT_BI/Sem8_ITBI_Homepage";
// import Sem8_ECE_HomePage from "./pages/Sem8/ECE/Sem8_ECE_Homepage";

// // Import new Sem8 ECE Video, Lecture Notes and Previous Year Papers Pages
// import Sem8_ece_VedioPlaylist from "./pages/Sem8/ECE/Sem8_ece_VedioPlaylist/Sem8_ece_Vedio.jsx";
// import Sem8_ece_LectureNotes from "./pages/Sem8/ECE/Sem8_ece_LectureNotes/Sem8_ece_LectureNotes.jsx";
// import Sem8_ece_PreviousPapers from "./pages/Sem8/ECE/Sem8_ece_PreviousYearPapers/Sem8_ece_PreviousPapers.jsx";

// // Import new Sem8 IT Video, Lecture Notes and Previous Year Papers Pages
// import Sem8_it_VedioPlaylist from "./pages/Sem8/IT/Sem8_it_VedioPlaylist/Sem8_it_Vedio.jsx";
// import Sem8_it_LectureNotes from "./pages/Sem8/IT/Sem8_it_LectureNotes/Sem8_it_LectureNotes.jsx";
// import Sem8_it_PreviousPapers from "./pages/Sem8/IT/Sem8_it_PreviousYearPapers/Sem8_it_PreviousPapers.jsx";

// // Import new Sem8 IT-BI Video, Lecture Notes and Previous Year Papers Pages
// import Sem8_itbi_VedioPlaylist from "./pages/Sem8/IT_BI/Sem8_itbi_VedioPlaylist/Sem8_itbi_Vedio.jsx";
// import Sem8_itbi_LectureNotes from "./pages/Sem8/IT_BI/Sem8_itbi_LectureNotes/Sem8_itbi_LectureNotes.jsx";
// import Sem8_itbi_PreviousPapers from "./pages/Sem8/IT_BI/Sem8_itbi_PreviousYearPapers/Sem8_itbi_PreviousPapers.jsx";

// // Import Admin Pages
// import AdminHomePage from "./pages/AdminHomePage";
// import AdminLoginPage from "./pages/AdminLoginPage";
// import OTPVerification from "./pages/OTPVerification";

// // Protect and redirect wrappers from your auth store
// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated, user } = useAuthStore();
//   if (!isAuthenticated) return <Navigate to="/login" replace />;
//   if (!user.isVerified) return <Navigate to="/verify-email" replace />;
//   return children;
// };

// const RedirectAuthenticatedUser = ({ children }) => {
//   return children;
// };

// function App() {
//   const { isCheckingAuth, checkAuth } = useAuthStore();
//   const location = useLocation();

//   useEffect(() => {
//     checkAuth();
//   }, [checkAuth]);

//   if (isCheckingAuth) return <LoadingSpinner />;

//   // Hide the navbar on specific routes.
//   const renderNavbar = () => {
//     if (
//       location.pathname.match(
//         /^\/(sem1|sem2|sem3|sem4|sem5|sem6|sem7|sem8)(_home)?(\/|$)/
//       ) ||
//       location.pathname === "/listed-products" ||
//       location.pathname.startsWith("/admin")
//     ) {
//       return null;
//     }
//     if (
//       location.pathname !== "/login" &&
//       location.pathname !== "/signup" &&
//       location.pathname !== "/forgot-password" &&
//       !location.pathname.startsWith("/reset-password/")
//     ) {
//       return <Navbar />;
//     }
//     return null;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex flex-col items-center relative overflow-hidden">
//       {renderNavbar()}

//       <FloatingShape color="bg-green-500" size="w-64 h-64" top="-5%" left="10%" delay={0} />
//       <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%" delay={5} />
//       <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="-10%" delay={2} />

//       <ProductProvider>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <DashboardPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/signup"
//             element={
//               <RedirectAuthenticatedUser>
//                 <SignUpPage />
//               </RedirectAuthenticatedUser>
//             }
//           />
//           <Route
//             path="/login"
//             element={
//               <RedirectAuthenticatedUser>
//                 <LoginPage />
//               </RedirectAuthenticatedUser>
//             }
//           />
//           <Route path="/verify-email" element={<EmailVerificationPage />} />
//           <Route
//             path="/forgot-password"
//             element={
//               <RedirectAuthenticatedUser>
//                 <ForgotPasswordPage />
//               </RedirectAuthenticatedUser>
//             }
//           />
//           <Route
//             path="/reset-password/:token"
//             element={
//               <RedirectAuthenticatedUser>
//                 <ResetPasswordPage />
//               </RedirectAuthenticatedUser>
//             }
//           />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/amazing-feature" element={<AmazingFeaturePage />} />
//           <Route path="/choose-semester" element={<ChooseSemesterPage />} />
//           <Route path="/techtitanium-team" element={<TechTitaniumTeam />} />

//           {/* Sem1 Routes */}
//           <Route path="/sem1" element={<Sem1Page />} />
//           <Route path="/video-lecture" element={<Sem1_Vedio />} />
//           <Route path="/sem1/engineering-physics" element={<EngineeringPhysics />} />
//           <Route path="/sem1/fundamental-electrical" element={<FundamentalElectrical />} />
//           <Route path="/sem1/linear-algebra" element={<LinearAlgebra />} />
//           <Route path="/sem1/problem-solving" element={<ProblemSolving />} />
//           <Route path="/sem1/technical-communication" element={<TechnicalCommunication />} />
//           <Route path="/sem1/professional-ethics" element={<ProfessionalEthics />} />
//           <Route path="/study-material" element={<Sem1_LectureNotes />} />
//           <Route path="/previous-year-paper" element={<Sem1_PreviousYearPaper />} />

//           {/* Sem2 Routes */}
//           <Route path="/sem2_home" element={<Sem2_HomePage />} />

//           {/* Sem3 Routes */}
//           <Route path="/sem3_home" element={<Sem3_HomePage />} />

//           {/* Sem4 Routes */}
//           <Route path="/sem4_home" element={<Sem4_HomePage />} />

//           {/* Sem5 Routes */}
//           <Route path="/sem5_home" element={<Sem5_HomePage />} />

//           {/* Sem6 Routes */}
//           <Route path="/sem6_home" element={<Sem6_HomePage />} />

//           {/* Sem7 Routes */}
//           <Route path="/sem7_home" element={<Sem7_HomePage />} />

//           {/* Sem8 Routes */}
//           <Route path="/sem8_home" element={<Sem8_HomePage />} />

// {/* Sem2 Department Routes */}
// <Route path="/sem2/it" element={<Sem2_IT_HomePage />} />
// <Route path="/sem2/itbi" element={<Sem2_ITBI_HomePage />} />
// <Route path="/sem2/ece" element={<Sem2_ECE_HomePage />} />

// {/* Sem2 ECE Video, Lecture Notes and Previous Year Papers Routes */}
// <Route path="/sem2/ece/vedioplaylist" element={<Sem2_ece_VedioPlaylist />} />
// <Route path="/sem2/ece/lecturenotes" element={<Sem2_ece_LectureNotes />} />
// <Route path="/sem2/ece/previouspapers" element={<Sem2_ece_PreviousPapers />} />

// {/* Sem2 IT Video, Lecture Notes and Previous Year Papers Routes */}
// <Route path="/sem2/it/vedioplaylist" element={<Sem2_it_VedioPlaylist />} />
// <Route path="/sem2/it/lecturenotes" element={<Sem2_it_LectureNotes />} />
// <Route path="/sem2/it/previouspapers" element={<Sem2_it_PreviousPapers />} />

// {/* Sem2 IT-BI Video, Lecture Notes and Previous Year Papers Routes */}
// <Route path="/sem2/itbi/vedioplaylist" element={<Sem2_itbi_VedioPlaylist />} />
// <Route path="/sem2/itbi/lecturenotes" element={<Sem2_itbi_LectureNotes />} />
// <Route path="/sem2/itbi/previouspapers" element={<Sem2_itbi_PreviousPapers />} />

//           {/* Sem3 Department Routes */}
//           <Route path="/sem3/it" element={<Sem3_IT_HomePage />} />
//           <Route path="/sem3/itbi" element={<Sem3_ITBI_HomePage />} />
//           <Route path="/sem3/ece" element={<Sem3_ECE_HomePage />} />

//           {/* Sem3 ECE Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem3/ece/vedioplaylist" element={<Sem3_ece_VedioPlaylist />} />
//           <Route path="/sem3/ece/lecturenotes" element={<Sem3_ece_LectureNotes />} />
//           <Route path="/sem3/ece/previouspapers" element={<Sem3_ece_PreviousPapers />} />

//           {/* Sem3 IT Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem3/it/vedioplaylist" element={<Sem3_it_VedioPlaylist />} />
//           <Route path="/sem3/it/lecturenotes" element={<Sem3_it_LectureNotes />} />
//           <Route path="/sem3/it/previouspapers" element={<Sem3_it_PreviousPapers />} />

//           {/* Sem3 IT-BI Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem3/itbi/vedioplaylist" element={<Sem3_itbi_VedioPlaylist />} />
//           <Route path="/sem3/itbi/lecturenotes" element={<Sem3_itbi_LectureNotes />} />
//           <Route path="/sem3/itbi/previouspapers" element={<Sem3_itbi_PreviousPapers />} />

//           {/* Sem4 Department Routes */}
//           <Route path="/sem4/it" element={<Sem4_IT_HomePage />} />
//           <Route path="/sem4/itbi" element={<Sem4_ITBI_HomePage />} />
//           <Route path="/sem4/ece" element={<Sem4_ECE_HomePage />} />

//           {/* Sem4 ECE Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem4/ece/vedioplaylist" element={<Sem4_ece_VedioPlaylist />} />
//           <Route path="/sem4/ece/lecturenotes" element={<Sem4_ece_LectureNotes />} />
//           <Route path="/sem4/ece/previouspapers" element={<Sem4_ece_PreviousPapers />} />

//           {/* Sem4 IT Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem4/it/vedioplaylist" element={<Sem4_it_VedioPlaylist />} />
//           <Route path="/sem4/it/lecturenotes" element={<Sem4_it_LectureNotes />} />
//           <Route path="/sem4/it/previouspapers" element={<Sem4_it_PreviousPapers />} />

//           {/* Sem4 IT-BI Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem4/itbi/vedioplaylist" element={<Sem4_itbi_VedioPlaylist />} />
//           <Route path="/sem4/itbi/lecturenotes" element={<Sem4_itbi_LectureNotes />} />
//           <Route path="/sem4/itbi/previouspapers" element={<Sem4_itbi_PreviousPapers />} />

//           {/* Sem5 Department Routes */}
//           <Route path="/sem5/it" element={<Sem5_IT_HomePage />} />
//           <Route path="/sem5/itbi" element={<Sem5_ITBI_HomePage />} />
//           <Route path="/sem5/ece" element={<Sem5_ECE_HomePage />} />

//           {/* Sem5 ECE Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem5/ece/vedioplaylist" element={<Sem5_ece_VedioPlaylist />} />
//           <Route path="/sem5/ece/lecturenotes" element={<Sem5_ece_LectureNotes />} />
//           <Route path="/sem5/ece/previouspapers" element={<Sem5_ece_PreviousPapers />} />

//           {/* Sem5 IT Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem5/it/vedioplaylist" element={<Sem5_it_VedioPlaylist />} />
//           <Route path="/sem5/it/lecturenotes" element={<Sem5_it_LectureNotes />} />
//           <Route path="/sem5/it/previouspapers" element={<Sem5_it_PreviousPapers />} />

//           {/* Sem5 IT-BI Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem5/itbi/vedioplaylist" element={<Sem5_itbi_VedioPlaylist />} />
//           <Route path="/sem5/itbi/lecturenotes" element={<Sem5_itbi_LectureNotes />} />
//           <Route path="/sem5/itbi/previouspapers" element={<Sem5_itbi_PreviousPapers />} />

//           {/* Sem6 Department Routes */}
//           <Route path="/sem6/it" element={<Sem6_IT_HomePage />} />
//           <Route path="/sem6/itbi" element={<Sem6_ITBI_HomePage />} />
//           <Route path="/sem6/ece" element={<Sem6_ECE_HomePage />} />

//           {/* Sem6 ECE Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem6/ece/vedioplaylist" element={<Sem6_ece_VedioPlaylist />} />
//           <Route path="/sem6/ece/lecturenotes" element={<Sem6_ece_LectureNotes />} />
//           <Route path="/sem6/ece/previouspapers" element={<Sem6_ece_PreviousPapers />} />

//           {/* Sem6 IT Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem6/it/vedioplaylist" element={<Sem6_it_VedioPlaylist />} />
//           <Route path="/sem6/it/lecturenotes" element={<Sem6_it_LectureNotes />} />
//           <Route path="/sem6/it/previouspapers" element={<Sem6_it_PreviousPapers />} />

//           {/* Sem6 IT-BI Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem6/itbi/vedioplaylist" element={<Sem6_itbi_VedioPlaylist />} />
//           <Route path="/sem6/itbi/lecturenotes" element={<Sem6_itbi_LectureNotes />} />
//           <Route path="/sem6/itbi/previouspapers" element={<Sem6_itbi_PreviousPapers />} />

//           {/* Sem7 Department Routes */}
//           <Route path="/sem7/it" element={<Sem7_IT_HomePage />} />
//           <Route path="/sem7/itbi" element={<Sem7_ITBI_HomePage />} />
//           <Route path="/sem7/ece" element={<Sem7_ECE_HomePage />} />

//           {/* Sem7 ECE Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem7/ece/vedioplaylist" element={<Sem7_ece_VedioPlaylist />} />
//           <Route path="/sem7/ece/lecturenotes" element={<Sem7_ece_LectureNotes />} />
//           <Route path="/sem7/ece/previouspapers" element={<Sem7_ece_PreviousPapers />} />

//           {/* Sem7 IT Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem7/it/vedioplaylist" element={<Sem7_it_VedioPlaylist />} />
//           <Route path="/sem7/it/lecturenotes" element={<Sem7_it_LectureNotes />} />
//           <Route path="/sem7/it/previouspapers" element={<Sem7_it_PreviousPapers />} />

//           {/* Sem7 IT-BI Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem7/itbi/vedioplaylist" element={<Sem7_itbi_VedioPlaylist />} />
//           <Route path="/sem7/itbi/lecturenotes" element={<Sem7_itbi_LectureNotes />} />
//           <Route path="/sem7/itbi/previouspapers" element={<Sem7_itbi_PreviousPapers />} />

//           {/* Sem8 Department Routes */}
//           <Route path="/sem8/it" element={<Sem8_IT_HomePage />} />
//           <Route path="/sem8/itbi" element={<Sem8_ITBI_HomePage />} />
//           <Route path="/sem8/ece" element={<Sem8_ECE_HomePage />} />

//           {/* Sem8 ECE Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem8/ece/vedioplaylist" element={<Sem8_ece_VedioPlaylist />} />
//           <Route path="/sem8/ece/lecturenotes" element={<Sem8_ece_LectureNotes />} />
//           <Route path="/sem8/ece/previouspapers" element={<Sem8_ece_PreviousPapers />} />

//           {/* Sem8 IT Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem8/it/vedioplaylist" element={<Sem8_it_VedioPlaylist />} />
//           <Route path="/sem8/it/lecturenotes" element={<Sem8_it_LectureNotes />} />
//           <Route path="/sem8/it/previouspapers" element={<Sem8_it_PreviousPapers />} />

//           {/* Sem8 IT-BI Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem8/itbi/vedioplaylist" element={<Sem8_itbi_VedioPlaylist />} />
//           <Route path="/sem8/itbi/lecturenotes" element={<Sem8_itbi_LectureNotes />} />
//           <Route path="/sem8/itbi/previouspapers" element={<Sem8_itbi_PreviousPapers />} />

//           {/* Admin Routes */}
//           <Route path="/admin/login" element={<AdminLoginPage />} />
//           <Route path="/admin/otp-verification" element={<OTPVerification />} />
//           <Route path="/admin" element={<AdminHomePage />} />

//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>

//         {/* Landing page extra sections shown only at "/" */}
//         {location.pathname === "/" && (
//           <>
//             <div
//               id="amazing-feature"
//               className="w-full h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative"
//             >
//               <AmazingFeaturePage />
//             </div>
//             <div
//               id="choose-semester"
//               className="w-full h-screen bg-black flex items-center justify-center relative"
//             >
//               <ChooseSemesterPage />
//             </div>
//             <div
//               id="about"
//               className="w-full h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative"
//             >
//               <AboutPage />
//             </div>
//           </>
//         )}
//       </ProductProvider>
//       <Toaster />
//     </div>
//   );
// }

// export default App;





// src/App.jsx
// import React, { useEffect } from "react";
// import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import FloatingShape from "./components/FloatingShape";
// import Navbar from "./pages/Navbar";
// import HomePage from "./pages/HomePage";
// // import DashboardPage from "./pages/DashboardPage"; // Removed user dashboard

// import AboutPage from "./pages/AboutPage";
// import AmazingFeaturePage from "./pages/AmazingFeaturesPages";
// import ChooseSemesterPage from "./pages/ChooseSemesterPage";
// import LoadingSpinner from "./components/LoadingSpinner";
// import { Toaster } from "react-hot-toast";

// // --- Semester and Other Routes (unchanged) ---
// // Sem1 Pages
// import Sem1Page from "./pages/Sem1/Sem1Page";
// import Sem1_Vedio from "./pages/Sem1/Sem1_vedio_playlist/Sem1_Vedio";
// import EngineeringPhysics from "./pages/Sem1/Sem1_vedio_playlist/EngineeringPhysics";
// import FundamentalElectrical from "./pages/Sem1/Sem1_vedio_playlist/FundamentalElectrical";
// import LinearAlgebra from "./pages/Sem1/Sem1_vedio_playlist/LinearAlgebra";
// import ProblemSolving from "./pages/Sem1/Sem1_vedio_playlist/ProblemSolving";
// import TechnicalCommunication from "./pages/Sem1/Sem1_vedio_playlist/TechnicalCommunication";
// import ProfessionalEthics from "./pages/Sem1/Sem1_vedio_playlist/ProfessionalEthics";
// import Sem1_LectureNotes from "./pages/Sem1/Sem1_LecurePlaylist/Sem1_LectureNotes";
// import Sem1_PreviousYearPaper from "./pages/Sem1/Sem1_PreviousYearPaper/Sem1_PreviousYearPaper";

// // Sem2 Pages
// import Sem2_HomePage from "./pages/Sem2/Sem2_HomePage";
// import Sem2_IT_HomePage from "./pages/Sem2/IT/Sem2_IT_Homepage";
// import Sem2_ITBI_HomePage from "./pages/Sem2/IT_BI/Sem2_ITBI_Homepage";
// import Sem2_ECE_HomePage from "./pages/Sem2/ECE/Sem2_ECE_Homepage";
// import Sem2_ece_VedioPlaylist from "./pages/Sem2/ECE/Sem2_ece_VedioPlaylist/Sem2_ece_Vedio.jsx";
// import Sem2_ece_LectureNotes from "./pages/Sem2/ECE/Sem2_ece_LectureNotes/Sem2_ece_LectureNotes.jsx";
// import Sem2_ece_PreviousPapers from "./pages/Sem2/ECE/Sem2_ece_PreviousYearPapers/Sem2_ece_PreviousPapers.jsx";
// import Sem2_it_VedioPlaylist from "./pages/Sem2/IT/Sem2_it_VedioPlaylist/Sem2_it_Vedio.jsx";
// import Sem2_it_LectureNotes from "./pages/Sem2/IT/Sem2_it_LectureNotes/Sem2_it_LectureNotes.jsx";
// import Sem2_it_PreviousPapers from "./pages/Sem2/IT/Sem2_it_PreviousYearPapers/Sem2_it_PreviousPapers.jsx";
// import Sem2_itbi_VedioPlaylist from "./pages/Sem2/IT_BI/Sem2_itbi_VedioPlaylist/Sem2_itbi_Vedio.jsx";
// import Sem2_itbi_LectureNotes from "./pages/Sem2/IT_BI/Sem2_itbi_LectureNotes/Sem2_itbi_LectureNotes.jsx";
// import Sem2_itbi_PreviousPapers from "./pages/Sem2/IT_BI/Sem2_itbi_PreviousYearPapers/Sem2_itbi_PreviousPapers.jsx";

// // Sem3 Pages
// import Sem3_HomePage from "./pages/Sem3/Sem3_HomePage";
// import Sem3_IT_HomePage from "./pages/Sem3/IT/Sem3_IT_Homepage";
// import Sem3_ITBI_HomePage from "./pages/Sem3/IT_BI/Sem3_ITBI_Homepage";
// import Sem3_ECE_HomePage from "./pages/Sem3/ECE/Sem3_ECE_Homepage";
// import Sem3_ece_VedioPlaylist from "./pages/Sem3/ECE/Sem3_ece_VedioPlaylist/Sem3_ece_Vedio.jsx";
// import Sem3_ece_LectureNotes from "./pages/Sem3/ECE/Sem3_ece_LectureNotes/Sem3_ece_LectureNotes.jsx";
// import Sem3_ece_PreviousPapers from "./pages/Sem3/ECE/Sem3_ece_PreviousYearPapers/Sem3_ece_PreviousPapers.jsx";
// import Sem3_it_VedioPlaylist from "./pages/Sem3/IT/Sem3_it_VedioPlaylist/Sem3_it_Vedio.jsx";
// import Sem3_it_LectureNotes from "./pages/Sem3/IT/Sem3_it_LectureNotes/Sem3_it_LectureNotes.jsx";
// import Sem3_it_PreviousPapers from "./pages/Sem3/IT/Sem3_it_PreviousYearPapers/Sem3_it_PreviousPapers.jsx";
// import Sem3_itbi_VedioPlaylist from "./pages/Sem3/IT_BI/Sem3_itbi_VedioPlaylist/Sem3_itbi_Vedio.jsx";
// import Sem3_itbi_LectureNotes from "./pages/Sem3/IT_BI/Sem3_itbi_LectureNotes/Sem3_itbi_LectureNotes.jsx";
// import Sem3_itbi_PreviousPapers from "./pages/Sem3/IT_BI/Sem3_itbi_PreviousYearPapers/Sem3_itbi_PreviousPapers.jsx";

// // Sem4 Pages
// import Sem4_HomePage from "./pages/Sem4/Sem4_HomePage";
// import Sem4_IT_HomePage from "./pages/Sem4/IT/Sem4_IT_Homepage";
// import Sem4_ITBI_HomePage from "./pages/Sem4/IT_BI/Sem4_ITBI_Homepage";
// import Sem4_ECE_HomePage from "./pages/Sem4/ECE/Sem4_ECE_Homepage";
// import Sem4_ece_VedioPlaylist from "./pages/Sem4/ECE/Sem4_ece_VedioPlaylist/Sem4_ece_Vedio.jsx";
// import Sem4_ece_LectureNotes from "./pages/Sem4/ECE/Sem4_ece_LectureNotes/Sem4_ece_LectureNotes.jsx";
// import Sem4_ece_PreviousPapers from "./pages/Sem4/ECE/Sem4_ece_PreviousYearPapers/Sem4_ece_PreviousPapers.jsx";
// import Sem4_it_VedioPlaylist from "./pages/Sem4/IT/Sem4_it_VedioPlaylist/Sem4_it_Vedio.jsx";
// import Sem4_it_LectureNotes from "./pages/Sem4/IT/Sem4_it_LectureNotes/Sem4_it_LectureNotes.jsx";
// import Sem4_it_PreviousPapers from "./pages/Sem4/IT/Sem4_it_PreviousYearPapers/Sem4_it_PreviousPapers.jsx";
// import Sem4_itbi_VedioPlaylist from "./pages/Sem4/IT_BI/Sem4_itbi_VedioPlaylist/Sem4_itbi_Vedio.jsx";
// import Sem4_itbi_LectureNotes from "./pages/Sem4/IT_BI/Sem4_itbi_LectureNotes/Sem4_itbi_LectureNotes.jsx";
// import Sem4_itbi_PreviousPapers from "./pages/Sem4/IT_BI/Sem4_itbi_PreviousYearPapers/Sem4_itbi_PreviousPapers.jsx";

// // Sem5 Pages
// import Sem5_HomePage from "./pages/Sem5/Sem5_HomePage";
// import Sem5_IT_HomePage from "./pages/Sem5/IT/Sem5_IT_Homepage";
// import Sem5_ITBI_HomePage from "./pages/Sem5/IT_BI/Sem5_ITBI_Homepage";
// import Sem5_ECE_HomePage from "./pages/Sem5/ECE/Sem5_ECE_Homepage";
// import Sem5_ece_VedioPlaylist from "./pages/Sem5/ECE/Sem5_ece_VedioPlaylist/Sem5_ece_Vedio.jsx";
// import Sem5_ece_LectureNotes from "./pages/Sem5/ECE/Sem5_ece_LectureNotes/Sem5_ece_LectureNotes.jsx";
// import Sem5_ece_PreviousPapers from "./pages/Sem5/ECE/Sem5_ece_PreviousYearPapers/Sem5_ece_PreviousPapers.jsx";
// import Sem5_it_VedioPlaylist from "./pages/Sem5/IT/Sem5_it_VedioPlaylist/Sem5_it_Vedio.jsx";
// import Sem5_it_LectureNotes from "./pages/Sem5/IT/Sem5_it_LectureNotes/Sem5_it_LectureNotes.jsx";
// import Sem5_it_PreviousPapers from "./pages/Sem5/IT/Sem5_it_PreviousYearPapers/Sem5_it_PreviousPapers.jsx";
// import Sem5_itbi_VedioPlaylist from "./pages/Sem5/IT_BI/Sem5_itbi_VedioPlaylist/Sem5_itbi_Vedio.jsx";
// import Sem5_itbi_LectureNotes from "./pages/Sem5/IT_BI/Sem5_itbi_LectureNotes/Sem5_itbi_LectureNotes.jsx";
// import Sem5_itbi_PreviousPapers from "./pages/Sem5/IT_BI/Sem5_itbi_PreviousYearPapers/Sem5_itbi_PreviousPapers.jsx";

// // Sem6 Pages
// import Sem6_HomePage from "./pages/Sem6/Sem6_HomePage";
// import Sem6_IT_HomePage from "./pages/Sem6/IT/Sem6_IT_Homepage";
// import Sem6_ITBI_HomePage from "./pages/Sem6/IT_BI/Sem6_ITBI_Homepage";
// import Sem6_ECE_HomePage from "./pages/Sem6/ECE/Sem6_ECE_Homepage";
// import Sem6_ece_VedioPlaylist from "./pages/Sem6/ECE/Sem6_ece_VedioPlaylist/Sem6_ece_Vedio.jsx";
// import Sem6_ece_LectureNotes from "./pages/Sem6/ECE/Sem6_ece_LectureNotes/Sem6_ece_LectureNotes.jsx";
// import Sem6_ece_PreviousPapers from "./pages/Sem6/ECE/Sem6_ece_PreviousYearPapers/Sem6_ece_PreviousPapers.jsx";
// import Sem6_it_VedioPlaylist from "./pages/Sem6/IT/Sem6_it_VedioPlaylist/Sem6_it_Vedio.jsx";
// import Sem6_it_LectureNotes from "./pages/Sem6/IT/Sem6_it_LectureNotes/Sem6_it_LectureNotes.jsx";
// import Sem6_it_PreviousPapers from "./pages/Sem6/IT/Sem6_it_PreviousYearPapers/Sem6_it_PreviousPapers.jsx";
// import Sem6_itbi_VedioPlaylist from "./pages/Sem6/IT_BI/Sem6_itbi_VedioPlaylist/Sem6_itbi_Vedio.jsx";
// import Sem6_itbi_LectureNotes from "./pages/Sem6/IT_BI/Sem6_itbi_LectureNotes/Sem6_itbi_LectureNotes.jsx";
// import Sem6_itbi_PreviousPapers from "./pages/Sem6/IT_BI/Sem6_itbi_PreviousYearPapers/Sem6_itbi_PreviousPapers.jsx";

// // Sem7 Pages
// import Sem7_HomePage from "./pages/Sem7/Sem7_HomePage";
// import Sem7_IT_HomePage from "./pages/Sem7/IT/Sem7_IT_Homepage";
// import Sem7_ITBI_HomePage from "./pages/Sem7/IT_BI/Sem7_ITBI_Homepage";
// import Sem7_ECE_HomePage from "./pages/Sem7/ECE/Sem7_ECE_Homepage";
// import Sem7_ece_VedioPlaylist from "./pages/Sem7/ECE/Sem7_ece_VedioPlaylist/Sem7_ece_Vedio.jsx";
// import Sem7_ece_LectureNotes from "./pages/Sem7/ECE/Sem7_ece_LectureNotes/Sem7_ece_LectureNotes.jsx";
// import Sem7_ece_PreviousPapers from "./pages/Sem7/ECE/Sem7_ece_PreviousYearPapers/Sem7_ece_PreviousPapers.jsx";
// import Sem7_it_VedioPlaylist from "./pages/Sem7/IT/Sem7_it_VedioPlaylist/Sem7_it_Vedio.jsx";
// import Sem7_it_LectureNotes from "./pages/Sem7/IT/Sem7_it_LectureNotes/Sem7_it_LectureNotes.jsx";
// import Sem7_it_PreviousPapers from "./pages/Sem7/IT/Sem7_it_PreviousYearPapers/Sem7_it_PreviousPapers.jsx";
// import Sem7_itbi_VedioPlaylist from "./pages/Sem7/IT_BI/Sem7_itbi_VedioPlaylist/Sem7_itbi_Vedio.jsx";
// import Sem7_itbi_LectureNotes from "./pages/Sem7/IT_BI/Sem7_itbi_LectureNotes/Sem7_itbi_LectureNotes.jsx";
// import Sem7_itbi_PreviousPapers from "./pages/Sem7/IT_BI/Sem7_itbi_PreviousYearPapers/Sem7_itbi_PreviousPapers.jsx";

// // Sem8 Pages
// import Sem8_HomePage from "./pages/Sem8/Sem8_HomePage";
// import Sem8_IT_HomePage from "./pages/Sem8/IT/Sem8_IT_Homepage";
// import Sem8_ITBI_HomePage from "./pages/Sem8/IT_BI/Sem8_ITBI_Homepage";
// import Sem8_ECE_HomePage from "./pages/Sem8/ECE/Sem8_ECE_Homepage";
// import Sem8_ece_VedioPlaylist from "./pages/Sem8/ECE/Sem8_ece_VedioPlaylist/Sem8_ece_Vedio.jsx";
// import Sem8_ece_LectureNotes from "./pages/Sem8/ECE/Sem8_ece_LectureNotes/Sem8_ece_LectureNotes.jsx";
// import Sem8_ece_PreviousPapers from "./pages/Sem8/ECE/Sem8_ece_PreviousYearPapers/Sem8_ece_PreviousPapers.jsx";
// import Sem8_it_VedioPlaylist from "./pages/Sem8/IT/Sem8_it_VedioPlaylist/Sem8_it_Vedio.jsx";
// import Sem8_it_LectureNotes from "./pages/Sem8/IT/Sem8_it_LectureNotes/Sem8_it_LectureNotes.jsx";
// import Sem8_it_PreviousPapers from "./pages/Sem8/IT/Sem8_it_PreviousYearPapers/Sem8_it_PreviousPapers.jsx";
// import Sem8_itbi_VedioPlaylist from "./pages/Sem8/IT_BI/Sem8_itbi_VedioPlaylist/Sem8_itbi_Vedio.jsx";
// import Sem8_itbi_LectureNotes from "./pages/Sem8/IT_BI/Sem8_itbi_LectureNotes/Sem8_itbi_LectureNotes.jsx";
// import Sem8_itbi_PreviousPapers from "./pages/Sem8/IT_BI/Sem8_itbi_PreviousYearPapers/Sem8_itbi_PreviousPapers.jsx";

// // --- Admin Pages ---
// import AdminHomePage from "./pages/AdminHomePage";
// import AdminLoginPage from "./pages/AdminLoginPage";
// import OTPVerification from "./pages/OTPVerification";
// import ForgotPassword from "./pages/ForgotPassword";

// // --- Protect wrappers (if needed elsewhere) ---
// // They have been retained here in case you use them for other routes.
// // (You can safely remove them if no longer needed.)
// const ProtectedRoute = ({ children }) => {
//   return children;
// };

// const RedirectAuthenticatedUser = ({ children }) => {
//   return children;
// };

// function App() {
//   // Removed useAuthStore logic as user routes are eliminated.
//   useEffect(() => {
//     // Any auth-check logic (if needed) can go here.
//   }, []);

//   const location = useLocation();

//   // Hide the navbar on specific routes.
//   const renderNavbar = () => {
//     if (
//       location.pathname.match(
//         /^\/(sem1|sem2|sem3|sem4|sem5|sem6|sem7|sem8)(_home)?(\/|$)/
//       ) ||
//       location.pathname === "/listed-products" ||
//       location.pathname.startsWith("/admin")
//     ) {
//       return null;
//     }
//     if (
//       location.pathname !== "/signup" &&
//       location.pathname !== "/login" &&
//       location.pathname !== "/forgot-password" &&
//       !location.pathname.startsWith("/reset-password/")
//     ) {
//       return <Navbar />;
//     }
//     return null;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex flex-col items-center relative overflow-hidden">
//       {renderNavbar()}

//       <FloatingShape color="bg-green-500" size="w-64 h-64" top="-5%" left="10%" delay={0} />
//       <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%" delay={5} />
//       <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="-10%" delay={2} />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/amazing-feature" element={<AmazingFeaturePage />} />
//         <Route path="/choose-semester" element={<ChooseSemesterPage />} />
//         <Route path="/techtitanium-team" element={<Navigate to="/techtitanium-team" replace />} />

// {/* Sem1 Routes */}
// <Route path="/sem1" element={<Sem1Page />} />
// <Route path="/video-lecture" element={<Sem1_Vedio />} />
// <Route path="/sem1/engineering-physics" element={<EngineeringPhysics />} />
// <Route path="/sem1/fundamental-electrical" element={<FundamentalElectrical />} />
// <Route path="/sem1/linear-algebra" element={<LinearAlgebra />} />
// <Route path="/sem1/problem-solving" element={<ProblemSolving />} />
// <Route path="/sem1/technical-communication" element={<TechnicalCommunication />} />
// <Route path="/sem1/professional-ethics" element={<ProfessionalEthics />} />
// <Route path="/study-material" element={<Sem1_LectureNotes />} />
// <Route path="/previous-year-paper" element={<Sem1_PreviousYearPaper />} />

//         {/* Sem2 Routes */}
//         <Route path="/sem2_home" element={<Sem2_HomePage />} />
//         <Route path="/sem2/it" element={<Sem2_IT_HomePage />} />
//         <Route path="/sem2/itbi" element={<Sem2_ITBI_HomePage />} />
//         <Route path="/sem2/ece" element={<Sem2_ECE_HomePage />} />
//         <Route path="/sem2/ece/vedioplaylist" element={<Sem2_ece_VedioPlaylist />} />
//         <Route path="/sem2/ece/lecturenotes" element={<Sem2_ece_LectureNotes />} />
//         <Route path="/sem2/ece/previouspapers" element={<Sem2_ece_PreviousPapers />} />
//         <Route path="/sem2/it/vedioplaylist" element={<Sem2_it_VedioPlaylist />} />
//         <Route path="/sem2/it/lecturenotes" element={<Sem2_it_LectureNotes />} />
//         <Route path="/sem2/it/previouspapers" element={<Sem2_it_PreviousPapers />} />
//         <Route path="/sem2/itbi/vedioplaylist" element={<Sem2_itbi_VedioPlaylist />} />
//         <Route path="/sem2/itbi/lecturenotes" element={<Sem2_itbi_LectureNotes />} />
//         <Route path="/sem2/itbi/previouspapers" element={<Sem2_itbi_PreviousPapers />} />

//         {/* Sem3 Routes */}
//         <Route path="/sem3_home" element={<Sem3_HomePage />} />
//         <Route path="/sem3/it" element={<Sem3_IT_HomePage />} />
//         <Route path="/sem3/itbi" element={<Sem3_ITBI_HomePage />} />
//         <Route path="/sem3/ece" element={<Sem3_ECE_HomePage />} />
//         <Route path="/sem3/ece/vedioplaylist" element={<Sem3_ece_VedioPlaylist />} />
//         <Route path="/sem3/ece/lecturenotes" element={<Sem3_ece_LectureNotes />} />
//         <Route path="/sem3/ece/previouspapers" element={<Sem3_ece_PreviousPapers />} />
//         <Route path="/sem3/it/vedioplaylist" element={<Sem3_it_VedioPlaylist />} />
//         <Route path="/sem3/it/lecturenotes" element={<Sem3_it_LectureNotes />} />
//         <Route path="/sem3/it/previouspapers" element={<Sem3_it_PreviousPapers />} />
//         <Route path="/sem3/itbi/vedioplaylist" element={<Sem3_itbi_VedioPlaylist />} />
//         <Route path="/sem3/itbi/lecturenotes" element={<Sem3_itbi_LectureNotes />} />
//         <Route path="/sem3/itbi/previouspapers" element={<Sem3_itbi_PreviousPapers />} />

//         {/* Sem4 Routes */}
//         <Route path="/sem4_home" element={<Sem4_HomePage />} />
//         <Route path="/sem4/it" element={<Sem4_IT_HomePage />} />
//         <Route path="/sem4/itbi" element={<Sem4_ITBI_HomePage />} />
//         <Route path="/sem4/ece" element={<Sem4_ECE_HomePage />} />
//         <Route path="/sem4/ece/vedioplaylist" element={<Sem4_ece_VedioPlaylist />} />
//         <Route path="/sem4/ece/lecturenotes" element={<Sem4_ece_LectureNotes />} />
//         <Route path="/sem4/ece/previouspapers" element={<Sem4_ece_PreviousPapers />} />
//         <Route path="/sem4/it/vedioplaylist" element={<Sem4_it_VedioPlaylist />} />
//         <Route path="/sem4/it/lecturenotes" element={<Sem4_it_LectureNotes />} />
//         <Route path="/sem4/it/previouspapers" element={<Sem4_it_PreviousPapers />} />
//         <Route path="/sem4/itbi/vedioplaylist" element={<Sem4_itbi_VedioPlaylist />} />
//         <Route path="/sem4/itbi/lecturenotes" element={<Sem4_itbi_LectureNotes />} />
//         <Route path="/sem4/itbi/previouspapers" element={<Sem4_itbi_PreviousPapers />} />

//         {/* Sem5 Routes */}
//         <Route path="/sem5_home" element={<Sem5_HomePage />} />
//         <Route path="/sem5/it" element={<Sem5_IT_HomePage />} />
//         <Route path="/sem5/itbi" element={<Sem5_ITBI_HomePage />} />
//         <Route path="/sem5/ece" element={<Sem5_ECE_HomePage />} />
//         <Route path="/sem5/ece/vedioplaylist" element={<Sem5_ece_VedioPlaylist />} />
//         <Route path="/sem5/ece/lecturenotes" element={<Sem5_ece_LectureNotes />} />
//         <Route path="/sem5/ece/previouspapers" element={<Sem5_ece_PreviousPapers />} />
//         <Route path="/sem5/it/vedioplaylist" element={<Sem5_it_VedioPlaylist />} />
//         <Route path="/sem5/it/lecturenotes" element={<Sem5_it_LectureNotes />} />
//         <Route path="/sem5/it/previouspapers" element={<Sem5_it_PreviousPapers />} />
//         <Route path="/sem5/itbi/vedioplaylist" element={<Sem5_itbi_VedioPlaylist />} />
//         <Route path="/sem5/itbi/lecturenotes" element={<Sem5_itbi_LectureNotes />} />
//         <Route path="/sem5/itbi/previouspapers" element={<Sem5_itbi_PreviousPapers />} />

//         {/* Sem6 Routes */}
//         <Route path="/sem6_home" element={<Sem6_HomePage />} />
//         <Route path="/sem6/it" element={<Sem6_IT_HomePage />} />
//         <Route path="/sem6/itbi" element={<Sem6_ITBI_HomePage />} />
//         <Route path="/sem6/ece" element={<Sem6_ECE_HomePage />} />
//         <Route path="/sem6/ece/vedioplaylist" element={<Sem6_ece_VedioPlaylist />} />
//         <Route path="/sem6/ece/lecturenotes" element={<Sem6_ece_LectureNotes />} />
//         <Route path="/sem6/ece/previouspapers" element={<Sem6_ece_PreviousPapers />} />
//         <Route path="/sem6/it/vedioplaylist" element={<Sem6_it_VedioPlaylist />} />
//         <Route path="/sem6/it/lecturenotes" element={<Sem6_it_LectureNotes />} />
//         <Route path="/sem6/it/previouspapers" element={<Sem6_it_PreviousPapers />} />
//         <Route path="/sem6/itbi/vedioplaylist" element={<Sem6_itbi_VedioPlaylist />} />
//         <Route path="/sem6/itbi/lecturenotes" element={<Sem6_itbi_LectureNotes />} />
//         <Route path="/sem6/itbi/previouspapers" element={<Sem6_itbi_PreviousPapers />} />

//         {/* Sem7 Routes */}
//         <Route path="/sem7_home" element={<Sem7_HomePage />} />
//         <Route path="/sem7/it" element={<Sem7_IT_HomePage />} />
//         <Route path="/sem7/itbi" element={<Sem7_ITBI_HomePage />} />
//         <Route path="/sem7/ece" element={<Sem7_ECE_HomePage />} />
//         <Route path="/sem7/ece/vedioplaylist" element={<Sem7_ece_VedioPlaylist />} />
//         <Route path="/sem7/ece/lecturenotes" element={<Sem7_ece_LectureNotes />} />
//         <Route path="/sem7/ece/previouspapers" element={<Sem7_ece_PreviousPapers />} />
//         <Route path="/sem7/it/vedioplaylist" element={<Sem7_it_VedioPlaylist />} />
//         <Route path="/sem7/it/lecturenotes" element={<Sem7_it_LectureNotes />} />
//         <Route path="/sem7/it/previouspapers" element={<Sem7_it_PreviousPapers />} />
//         <Route path="/sem7/itbi/vedioplaylist" element={<Sem7_itbi_VedioPlaylist />} />
//         <Route path="/sem7/itbi/lecturenotes" element={<Sem7_itbi_LectureNotes />} />
//         <Route path="/sem7/itbi/previouspapers" element={<Sem7_itbi_PreviousPapers />} />

//         {/* Sem8 Routes */}
//         <Route path="/sem8_home" element={<Sem8_HomePage />} />
//         <Route path="/sem8/it" element={<Sem8_IT_HomePage />} />
//         <Route path="/sem8/itbi" element={<Sem8_ITBI_HomePage />} />
//         <Route path="/sem8/ece" element={<Sem8_ECE_HomePage />} />
//         <Route path="/sem8/ece/vedioplaylist" element={<Sem8_ece_VedioPlaylist />} />
//         <Route path="/sem8/ece/lecturenotes" element={<Sem8_ece_LectureNotes />} />
//         <Route path="/sem8/ece/previouspapers" element={<Sem8_ece_PreviousPapers />} />
//         <Route path="/sem8/it/vedioplaylist" element={<Sem8_it_VedioPlaylist />} />
//         <Route path="/sem8/it/lecturenotes" element={<Sem8_it_LectureNotes />} />
//         <Route path="/sem8/it/previouspapers" element={<Sem8_it_PreviousPapers />} />
//         <Route path="/sem8/itbi/vedioplaylist" element={<Sem8_itbi_VedioPlaylist />} />
//         <Route path="/sem8/itbi/lecturenotes" element={<Sem8_itbi_LectureNotes />} />
//         <Route path="/sem8/itbi/previouspapers" element={<Sem8_itbi_PreviousPapers />} />

//         {/* Admin Routes */}
//         <Route path="/admin/login" element={<AdminLoginPage />} />
//         <Route path="/admin/otp-verification" element={<OTPVerification />} />
//         <Route path="/admin" element={<AdminHomePage />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="*" element={<Navigate to="/admin/login" replace />} />
//       </Routes>

//       {/* Landing page extra sections shown only at "/" */}
//       {location.pathname === "/" && (
//         <>
//           <div
//             id="amazing-feature"
//             className="w-full h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative"
//           >
//             <AmazingFeaturePage />
//           </div>
//           <div
//             id="choose-semester"
//             className="w-full h-screen bg-black flex items-center justify-center relative"
//           >
//             <ChooseSemesterPage />
//           </div>
//           <div
//             id="about"
//             className="w-full h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative"
//           >
//             <AboutPage />
//           </div>
//         </>
//       )}
//       <Toaster />
//     </div>
//   );
// }

// export default App;


// src/App.jsx
// src/App.jsx
// src/App.jsx
// src/App.jsx
// import React from 'react';
// import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';

// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';

// import Navbar from './pages/Navbar';
// import FloatingShape from './components/FloatingShape';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import AmazingFeaturePage from './pages/AmazingFeaturesPages';
// import ChooseSemesterPage from './pages/ChooseSemesterPage';
// import Sem1Page from './pages/Sem1/Sem1Page';
// // … other semester imports …

// import AdminLoginPage from './pages/AdminLoginPage';
// import OTPVerification from './pages/OTPVerification';
// import CreateAdmin from './pages/CreateAdmin';
// import ForgotPassword from './pages/ForgotPassword';
// import AdminHomePage from './pages/AdminHomePage';

// function AppContent() {
//   const { pathname } = useLocation();

//   const isAuthLayout =
//     ['/admin/login', '/admin/otp-verification', '/create-admin', '/forgot-password', '/adminhome']
//       .includes(pathname); // ← include /adminhome here

//   const hideNav =
//     isAuthLayout ||
//     pathname.startsWith('/sem') ||
//     pathname.startsWith('/adminhome');

//   return (
//     <div
//       className={
//         isAuthLayout
//           ? 'h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900'
//           : 'min-h-screen flex flex-col items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900'
//       }
//     >
//       {!hideNav && <Navbar />}

//       {!isAuthLayout && !pathname.startsWith('/adminhome') && (
//         <>
//           <FloatingShape color="bg-green-500" size="w-64 h-64" top="-5%" left="10%" delay={0} />
//           <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%" delay={5} />
//           <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="-10%" delay={2} />
//         </>
//       )}

//       <Routes>
//         {/* Public */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/amazing-feature" element={<AmazingFeaturePage />} />
//         <Route path="/choose-semester" element={<ChooseSemesterPage />} />
//         <Route path="/sem1" element={<Sem1Page />} />
//         {/* … other semesters … */}

//         {/* Auth */}
//         <Route path="/admin/login" element={<AdminLoginPage />} />
//         <Route path="/admin/otp-verification" element={<OTPVerification />} />
//         <Route path="/create-admin" element={<CreateAdmin />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />

//         {/* Protected */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/adminhome" element={<AdminHomePage />} />
//           {/* … any other /adminhome/* … */}
//         </Route>

//         {/* Fallback */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>

//       <Toaster position="bottom-right" />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       {/* <BrowserRouter> is only in main.jsx now */}
//       <AppContent />
//     </AuthProvider>
//   );
// }


// chagnlk

// import React from 'react';
// import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';

// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';

// import Navbar from './pages/Navbar';
// import FloatingShape from './components/FloatingShape';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import AmazingFeaturePage from './pages/AmazingFeaturesPages';
// import ChooseSemesterPage from './pages/ChooseSemesterPage';

// // … other semester imports …



// // Import Sem1 Pages
// import Sem1Page from "./pages/Sem1/Sem1Page";

// // Import Sem1 Video & Subject Pages
// import Sem1_Vedio from "./pages/Sem1/Sem1_vedio_playlist/Sem1_Vedio";
// import EngineeringPhysics from "./pages/Sem1/Sem1_vedio_playlist/EngineeringPhysics";
// import FundamentalElectrical from "./pages/Sem1/Sem1_vedio_playlist/FundamentalElectrical";
// import LinearAlgebra from "./pages/Sem1/Sem1_vedio_playlist/LinearAlgebra";
// import ProblemSolving from "./pages/Sem1/Sem1_vedio_playlist/ProblemSolving";
// import TechnicalCommunication from "./pages/Sem1/Sem1_vedio_playlist/TechnicalCommunication";
// import ProfessionalEthics from "./pages/Sem1/Sem1_vedio_playlist/ProfessionalEthics";


// // Import new Sem1 Lecture Notes and Previous Year Papers Pages
// import Sem1_LectureNotes from "./pages/Sem1/Sem1_LecurePlaylist/Sem1_LectureNotes";
// import Sem1_PreviousYearPaper from "./pages/Sem1/Sem1_PreviousYearPaper/Sem1_PreviousYearPaper";

// import EngineeringPhysicsPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/EngineeringPhysicsPaperPage";
// import FundamentalElectricalPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/FundamentalElectricalPaperPage";
// import LinearAlgebraPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/LinearAlgebraPaperPage";
// import ProblemSolvingPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/ProblemSolvingPaperPage";
// import TechnicalCommunicationPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/TechnicalCommunicationPaperPage";
// import ProfessionalEthicsPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/ProfessionalEthicsPaperPage";

// import AdminLoginPage from './pages/AdminLoginPage';
// import OTPVerification from './pages/OTPVerification';
// import CreateAdmin from './pages/CreateAdmin';
// import ForgotPassword from './pages/ForgotPassword';
// import AdminHomePage from './pages/AdminHomePage';
// import MainAdminHomePage from './pages/MainAdminHomePage';

// function AppContent() {
//   const { pathname } = useLocation();

//   const isAuthLayout = [
//     '/admin/login',
//     '/admin/otp-verification',
//     '/create-admin',
//     '/forgot-password',
//     '/adminhome',
//     '/main-admin-home'
//   ].includes(pathname);

//   const hideNav =
//     isAuthLayout ||
//     pathname.startsWith('/sem') ||
//     pathname.startsWith('/adminhome') ||
//     pathname.startsWith('/main-admin-home');

//   return (
//     <div
//       className={
//         isAuthLayout
//           ? 'h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900'
//           : 'min-h-screen flex flex-col items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900'
//       }
//     >
//       {!hideNav && <Navbar />}

//       {!isAuthLayout && !pathname.startsWith('/adminhome') && !pathname.startsWith('/main-admin-home') && (
//         <>
//           <FloatingShape color="bg-green-500" size="w-64 h-64" top="-5%" left="10%" delay={0} />
//           <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%" delay={5} />
//           <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="-10%" delay={2} />
//         </>
//       )}

//       <Routes>
//         {/* Public */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/amazing-feature" element={<AmazingFeaturePage />} />
//         <Route path="/choose-semester" element={<ChooseSemesterPage />} />
//         <Route path="/sem1" element={<Sem1Page />} />
//         {/* … other semesters … */}


//                 {/* Sem1 Routes */}
//         <Route path="/sem1" element={<Sem1Page />} />
//         <Route path="/video-lecture" element={<Sem1_Vedio />} />
//         <Route path="/sem1/engineering-physics" element={<EngineeringPhysics />} />
//         <Route path="/sem1/fundamental-electrical" element={<FundamentalElectrical />} />
//         <Route path="/sem1/linear-algebra" element={<LinearAlgebra />} />
//         <Route path="/sem1/problem-solving" element={<ProblemSolving />} />
//         <Route path="/sem1/technical-communication" element={<TechnicalCommunication />} />
//         <Route path="/sem1/professional-ethics" element={<ProfessionalEthics />} />
//         <Route path="/study-material" element={<Sem1_LectureNotes />} />
//         <Route path="/previous-year-paper" element={<Sem1_PreviousYearPaper />} />





//         <Route path="/" element={<Sem1_PreviousYearPaper />} />
//         <Route path="/sem1/engineering-physics-paper" element={<EngineeringPhysicsPaperPage />} />
//         <Route path="/sem1/fundamental-electrical-paper" element={<FundamentalElectricalPaperPage />} />
//         <Route path="/sem1/linear-algebra-paper" element={<LinearAlgebraPaperPage />} />
//         <Route path="/sem1/problem-solving-paper" element={<ProblemSolvingPaperPage />} />
//         <Route path="/sem1/technical-communication-paper" element={<TechnicalCommunicationPaperPage />} />
//         <Route path="/sem1/professional-ethics-paper" element={<ProfessionalEthicsPaperPage />} />


//         {/* Auth */}
//         <Route path="/admin/login" element={<AdminLoginPage />} />
//         <Route path="/admin/otp-verification" element={<OTPVerification />} />
//         <Route path="/create-admin" element={<CreateAdmin />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />

//         {/* Protected: other admins */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/adminhome" element={<AdminHomePage />} />
//         </Route>

//         {/* Protected: main admin */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/main-admin-home" element={<MainAdminHomePage />} />
//         </Route>

//         {/* Fallback */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>

//       <Toaster position="bottom-right" />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <AppContent />
//     </AuthProvider>
//   );
// }



//  upload changes


// App.jsx
// import React from 'react';
// import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';

// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';

// import Navbar from './pages/Navbar';
// import FloatingShape from './components/FloatingShape';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import AmazingFeaturePage from './pages/AmazingFeaturesPages';
// import ChooseSemesterPage from './pages/ChooseSemesterPage';

// // … other semester imports …

// // Import Sem1 Pages
// import Sem1Page from "./pages/Sem1/Sem1Page";

// // Import Sem1 Video & Subject Pages
// import Sem1_Vedio from "./pages/Sem1/Sem1_vedio_playlist/Sem1_Vedio";
// import EngineeringPhysics from "./pages/Sem1/Sem1_vedio_playlist/EngineeringPhysics";
// import FundamentalElectrical from "./pages/Sem1/Sem1_vedio_playlist/FundamentalElectrical";
// import LinearAlgebra from "./pages/Sem1/Sem1_vedio_playlist/LinearAlgebra";
// import ProblemSolving from "./pages/Sem1/Sem1_vedio_playlist/ProblemSolving";
// import TechnicalCommunication from "./pages/Sem1/Sem1_vedio_playlist/TechnicalCommunication";
// import ProfessionalEthics from "./pages/Sem1/Sem1_vedio_playlist/ProfessionalEthics";

// // Import new Sem1 Lecture Notes and Previous Year Papers Pages
// import Sem1_LectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/Sem1_LectureNotes";
// import Sem1_PreviousYearPaper from "./pages/Sem1/Sem1_PreviousYearPaper/Sem1_PreviousYearPaper";

// import EngineeringPhysicsPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/EngineeringPhysicsPaperPage";
// import FundamentalElectricalPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/FundamentalElectricalPaperPage";
// import LinearAlgebraPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/LinearAlgebraPaperPage";
// import ProblemSolvingPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/ProblemSolvingPaperPage";
// import TechnicalCommunicationPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/TechnicalCommunicationPaperPage";
// import ProfessionalEthicsPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/ProfessionalEthicsPaperPage";


// // lecture notes for sem 1


// import EngineeringPhysicsLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/EngineeringPhysicsLectureNotes";
// import FundamentalElectricalLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/FundamentalElectricalLectureNotes";
// import LinearAlgebraLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/LinearAlgebraLectureNotes";
// import ProblemSolvingLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/ProblemSolvingLectureNotes";
// import TechnicalCommunicationLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/TechnicalCommunicationLectureNotes";
// import ProfessionalEthicsLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/ProfessionalEthicsLectureNotes";

// import AdminLoginPage from './pages/AdminLoginPage';
// import OTPVerification from './pages/OTPVerification';
// import CreateAdmin from './pages/CreateAdmin';
// import ForgotPassword from './pages/ForgotPassword';
// import AdminHomePage from './pages/AdminHomePage';
// import MainAdminHomePage from './pages/MainAdminHomePage';

// function AppContent() {
//   const { pathname } = useLocation();

//   const isAuthLayout = [
//     '/admin/login',
//     '/admin/otp-verification',
//     '/create-admin',
//     '/forgot-password',
//     '/adminhome',
//     '/main-admin-home'
//   ].includes(pathname);

//   const hideNav =
//     isAuthLayout ||
//     pathname.startsWith('/sem') ||
//     pathname.startsWith('/adminhome') ||
//     pathname.startsWith('/main-admin-home');

//   return (
//     <div
//       className={
//         isAuthLayout
//           ? 'h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900'
//           : 'min-h-screen flex flex-col items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900'
//       }
//     >
//       {!hideNav && <Navbar />}

//       {!isAuthLayout && !pathname.startsWith('/adminhome') && !pathname.startsWith('/main-admin-home') && (
//         <>
//           <FloatingShape color="bg-green-500" size="w-64 h-64" top="-5%" left="10%" delay={0} />
//           <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%" delay={5} />
//           <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="-10%" delay={2} />
//         </>
//       )}

//       <Routes>
//         {/* Public */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/amazing-feature" element={<AmazingFeaturePage />} />
//         <Route path="/choose-semester" element={<ChooseSemesterPage />} />
//         <Route path="/sem1" element={<Sem1Page />} />
//         {/* … other semesters … */}

//         {/* Sem1 Routes */}
//         <Route path="/sem1" element={<Sem1Page />} />
//         <Route path="/video-lecture" element={<Sem1_Vedio />} />
//         <Route path="/sem1/engineering-physics" element={<EngineeringPhysics />} />
//         <Route path="/sem1/fundamental-electrical" element={<FundamentalElectrical />} />
//         <Route path="/sem1/linear-algebra" element={<LinearAlgebra />} />
//         <Route path="/sem1/problem-solving" element={<ProblemSolving />} />
//         <Route path="/sem1/technical-communication" element={<TechnicalCommunication />} />
//         <Route path="/sem1/professional-ethics" element={<ProfessionalEthics />} />
//         <Route path="/study-material" element={<Sem1_LectureNotes />} />
//         <Route path="/previous-year-paper" element={<Sem1_PreviousYearPaper />} />

//         {/* Sem1 Previous Year Paper Routes */}
//         <Route
//           path="/sem1/engineering-physics-paper"
//           element={
//             // Wrap in a full-width, black-background div so it fills the entire viewport
//             <div className="w-screen bg-black">
//               <EngineeringPhysicsPaperPage />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/fundamental-electrical-paper"
//           element={
//             <div className="w-screen bg-black">
//               <FundamentalElectricalPaperPage />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/linear-algebra-paper"
//           element={
//             <div className="w-screen bg-black">
//               <LinearAlgebraPaperPage />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/problem-solving-paper"
//           element={
//             <div className="w-screen bg-black">
//               <ProblemSolvingPaperPage />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/technical-communication-paper"
//           element={
//             <div className="w-screen bg-black">
//               <TechnicalCommunicationPaperPage />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/professional-ethics-paper"
//           element={
//             <div className="w-screen bg-black">
//               <ProfessionalEthicsPaperPage />
//             </div>
//           }
//         />


//          {/* Sem1 Lecture notes Routes */}
//         <Route
//           path="/sem1/engineering-physics-notes"
//           element={
//             // Wrap in a full-width, black-background div so it fills the entire viewport
//             <div className="w-screen bg-black">
//               <EngineeringPhysicsLectureNotes/>
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/fundamental-electrical-notes"
//           element={
//             <div className="w-screen bg-black">
//               <FundamentalElectricalLectureNotes/>
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/linear-algebra-notes"
//           element={
//             <div className="w-screen bg-black">
//               <LinearAlgebraLectureNotes />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/problem-solving-notes"
//           element={
//             <div className="w-screen bg-black">
//               <ProblemSolvingLectureNotes />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/technical-communication-notes"
//           element={
//             <div className="w-screen bg-black">
//               <TechnicalCommunicationLectureNotes />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/professional-ethics-notes"
//           element={
//             <div className="w-screen bg-black">
//               <ProfessionalEthicsLectureNotes />
//             </div>
//           }
//         />
//         {/* Auth */}
//         <Route path="/admin/login" element={<AdminLoginPage />} />
//         <Route path="/admin/otp-verification" element={<OTPVerification />} />
//         <Route path="/create-admin" element={<CreateAdmin />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />

//         {/* Protected: other admins */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/adminhome" element={<AdminHomePage />} />
//         </Route>

//         {/* Protected: main admin */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/main-admin-home" element={<MainAdminHomePage />} />
//         </Route>

//         {/* Fallback */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>

//       <Toaster position="bottom-right" />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <AppContent />
//     </AuthProvider>
//   );
// }


// // App.jsx
// // App.jsx
// import React from 'react';
// import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';

// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';

// import Navbar from './pages/Navbar';
// import FloatingShape from './components/FloatingShape';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import AmazingFeaturePage from './pages/AmazingFeaturesPages';
// import ChooseSemesterPage from './pages/ChooseSemesterPage';

// // … other semester imports …

// // Import Sem1 Pages
// import Sem1Page from "./pages/Sem1/Sem1Page";

// // Import Sem2 Home Page (used for Sem2 route)
// import Sem2_HomePage from "./pages/Sem2/Sem2_HomePage";

// // Import new Sem2 Department Home Pages
// import Sem2_IT_HomePage from "./pages/Sem2/IT/Sem2_IT_Homepage";
// import Sem2_ITBI_HomePage from "./pages/Sem2/IT_BI/Sem2_ITBI_Homepage";
// import Sem2_ECE_HomePage from "./pages/Sem2/ECE/Sem2_ECE_Homepage";

// // Import new Sem2 ECE Video, Lecture Notes and Previous Year Papers Pages
// import Sem2_ece_VedioPlaylist from "./pages/Sem2/ECE/Sem2_ece_VedioPlaylist/Sem2_ece_Vedio.jsx";
// import Sem2_ece_LectureNotes from "./pages/Sem2/ECE/Sem2_ece_LectureNotes/Sem2_ece_LectureNotes.jsx";
// import Sem2_ece_PreviousPapers from "./pages/Sem2/ECE/Sem2_ece_PreviousYearPapers/Sem2_ece_PreviousPapers.jsx";

// // Import new Sem2 IT Video, Lecture Notes and Previous Year Papers Pages
// import Sem2_it_VedioPlaylist from "./pages/Sem2/IT/Sem2_it_VedioPlaylist/Sem2_it_Vedio.jsx";
// import Sem2_it_LectureNotes from "./pages/Sem2/IT/Sem2_it_LectureNotes/Sem2_it_LectureNotes.jsx";
// import Sem2_it_PreviousPapers from "./pages/Sem2/IT/Sem2_it_PreviousYearPapers/Sem2_it_PreviousPapers.jsx";

// // Import new Sem2 IT-BI Video, Lecture Notes and Previous Year Papers Pages
// import Sem2_itbi_VedioPlaylist from "./pages/Sem2/IT_BI/Sem2_itbi_VedioPlaylist/Sem2_itbi_Vedio.jsx";
// import Sem2_itbi_LectureNotes from "./pages/Sem2/IT_BI/Sem2_itbi_LectureNotes/Sem2_itbi_LectureNotes.jsx";
// import Sem2_itbi_PreviousPapers from "./pages/Sem2/IT_BI/Sem2_itbi_PreviousYearPapers/Sem2_itbi_PreviousPapers.jsx";

// // Import Sem1 Video & Subject Pages
// import Sem1_Vedio from "./pages/Sem1/Sem1_vedio_playlist/Sem1_Vedio";
// import EngineeringPhysics from "./pages/Sem1/Sem1_vedio_playlist/EngineeringPhysics";
// import FundamentalElectrical from "./pages/Sem1/Sem1_vedio_playlist/FundamentalElectrical";
// import LinearAlgebra from "./pages/Sem1/Sem1_vedio_playlist/LinearAlgebra";
// import ProblemSolving from "./pages/Sem1/Sem1_vedio_playlist/ProblemSolving";
// import TechnicalCommunication from "./pages/Sem1/Sem1_vedio_playlist/TechnicalCommunication";
// import ProfessionalEthics from "./pages/Sem1/Sem1_vedio_playlist/ProfessionalEthics";

// // Import new Sem1 Lecture Notes and Previous Year Papers Pages
// import Sem1_LectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/Sem1_LectureNotes";
// import Sem1_PreviousYearPaper from "./pages/Sem1/Sem1_PreviousYearPaper/Sem1_PreviousYearPaper";

// import EngineeringPhysicsPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/EngineeringPhysicsPaperPage";
// import FundamentalElectricalPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/FundamentalElectricalPaperPage";
// import LinearAlgebraPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/LinearAlgebraPaperPage";
// import ProblemSolvingPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/ProblemSolvingPaperPage";
// import TechnicalCommunicationPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/TechnicalCommunicationPaperPage";
// import ProfessionalEthicsPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/ProfessionalEthicsPaperPage";

// // Lecture notes imports (restored)
// import EngineeringPhysicsLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/EngineeringPhysicsLectureNotes";
// import FundamentalElectricalLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/FundamentalElectricalLectureNotes";
// import LinearAlgebraLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/LinearAlgebraLectureNotes";
// import ProblemSolvingLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/ProblemSolvingLectureNotes";
// import TechnicalCommunicationLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/TechnicalCommunicationLectureNotes";
// import ProfessionalEthicsLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/ProfessionalEthicsLectureNotes";

// import AdminLoginPage from './pages/AdminLoginPage';
// import OTPVerification from './pages/OTPVerification';
// import CreateAdmin from './pages/CreateAdmin';
// import ForgotPassword from './pages/ForgotPassword';
// import AdminHomePage from './pages/AdminHomePage';
// import MainAdminHomePage from './pages/MainAdminHomePage';

// function AppContent() {
//   const { pathname } = useLocation();

//   const isAuthLayout = [
//     '/admin/login',
//     '/admin/otp-verification',
//     '/create-admin',
//     '/forgot-password',
//     '/adminhome',
//     '/main-admin-home'
//   ].includes(pathname);

//   const hideNav =
//     isAuthLayout ||
//     pathname.startsWith('/sem') ||
//     pathname.startsWith('/adminhome') ||
//     pathname.startsWith('/main-admin-home');

//   return (
//     <div
//       className={
//         isAuthLayout
//           ? 'h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900'
//           : 'min-h-screen flex flex-col items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900'
//       }
//     >
//       {!hideNav && <Navbar />}

//       {!isAuthLayout &&
//        !pathname.startsWith('/adminhome') &&
//        !pathname.startsWith('/main-admin-home') && (
//         <>
//           <FloatingShape color="bg-green-500" size="w-64 h-64" top="-5%" left="10%" delay={0} />
//           <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%" delay={5} />
//           <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="-10%" delay={2} />
//         </>
//       )}

//       <Routes>
//         {/* Public */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/amazing-feature" element={<AmazingFeaturePage />} />
//         <Route path="/choose-semester" element={<ChooseSemesterPage />} />
//         <Route path="/sem1" element={<Sem1Page />} />
//         {/* … other semesters … */}

//         {/* Sem1 Routes */}
//         <Route path="/sem1" element={<Sem1Page />} />
//         <Route path="/video-lecture" element={<Sem1_Vedio />} />
//         <Route path="/sem1/engineering-physics" element={<EngineeringPhysics />} />
//         <Route path="/sem1/fundamental-electrical" element={<FundamentalElectrical />} />
//         <Route path="/sem1/linear-algebra" element={<LinearAlgebra />} />
//         <Route path="/sem1/problem-solving" element={<ProblemSolving />} />
//         <Route path="/sem1/technical-communication" element={<TechnicalCommunication />} />
//         <Route path="/sem1/professional-ethics" element={<ProfessionalEthics />} />
//         <Route path="/study-material" element={<Sem1_LectureNotes />} />
//         <Route path="/previous-year-paper" element={<Sem1_PreviousYearPaper />} />


//         {/* Sem2 Routes */}
//          <Route path="/sem2_home" element={<Sem2_HomePage />} />


//           {/* Sem2 Department Routes */}
//           <Route path="/sem2/it" element={<Sem2_IT_HomePage />} />
//           <Route path="/sem2/itbi" element={<Sem2_ITBI_HomePage />} />
//           <Route path="/sem2/ece" element={<Sem2_ECE_HomePage />} />


//                    {/* Sem2 ECE Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem2/ece/vedioplaylist" element={<Sem2_ece_VedioPlaylist />} />
//           <Route path="/sem2/ece/lecturenotes" element={<Sem2_ece_LectureNotes />} />
//           <Route path="/sem2/ece/previouspapers" element={<Sem2_ece_PreviousPapers />} />

//           {/* Sem2 IT Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem2/it/vedioplaylist" element={<Sem2_it_VedioPlaylist />} />
//           <Route path="/sem2/it/lecturenotes" element={<Sem2_it_LectureNotes />} />
//           <Route path="/sem2/it/previouspapers" element={<Sem2_it_PreviousPapers />} />

//           {/* Sem2 IT-BI Video, Lecture Notes and Previous Year Papers Routes */}
//           <Route path="/sem2/itbi/vedioplaylist" element={<Sem2_itbi_VedioPlaylist />} />
//           <Route path="/sem2/itbi/lecturenotes" element={<Sem2_itbi_LectureNotes />} />
//           <Route path="/sem2/itbi/previouspapers" element={<Sem2_itbi_PreviousPapers />} />
//         {/* Sem1 Previous Year Paper Routes */}
//         <Route
//           path="/sem1/engineering-physics-paper"
//           element={
//             <div className="w-screen bg-black">
//               <EngineeringPhysicsPaperPage />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/fundamental-electrical-paper"
//           element={
//             <div className="w-screen bg-black">
//               <FundamentalElectricalPaperPage />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/linear-algebra-paper"
//           element={
//             <div className="w-screen bg-black">
//               <LinearAlgebraPaperPage />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/problem-solving-paper"
//           element={
//             <div className="w-screen bg-black">
//               <ProblemSolvingPaperPage />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/technical-communication-paper"
//           element={
//             <div className="w-screen bg-black">
//               <TechnicalCommunicationPaperPage />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/professional-ethics-paper"
//           element={
//             <div className="w-screen bg-black">
//               <ProfessionalEthicsPaperPage />
//             </div>
//           }
//         />

//         {/* Sem1 Lecture Notes Routes */}
//         <Route
//           path="/sem1/engineering-physics-notes"
//           element={
//             <div className="w-screen bg-black">
//               <EngineeringPhysicsLectureNotes />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/fundamental-electrical-notes"
//           element={
//             <div className="w-screen bg-black">
//               <FundamentalElectricalLectureNotes />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/linear-algebra-notes"
//           element={
//             <div className="w-screen bg-black">
//               <LinearAlgebraLectureNotes />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/problem-solving-notes"
//           element={
//             <div className="w-screen bg-black">
//               <ProblemSolvingLectureNotes />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/technical-communication-notes"
//           element={
//             <div className="w-screen bg-black">
//               <TechnicalCommunicationLectureNotes />
//             </div>
//           }
//         />
//         <Route
//           path="/sem1/professional-ethics-notes"
//           element={
//             <div className="w-screen bg-black">
//               <ProfessionalEthicsLectureNotes />
//             </div>
//           }
//         />

//         {/* Auth */}
//         <Route path="/admin/login" element={<AdminLoginPage />} />
//         <Route path="/admin/otp-verification" element={<OTPVerification />} />
//         <Route path="/create-admin" element={<CreateAdmin />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />

//         {/* Protected: other admins */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/adminhome" element={<AdminHomePage />} />
//         </Route>

//         {/* Protected: main admin */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/main-admin-home" element={<MainAdminHomePage />} />
//         </Route>

//         {/* Fallback */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>

//       <Toaster position="bottom-right" />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <AppContent />
//     </AuthProvider>
//   );
// }



// maha tamasa


// App.jsx
// App.jsx
import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import Navbar from './pages/Navbar';
import FloatingShape from './components/FloatingShape';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AmazingFeaturePage from './pages/AmazingFeaturesPages';
import ChooseSemesterPage from './pages/ChooseSemesterPage';
import TechTitaniumTeam from "./pages/TechTitaniumTeam";

// … other semester imports …

// Import Sem1 Pages
import Sem1Page from "./pages/Sem1/Sem1Page";

// Import Sem2 Home Page (used for Sem2 route)
import Sem2_HomePage from "./pages/Sem2/Sem2_HomePage";

// Import new Sem2 Department Home Pages
import Sem2_IT_HomePage from "./pages/Sem2/IT/Sem2_IT_Homepage";
import Sem2_ITBI_HomePage from "./pages/Sem2/IT_BI/Sem2_ITBI_Homepage";
import Sem2_ECE_HomePage from "./pages/Sem2/ECE/Sem2_ECE_Homepage";



// Import Sem3 Home Page (used for Sem2 route)
import Sem3_HomePage from "./pages/Sem2/Sem2_HomePage";

// Import new Sem3 Department Home Pages
import Sem3_IT_HomePage from "./pages/Sem3/IT/Sem3_IT_Homepage";
import Sem3_ITBI_HomePage from "./pages/Sem3/IT_BI/Sem3_ITBI_Homepage";
import Sem3_ECE_HomePage from "./pages/Sem3/ECE/Sem3_ECE_Homepage";
// Import new Sem2 ECE Video, Lecture Notes and Previous Year Papers Pages
import Sem2_ece_VedioPlaylist from "./pages/Sem2/ECE/Sem2_ece_VedioPlaylist/Sem2_ece_Vedio.jsx";
import Sem2_ece_LectureNotes from "./pages/Sem2/ECE/Sem2_ece_LectureNotes/Sem2_ece_LectureNotes.jsx";
import Sem2_ece_PreviousPapers from "./pages/Sem2/ECE/Sem2_ece_PreviousYearPapers/Sem2_ece_PreviousPapers.jsx";

// Import new Sem2 IT Video, Lecture Notes and Previous Year Papers Pages
import Sem2_it_VedioPlaylist from "./pages/Sem2/IT/Sem2_it_VedioPlaylist/Sem2_it_Vedio.jsx";
import Sem2_it_LectureNotes from "./pages/Sem2/IT/Sem2_it_LectureNotes/Sem2_it_LectureNotes.jsx";
import Sem2_it_PreviousPapers from "./pages/Sem2/IT/Sem2_it_PreviousYearPapers/Sem2_it_PreviousPapers.jsx";

// Import new Sem2 IT-BI Video, Lecture Notes and Previous Year Papers Pages
import Sem2_itbi_VedioPlaylist from "./pages/Sem2/IT_BI/Sem2_itbi_VedioPlaylist/Sem2_itbi_Vedio.jsx";
import Sem2_itbi_LectureNotes from "./pages/Sem2/IT_BI/Sem2_itbi_LectureNotes/Sem2_itbi_LectureNotes.jsx";
import Sem2_itbi_PreviousPapers from "./pages/Sem2/IT_BI/Sem2_itbi_PreviousYearPapers/Sem2_itbi_PreviousPapers.jsx";



// Import new Sem3 ECE Video, Lecture Notes and Previous Year Papers Pages
import Sem3_ece_VedioPlaylist from "./pages/Sem3/ECE/Sem3_ece_VedioPlaylist/Sem3_ece_Vedio.jsx";
import Sem3_ece_LectureNotes from "./pages/Sem3/ECE/Sem3_ece_LectureNotes/Sem3_ece_LectureNotes.jsx";
import Sem3_ece_PreviousPapers from "./pages/Sem3/ECE/Sem3_ece_PreviousYearPapers/Sem3_ece_PreviousPapers.jsx";

// Import new Sem3 IT Video, Lecture Notes and Previous Year Papers Pages
import Sem3_it_VedioPlaylist from "./pages/Sem3/IT/Sem3_it_VedioPlaylist/Sem3_it_Vedio.jsx";
import Sem3_it_LectureNotes from "./pages/Sem3/IT/Sem3_it_LectureNotes/Sem3_it_LectureNotes.jsx";
import Sem3_it_PreviousPapers from "./pages/Sem3/IT/Sem3_it_PreviousYearPapers/Sem3_it_PreviousPapers.jsx";3
// Import new Sem3 IT-BI Video, Lecture Notes and Previous Year Papers Pages
import Sem3_itbi_VedioPlaylist from "./pages/Sem3/IT_BI/Sem3_itbi_VedioPlaylist/Sem3_itbi_Vedio.jsx";
import Sem3_itbi_LectureNotes from "./pages/Sem3/IT_BI/Sem3_itbi_LectureNotes/Sem3_itbi_LectureNotes.jsx";
import Sem3_itbi_PreviousPapers from "./pages/Sem3/IT_BI/Sem3_itbi_PreviousYearPapers/Sem3_itbi_PreviousPapers.jsx";



// Import Sem1 Video & Subject Pages
import Sem1_Vedio from "./pages/Sem1/Sem1_vedio_playlist/Sem1_Vedio";
import EngineeringPhysics from "./pages/Sem1/Sem1_vedio_playlist/EngineeringPhysics";
import FundamentalElectrical from "./pages/Sem1/Sem1_vedio_playlist/FundamentalElectrical";
import LinearAlgebra from "./pages/Sem1/Sem1_vedio_playlist/LinearAlgebra";
import ProblemSolving from "./pages/Sem1/Sem1_vedio_playlist/ProblemSolving";
import TechnicalCommunication from "./pages/Sem1/Sem1_vedio_playlist/TechnicalCommunication";
import ProfessionalEthics from "./pages/Sem1/Sem1_vedio_playlist/ProfessionalEthics";

// Import new Sem1 Lecture Notes and Previous Year Papers Pages
import Sem1_LectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/Sem1_LectureNotes";
import Sem1_PreviousYearPaper from "./pages/Sem1/Sem1_PreviousYearPaper/Sem1_PreviousYearPaper";

import EngineeringPhysicsPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/EngineeringPhysicsPaperPage";
import FundamentalElectricalPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/FundamentalElectricalPaperPage";
import LinearAlgebraPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/LinearAlgebraPaperPage";
import ProblemSolvingPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/ProblemSolvingPaperPage";
import TechnicalCommunicationPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/TechnicalCommunicationPaperPage";
import ProfessionalEthicsPaperPage from "./pages/Sem1/Sem1_PreviousYearPaper/ProfessionalEthicsPaperPage";

// sem 2 ece import pages
import Sem2_ece_PreviousYearPapers from "./pages/Sem2/ECE/Sem2_ece_PreviousYearPapers/Sem2_ece_PreviousPapers";

// sem 2 ece paper pages imort 
import DataStructuresPaper from "./pages/Sem2/ECE/Sem2_ece_PreviousYearPapers/DataStructureAndAlgorithmsPapers";
import DigitalElectronicsPapersPage from "./pages/Sem2/ECE/Sem2_ece_PreviousYearPapers/DigitalElectronicsPapers";
import ElectronicDevicesPaper from "./pages/Sem2/ECE/Sem2_ece_PreviousYearPapers/ElectronicDevicesAndCircuitsPapers";
import ElectronicWorkshopPaper from "./pages/Sem2/ECE/Sem2_ece_PreviousYearPapers/ElectronicWorkshopPapers";
import ElectronicsMeasurementsAndInstruementationPaper from "./pages/Sem2/ECE/Sem2_ece_PreviousYearPapers/ElectronicsMeasurementsAndInstrumentationsPapers";
import ProbabilityStatisticsPaper from "./pages/Sem2/ECE/Sem2_ece_PreviousYearPapers/ProbabilityAndStatisticsPapers";
import PhysicalEducationPaper from "./pages/Sem2/ECE/Sem2_ece_PreviousYearPapers/PhysicalEducationPapers";
import PrinciplesManagementPaper from "./pages/Sem2/ECE/Sem2_ece_PreviousYearPapers/PrinciplesOfManagementPapers";


// sem 2 ece  lecture notes pages import 
import DataStructuresAlgorithmsNotes from "./pages/Sem2/ECE/Sem2_ece_LectureNotes/DataStructureAndAlgorithmsLectureNotes";
import DigitalElectronicsNotes from "./pages/Sem2/ECE/Sem2_ece_LectureNotes/DigitalElectronicsLectureNotes";
import ElectronicDevicesInstrumentationNotes from "./pages/Sem2/ECE/Sem2_ece_LectureNotes/ElectronicsMeasurementsAndInstruementationsLectureNotes";
import ElectronicWorkshopNotes from "./pages/Sem2/ECE/Sem2_ece_LectureNotes/ElectronicWorkshopLectureNotes";
import ElectronicDevicesCircuitsNotes from "./pages/Sem2/ECE/Sem2_ece_LectureNotes/ElectronicDevicesAndCircuitsLectureNotes";
import ProbabilityStatisticsNotes from "./pages/Sem2/ECE/Sem2_ece_LectureNotes/ProbabilityAndStatisticsLectureNotes";
import PhysicalEducationNotes from "./pages/Sem2/ECE/Sem2_ece_LectureNotes/PhysicalEducationLectureNotes";
import PrinciplesManagementNotes from "./pages/Sem2/ECE/Sem2_ece_LectureNotes/PrinciplesOfManagementLectureNotes";

// sem 2 ece video page import 
import DataStructures from "./pages/Sem2/ECE/Sem2_ece_VedioPlaylist/DataStructuresAndAlgorithmsVideo.jsx";
import DigitalElectronics from "./pages/Sem2/ECE/Sem2_ece_VedioPlaylist/DigitalElectronicsVideo.jsx";
import EDI from "./pages/Sem2/ECE/Sem2_ece_VedioPlaylist/ElectronicDevicesAndCircuitsVideo.jsx";
import ElectronicWorkshop from "./pages/Sem2/ECE/Sem2_ece_VedioPlaylist/ElectronicWorkShopVideo.jsx";
import EDC from "./pages/Sem2/ECE/Sem2_ece_VedioPlaylist/ElectronicsMesurementsAndInstrumentationsVideo.jsx";
import ProbabilityStatistics from "./pages/Sem2/ECE/Sem2_ece_VedioPlaylist/ProbabilityAndStatisticsVideo.jsx";
import PhysicalEducation from "./pages/Sem2/ECE/Sem2_ece_VedioPlaylist/PhysicalEducationVideo.jsx";
import PrinciplesManagement from "./pages/Sem2/ECE/Sem2_ece_VedioPlaylist/PrinciplesOfManagementVideo";


// sem 2 it lecture notes pages import 

// Import your pages
import ComputerOrganizationNotes from "./pages/Sem2/IT/Sem2_it_LectureNotes/ComputerOrganizationAndArchitectureLectureNotes";
import DataStructuresNotes from "./pages/Sem2/IT/Sem2_it_LectureNotes/DataStructuresAndAlgorithmsLectrueNotes.jsx";
import DiscreteMathNotes from "./pages/Sem2/IT/Sem2_it_LectureNotes/DiscreteMathematicalStructuresLectureNotes";
import PhysicalEducationIT from "./pages/Sem2/IT/Sem2_it_LectureNotes/PhysicalEducationLectureNotes";
import DataCommunicationNotes from "./pages/Sem2/IT/Sem2_it_LectureNotes/PrinciplesOfDataCommunicationLectureNotes";
import ManagementPrinciplesNotes from "./pages/Sem2/IT/Sem2_it_LectureNotes/PrinciplesOfManagementLectureNotes";
import WebDevelopmentNotes from "./pages/Sem2/IT/Sem2_it_LectureNotes/WebDevelopmentLectureNotes";

// sem 2 it previous year papers pages import



import ComputerOrganizationPaper from "./pages/Sem2/IT/Sem2_it_PreviousYearPapers/ComputerOrganizationAndArchitecturePapers";
import DataStructuresAlgorithmsPaper from "./pages/Sem2/IT/Sem2_it_PreviousYearPapers/DataStructuresAndAlgorithmsPapers";
import DiscreteMathPaper from "./pages/Sem2/IT/Sem2_it_PreviousYearPapers/DiscreteMathematicalStructuresPapers";
import DataCommunicationPaper from "./pages/Sem2/IT/Sem2_it_PreviousYearPapers/PrinciplesOfDataCommunicationPapers";
import WebDevelopmentPaper from "./pages/Sem2/IT/Sem2_it_PreviousYearPapers/WebDevelopmentPapers";

// sem 2 it video lecture pages import

import ComputerOrganization from "./pages/Sem2/IT/Sem2_it_VedioPlaylist/ComputerOrganizationAndArchitectureVideo.jsx";
import DiscreteMath from "./pages/Sem2/IT/Sem2_it_VedioPlaylist/DiscreteMathematicalStructuresVideo.jsx";
import DataCommunication from "./pages/Sem2/IT/Sem2_it_VedioPlaylist/PrinciplesOfDataCommunicationVideo.jsx";
import WebDevelopment from "./pages/Sem2/IT/Sem2_it_VedioPlaylist/WebDevelopmentVideo.jsx";

// sem 2 it bi lecture notes import 
import EssenticalOfBusinessInformatics from "./pages/Sem2/IT_BI/Sem2_itbi_LectureNotes/EssentialsOfBusinessInformaticsLecureNotes.jsx"
// import ProfessionalEthicsLectureNotes from "./pages/Sem2/IT_BI/Sem2_itbi_LectureNotes/ProfessionalEthicsLectureNotes.jsx"
// sem 2 it bi paper pages import
import EssentialOfBusinessInformaticsPapersPage from './pages/Sem2/IT_BI/Sem2_itbi_PreviousYearPapers/EssentialOfBusinessInformaticsPapers.jsx';
import ProfessionalEthicsPaper from "./pages/Sem2/IT_BI/Sem2_itbi_PreviousYearPapers/ProfessionalEthicsPapers"

// sem 2 it bi video pages import 
import EssentialOfBusinessInformaticsVideo from "./pages/Sem2/IT_BI/Sem2_itbi_VedioPlaylist/EssentialsOfBusinessInformaticsVideo.jsx"
import ProfessionalEthicsVideo  from "./pages/Sem2/IT_BI/Sem2_itbi_VedioPlaylist/ProfessionalEthicsVideo.jsx"
// Lecture notes imports (restored)
import EngineeringPhysicsLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/EngineeringPhysicsLectureNotes";
import FundamentalElectricalLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/FundamentalElectricalLectureNotes";
import LinearAlgebraLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/LinearAlgebraLectureNotes";
import ProblemSolvingLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/ProblemSolvingLectureNotes";
import TechnicalCommunicationLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/TechnicalCommunicationLectureNotes";
import ProfessionalEthicsLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/ProfessionalEthicsLectureNotes";

import AdminLoginPage from './pages/AdminLoginPage';
import OTPVerification from './pages/OTPVerification';
import CreateAdmin from './pages/CreateAdmin';
import ForgotPassword from './pages/ForgotPassword';
import AdminHomePage from './pages/AdminHomePage';
import MainAdminHomePage from './pages/MainAdminHomePage';

function AppContent() {
  const { pathname } = useLocation();

  const isAuthLayout = [
    '/admin/login',
    '/admin/otp-verification',
    '/create-admin',
    '/forgot-password',
    '/adminhome',
    '/main-admin-home'
  ].includes(pathname);

  const hideNav =
    isAuthLayout ||
    pathname.startsWith('/sem') ||
    pathname.startsWith('/adminhome') ||
    pathname.startsWith('/main-admin-home');

  return (
    <div
      className={
        isAuthLayout
          ? 'h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900'
          : 'min-h-screen flex flex-col items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900'
      }
    >
      {!hideNav && <Navbar />}

      {!isAuthLayout &&
        !pathname.startsWith('/adminhome') &&
        !pathname.startsWith('/main-admin-home') && (
          <>
            <FloatingShape color="bg-green-500" size="w-64 h-64" top="-5%" left="10%" delay={0} />
            <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%" delay={5} />
            <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="-10%" delay={2} />
          </>
        )}

      <Routes>
        {/* Public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/amazing-feature" element={<AmazingFeaturePage />} />
        <Route path="/choose-semester" element={<ChooseSemesterPage />} />
        <Route path="/sem1" element={<Sem1Page />} />
        {/* … other semesters … */}

        {/* Sem1 Routes */}
        <Route path="/sem1" element={<Sem1Page />} />
        <Route path="/video-lecture" element={<Sem1_Vedio />} />
        <Route path="/sem1/engineering-physics" element={<EngineeringPhysics />} />
        <Route path="/sem1/fundamental-electrical" element={<FundamentalElectrical />} />
        <Route path="/sem1/linear-algebra" element={<LinearAlgebra />} />
        <Route path="/sem1/problem-solving" element={<ProblemSolving />} />
        <Route path="/sem1/technical-communication" element={<TechnicalCommunication />} />
        <Route path="/sem1/professional-ethics" element={<ProfessionalEthics />} />
        <Route path="/study-material" element={<Sem1_LectureNotes />} />
        <Route path="/previous-year-paper" element={<Sem1_PreviousYearPaper />} />

         {/* vedio page of sem 2 ece  */}
        <Route path="/sem2" element={<Sem2_ece_VedioPlaylist />} />

        {/*  sem 2 ece  video  Routes */}
        <Route path="/sem2/data-structures" element={<DataStructures/>} />
        <Route path="/sem2/digital-electronics" element={<DigitalElectronics/>} />
        <Route path="/sem2/edi" element={<EDI />} />
        <Route path="/sem2/electronic-workshop" element={<ElectronicWorkshop/>} />
        <Route path="/sem2/edc" element={<EDC />} />
        <Route path="/sem2/probability-statistics" element={<ProbabilityStatistics/>} />
        <Route path="/sem2/physical-education" element={<PhysicalEducation/>} />
        <Route path="/sem2/essential-of-business-informatic" element={< EssentialOfBusinessInformaticsVideo/>} />


        
        {/*  sem 2 it  video  Routes */}
        <Route path="/sem2/data-structures-and-algorithms" element={<DataStructures/>} />
        <Route path="/sem2/computer-organization-architecture" element={<ComputerOrganization  />} />
        <Route path="/sem2/discrete-mathematical-structures" element={<DiscreteMath />} />
        <Route path="/sem2/principles-of-data-communication" element={<DataCommunication  />} />
        <Route path="/sem2/web-development" element={<WebDevelopment/>} />
        <Route path="/sem2/physical-education" element={<PhysicalEducation />} />
        <Route path="/sem2/principles-of-management" element={<PrinciplesManagement />} />
        <Route path="/sem2/essential-of-business-informatic" element={<EssentialOfBusinessInformaticsVideo />} />
        <Route path="/sem2/professional-ethics" element={< ProfessionalEthicsVideo/>} />

         

        
        {/* Semester 2 ECe page of lecture notes routing  */}
        <Route
          path="/sem2/data-structures-algorithms-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DataStructuresAlgorithmsNotes />
            </div>
          }
        />
        <Route
          path="/sem2/digital-electronics-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DigitalElectronicsNotes />
            </div>
          }
        />
        <Route
          path="/sem2/electronic-devices-instrumentation-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ElectronicDevicesInstrumentationNotes />
            </div>
          }
        />
        <Route
          path="/sem2/electronic-workshop-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ElectronicWorkshopNotes />
            </div>
          }
        />
        <Route
          path="/sem2/electronic-devices-circuits-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ElectronicDevicesCircuitsNotes />
            </div>
          }
        />
        <Route
          path="/sem2/probability-statistics-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ProbabilityStatisticsNotes />
            </div>
          }
        />
        <Route
          path="/sem2/physical-education-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <PhysicalEducationNotes />
            </div>
          }
        />
        <Route
          path="/sem2/principles-management-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <PrinciplesManagementNotes />
            </div>
          }
        />


      
        {/* sem 2 it lecture notes routing  */}

        <Route
          path="/sem2/essential-of-business-informatics-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <EssenticalOfBusinessInformatics />
            </div>
          }
        />

         <Route
          path="/sem2/professional-ethics-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ProfessionalEthicsLectureNotes/>
            </div>
          }
        />
         <Route
          path="/sem2/computer-organization-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ComputerOrganizationNotes />
            </div>
          }
        />
        <Route
          path="/sem2/data-structures-algorithms-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DataStructuresNotes />
            </div>
          }
        />
        <Route
          path="/sem2/discrete-math-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DiscreteMathNotes />
            </div>
          }
        />
        <Route
          path="/sem2/physical-education-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <PhysicalEducationIT />
            </div>
          }
        />
        <Route
          path="/sem2/data-communication-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DataCommunicationNotes />
            </div>
          }
        />
        <Route
          path="/sem2/management-principles-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ManagementPrinciplesNotes />
            </div>
          }
        />
      
       
        <Route
          path="/sem2/web-development-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <WebDevelopmentNotes  />
            </div>
          }
        />


        {/* Semester 2 ECE Main Page */}
        <Route path="/sem2" element={<Sem2_ece_PreviousYearPapers />} />
        {/* sem 2 ece  routing  */}
        <Route
          path="/sem2/data-structures-paper"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DataStructuresPaper />
            </div>
          }
        />
        <Route
          path="/sem2/digital-electronics-paper"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DigitalElectronicsPapersPage />
            </div>
          }
        />
        <Route
          path="/sem2/electronics-devices-paper"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ElectronicDevicesPaper />
            </div>
          }
        />
        <Route
          path="/sem2/electronic-workshop-paper"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ElectronicWorkshopPaper />
            </div>
          }
        />
        <Route
          path="/sem2/electronic-mesurement-paper"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ElectronicsMeasurementsAndInstruementationPaper />
            </div>
          }
        />
        <Route
          path="/sem2/probability-statistics-paper"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ProbabilityStatisticsPaper />
            </div>
          }
        />
        <Route
          path="/sem2/physical-education-paper"
          element={
            <div className="w-screen bg-black min-h-screen">
              <PhysicalEducationPaper />
            </div>
          }
        />
        <Route
          path="/sem2/principles-management-paper"
          element={
            <div className="w-screen bg-black min-h-screen">
              <PrinciplesManagementPaper />
            </div>
          }
        />

        {/* sem 2 it papers routing */}

       
        <Route
          path="/sem2/essential-of-business-informatics-paper"
          element={
            <div className="w-screen bg-black min-h-screen">
              <EssentialOfBusinessInformaticsPapersPage />
            </div>
          }
        />
        <Route
          path="/sem2/professional-ethics-paper"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ProfessionalEthicsPaper />
            </div>
          }
        />
        <Route
          path="/sem2/data-structures-algorithms-paper"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DataStructuresAlgorithmsPaper />
            </div>
          }
        />
        <Route
          path="/sem2/computer-organization-paper"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ComputerOrganizationPaper />
            </div>
          }
        />
        <Route
          path="/sem2/discrete-math-paper"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DiscreteMathPaper />
            </div>
          }
        />
        <Route
          path="/sem2/data-communication-paper"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DataCommunicationPaper />
            </div>
          }
        />
        <Route
          path="/sem2/web-development-paper"
          element={
            <div className="w-screen bg-black min-h-screen">
              <WebDevelopmentPaper />
            </div>
          }
        />
       
        <Route
          path="/sem2/physical-education-paper"
          element={
            <div className="w-screen bg-black min-h-screen">
              <PhysicalEducationPaper />
            </div>
          }
        />
        <Route
          path="/sem2/management-principles-paper"
          element={
            <div className="w-screen bg-black min-h-screen">
              <PrinciplesManagementPaper />
            </div>
          }
        />



        {/* Sem2 Routes */}
        <Route path="/sem2_home" element={<Sem2_HomePage />} />


        {/* Sem2 Department Routes */}
        <Route path="/sem2/it" element={<Sem2_IT_HomePage />} />
        <Route path="/sem2/itbi" element={<Sem2_ITBI_HomePage />} />
        <Route path="/sem2/ece" element={<Sem2_ECE_HomePage />} />


         {/* Sem3 Routes */}
        <Route path="/sem3_home" element={<Sem3_HomePage />} />


        {/* Sem3 Department Routes */}
        <Route path="/sem3/it" element={<Sem3_IT_HomePage />} />
        <Route path="/sem3/itbi" element={<Sem3_ITBI_HomePage />} />
        <Route path="/sem3/ece" element={<Sem3_ECE_HomePage />} />




        {/* Sem3 ECE Video, Lecture Notes and Previous Year Papers Routes */}
        <Route path="/sem3/ece/vedioplaylist" element={<Sem3_ece_VedioPlaylist />} />
        <Route path="/sem3/ece/lecturenotes" element={<Sem3_ece_LectureNotes />} />
        <Route path="/sem3/ece/previouspapers" element={<Sem3_ece_PreviousPapers />} />

        {/* Sem3 IT Video, Lecture Notes and Previous Year Papers Routes */}
        <Route path="/sem3/it/vedioplaylist" element={<Sem3_it_VedioPlaylist />}/>
        <Route path="/sem3/it/lecturenotes" element={<Sem3_it_LectureNotes />} />
        <Route path="/sem3/it/previouspapers" element={<Sem3_it_PreviousPapers />}/>

        {/* Sem3 IT-BI Video, Lecture Notes and Previous Year Papers Routes */}
        <Route path="/sem3/itbi/vedioplaylist" element={<Sem3_itbi_VedioPlaylist />} />
        <Route path="/sem3/itbi/lecturenotes" element={<Sem3_itbi_LectureNotes />} />
        <Route path="/sem3/itbi/previouspapers" element={<Sem3_itbi_PreviousPapers />} />


        {/* Sem2 ECE Video, Lecture Notes and Previous Year Papers Routes */}
        <Route path="/sem2/ece/vedioplaylist" element={<Sem2_ece_VedioPlaylist />} />
        <Route path="/sem2/ece/lecturenotes" element={<Sem2_ece_LectureNotes />} />
        <Route path="/sem2/ece/previouspapers" element={<Sem2_ece_PreviousPapers />} />

        {/* Sem2 IT Video, Lecture Notes and Previous Year Papers Routes */}
        <Route path="/sem2/it/vedioplaylist" element={<Sem2_it_VedioPlaylist />} />
        <Route path="/sem2/it/lecturenotes" element={<Sem2_it_LectureNotes />} />
        <Route path="/sem2/it/previouspapers" element={<Sem2_it_PreviousPapers />} />

        {/* Sem2 IT-BI Video, Lecture Notes and Previous Year Papers Routes */}
        <Route path="/sem2/itbi/vedioplaylist" element={<Sem2_itbi_VedioPlaylist />} />
        <Route path="/sem2/itbi/lecturenotes" element={<Sem2_itbi_LectureNotes />} />
        <Route path="/sem2/itbi/previouspapers" element={<Sem2_itbi_PreviousPapers />} />
        {/* Sem1 Previous Year Paper Routes */}
        <Route
          path="/sem1/engineering-physics-paper"
          element={
            <div className="w-screen bg-black">
              <EngineeringPhysicsPaperPage />
            </div>
          }
        />
        <Route
          path="/sem1/fundamental-electrical-paper"
          element={
            <div className="w-screen bg-black">
              <FundamentalElectricalPaperPage />
            </div>
          }
        />
        <Route
          path="/sem1/linear-algebra-paper"
          element={
            <div className="w-screen bg-black">
              <LinearAlgebraPaperPage />
            </div>
          }
        />
        <Route
          path="/sem1/problem-solving-paper"
          element={
            <div className="w-screen bg-black">
              <ProblemSolvingPaperPage />
            </div>
          }
        />
        <Route
          path="/sem1/technical-communication-paper"
          element={
            <div className="w-screen bg-black">
              <TechnicalCommunicationPaperPage />
            </div>
          }
        />
        <Route
          path="/sem1/professional-ethics-paper"
          element={
            <div className="w-screen bg-black">
              <ProfessionalEthicsPaperPage />
            </div>
          }
        />

        {/* Sem1 Lecture Notes Routes */}
        <Route
          path="/sem1/engineering-physics-notes"
          element={
            <div className="w-screen bg-black">
              <EngineeringPhysicsLectureNotes />
            </div>
          }
        />
        <Route
          path="/sem1/fundamental-electrical-notes"
          element={
            <div className="w-screen bg-black">
              <FundamentalElectricalLectureNotes />
            </div>
          }
        />
        <Route
          path="/sem1/linear-algebra-notes"
          element={
            <div className="w-screen bg-black">
              <LinearAlgebraLectureNotes />
            </div>
          }
        />
        <Route
          path="/sem1/problem-solving-notes"
          element={
            <div className="w-screen bg-black">
              <ProblemSolvingLectureNotes />
            </div>
          }
        />
        <Route
          path="/sem1/technical-communication-notes"
          element={
            <div className="w-screen bg-black">
              <TechnicalCommunicationLectureNotes />
            </div>
          }
        />
        <Route
          path="/sem1/professional-ethics-notes"
          element={
            <div className="w-screen bg-black">
              <ProfessionalEthicsLectureNotes />
            </div>
          }
        />
          <Route path="/techtitanium-team" element={<TechTitaniumTeam />} />

        {/* Auth */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/otp-verification" element={<OTPVerification />} />
        <Route path="/create-admin" element={<CreateAdmin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected: other admins */}
        <Route element={<ProtectedRoute />}>
          <Route path="/adminhome" element={<AdminHomePage />} />
        </Route>

        {/* Protected: main admin */}
        <Route element={<ProtectedRoute />}>
          <Route path="/main-admin-home" element={<MainAdminHomePage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Toaster position="bottom-right" />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
