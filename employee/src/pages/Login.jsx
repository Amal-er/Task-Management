import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleicon from "../assets/icons/google.png";
import fbicon from "../assets/icons/fb.png";
import logo from "../assets/images/loginlogo.png"; // Import your logo image
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  // Mock login function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Get login function from AuthContext
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = login(email, password); // Call login from AuthContext
    if (isValid) {
      navigate("/dashboard"); // Redirect on successful login
    } else {
      alert("Invalid credentials"); // Show error on failed login
    }
  };

  const handleforgot = () => {
    navigate("/forgotpassword");
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center login-container">
      {/* Logo placed outside the box in the top-right */}
      <img src={logo} alt="Logo" className="logo-image" />
      <div className="row justify-content-end w-100">
        <div className="col-12 col-md-6 col-lg-4 login-box p-4">
          <div>
            <h2
              style={{
                textAlign: "left",
                marginBottom: "20px",
                color: "white",
                paddingTop: "50px",
              }}
            >
              Login
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group py-2">
              <label htmlFor="email" style={{ color: "white" }}>
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                required
              />
            </div>
            <div className="form-group py-2">
              <label htmlFor="password" style={{ color: "white" }}>
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                required
              />
            </div>
            <div className="form-group text-right py-3">
              <p
                style={{ color: "white", cursor: "pointer" }}
                onClick={handleforgot}
              >
                Forgot password?
              </p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button
                type="submit"
                style={{
                  width: "50%",
                  padding: "10px",
                  backgroundColor: "#003465",
                  color: "#fff",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Sign in
              </button>
            </div>
            <div
              style={{ textAlign: "center", margin: "20px 0", color: "white" }}
            >
              or continue with
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
                gap: "30px",
              }}
            >
              <button
                type="button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                }}
              >
                <img
                  src={googleicon}
                  alt="Google Icon"
                  style={{ width: "20px", marginRight: "10px" }}
                />
                Google
              </button>
              <button
                type="button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                }}
              >
                <img
                  src={fbicon}
                  alt="Facebook Icon"
                  style={{ width: "20px", marginRight: "10px" }}
                />
                Facebook
              </button>
            </div>
            <div className="text-center mt-3">
              <p className="" style={{ color: "white" }}>
                Don't have an account? <a href="#">Signup</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
