import React, { useState } from 'react';
import Header from '../Components/Header';
import Sidenav from '../Components/Sidenav';
import { Tab, Tabs } from 'react-bootstrap';
import { FaEdit, FaEyeSlash, FaSignOutAlt } from "react-icons/fa";
import AddNewAdminSetting from '../Components/AddNewAdminSetting';

function Settings() {

    const [userData, setUserData] = useState({
        name: "Anu S R",
        designation: "UI/UX Designer",
        username: "Anu2@gmail.com",
        userId: "AB234",
        phone: "+91 9821341187",
        password: "**********",
      });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
 
  // State to temporarily hold data in the modal before saving
  const [tempData, setTempData] = useState({ ...userData });


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
    <div className='admin-dashboard'>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>
    
    <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
      <Sidenav /> 
    </div>

    
    <div style={{ flexGrow: 1, padding: '30px 40px' }} >

        <div >
          <div className="settings-page">
            <h2>Settings</h2>
            <Tabs defaultActiveKey="profile" id="settings-tabs" className="mb-3">
              <Tab eventKey="profile" title="Profile">
                <div className="profile-section">
                  <div className="profile-details">
                  <div className="profile-item">
          <span className="label">Employee Name</span>
          <span className="value">{userData.username}</span>
        </div>
        <div className="profile-item">
          <span className="label">Usr Id</span>
          <span className="value">{userData.userId}</span>
        </div>

        <div className="profile-item">
          <span className="label">Phone no</span>
          <span className="value">       {userData.phone}{" "}</span>
        
        </div>
        <div className="profile-item">
          <span className="label">Password</span>
          <span className="value">  {userData.password}</span>
         
        </div>
        <div className="profile-item">
        <button className="logout-link">
                        <FaSignOutAlt /> Logout
                      </button>
                      <button className="edit-button">
                        <FaEdit /> Edit
                      </button>
         
        </div>
                  </div>
                  <div className="profile-picture">
                    <input type="file" id="profilePic" style={{ display: 'none' }} onChange={handleFileChange} />
                    <label htmlFor="profilePic">
                      <img src={selectedFile || "https://via.placeholder.com/100"} alt="Profile" />
                    </label>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="sub-admin" title="Sub Admin">
  <div className="sub-admin-section">
    <div className="dropdowns">
      <select className="form-select">
        <option>Select Subadmin</option>
        {/* Add more options as needed */}
      </select>
    </div>

    <div className="sub-admin-details">
      <div className="sub-admin-info">
      <div className="profile-item">
          <span className="label">Name</span>
          <span className="value">Amal K</span>
         
        </div>
        <div className="profile-item">
          <span className="label">Designation </span>
          <span className="value">Hr Manager</span>
         
        </div>
        <div className="profile-item">
          <span className="label">Username</span>
          <span className="value">amal@gmail.com</span>
         
        </div>
        <div className="profile-item">
          <span className="label">User ID</span>
          <span className="value">A1234</span>
         
        </div>
        <div className="profile-item">
          <span className="label">Phone number</span>
          <span className="value">2345673456</span>
         
        </div>
        <div className="profile-item">
          <span className="label">Password</span>
          <span className="value">**********</span>
         
        </div>
        <div className="edit-button">
          <button className="edit-button">
            <FaEdit     onClick={handleEditClick}/> Edit
          </button>
        </div>
      </div>
      <div className="sub-admin-right">
        <div className="profile-picture">
          <input type="file" id="profilePicSubAdmin" style={{ display: 'none' }} onChange={handleFileChange} />
          <label htmlFor="profilePicSubAdmin">
            <img src={selectedFile || "https://via.placeholder.com/100"} alt="Profile" />
          </label>
        </div>
        <div className="permissions">
          <h4>Permissions</h4>
          <ul>
            <li><span className="dot green"></span> Employee View</li>
            <li><span className="dot green"></span> Task View</li>
            <li><span className="dot green"></span> Finance</li>
            <li><span className="dot red"></span> Attendance View</li>
            <li><span className="dot red"></span> Send Announcement</li>
            <li><span className="dot red"></span> Add Event</li>
            <li><span className="dot red"></span> Edit Settings</li>
            <li><span className="dot red"></span> Permission Adding</li>
          </ul>
          <button className="view-all-button">View all</button>
        </div>
      </div>
    </div>
  </div>
</Tab>

<Tab eventKey="Employee" title="Employee">
  <div className="sub-admin-section">
    <div className="dropdowns">
   <select className="form-select me-5">
        <option>Select Subadmin</option>
        {/* Add more options as needed */}
      </select>
      <select className="form-select">
        <option>Employee id</option>
        {/* Add more options as needed */}
      </select>
    </div>

    <div className="sub-admin-details">
      <div className="sub-admin-info">
      <div className="profile-item">
          <span className="label">Name</span>
          <span className="value">Amal K</span>
         
        </div>
        <div className="profile-item">
          <span className="label">Designation </span>
          <span className="value">Hr Manager</span>
         
        </div>
        <div className="profile-item">
          <span className="label">Username</span>
          <span className="value">amal@gmail.com</span>
         
        </div>
        <div className="profile-item">
          <span className="label">User ID</span>
          <span className="value">A1234</span>
         
        </div>
        <div className="profile-item">
          <span className="label">Phone number</span>
          <span className="value">2345673456</span>
         
        </div>
        <div className="profile-item">
          <span className="label">Password</span>
          <span className="value">**********</span>
         
        </div>
        <div className="edit-button">
          <button className="edit-button">
            <FaEdit /> Edit
          </button>
        </div>
      </div>
      <div className="sub-admin-right">
        <div className="profile-picture">
          <input type="file" id="profilePicSubAdmin" style={{ display: 'none' }} onChange={handleFileChange} />
          <label htmlFor="profilePicSubAdmin">
            <img src={selectedFile || "https://via.placeholder.com/100"} alt="Profile" />
          </label>
        </div>
        <div className="permissions">
          <h4>Permissions</h4>
          <ul>
            <li><span className="dot green"></span> Employee View</li>
            <li><span className="dot green"></span> Task View</li>
            <li><span className="dot green"></span> Finance</li>
            <li><span className="dot red"></span> Attendance View</li>
            <li><span className="dot red"></span> Send Announcement</li>
            <li><span className="dot red"></span> Add Event</li>
            <li><span className="dot red"></span> Edit Settings</li>
            <li><span className="dot red"></span> Permission Adding</li>
          </ul>
          <button className="view-all-button">View all</button>
        </div>
      </div>
    </div>
  </div>
</Tab>
              <Tab eventKey="permission" title="Permission">
                {/* Permission Content */}
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
    {isModalOpen && (
        <AddNewAdminSetting
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
