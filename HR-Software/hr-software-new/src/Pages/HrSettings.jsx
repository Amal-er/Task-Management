import React, { useState } from 'react';
import Header from '../Components/Header';
import { FaEdit } from "react-icons/fa";
import SidenavHR from '../Components/SidenavHR';

function HrSettings() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className='admin-dashboard'>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>
        
        <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
          <SidenavHR /> 
        </div>

        
        <div style={{ flexGrow: 1, padding: '30px 50px',  }}>
   
          <h3 style={{ color: 'black',marginTop:'20px' }}>Settings</h3>
          
          
       
          
  <div className="sub-admin-section bg-white p-3" style={{borderRadius:'10px'}}>
  <p style={{ color: 'black',marginTop:'20px' }}>Profile</p>
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
       
          <h4>Permissions</h4>
          <div className="permissions text-center d-flex justify-content-center">
          <ul className=''>
            <li><span className="dot green"></span> Employee View</li>
            <li><span className="dot green"></span> Task View</li>
            <li><span className="dot green"></span> Finance</li>
            <li><span className="dot red"></span> Attendance View</li>
            <li><span className="dot red"></span> Send Announcement</li>
            <li><span className="dot red"></span> Add Event</li>
            <li><span className="dot red"></span> Edit Settings</li>
            <li><span className="dot red"></span> Permission Adding</li>
          </ul>
          </div>
          <button className="view-all-button">View all</button>
        
      </div>
    </div>
  </div>

          </div>
        </div>
      </div>

  );
}

export default HrSettings;
