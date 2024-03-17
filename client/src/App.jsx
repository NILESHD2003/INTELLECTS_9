import { useState } from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Components/Header";

import Create_Job from "./Pages/Create_Job";
import Otp_page from "./Pages/Otp_page";
import Post from "./Pages/Post";
import Single_info from "./Pages/Single_info";
function App() {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);
  const { isLoading, isLoggedIn } = useSelector((state) => state.user);

  const handleLogout = () => {
    // Dispatch logout action
    // dispatch(logout());
  };

  return (
    <Router>
      <Header />
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home handleLogout={handleLogout} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/createjob" element={<Create_Job />} />
            <Route path="/post" element={<Post />} />
            <Route path="/post/:id" element={<Single_info />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/otp" element={<Otp_page />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;
