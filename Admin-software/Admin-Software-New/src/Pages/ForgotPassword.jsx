import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleicon from "../assets/Images/book.png";
import fbicon from "../assets/Images/book.png";
import logo from "../assets/images/book.png"; // Import your logo image
import { useAuth } from "../Contexts/AuthContext";
 
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
 
  const navigate = useNavigate();
 
  const handleClick = (e) => {
    e.preventDefault(); // Prevent form submission
    if (email) {
      navigate("/otp"); // Redirect if email is filled
    }
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
              Forgot Password ?
            </h2>
          </div>
          <form>
            <div className="form-group py-2">
              <label htmlFor="email" style={{ color: "white" }}>
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Your Email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                required
              />
            </div>
 
            <div className="d-flex justify-content-center align-items-center py-2">
              <button
                type="submit"
                onClick={handleClick}
                style={{
                  width: "50%",
                  padding: "10px",
                  backgroundColor: "#003465", // Button color depends on email input
                  color: "#fff",
                  borderRadius: "5px",
                  border: "none",
                  cursor: email ? "pointer" : "not-allowed", // Disable cursor if email is empty
                }}
                disabled={!email} // Disable button when email is empty
              >
                Enter
              </button>
            </div>
            <div
              style={{ textAlign: "center", margin: "20px 0", color: "white" }}
            >
              OTP will be sent to your email id
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
 
export default ForgotPassword;
 