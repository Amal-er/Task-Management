import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleicon from "../assets/icons/google.png";
import fbicon from "../assets/icons/fb.png";
import logo from "../assets/images/whitelogo.png"; // Import your logo image

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Mock correct OTP for validation
  const correctOtp = "123456"; // This would come from the backend in a real application

  const handleClick = (e) => {
    e.preventDefault();
    // Check if entered OTP matches the correct OTP
    if (otp === correctOtp) {
      // Navigate to the reset password page or show a success message
      navigate("/reset-password"); // Redirecting to reset password page
    } else {
      // Show an error message if OTP is incorrect
      setErrorMessage("Incorrect OTP. Please try again.");
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
              Enter OTP
            </h2>
          </div>
          <form>
            <div className="form-group py-2">
              <label htmlFor="otp" style={{ color: "white" }}>
                OTP
              </label>
              <input
                type="text"
                className="form-control"
                id="otp"
                placeholder="Enter Your OTP number"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>

            {errorMessage && (
              <div style={{ color: "red", textAlign: "center" }}>
                {errorMessage}
              </div>
            )}

            <div className="d-flex justify-content-center align-items-center py-2">
              <button
                type="submit"
                onClick={handleClick}
                style={{
                  width: "50%",
                  padding: "10px",
                  backgroundColor: "#003465",
                  color: "#fff",
                  borderRadius: "5px",
                  border: "none",
                  cursor: otp ? "pointer" : "not-allowed", // Disable pointer if no OTP is entered
                }}
              >
                Enter
              </button>
            </div>
            <div
              style={{ textAlign: "center", margin: "20px 0", color: "white" }}
            >
              Didn’t receive the OTP ?{" "}
              <span className="resendotp"> Resend OTP</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
