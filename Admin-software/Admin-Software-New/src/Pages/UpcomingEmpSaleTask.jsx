import React, { useState } from 'react';
import Header from '../Components/Header';
import Sidenav from '../Components/Sidenav';
import Chatbot from '../Components/Chatbot';
import leftarrow from '../Assets/Images/left-arrow_10068022 1.png';
import call from '../Assets/Images/telephone 2.png';
import message from '../Assets/Images/message.png';
import { Link } from 'react-router-dom';

function UpcomingEmpSaleTask() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);

  const handleChatbotToggle = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const handleAddTaskClick = () => {
    setShowFileUpload(true);
  };

  // const handleNewButtonClick = () => {
  
  //   alert('New Button Clicked!');
  // };

  const tasks = [
    { id: 1, companyName: 'ABCD Company', leadName: 'ABCD Company', leadSource: 'Advertisement', email: 'hr@abcd.com', phone: '9876543212', color: 'green' },
    { id: 2, companyName: 'ABCD Company', leadName: 'ABCD Company', leadSource: 'Advertisement', email: 'hr@abcd.com', phone: '9876543212', color: 'red' },
    { id: 3, companyName: 'ABCD Company', leadName: 'ABCD Company', leadSource: 'Advertisement', email: 'hr@abcd.com', phone: '9876543212', color: 'yellow' },
    { id: 4, companyName: 'ABCD Company', leadName: 'ABCD Company', leadSource: 'Advertisement', email: 'hr@abcd.com', phone: '9876543212', color: 'blue' },
    { id: 5, companyName: 'ABCD Company', leadName: 'ABCD Company', leadSource: 'Advertisement', email: 'hr@abcd.com', phone: '9876543212', color: 'red' },
    { id: 6, companyName: 'ABCD Company', leadName: 'ABCD Company', leadSource: 'Advertisement', email: 'hr@abcd.com', phone: '9876543212', color: 'white' },
  ];

  return (
    <div className='admin-dashboard'>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>
    
    <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
      <Sidenav /> 
    </div>

    
    <div style={{ flexGrow: 1, padding: '30px 40px' }} >
    <Link to={'/upcomingsaletask'} ><img src={leftarrow} className="mb-2"/></Link>
        <div className="task-container">
          <div className="task-header">
            <h2>Employee Task Adding</h2>
            <p>Employee Name: <strong>Amal E R</strong> <span>Total Records: 25</span></p>
            <button className="add-task-btn" onClick={handleAddTaskClick}>Add New Task</button>
          </div>

          {showFileUpload && (
            <div className="file-upload-section">
              <h3>Uploaded Files</h3>
              <div className="file-upload-box">
                <div className="file-upload-icon">⬆️</div>
                <p>Drag and drop or <span>Choose file</span> to upload</p>
              </div>

              {/* Right-aligned New Button */}
              <div className="button-container">
               <Link to={'/upcomingaddnewlead'}><button className="new-button">
                  + New 
                </button></Link> 
              </div>
            </div>
          )}

          <div className="task-table">
            <div className="table-header">
              <div className="header-item text-white">Company Name</div>
              <div className="header-item text-white">Lead Name</div>
              <div className="header-item text-white">Lead Source</div>
              <div className="header-item text-white ">Lead Source</div>
              <div className="header-item text-white">Email Id</div>
              <div className="header-item text-white">Phone No</div>
              <div className="header-item text-white">Action</div>
            </div>

            {tasks.map(task => (
              <div className="table-row" key={task.id}>
                <div className="row-item company-name">{task.companyName}</div>
                <div className="row-item lead-name">{task.leadName}</div>
                <div className="row-item lead-source">{task.leadSource}</div>
                <div className="row-item email">{task.email}</div>
                <div className="row-item phone">{task.phone}</div>
                <div className="row-item actions">
                  <button className="call-btn"><img src={call} alt="Call"/></button>
                  <button className="chat-btn"><img src={message} alt="Message" className='me-1'/></button>
                  <button className="more-btn">⋮</button>
                </div>
              </div>
            ))}
          </div>

          <div className="task-footer">
            <span>Total Records: 25</span>
            <span>Completed: 12</span>
          </div>
        </div>
      </div>
      </div>
      <Chatbot isOpen={isChatbotOpen} onClose={handleChatbotToggle} />
    </div>
  )
}

export default UpcomingEmpSaleTask;
