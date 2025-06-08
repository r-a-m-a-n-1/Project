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
import Sem3_HomePage from "./pages/Sem3/Sem3_HomePage";

// Import new Sem3 Department Home Pages
import Sem3_IT_HomePage from "./pages/Sem3/IT/Sem3_IT_Homepage";
import Sem3_ITBI_HomePage from "./pages/Sem3/IT_BI/Sem3_ITBI_Homepage";
import Sem3_ECE_HomePage from "./pages/Sem3/ECE/Sem3_ece_Homepage";
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
import Sem3_it_PreviousPapers from "./pages/Sem3/IT/Sem3_it_PreviousYearPapers/Sem3_it_PreviousPapers.jsx"; 3
// Import new Sem3 IT-BI Video, Lecture Notes and Previous Year Papers Pages
import Sem3_itbi_VedioPlaylist from "./pages/Sem3/IT_BI/Sem3_itbi_VedioPlaylist/Sem3_itbi_Vedio.jsx";
import Sem3_itbi_LectureNotes from "./pages/Sem3/IT_BI/Sem3_itbi_LectureNotes/Sem3_itbi_LectureNotes.jsx";
import Sem3_itbi_PreviousPapers from "./pages/Sem3/IT_BI/Sem3_itbi_PreviousYearPapers/Sem3_itbi_PreviousPapers.jsx";


// sem 3 ece paper page import

import AnalogElectronicsPapers from "./pages/Sem3/ECE/Sem3_ece_PreviousYearPapers/AnalogElectronicsAndLinearICsPapers";
import BiologyEngineersPapers from "./pages/Sem3/ECE/Sem3_ece_PreviousYearPapers/BiologyForEngineersPapers";
import EmFieldWavesPapers from "./pages/Sem3/ECE/Sem3_ece_PreviousYearPapers/ElectromagneticFieldAndWavesPapers";
import IndianEconomicsPapers from "./pages/Sem3/ECE/Sem3_ece_PreviousYearPapers/IndianEconomicsPapers";
import MicroprocessorInterfacePapers from "./pages/Sem3/ECE/Sem3_ece_PreviousYearPapers/MicroprocessorInterfaceAndProgrammingPapers";
import FinanceIntroPapers from "./pages/Sem3/ECE/Sem3_ece_PreviousYearPapers/IntroductionToFinancePapers";
import SignalSystemsPapers from "./pages/Sem3/ECE/Sem3_ece_PreviousYearPapers/SignalAndSystemPapers";
import UnnatBharatPapers from "./pages/Sem3/ECE/Sem3_ece_PreviousYearPapers/UnnatBharatAbhiyaanPapers";


// sem 3 lecture pages of ece 

import AnalogNotes from "./pages/Sem3/ECE/Sem3_ece_LectureNotes/AnalogElectronicsAndLinearICsLectureNotes.jsx";
import BiologyNotes from "./pages/Sem3/ECE/Sem3_ece_LectureNotes/BiologyForEngineersLectureNotes.jsx";
import EmFieldNotes from "./pages/Sem3/ECE/Sem3_ece_LectureNotes/ElectromagneticFieldAndWavesLectureNotes.jsx";
import EconomicsNotes from "./pages/Sem3/ECE/Sem3_ece_LectureNotes/IndianEconomicsLectureNotes.jsx";
import MicroprocessorNotes from "./pages/Sem3/ECE/Sem3_ece_LectureNotes/MicroProcessorInterfaceAndProgrammingLectureNotes.jsx";
import FinanceNotes from "./pages/Sem3/ECE/Sem3_ece_LectureNotes/IndianEconomicsLectureNotes.jsx";
import SignalNotes from "./pages/Sem3/ECE/Sem3_ece_LectureNotes/SignalAndSystemsLectureNotes.jsx";
import UnnatBharatNotes from "./pages/Sem3/ECE/Sem3_ece_LectureNotes/UnnatBharatAbhiyaanLectureNotes.jsx";

// sem 3 video routing 
import AnalogElectronicsVideos from "./pages/Sem3/ECE/Sem3_ece_VedioPlaylist/AnalogElectronicsAndLinearICsVideo";
import BiologyEngineersVideos from "./pages/Sem3/ECE/Sem3_ece_VedioPlaylist/BiologyForEngineersVideo";
import EmFieldWavesVideos from "./pages/Sem3/ECE/Sem3_ece_VedioPlaylist/ElectromagneticFieldAndWavesVideo";
import IndianEconomicsVideos from "./pages/Sem3/ECE/Sem3_ece_VedioPlaylist/IndianEconomicsVideo";
import MicroprocessorInterfaceVideos from "./pages/Sem3/ECE/Sem3_ece_VedioPlaylist/MicroprocessorInterfaceAndProgrammingVideo";
import FinanceIntroVideos from "./pages/Sem3/ECE/Sem3_ece_VedioPlaylist/IntroductionToFinanceVideo";
import SignalSystemsVideos from "./pages/Sem3/ECE/Sem3_ece_VedioPlaylist/SignalAndSystemsVideo";
import UnnatBharatVideos from "./pages/Sem3/ECE/Sem3_ece_VedioPlaylist/UnnatBharatAbhiyaanVideo";


// sem 3 it lecture pages import
import IndianEconomicsNotes from "./pages/Sem3/IT/Sem3_it_LectureNotes/IndianEconomicsLectureNotes";
import IntroductionFinanceNotes from "./pages/Sem3/IT/Sem3_it_LectureNotes/IntroductionToFinanceLectureNotes";
import OOPMNotes from "./pages/Sem3/IT/Sem3_it_LectureNotes/ObjectOrientedMethodologiesLectureNotes";
import OperatingSystemNotes from "./pages/Sem3/IT/Sem3_it_LectureNotes/OperatingSystemLectureNotes";
import SoftwareEngineeringNotes from "./pages/Sem3/IT/Sem3_it_LectureNotes/SoftwareEngineeringLectureNotes";
import TheoryComputationNotes from "./pages/Sem3/IT/Sem3_it_LectureNotes/TheoryOfComputationLectureNotes";
import YogaNotes from "./pages/Sem3/IT/Sem3_it_LectureNotes/YogaLectureNotes";



// sem 3 it papers pages import
import IntroductionFinancePapers from "./pages/Sem3/IT/Sem3_it_PreviousYearPapers/IntroductionToFinancePapers";
import OOPMPapers from "./pages/Sem3/IT/Sem3_it_PreviousYearPapers/ObjectOrientedMethodologiesPapers";
import OperatingSystemPapers from "./pages/Sem3/IT/Sem3_it_PreviousYearPapers/OperatingSystemPapers";
import SoftwareEngineeringPapers from "./pages/Sem3/IT/Sem3_it_PreviousYearPapers/SoftwareEngineeringPapers";
import TheoryComputationPapers from "./pages/Sem3/IT/Sem3_it_PreviousYearPapers/TheoryOfComputationPapers";
import YogaPapers from "./pages/Sem3/IT/Sem3_it_PreviousYearPapers/YogaPapers";

// sem 3 it video pages import

import IntroductionFinanceVideos from "./pages/Sem3/IT/Sem3_it_VedioPlaylist/IntroductionToFinanceVideo";
import OOPMVideos from "./pages/Sem3/IT/Sem3_it_VedioPlaylist/ObjectOrientedMethodologiesVideo";
import OperatingSystemVideos from "./pages/Sem3/IT/Sem3_it_VedioPlaylist/OperatingSystemVideo";
import ProbabilityStatisticsVideos from "./pages/Sem3/IT/Sem3_it_VedioPlaylist/ProbabilityAndStatisticsVideo";
import SoftwareEngineeringVideos from "./pages/Sem3/IT/Sem3_it_VedioPlaylist/SoftwareEngineeringVideo";
import TheoryComputationVideos from "./pages/Sem3/IT/Sem3_it_VedioPlaylist/TheoryOfComputationVideo";
import YogaVideos from "./pages/Sem3/IT/Sem3_it_VedioPlaylist/YogaVideo";


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


// sem 3 it bi lecture pages import

import FoundationFintechNotes from "./pages/Sem3/IT_BI/Sem3_itbi_LectureNotes/FoundationsOfFintechLectureNotes";
import PrayasNotes from "./pages/Sem3/IT_BI/Sem3_itbi_LectureNotes/PrayasLectureNotes";

// sem 3 it bi previous year papers pages routing 

import FoundationFintechPapers from "./pages/Sem3/IT_BI/Sem3_itbi_PreviousYearPapers/FoundationsOfFintechPapers";
import PrayasPapers from "./pages/Sem3/IT_BI/Sem3_itbi_PreviousYearPapers/PrayasPapers";

// sem 3 it bi video pages import

import FoundationFintechVideos from "./pages/Sem3/IT_BI/Sem3_itbi_VedioPlaylist/FoundationsOfFintechVideo";
import PrayasVideos from "./pages/Sem3/IT_BI/Sem3_itbi_VedioPlaylist/PrayasVideo";





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
import ProfessionalEthicsVideo from "./pages/Sem2/IT_BI/Sem2_itbi_VedioPlaylist/ProfessionalEthicsVideo.jsx"
// Lecture notes imports (restored)
import EngineeringPhysicsLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/EngineeringPhysicsLectureNotes";
import FundamentalElectricalLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/FundamentalElectricalLectureNotes";
import LinearAlgebraLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/LinearAlgebraLectureNotes";
import ProblemSolvingLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/ProblemSolvingLectureNotes";
import TechnicalCommunicationLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/TechnicalCommunicationLectureNotes";
import ProfessionalEthicsLectureNotes from "./pages/Sem1/Sem1_LecturePlaylist/ProfessionalEthicsLectureNotes";

// Import Sem4 Home Page (used for Sem4 route)
import Sem4_HomePage from "./pages/Sem4/Sem4_HomePage";

// Import new Sem3 Department Home 4
import Sem4_IT_HomePage from "./pages/Sem4/IT/Sem4_IT_Homepage";
import Sem4_ITBI_HomePage from "./pages/Sem4/IT_BI/Sem4_ITBI_Homepage";
import Sem4_ECE_HomePage from "./pages/Sem4/ECE/Sem4_ece_Homepage";
// Import new Sem4 ECE Video, Lecture Notes and Previous Year Papers Pages
import Sem4_ece_VedioPlaylist from "./pages/Sem4/ECE/Sem4_ece_VedioPlaylist/Sem4_ece_Vedio.jsx";
import Sem4_ece_LectureNotes from "./pages/Sem4/ECE/Sem4_ece_LectureNotes/Sem4_ece_LectureNotes.jsx";
import Sem4_ece_PreviousPapers from "./pages/Sem4/ECE/Sem4_ece_PreviousYearPapers/Sem4_ece_PreviousPapers.jsx";

// Import new Sem4 IT Video, Lecture Notes and Previous Year Papers Pages
import Sem4_it_VedioPlaylist from "./pages/Sem4/IT/Sem4_it_VedioPlaylist/Sem4_it_Vedio.jsx";
import Sem4_it_LectureNotes from "./pages/Sem4/IT/Sem4_it_LectureNotes/Sem4_it_LectureNotes.jsx";
import Sem4_it_PreviousPapers from "./pages/Sem4/IT/Sem4_it_PreviousYearPapers/Sem4_it_PreviousPapers.jsx";

// Import new Sem4 IT-BI Video, Lecture Notes and Previous Year Papers Pages
import Sem4_itbi_VedioPlaylist from "./pages/Sem4/IT_BI/Sem4_itbi_VedioPlaylist/Sem4_itbi_Vedio.jsx";
import Sem4_itbi_LectureNotes from "./pages/Sem4/IT_BI/Sem4_itbi_LectureNotes/Sem4_itbi_LectureNotes.jsx";
import Sem4_itbi_PreviousPapers from "./pages/Sem4/IT_BI/Sem4_itbi_PreviousYearPapers/Sem4_itbi_PreviousPapers.jsx";

// sem 4 ece lecture notes pages import 
import AnalogCommunicationNotes from "./pages/Sem4/ECE/Sem4_ece_LectureNotes/AnalogCommunicationLectureNotes";
import AntennaWavePropagationNotes from "./pages/Sem4/ECE/Sem4_ece_LectureNotes/AntennaAndWavePropagationLectureNotes";
import CMOSVLSIDesignNotes from "./pages/Sem4/ECE/Sem4_ece_LectureNotes/CMOS_VLSI_DesignLectureNotes";
import ControlSystemNotes from "./pages/Sem4/ECE/Sem4_ece_LectureNotes/ControlSystemLectureNotes";
import IntegratedCircuitTechNotes from "./pages/Sem4/ECE/Sem4_ece_LectureNotes/IntegratedCircuitTechnologiesLectureNotes";
import MoneyAndBankingNotes from "./pages/Sem4/ECE/Sem4_ece_LectureNotes/MoneyAndBankingLectureNotes";
import NetworkSynthesisFiltersNotes from "./pages/Sem4/ECE/Sem4_ece_LectureNotes/NetworkSynthesisAndAnalogFiltersLectureNotes";
// sem 4 ece previous year papers pages import
import AnalogCommunicationPapers from "./pages/Sem4/ECE/Sem4_ece_PreviousYearPapers/AnalogCommunicationPapers";
import AntennaWavePropagationPapers from "./pages/Sem4/ECE/Sem4_ece_PreviousYearPapers/AntennaAndWavePropagationPapers";
import CMOSVLSIDesignPapers from "./pages/Sem4/ECE/Sem4_ece_PreviousYearPapers/CMOS_VLSI_DesignPapers";
import ControlSystemPapers from "./pages/Sem4/ECE/Sem4_ece_PreviousYearPapers/ControlSystemPapers";
import IntegratedCircuitTechPapers from "./pages/Sem4/ECE/Sem4_ece_PreviousYearPapers/IntegratedCircuitTechnologiesPapers";
import MoneyAndBankingPapers from "./pages/Sem4/ECE/Sem4_ece_PreviousYearPapers/MoneyAndBankingPapers";
import NetworkSynthesisFiltersPapers from "./pages/Sem4/ECE/Sem4_ece_PreviousYearPapers/NetworkSynthesisAndAnalogFiltersPapers";
// sem 4 ece video pages import

import AnalogCommunicationVideos from "./pages/Sem4/ECE/Sem4_ece_VedioPlaylist/AnalogCommunicationVideo";
import AntennaWavePropagationVideos from "./pages/Sem4/ECE/Sem4_ece_VedioPlaylist/AntennaAndWavePropagationVideo";
import CMOSVLSIDesignVideos from "./pages/Sem4/ECE/Sem4_ece_VedioPlaylist/CMOS_VLSI_DesignVideo";
import ControlSystemVideos from "./pages/Sem4/ECE/Sem4_ece_VedioPlaylist/ControlSystemVideo";
import IntegratedCircuitTechVideos from "./pages/Sem4/ECE/Sem4_ece_VedioPlaylist/IntegratedCircuitTechnologiesVideo";
import MoneyAndBankingVideos from "./pages/Sem4/ECE/Sem4_ece_VedioPlaylist/MoneyAndBankingVideo";
import NetworkSynthesisFiltersVideos from "./pages/Sem4/ECE/Sem4_ece_VedioPlaylist/NetworkSynthesisAndAnalogFiltersVideo";

// sem 4 it lecture notes pages import 
import ComputerGraphicsNotes from "./pages/Sem4/IT/Sem4_it_LectureNotes/ComputerGraphicsAndVisulizationLectureNotes";
import ComputerNetworksNotes from "./pages/Sem4/IT/Sem4_it_LectureNotes/ComputerNetworksLectureNotes";
import DBMSNotes from "./pages/Sem4/IT/Sem4_it_LectureNotes/DatabaseManagementSystemLectureNotes";
import DaaNotes from "./pages/Sem4/IT/Sem4_it_LectureNotes/DesignAndAnalysisOfAlgorithmsLectureNotes";
import PrinciplesOfProgrammingNotes from "./pages/Sem4/IT/Sem4_it_LectureNotes/PrinciplesOfProgrammingLanguageLectureNotes";

// sem 4 it previous year pages import

import ComputerGraphicsPapers from "./pages/Sem4/IT/Sem4_it_PreviousYearPapers/ComputerGraphicsAndVisulizationPapers";
import ComputerNetworksPapers from "./pages/Sem4/IT/Sem4_it_PreviousYearPapers/ComputerNetworksPapers";
import DBMSPapers from "./pages/Sem4/IT/Sem4_it_PreviousYearPapers/DatabaseMangementSystemPapers";
import DaaPapers from "./pages/Sem4/IT/Sem4_it_PreviousYearPapers/DesignAndAnalysisOfAlgorithmsPapers";
import PrinciplesOfProgrammingPapers from "./pages/Sem4/IT/Sem4_it_PreviousYearPapers/PrinciplesOfProgrammingLanguagePapers";


import CGVideos from "./pages/Sem4/IT/Sem4_it_VedioPlaylist/ComputerGraphicsAndVisulizationVideo";
import CNVideos from "./pages/Sem4/IT/Sem4_it_VedioPlaylist/ComputerNetworkVideo";
import DBMSVideos from "./pages/Sem4/IT/Sem4_it_VedioPlaylist/DatabaseManagementSystemVideo";
import DSAVideos from "./pages/Sem4/IT/Sem4_it_VedioPlaylist/DesignAndAnalysisOfAlgorithmsVideo";
import MoneyBankingVideos from "./pages/Sem4/IT/Sem4_it_VedioPlaylist/MoneyAndBankingVideo";
import POPVideos from "./pages/Sem4/IT/Sem4_it_VedioPlaylist/PrinciplesOfProgrammingLanguageVideo";

// sem 4 it bi lecture note pages import 

import DigitalMarketingNotes from "./pages/Sem4/IT_BI/Sem4_itbi_LectureNotes/DigitalMarketingLectureNotes";
import ORNotes from "./pages/Sem4/IT_BI/Sem4_itbi_LectureNotes/OperationResearchLectureNotes";

// sem 4 it bi previous year papers

import DigitalMarketingPapers from "./pages/Sem4/IT_BI/Sem4_itbi_PreviousYearPapers/DigitalMarketingPapers";
import ORPapers from "./pages/Sem4/IT_BI/Sem4_itbi_PreviousYearPapers/OperationResearchPapers";

// sem 4 it bi video pages import

import DigitalMarketingVideo from "./pages/Sem4/IT_BI/Sem4_itbi_VedioPlaylist/DigitalMarketingVideo"
import ORVideo from "./pages/Sem4/IT_BI/Sem4_itbi_VedioPlaylist/OperationReasearchVideo"




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
        <Route path="/sem2/data-structures" element={<DataStructures />} />
        <Route path="/sem2/digital-electronics" element={<DigitalElectronics />} />
        <Route path="/sem2/edi" element={<EDI />} />
        <Route path="/sem2/electronic-workshop" element={<ElectronicWorkshop />} />
        <Route path="/sem2/edc" element={<EDC />} />
        <Route path="/sem2/probability-statistics" element={<ProbabilityStatistics />} />
        <Route path="/sem2/physical-education" element={<PhysicalEducation />} />
        <Route path="/sem2/essential-of-business-informatic" element={< EssentialOfBusinessInformaticsVideo />} />

         {/* sem 4 ece video routing */}
        <Route path="/sem4/ece/analog-communication-videos" element={<AnalogCommunicationVideos />} />
        <Route path="/sem4/ece/antenna-wave-propagation-videos" element={<AntennaWavePropagationVideos />} />
        <Route path="/sem4/ece/cmos-vlsi-design-videos" element={<CMOSVLSIDesignVideos />} />
        <Route path="/sem4/ece/control-system-videos" element={<ControlSystemVideos />} />
        <Route path="/sem4/ece/integrated-circuit-tech-videos" element={<IntegratedCircuitTechVideos />} />
        <Route path="/sem4/ece/money-and-banking-videos" element={<MoneyAndBankingVideos/>} />
        <Route path="/sem4/ece/network-synthesis-filters-videos" element={<NetworkSynthesisFiltersVideos />} />


        {/* sem 3 ece video routing */}
        <Route path="/sem3/ece/analog-electronics-videos" element={<AnalogElectronicsVideos />} />
        <Route path="/sem3/ece/biology-engineers-videos" element={<BiologyEngineersVideos />} />
        <Route path="/sem3/ece/em-field-waves-videos" element={<EmFieldWavesVideos />} />
        <Route path="/sem3/ece/indian-economics-videos" element={<IndianEconomicsVideos />} />
        <Route path="/sem3/ece/microprocessor-interface-videos" element={<MicroprocessorInterfaceVideos />} />
        <Route path="/sem3/ece/finance-intro-videos" element={<FinanceIntroVideos />} />
        <Route path="/sem3/ece/signal-systems-videos" element={<SignalSystemsVideos />} />
        <Route path="/sem3/ece/unnat-bharat-videos" element={< UnnatBharatVideos />} />

        {/*  sem 2 it  video  Routes */}
        <Route path="/sem2/data-structures-and-algorithms" element={<DataStructures />} />
        <Route path="/sem2/computer-organization-architecture" element={<ComputerOrganization />} />
        <Route path="/sem2/discrete-mathematical-structures" element={<DiscreteMath />} />
        <Route path="/sem2/principles-of-data-communication" element={<DataCommunication />} />
        <Route path="/sem2/web-development" element={<WebDevelopment />} />
        <Route path="/sem2/physical-education" element={<PhysicalEducation />} />
        <Route path="/sem2/principles-of-management" element={<PrinciplesManagement />} />
        <Route path="/sem2/essential-of-business-informatic" element={<EssentialOfBusinessInformaticsVideo />} />
        <Route path="/sem2/professional-ethics" element={< ProfessionalEthicsVideo />} />


        {/*  sem 3 it  video  Routes */}
        <Route path="/sem3/it/introduction-finance-videos" element={<IntroductionFinanceVideos />} />
        <Route path="/sem3/it/oopm-videos" element={<OOPMVideos />} />
        <Route path="/sem3/it/operating-system-videos" element={<OperatingSystemVideos />} />
        <Route path="/sem3/it/probability-statistics-videos" element={<ProbabilityStatisticsVideos />} />
        <Route path="/sem3/it/software-engineering-videos" element={<SoftwareEngineeringVideos />} />
        <Route path="/sem3/it/theory-computation-videos" element={<TheoryComputationVideos />} />
        <Route path="/sem3/it/indian-economics-videos" element={<IndianEconomicsVideos />} />
        <Route path="/sem3/it/yoga-videos" element={<YogaVideos />} />

        {/* sem 3 it bi video routing */}

        <Route path="/sem3/itbi/introduction-finance-videos" element={<IntroductionFinanceVideos />} />
        <Route path="/sem3/itbi/oopm-videos" element={<OOPMVideos />} />
        <Route path="/sem3/itbi/operating-system-videos" element={<OperatingSystemVideos />} />
        <Route path="/sem3/itbi/probability-statistics-videos" element={<ProbabilityStatisticsVideos />} />
        <Route path="/sem3/itbi/software-engineering-videos" element={<SoftwareEngineeringVideos />} />
        <Route path="/sem3/itbi/foundation-fintech-videos" element={<FoundationFintechVideos />} />
        <Route path="/sem3/itbi/indian-economics-videos" element={<IndianEconomicsVideos />} />
        <Route path="/sem3/itbi/prayas-videos" element={<PrayasVideos />} />

         {/* sem 4 it  video routing */}

        <Route path="/sem4/it/computer-graphics-visualization-videos" element={<CGVideos />} />
        <Route path="/sem4/it/computer-networks-videos" element={<CNVideos />} />
        <Route path="/sem4/it/database-management-system-videos" element={< DBMSVideos />} />
        <Route path="/sem4/it/design-analysis-algorithms-videos" element={<DSAVideos  />} />
        <Route path="/sem4/it/money-and-banking-videos" element={<MoneyBankingVideos />} />
        <Route path="/sem4/it/principles-of-programming-videos" element={<POPVideos />} />


         {/* sem 4 it bi  video routing */}

        <Route path="/sem4/itbi/digital-marketing-videos" element={<DigitalMarketingVideo />} />
        <Route path="/sem4/itbi/computer-networks-videos" element={<CNVideos />} />
        <Route path="/sem4/itbi/database-management-system-videos" element={< DBMSVideos />} />
        <Route path="/sem4/itbi/design-analysis-algorithms-videos" element={<DSAVideos  />} />
        <Route path="/sem4/itbi/money-and-banking-videos" element={<MoneyBankingVideos />} />
        <Route path="/sem4/itbi/operation-research-videos" element={<ORVideo />} />


        {/* sem 4 it bi video routing  */}



            {/* Semester 4 it Previous Year Papers pages routing  */}

        <Route
          path="/sem4/it/computer-graphics-visualization-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ComputerGraphicsPapers />
            </div>
          }
        />
        <Route
          path="/sem4/it/computer-networks-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ComputerNetworksPapers />
            </div>
          }
        />
        <Route
          path="/sem4/it/database-management-system-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DBMSPapers  />
            </div>
          }
        />
        <Route
          path="/sem4/it/design-analysis-algorithms-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DaaPapers />
            </div>
          }
        />
        <Route
          path="/sem4/it/principles-of-programming-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <PrinciplesOfProgrammingPapers />
            </div>
          }
        />
        <Route
          path="/sem4/it/money-and-banking-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <MoneyAndBankingPapers/>
            </div>
          }
        />



           {/* Semester 4 it bi lecture notes pages routing  */}

        <Route
          path="/sem4/itbi/digital-marketing-visualization-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DigitalMarketingNotes/>
            </div>
          }
        />
        <Route
          path="/sem4/itbi/computer-networks-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ComputerNetworksNotes />
            </div>
          }
        />
        <Route
          path="/sem4/itbi/database-management-system-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DBMSNotes  />
            </div>
          }
        />
        <Route
          path="/sem4/itbi/design-analysis-algorithms-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DaaNotes />
            </div>
          }
        />
        <Route
          path="/sem4/itbi/operation-reasearch-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ORNotes />
            </div>
          }
        />
        <Route
          path="/sem4/itbi/money-and-banking-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <MoneyAndBankingNotes/>
            </div>
          }
        />
       




              {/* Semester 4 it bi Previous Year Papers pages routing  */}

        <Route
          path="/sem4/itbi/digital-marketing-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DigitalMarketingPapers />
            </div>
          }
        />
        <Route
          path="/sem4/itbi/computer-networks-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ComputerNetworksPapers />
            </div>
          }
        />
        <Route
          path="/sem4/itbi/database-management-system-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DBMSPapers  />
            </div>
          }
        />
        <Route
          path="/sem4/itbi/design-analysis-algorithms-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DaaPapers />
            </div>
          }
        />
        <Route
          path="/sem4/itbi/operation-research-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ORPapers/>
            </div>
          }
        />
        <Route
          path="/sem4/itbi/money-and-banking-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <MoneyAndBankingPapers/>
            </div>
          }
        />







































          {/* Semester 4 it lecture notes pages routing  */}

        <Route
          path="/sem4/it/computer-graphics-visualization-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ComputerGraphicsNotes />
            </div>
          }
        />
        <Route
          path="/sem4/it/computer-networks-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ComputerNetworksNotes />
            </div>
          }
        />
        <Route
          path="/sem4/it/database-management-system-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DBMSNotes  />
            </div>
          }
        />
        <Route
          path="/sem4/it/design-analysis-algorithms-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <DaaNotes />
            </div>
          }
        />
        <Route
          path="/sem4/it/principles-of-programming-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <PrinciplesOfProgrammingNotes />
            </div>
          }
        />
        <Route
          path="/sem4/it/money-and-banking-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <MoneyAndBankingNotes/>
            </div>
          }
        />
       









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
        
          {/* Semester 4 ece  lecture notes pages routing  */}
          
        <Route
          path="/sem4/ece/analog-communication-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <AnalogCommunicationNotes />
            </div>
          }
        />
        <Route
          path="/sem4/ece/antenna-wave-propagation-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <AntennaWavePropagationNotes />
            </div>
          }
        />
        <Route
          path="/sem4/ece/cmos-vlsi-design-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <CMOSVLSIDesignNotes />
            </div>
          }
        />
        <Route
          path="/sem4/ece/control-system-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ControlSystemNotes />
            </div>
          }
        />
        <Route
          path="/sem4/ece/integrated-circuit-tech-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <IntegratedCircuitTechNotes />
            </div>
          }
        />
        <Route
          path="/sem4/ece/network-synthesis-filters-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <NetworkSynthesisFiltersNotes />
            </div>
          }
        />
         <Route
          path="/sem4/ece/money-and-banking-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <MoneyAndBankingNotes />
            </div>
          }
        />
       
          {/* sem 4 ece previous year  papers pages routing  */}

       <Route
          path="/sem4/ece/analog-communication-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <AnalogCommunicationPapers />
            </div>
          }
        />
        <Route
          path="/sem4/ece/antenna-wave-propagation-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <AntennaWavePropagationPapers />
            </div>
          }
        />
        <Route
          path="/sem4/ece/cmos-vlsi-design-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <CMOSVLSIDesignPapers />
            </div>
          }
        />
        <Route
          path="/sem4/ece/control-system-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ControlSystemPapers />
            </div>
          }
        />
        <Route
          path="/sem4/ece/integrated-circuit-tech-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <IntegratedCircuitTechPapers />
            </div>
          }
        />
        <Route
          path="/sem4/ece/network-synthesis-filters-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <NetworkSynthesisFiltersPapers />
            </div>
          }
        />
         <Route
          path="/sem4/ece/money-and-banking-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <MoneyAndBankingPapers />
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
              <ProfessionalEthicsLectureNotes />
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
              <WebDevelopmentNotes />
            </div>
          }
        />



        {/* sem 3 it lecture notes routing  */}

        <Route
          path="/sem3/it/indian-economics-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <IndianEconomicsNotes />
            </div>
          }
        />

        <Route
          path="/sem3/it/introduction-finance-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <IntroductionFinanceNotes />
            </div>
          }
        />
        <Route
          path="/sem3/it/oopm-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <OOPMNotes />
            </div>
          }
        />
        <Route
          path="/sem3/it/operating-system-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <OperatingSystemNotes />
            </div>
          }
        />
        <Route
          path="/sem3/it/software-engineering-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <SoftwareEngineeringNotes />
            </div>
          }
        />
        <Route
          path="/sem3/it/theory-computation-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <TheoryComputationNotes />
            </div>
          }
        />
        <Route
          path="/sem3/it/yoga-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <YogaNotes />
            </div>
          }
        />
        <Route
          path="/sem3/it/probability-statistics-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ProbabilityStatisticsNotes />
            </div>
          }
        />



        {/* sem 3 it bi lecture notes routing  */}

        <Route
          path="/sem3/itbi/indian-economics-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <IndianEconomicsNotes />
            </div>
          }
        />

        <Route
          path="/sem3/itbi/introduction-finance-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <IntroductionFinanceNotes />
            </div>
          }
        />
        <Route
          path="/sem3/itbi/oopm-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <OOPMNotes />
            </div>
          }
        />
        <Route
          path="/sem3/itbi/operating-system-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <OperatingSystemNotes />
            </div>
          }
        />
        <Route
          path="/sem3/itbi/software-engineering-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <SoftwareEngineeringNotes />
            </div>
          }
        />
        <Route
          path="/sem3/itbi/foundation-fintech-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <FoundationFintechNotes />
            </div>
          }
        />
        <Route
          path="/sem3/itbi/prayas-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <PrayasNotes />
            </div>
          }
        />
        <Route
          path="/sem3/itbi/probability-statistics-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ProbabilityStatisticsNotes />
            </div>
          }
        />
        <Route
          path="/sem2/web-development-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <WebDevelopmentNotes />
            </div>
          }
        />



        {/* Semester 3  ECE page of lecture notes routing  */}
        <Route
          path="/sem3/ece/analog-electronics-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <AnalogNotes />
            </div>
          }
        />
        <Route
          path="/sem3/ece/biology-engineers-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <BiologyNotes />
            </div>
          }
        />
        <Route
          path="/sem3/ece/em-field-waves-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <EmFieldNotes />
            </div>
          }
        />
        <Route
          path="/sem3/ece/indian-economics-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <EconomicsNotes />
            </div>
          }
        />
        <Route
          path="/sem3/ece/microprocessor-interface-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              < MicroprocessorNotes />
            </div>
          }
        />
        <Route
          path="/sem3/ece/finance-intro-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <FinanceNotes />
            </div>
          }
        />
        <Route
          path="/sem3/ece/signal-systems-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <SignalNotes />
            </div>
          }
        />
        <Route
          path="/sem3/ece/unnat-bharat-notes"
          element={
            <div className="w-screen bg-black min-h-screen">
              <UnnatBharatNotes />
            </div>
          }
        />



        {/* Semester 2 ECE Main Page */}
        <Route path="/sem2" element={<Sem2_ece_PreviousYearPapers />} />
        {/* sem 2 ece papers  routing  */}
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

        {/* sem 3 it papers routing */}


        <Route
          path="/sem3/it/introduction-finance-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <IntroductionFinancePapers />
            </div>
          }
        />
        <Route
          path="/sem3/it/oopm-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <OOPMPapers />
            </div>
          }
        />
        <Route
          path="/sem3/it/operating-system-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <OperatingSystemPapers />
            </div>
          }
        />
        <Route
          path="/sem3/it/software-engineering-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <SoftwareEngineeringPapers />
            </div>
          }
        />
        <Route
          path="/sem3/it/theory-computation-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <TheoryComputationPapers />
            </div>
          }
        />
        <Route
          path="/sem3/it/yoga-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <YogaPapers />
            </div>
          }
        />
        <Route
          path="/sem3/it/probability-statistics-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ProbabilityStatisticsPaper />
            </div>
          }
        />

        <Route
          path="/sem3/it/indian-economics-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <IndianEconomicsPapers />
            </div>
          }
        />




        {/* sem 3 it bi papers routing */}


        <Route
          path="/sem3/itbi/introduction-finance-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <IntroductionFinancePapers />
            </div>
          }
        />
        <Route
          path="/sem3/itbi/oopm-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <OOPMPapers />
            </div>
          }
        />
        <Route
          path="/sem3/itbi/operating-system-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <OperatingSystemPapers />
            </div>
          }
        />
        <Route
          path="/sem3/itbi/software-engineering-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <SoftwareEngineeringPapers />
            </div>
          }
        />
        <Route
          path="/sem3/itbi/foundation-fintech-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <FoundationFintechPapers />
            </div>
          }
        />
        <Route
          path="/sem3/itbi/prayas-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <PrayasPapers />
            </div>
          }
        />
        <Route
          path="/sem3/itbi/probability-statistics-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <ProbabilityStatisticsPaper />
            </div>
          }
        />

        <Route
          path="/sem3/itbi/indian-economics-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <IndianEconomicsPapers />
            </div>
          }
        />


        {/* sem 3 ece papers  routing  */}
        <Route
          path="/sem3/ece/analog-electronics-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <AnalogElectronicsPapers />
            </div>
          }
        />
        <Route
          path="/sem3/ece/biology-engineers-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <BiologyEngineersPapers />
            </div>
          }
        />
        <Route
          path="/sem3/ece/em-field-waves-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <EmFieldWavesPapers />
            </div>
          }
        />
        <Route
          path="/sem3/ece/indian-economics-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <IndianEconomicsPapers />
            </div>
          }
        />
        <Route
          path="/sem3/ece/microprocessor-interface-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <MicroprocessorInterfacePapers />
            </div>
          }
        />
        <Route
          path="/sem3/ece/finance-intro-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <FinanceIntroPapers />
            </div>
          }
        />
        <Route
          path="/sem3/ece/signal-systems-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <SignalSystemsPapers />
            </div>
          }
        />
        <Route
          path="/sem3/ece/unnat-bharat-papers"
          element={
            <div className="w-screen bg-black min-h-screen">
              <UnnatBharatPapers />
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
        <Route path="/sem3/it/vedioplaylist" element={<Sem3_it_VedioPlaylist />} />
        <Route path="/sem3/it/lecturenotes" element={<Sem3_it_LectureNotes />} />
        <Route path="/sem3/it/previouspapers" element={<Sem3_it_PreviousPapers />} />

        {/* Sem3 IT-BI Video, Lecture Notes and Previous Year Papers Routes */}
        <Route path="/sem3/itbi/vedioplaylist" element={<Sem3_itbi_VedioPlaylist />} />
        <Route path="/sem3/itbi/lecturenotes" element={<Sem3_itbi_LectureNotes />} />
        <Route path="/sem3/itbi/previouspapers" element={<Sem3_itbi_PreviousPapers />} />


         {/* Sem4 Routes */}
        <Route path="/sem4_home" element={<Sem4_HomePage />} />


        {/* Sem4 Department Routes */}
        <Route path="/sem4/it" element={<Sem4_IT_HomePage />} />
        <Route path="/sem4/itbi" element={<Sem4_ITBI_HomePage />} />
        <Route path="/sem4/ece" element={<Sem4_ECE_HomePage />} />

        {/* Sem4 ECE Video, Lecture Notes and Previous Year Papers Routes */}
        <Route path="/sem4/ece/vedioplaylist" element={<Sem4_ece_VedioPlaylist />} />
        <Route path="/sem4/ece/lecturenotes" element={<Sem4_ece_LectureNotes />} />
        <Route path="/sem4/ece/previouspapers" element={<Sem4_ece_PreviousPapers />} />

        {/* Sem4 IT Video, Lecture Notes and Previous Year Papers Routes */}
        <Route path="/sem4/it/vedioplaylist" element={<Sem4_it_VedioPlaylist />} />
        <Route path="/sem4/it/lecturenotes" element={<Sem4_it_LectureNotes />} />
        <Route path="/sem4/it/previouspapers" element={<Sem4_it_PreviousPapers />} />

        {/* Sem4 IT-BI Video, Lecture Notes and Previous Year Papers Routes */}
        <Route path="/sem4/itbi/vedioplaylist" element={<Sem4_itbi_VedioPlaylist />} />
        <Route path="/sem4/itbi/lecturenotes" element={<Sem4_itbi_LectureNotes />} />
         <Route path="/sem4/itbi/previouspapers" element={<Sem4_itbi_PreviousPapers />} />     


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
