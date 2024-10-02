// import React from "react";
// import { FaSignOutAlt } from "react-icons/fa";
// import profilePic from "../assets/images/girl.png"; // replace with the correct path
// import editIcon from "../assets/icons/edit.png"; // replace with the correct path
// import eye from "../assets/icons/eye.png";
// import camera from "../assets/icons/camera.png";

// function Settings() {
//   return (
//     <div
//       style={{
//         backgroundColor: "#E2EBFC",
//         minHeight: "100vh",
//         padding: "50px",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "white",
//           padding: "20px",
//           borderRadius: "10px",
//           paddingTop: "50px",
//           paddingBottom: "100px",
//         }}
//       >
//         <h4 className="settingHead">Settings</h4>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             flexWrap: "wrap",
//           }}
//         >
//           <div style={{ flex: 1, minWidth: "250px" }}>
//             <p className="settingsText py-2">Profile</p>
//             <div
//               style={{
//                 border: "0.25px solid #cccccc",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 maxWidth: "100%",
//               }}
//             >
//               <p
//                 style={{
//                   margin: 0,
//                   display: "flex",
//                   justifyContent: "space-between",
//                   paddingLeft: "30px",
//                   paddingRight: "20px",
//                 }}
//               >
//                 <span className="settingsText">Name</span>
//                 <span className="settingsText">Anu S R</span>
//               </p>
//             </div>
//             <div
//               style={{
//                 border: "0.25px solid #cccccc",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 maxWidth: "100%",
//               }}
//             >
//               <p
//                 style={{
//                   margin: 0,
//                   display: "flex",
//                   justifyContent: "space-between",
//                   paddingLeft: "30px",
//                   paddingRight: "20px",
//                 }}
//               >
//                 <span className="settingsText">Designation</span>
//                 <span className="settingsText">UI/UX Designer</span>
//               </p>
//             </div>
//             <div
//               style={{
//                 border: "0.25px solid #cccccc",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 maxWidth: "100%",
//               }}
//             >
//               <p
//                 style={{
//                   margin: 0,
//                   display: "flex",
//                   justifyContent: "space-between",
//                   paddingLeft: "30px",
//                   paddingRight: "20px",
//                 }}
//               >
//                 <span className="settingsText">User name</span>
//                 <span className="settingsText">Anu2@gmail.com</span>
//               </p>
//             </div>
//             <div
//               style={{
//                 border: "0.25px solid #cccccc",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 maxWidth: "100%",
//               }}
//             >
//               <p
//                 style={{
//                   margin: 0,
//                   display: "flex",
//                   justifyContent: "space-between",
//                   paddingLeft: "30px",
//                   paddingRight: "20px",
//                 }}
//               >
//                 <span className="settingsText">User id</span>
//                 <span className="settingsText">AB234</span>
//               </p>
//             </div>
//             <div
//               style={{
//                 border: "0.25px solid #cccccc",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 maxWidth: "100%",
//               }}
//             >
//               <p
//                 style={{
//                   margin: 0,
//                   display: "flex",
//                   justifyContent: "space-between",
//                   paddingLeft: "30px",
//                   paddingRight: "20px",
//                 }}
//               >
//                 <span className="settingsText">Phone no</span>
//                 <span className="settingsText">
//                   +91 9821341187{" "}
//                   <img
//                     src={editIcon}
//                     alt="Edit"
//                     style={{
//                       marginLeft: "5px",
//                       cursor: "pointer",
//                       width: "16px",
//                       height: "16px",
//                     }}
//                   />
//                 </span>
//               </p>
//             </div>
//             <div
//               style={{
//                 border: "0.25px solid #cccccc",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 maxWidth: "100%",
//               }}
//             >
//               <p
//                 style={{
//                   margin: 0,
//                   display: "flex",
//                   justifyContent: "space-between",
//                   paddingLeft: "30px",
//                   paddingRight: "20px",
//                 }}
//               >
//                 <span className="settingsText">Password</span>
//                 <span className="settingsText">
//                   **********
//                   <img
//                     src={eye}
//                     alt="Edit"
//                     style={{
//                       marginLeft: "5px",
//                       cursor: "pointer",
//                       width: "16px",
//                       height: "16px",
//                     }}
//                   />
//                 </span>
//               </p>
//             </div>

//             <div
//               className="py-0 d-flex px-5 pt-2"
//               style={{
//                 border: "0.25px solid #cccccc", // Lighter and thinner border
//                 maxWidth: "100%",
//               }}
//             >
//               <p
//                 className=""
//                 style={{
//                   display: "flex",
//                   alignItems: "center", // Ensure icon and text are aligned
//                   gap: "3px", // Adjust the gap between icon and text
//                 }}
//               >
//                 <FaSignOutAlt style={{ color: "#4A90E2" }} />{" "}
//                 <span>Logout</span>
//               </p>
//             </div>
//           </div>
//           <div
//             style={{
//               position: "relative",
//               textAlign: "center",
//               marginTop: "20px",
//               flexShrink: 0,
//               marginLeft: "20px",
//             }}
//           >
//             <img
//               src={profilePic}
//               alt="Profile"
//               style={{
//                 width: "110px",
//                 height: "110px",
//                 borderRadius: "50%",
//                 objectFit: "cover",
//               }}
//             />
//             <img
//               src={camera}
//               sizes="25px"
//               alt="Camera"
//               style={{
//                 position: "absolute",
//                 bottom: "32px", // Adjust as needed
//                 right: "32px", // Adjust as needed
//                 width: "40px",
//                 height: "40px",
//                 cursor: "pointer",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Settings;

// import React from "react";
// import { FaSignOutAlt } from "react-icons/fa";
// import profilePic from "../assets/images/girl.png"; // replace with the correct path
// import editIcon from "../assets/icons/edit.png"; // replace with the correct path
// import eye from "../assets/icons/eye.png";
// import camera from "../assets/icons/camera.png";

// function Settings() {
//   return (
//     <div
//       style={{
//         backgroundColor: "#E2EBFC",
//         minHeight: "100vh",
//         padding: "50px",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "white",
//           padding: "20px",
//           borderRadius: "10px",
//           paddingTop: "50px",
//           paddingBottom: "100px",
//         }}
//       >
//         <h4 className="settingHead">Settings</h4>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             flexWrap: "wrap",
//           }}
//         >
//           <div style={{ flex: 1, minWidth: "250px" }}>
//             <p className="settingsText py-2">Profile</p>
//             <div
//               style={{
//                 border: "0.25px solid #cccccc",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 maxWidth: "100%",
//               }}
//             >
//               <p
//                 style={{
//                   margin: 0,
//                   display: "flex",
//                   justifyContent: "space-between",
//                   paddingLeft: "30px",
//                   paddingRight: "20px",
//                 }}
//               >
//                 <span className="settingsText">Name</span>
//                 <span className="settingsText">Anu S R</span>
//               </p>
//             </div>
//             <div
//               style={{
//                 border: "0.25px solid #cccccc",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 maxWidth: "100%",
//               }}
//             >
//               <p
//                 style={{
//                   margin: 0,
//                   display: "flex",
//                   justifyContent: "space-between",
//                   paddingLeft: "30px",
//                   paddingRight: "20px",
//                 }}
//               >
//                 <span className="settingsText">Designation</span>
//                 <span className="settingsText">UI/UX Designer</span>
//               </p>
//             </div>
//             <div
//               style={{
//                 border: "0.25px solid #cccccc",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 maxWidth: "100%",
//               }}
//             >
//               <p
//                 style={{
//                   margin: 0,
//                   display: "flex",
//                   justifyContent: "space-between",
//                   paddingLeft: "30px",
//                   paddingRight: "20px",
//                 }}
//               >
//                 <span className="settingsText">User name</span>
//                 <span className="settingsText">Anu2@gmail.com</span>
//               </p>
//             </div>
//             <div
//               style={{
//                 border: "0.25px solid #cccccc",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 maxWidth: "100%",
//               }}
//             >
//               <p
//                 style={{
//                   margin: 0,
//                   display: "flex",
//                   justifyContent: "space-between",
//                   paddingLeft: "30px",
//                   paddingRight: "20px",
//                 }}
//               >
//                 <span className="settingsText">User id</span>
//                 <span className="settingsText">AB234</span>
//               </p>
//             </div>
//             <div
//               style={{
//                 border: "0.25px solid #cccccc",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 maxWidth: "100%",
//               }}
//             >
//               <p
//                 style={{
//                   margin: 0,
//                   display: "flex",
//                   justifyContent: "space-between",
//                   paddingLeft: "30px",
//                   paddingRight: "20px",
//                 }}
//               >
//                 <span className="settingsText">Phone no</span>
//                 <span className="settingsText">
//                   +91 9821341187{" "}
//                   <img
//                     src={editIcon}
//                     alt="Edit"
//                     style={{
//                       marginLeft: "5px",
//                       cursor: "pointer",
//                       width: "16px",
//                       height: "16px",
//                     }}
//                   />
//                 </span>
//               </p>
//             </div>
//             <div
//               style={{
//                 border: "0.25px solid #cccccc",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 maxWidth: "100%",
//               }}
//             >
//               <p
//                 style={{
//                   margin: 0,
//                   display: "flex",
//                   justifyContent: "space-between",
//                   paddingLeft: "30px",
//                   paddingRight: "20px",
//                 }}
//               >
//                 <span className="settingsText">Password</span>
//                 <span className="settingsText">
//                   **********
//                   <img
//                     src={eye}
//                     alt="Edit"
//                     style={{
//                       marginLeft: "5px",
//                       cursor: "pointer",
//                       width: "16px",
//                       height: "16px",
//                     }}
//                   />
//                 </span>
//               </p>
//             </div>

//             <div
//               className="py-0 d-flex px-5 pt-2"
//               style={{
//                 border: "0.25px solid #cccccc", // Lighter and thinner border
//                 maxWidth: "100%",
//               }}
//             >
//               <p
//                 className=""
//                 style={{
//                   display: "flex",
//                   alignItems: "center", // Ensure icon and text are aligned
//                   gap: "3px", // Adjust the gap between icon and text
//                 }}
//               >
//                 <FaSignOutAlt style={{ color: "#4A90E2" }} />{" "}
//                 <span>Logout</span>
//               </p>
//             </div>
//           </div>

//           <div>
//             <img src={editIcon} alt="" />
//           </div>

//           <div
//             style={{
//               position: "relative",
//               textAlign: "center",
//               marginTop: "20px",
//               flexShrink: 0,
//               marginLeft: "20px",
//             }}
//           >
//             <img
//               src={profilePic}
//               alt="Profile"
//               style={{
//                 width: "110px",
//                 height: "110px",
//                 borderRadius: "50%",
//                 objectFit: "cover",
//               }}
//             />
//             <img
//               src={camera}
//               sizes="25px"
//               alt="Camera"
//               style={{
//                 position: "absolute",
//                 bottom: "32px", // Adjust as needed
//                 right: "32px", // Adjust as needed
//                 width: "40px",
//                 height: "40px",
//                 cursor: "pointer",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Settings;

import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import profilePic from "../assets/images/girl.png"; // Replace with the correct path to your image
import editIcon from "../assets/icons/edit.png"; // Replace with the correct path
import eye from "../assets/icons/eye.png";
import camera from "../assets/icons/camera.png";
import Modal from "../components/Modal"; // Import Modal component

function Settings() {
  const [userData, setUserData] = useState({
    name: "Anu S R",
    designation: "UI/UX Designer",
    username: "Anu2@gmail.com",
    userId: "AB234",
    phone: "+91 9821341187",
    password: "**********",
  });

  // State to manage the modal's open/close state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to temporarily hold data in the modal before saving
  const [tempData, setTempData] = useState({ ...userData });

  // Open the modal and set tempData to the current user data
  const handleEditClick = () => {
    setTempData({ ...userData });
    setIsModalOpen(true);
  };

  // Handle modal input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific field in tempData
    }));
  };

  // Save changes from the modal to the main state
  const handleSave = () => {
    setUserData(tempData); // Update userData with tempData
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div
      style={{
        backgroundColor: "#E2EBFC",
        minHeight: "100vh",
        padding: "50px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          paddingTop: "50px",
          paddingBottom: "100px",
        }}
      >
        <h4 className="settingHead">Settings</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: "250px" }}>
            <p className="settingsText py-2">Profile</p>
            <div
              style={{
                border: "0.25px solid #cccccc",
                padding: "10px",
                marginBottom: "10px",
                maxWidth: "100%",
              }}
            >
              <p
                style={{
                  margin: 0,
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "30px",
                  paddingRight: "20px",
                }}
              >
                <span className="settingsText">Name</span>
                <span className="settingsText">{userData.name}</span>
              </p>
            </div>
            <div
              style={{
                border: "0.25px solid #cccccc",
                padding: "10px",
                marginBottom: "10px",
                maxWidth: "100%",
              }}
            >
              <p
                style={{
                  margin: 0,
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "30px",
                  paddingRight: "20px",
                }}
              >
                <span className="settingsText">Designation</span>
                <span className="settingsText">{userData.designation}</span>
              </p>
            </div>
            <div
              style={{
                border: "0.25px solid #cccccc",
                padding: "10px",
                marginBottom: "10px",
                maxWidth: "100%",
              }}
            >
              <p
                style={{
                  margin: 0,
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "30px",
                  paddingRight: "20px",
                }}
              >
                <span className="settingsText">User name</span>
                <span className="settingsText">{userData.username}</span>
              </p>
            </div>
            <div
              style={{
                border: "0.25px solid #cccccc",
                padding: "10px",
                marginBottom: "10px",
                maxWidth: "100%",
              }}
            >
              <p
                style={{
                  margin: 0,
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "30px",
                  paddingRight: "20px",
                }}
              >
                <span className="settingsText">User id</span>
                <span className="settingsText">{userData.userId}</span>
              </p>
            </div>
            <div
              style={{
                border: "0.25px solid #cccccc",
                padding: "10px",
                marginBottom: "10px",
                maxWidth: "100%",
              }}
            >
              <p
                style={{
                  margin: 0,
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "30px",
                  paddingRight: "20px",
                }}
              >
                <span className="settingsText">Phone no</span>
                <span className="settingsText">
                  {userData.phone}{" "}
                  <img
                    src={editIcon}
                    alt="Edit"
                    style={{
                      marginLeft: "5px",
                      cursor: "pointer",
                      width: "16px",
                      height: "16px",
                    }}
                    onClick={handleEditClick} // Open modal on click
                  />
                </span>
              </p>
            </div>
            <div
              style={{
                border: "0.25px solid #cccccc",
                padding: "10px",
                marginBottom: "10px",
                maxWidth: "100%",
              }}
            >
              <p
                style={{
                  margin: 0,
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "30px",
                  paddingRight: "20px",
                }}
              >
                <span className="settingsText">Password</span>
                <span className="settingsText">
                  {userData.password}
                  <img
                    src={eye}
                    alt="View"
                    style={{
                      marginLeft: "5px",
                      cursor: "pointer",
                      width: "16px",
                      height: "16px",
                    }}
                  />
                </span>
              </p>
            </div>

            <div
              className="py-0 d-flex px-5 pt-2"
              style={{
                border: "0.25px solid #cccccc", // Lighter and thinner border
                maxWidth: "100%",
              }}
            >
              <p
                className=""
                style={{
                  display: "flex",
                  alignItems: "center", // Ensure icon and text are aligned
                  gap: "3px", // Adjust the gap between icon and text
                }}
              >
                <FaSignOutAlt style={{ color: "#4A90E2" }} />{" "}
                <span>Logout</span>
              </p>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              textAlign: "center",
              marginTop: "20px",
              flexShrink: 0,
              marginLeft: "20px",
            }}
          >
            <img
              src={profilePic}
              alt="Profile"
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <img
              src={camera}
              sizes="25px"
              alt="Camera"
              style={{
                position: "absolute",
                bottom: "32px", // Adjust as needed
                right: "32px", // Adjust as needed
                width: "40px",
                height: "40px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>

      {/* Render modal when isModalOpen is true */}
      {isModalOpen && (
        <Modal
          initialData={tempData} // Pass tempData to modal
          onInputChange={handleInputChange} // Pass input handler to modal
          onSave={handleSave} // Pass save handler to modal
          onClose={() => setIsModalOpen(false)} // Handle modal close
        />
      )}
    </div>
  );
}

export default Settings;

// -------------------------------------------
