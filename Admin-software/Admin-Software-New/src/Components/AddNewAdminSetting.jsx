 
import React, { useState } from "react";
 
function AddNewAdminSetting({ onClose, onSave, initialData, onInputChange }) {
  const [tempData, setTempData] = useState({ ...initialData }); // Initialize with initialData
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData({ ...tempData, [name]: value }); // Update temporary data
  };
 
  // console.log(tempData.name);
 
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "3px dotted #3498db", // Dotted border
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <div>
            {/*--------------------- Name Input-------------------- */}
            <div
              style={{
                border: "0.25px solid #cccccc",
                padding: "10px",
                marginBottom: "10px",
                maxWidth: "100%",
                display: "flex",
                alignItems: "center", // Aligns items vertically in the center
                justifyContent: "space-between",
                // Space between label and input
              }}
            >
              <label
                className="settingsText custom-blue"
                style={{ marginRight: "10px" }} // Adds spacing if necessary
              >
                Name:
              </label>
              <input
                className="custom-blue "
                type="text"
                name="name"
                value={initialData.name}
                onChange={onInputChange}
                style={{
                  width: "200px", // Set a fixed width or adjust as necessary
                  border: "none",
                  outline: "none",
                  textAlign: "right", // Aligns the input text to the right
                }}
              />
            </div>
 
            {/*----------------- Designation Input----------------- */}
            <div
              style={{
                border: "0.25px solid #cccccc",
                padding: "10px",
                marginBottom: "10px",
                maxWidth: "100%",
                display: "flex",
                alignItems: "center", // Aligns items vertically in the center
                justifyContent: "space-between",
                // Space between label and input
              }}
            >
              <label className="settingsText custom-blue">Designation:</label>
              <input
                className="custom-blue"
                type="text"
                name="designation"
                value={initialData.designation}
                onChange={onInputChange}
                style={{
                  width: "200px", // Set a fixed width or adjust as necessary
                  border: "none",
                  outline: "none",
                  textAlign: "right", // Aligns the input text to the right
                }}
              />
            </div>
            {/*------------------- Username Input--------------------- */}
            <div
              style={{
                border: "0.25px solid #cccccc",
                padding: "10px",
                marginBottom: "10px",
                maxWidth: "100%",
                display: "flex",
                alignItems: "center", // Aligns items vertically in the center
                justifyContent: "space-between",
                // Space between label and input
              }}
            >
              <label className="settingsText custom-blue">User Name:</label>
              <input
                className="custom-blue"
                type="text"
                name="username"
                value={initialData.username}
                onChange={onInputChange}
                style={{
                  width: "200px", // Set a fixed width or adjust as necessary
                  border: "none",
                  outline: "none",
                  textAlign: "right", // Aligns the input text to the right
                }}
              />
            </div>
            {/*---------------------- Password Input--------------------- */}
 
            <div
              style={{
                border: "0.25px solid #cccccc",
                padding: "10px",
                marginBottom: "10px",
                maxWidth: "100%",
                display: "flex",
                alignItems: "center", // Aligns items vertically in the center
                justifyContent: "space-between",
                // Space between label and input
              }}
            >
              <label className="settingsText custom-blue">Password:</label>
              <input
                className="custom-blue"
                type="password"
                name="password"
                value={initialData.password}
                onChange={onInputChange}
                style={{
                  width: "200px", // Set a fixed width or adjust as necessary
                  border: "none",
                  outline: "none",
                  textAlign: "right", // Aligns the input text to the right
                }}
              />
            </div>
            {/*------------------ Phone Number Input-------------------- */}
            <div
              style={{
                border: "0.25px solid #cccccc",
                padding: "10px",
                marginBottom: "10px",
                maxWidth: "100%",
                display: "flex",
                alignItems: "center", // Aligns items vertically in the center
                justifyContent: "space-between",
                // Space between label and input
              }}
            >
              <label className="settingsText custom-blue">phone no:</label>
              <input
                className="custom-blue"
                type="phone"
                name="phone"
                value={initialData.phone}
                onChange={onInputChange}
                style={{
                  width: "200px", // Set a fixed width or adjust as necessary
                  border: "none",
                  outline: "none",
                  textAlign: "right", // Aligns the input text to the right
                }}
              />
            </div>
 
            {/*-------------------- Permissions Select--------------------- */}
            <div
              className="custom-blue"
              style={{
                border: "0.25px solid #cccccc",
                padding: "10px",
                marginBottom: "10px",
                display: "flex",
                borderRadius: "10px",
                width: "200px",
              }}
            >
              <label className="settingsText custom-blue">Permissions:</label>
              <select
                className="custom-blue"
                name="permissions"
                value={tempData.permissions || ""}
                onChange={handleInputChange}
                style={{ width: "100%", border: "none", outline: "none" }}
              >
                {/* <option value="">Select Permission</option> */}
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            {/*------------------------ Modal Actions---------------------- */}
          </div>
 
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <button
              onClick={onClose}
              style={{
                backgroundColor: "#ff4d4f",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                marginRight: "10px",
              }}
            >
              Cancel
            </button>
            <button
              onClick={onSave} // Pass the edited data back to the parent component
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              Save
            </button>
          </div>
 
          {/* -------------------------------------------------------- */}
        </div>
      </div>
      
    </div>
  );
}
 
export default AddNewAdminSetting;