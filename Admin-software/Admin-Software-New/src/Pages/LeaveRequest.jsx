import React, { useState } from 'react';
import Header from '../Components/Header';
import Sidenav from '../Components/Sidenav';
import status from '../Assets/Images/mingcute_settings-6-line.png';
import calender from '../Assets/Images/calendar.png';
import time from '../Assets/Images/time.png';
import duration from '../Assets/Images/duration.png';
import view from '../Assets/Images/file 1.png';
import edit1 from '../Assets/Images/edit 3.png';
import edit2 from '../Assets/Images/edit 4.png';
import { PiFilesFill } from "react-icons/pi";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import Chatbot from '../Components/Chatbot';

function LeaveRequest() {


  const [showFilter, setShowFilter] = useState(false);

  const handleStatusClick = () => {
    setShowFilter(!showFilter);
  };


  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleChatbotToggle = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
<div className='admin-dashboard'>
<Header/>
<div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>
    
    <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
      <Sidenav /> 
    </div>

    
<div style={{ flexGrow: 1, padding: '30px 40px' }} >
<div className='table'>
<h3 style={{color:'black'}}>Leave Request</h3>
    <MDBDropdown>
      <MDBDropdownToggle tag='a' className='date-drop btn btn-light'>
      Date
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>Action</MDBDropdownItem>
        <MDBDropdownItem link>Another action</MDBDropdownItem>
        <MDBDropdownItem link>Something else here</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
<table class="table align-middle mb-0 bg-white " >
  <thead class="bg-primary">
    <tr className='text-white'>
      <th className='text-white'>Employee Name</th>
      <th className='text-white' >Date</th>
      <th className='text-white'>Duration</th>
      <th className='text-white'>Type</th>
      <th className='text-white'>Reason </th>
       <th style={{ position: 'relative' }}>
                  {/* Status Filter Icon */}
                  <img
                    src={status}
                    alt="Status Filter"
                    className="status-icon ms-5"
                    onClick={handleStatusClick}
                    style={{ cursor: 'pointer' }}
                  />
                  {/* Filter Dropdown */}
                  {showFilter && (
                    <div className="filter-dropdown" style={{width:'120px'}}>
                      <ul>
                        <li><input type="checkbox" /> Approved</li>
                        <li><input type="checkbox" /> Rejected</li>
                        <li><input type="checkbox" />Modified</li>
                        <li><input type="checkbox" /> Pending</li>
                      </ul>
                    </div>
                  )}
                </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
            //   style="width: 45px; height: 45px"
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">UI/UX Developer</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td><p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p></td>
      <td>
<p><img src={duration} className='me-2'/># 3days</p>
      </td>
      <td>
      <p className='text-primary'>Sick Leave</p>
       
      </td>
      <td>
      <td><p className='text-primary'><img src={view} className='me-2'/>View</p></td>
      </td>
      <td>
  <button
    type="button"
    className="btn btn-success"
    style={{
      width: '100px',   // Reduced width
      height: '30px',  // Added a specific height
      textTransform: 'capitalize',
      borderRadius: '15px',  // Reduced border radius for a more compact look
      fontSize: '12px',  // Adjusted font size for smaller button
      padding: '2px 8px'  // Reduced padding for a more compact appearance
    }}
  >
 Approved
  </button>
  <img src={edit1} className='ms-2' /> 
  <img src={edit2} className='ms-2'  onClick={handleChatbotToggle}  style={{ cursor: 'pointer' }}/>
</td>
    </tr>
  
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
            //   style="width: 45px; height: 45px"
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">UI/UX Developer</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td><p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p></td>
      <td>
<p><img src={duration} className='me-2'/># 3days</p>
      </td>
      <td>
      <p className='text-primary'>Sick Leave</p>
       
      </td>
      <td>
      <td><p className='text-primary'><img src={view} className='me-2'/>View</p></td>
      </td>
      <td>
  <button
    type="button"
    className="btn btn-primary"
    style={{
      width: '100px',   // Reduced width
      height: '30px',  // Added a specific height
      textTransform: 'capitalize',
      borderRadius: '15px',  // Reduced border radius for a more compact look
      fontSize: '12px',  // Adjusted font size for smaller button
      padding: '2px 8px'  // Reduced padding for a more compact appearance
    }}
  >
  Modify
  </button><img src={edit1} className='ms-2'/><img src={edit2} className='ms-2'   onClick={handleChatbotToggle}  style={{ cursor: 'pointer' }}/>
</td>
    </tr>
    
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
            //   style="width: 45px; height: 45px"
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">UI/UX Developer</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td><p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p></td>
      <td>
<p><img src={duration} className='me-2'/># 3days</p>
      </td>
      <td>
      <p className='text-primary'>Sick Leave</p>
       
      </td>
      <td>
      <td><p className='text-primary'><img src={view} className='me-2'/>View</p></td>
      </td>
      <td>
  <button
    type="button"
    className="btn btn-danger"
    style={{
      width: '100px',   // Reduced width
      height: '30px',  // Added a specific height
      textTransform: 'capitalize',
      borderRadius: '15px',  // Reduced border radius for a more compact look
      fontSize: '12px',  // Adjusted font size for smaller button
      padding: '2px 8px'  // Reduced padding for a more compact appearance
    }}
  >
    Rejected
  </button><img src={edit1} className='ms-2'/><img src={edit2} className='ms-2'  onClick={handleChatbotToggle} style={{ cursor: 'pointer' }}/>
</td>
    </tr>

    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
            //   style="width: 45px; height: 45px"
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">UI/UX Developer</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td><p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p></td>
      <td>
<p><img src={duration} className='me-2'/># 3days</p>
      </td>
      <td>
      <p className='text-primary'>Casual Leave</p>
       
      </td>
      <td>
      <td><p className='text-primary'><img src={view} className='me-2'/>View</p></td>
      </td>
      <td>
  <button
    type="button"
    className="btn btn-success"
    style={{
      width: '100px',   // Reduced width
      height: '30px',  // Added a specific height
      textTransform: 'capitalize',
      borderRadius: '15px',  // Reduced border radius for a more compact look
      fontSize: '12px',  // Adjusted font size for smaller button
      padding: '2px 8px'  // Reduced padding for a more compact appearance
    }}
  >
 Approved
  </button><img src={edit1} className='ms-2'/><img src={edit2} className='ms-2'   onClick={handleChatbotToggle}  style={{ cursor: 'pointer' }}/>
</td>
    </tr>
    
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
            //   style="width: 45px; height: 45px"
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">UI/UX Developer</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td><p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p></td>
      <td>
<p><img src={duration} className='me-2'/># 3days</p>
      </td>
      <td>
      <p className='text-primary'>Sick Leave</p>
       
      </td>
      <td>
      <td><p className='text-primary'><img src={view} className='me-2'/>View</p></td>
      </td>
      <td>
  <button
    type="button"
    className="btn btn-success"
    style={{
      width: '100px',   // Reduced width
      height: '30px',  // Added a specific height
      textTransform: 'capitalize',
      borderRadius: '15px',  // Reduced border radius for a more compact look
      fontSize: '12px',  // Adjusted font size for smaller button
      padding: '2px 8px'  // Reduced padding for a more compact appearance
    }}
  >
 Approved
  </button><img src={edit1} className='ms-2'/><img src={edit2} className='ms-2'  onClick={handleChatbotToggle}  style={{ cursor: 'pointer' }}/>
</td>
    </tr>

    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
            //   style="width: 45px; height: 45px"
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">UI/UX Developer</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td><p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p></td>
      <td>
<p><img src={duration} className='me-2'/># 3days</p>
      </td>
      <td>
      <p className='text-primary'>Casual Leave</p>
       
      </td>
      <td>
      <td><p className='text-primary'><img src={view} className='me-2'/>View</p></td>
      </td>
      <td>
  <button
    type="button"
    className="btn btn-success"
    style={{
      width: '100px',   // Reduced width
      height: '30px',  // Added a specific height
      textTransform: 'capitalize',
      borderRadius: '15px',  // Reduced border radius for a more compact look
      fontSize: '12px',  // Adjusted font size for smaller button
      padding: '2px 8px'  // Reduced padding for a more compact appearance
    }}
  >
 Approved
  </button><img src={edit1} className='ms-2'/><img src={edit2} className='ms-2'   onClick={handleChatbotToggle}  style={{ cursor: 'pointer' }}/>
</td>
    </tr>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
            //   style="width: 45px; height: 45px"
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">UI/UX Developer</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td><p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p></td>
      <td>
<p><img src={duration} className='me-2'/># 3days</p>
      </td>
      <td>
      <p className='text-primary'>Sick Leave</p>
      </td>
      <td>
      <td><p className='text-primary'><img src={view} className='me-2'/>View</p></td>
      </td>
<td>
  <button
    type="button"
    className="btn btn-success"
    style={{
      width: '100px',   // Reduced width
      height: '30px',  // Added a specific height
      textTransform: 'capitalize',
      borderRadius: '15px',  // Reduced border radius for a more compact look
      fontSize: '12px',  // Adjusted font size for smaller button
      padding: '2px 8px'  // Reduced padding for a more compact appearance
    }}
  >
 Approved
  </button><img src={edit1} className='ms-2'/><img src={edit2} className='ms-2'  onClick={handleChatbotToggle}  style={{ cursor: 'pointer' }}/>
</td>
    </tr>
</tbody>

</table>

</div>
</div>
</div>
<Chatbot isOpen={isChatbotOpen} onClose={handleChatbotToggle} />
</div>
  )
}

export default LeaveRequest

