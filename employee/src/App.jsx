import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { TasksProvider } from "./contexts/TasksContext";

const App = () => {
  return (
    <TasksProvider>
      <Router>
        <Dashboard />
      </Router>
    </TasksProvider>
  );
};

export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import { TasksProvider } from "./contexts/TasksContext";
// import { AuthProvider, useAuth } from "./contexts/AuthContext";
// import ForgotPassword from "./pages/ForgotPassword";
// import OtpPage from "./pages/OtpPage";
// import ResetPassword from "./pages/ResetPassword";

// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <TasksProvider>
//         <Router>
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/forgotpassword" element={<ForgotPassword />} />
//             <Route path="/otp" element={<OtpPage />} />
//             <Route path="/reset-password" element={<ResetPassword />} />

//             <Route
//               path="/dashboard"
//               element={
//                 <PrivateRoute>
//                   <Dashboard />
//                 </PrivateRoute>
//               }
//             />
//           </Routes>
//         </Router>
//       </TasksProvider>
//     </AuthProvider>
//   );
// };

// export default App;
