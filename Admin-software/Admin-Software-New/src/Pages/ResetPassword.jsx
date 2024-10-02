import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/book.png";
import { useAuth } from "../Contexts/AuthContext"; // Import Auth context
 
const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
 
  const navigate = useNavigate();
  const { resetPassword } = useAuth(); // Access the resetPassword function
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate if newPassword and confirmPassword match
    if (newPassword === confirmPassword) {
      resetPassword(newPassword); // Call the resetPassword function
      navigate("/login"); // Redirect to login page after password reset
    } else {
      setErrorMessage("Passwords do not match!");
    }
  };
 
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center login-container">
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
              Reset Password
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group py-2">
              <label htmlFor="newPassword" style={{ color: "white" }}>
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                placeholder="Enter a new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group py-2">
              <label htmlFor="confirmPassword" style={{ color: "white" }}>
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Re-enter the new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
 
            {errorMessage && (
              <div style={{ color: "red", textAlign: "center" }}>
                {errorMessage}
              </div>
            )}
 
            <div className="d-flex justify-content-center align-items-center py-3">
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
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
 
export default ResetPassword;