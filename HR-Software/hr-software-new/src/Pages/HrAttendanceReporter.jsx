import React, { useState } from 'react';
import Header from '../Components/Header';
import SidenavHR from '../Components/SidenavHR';
import status from '../Assets/Images/mingcute_settings-6-line.png';
import calender from '../Assets/Images/calendar.png';
import duration from '../Assets/Images/duration.png';
import leftarrow from '../Assets/Images/left-arrow_10068022 1.png';
import edit1 from '../Assets/Images/edit 3.png';
import edit2 from '../Assets/Images/edit 4.png';
import clk from '../Assets/Images/Group 1000004393.png';
import time from '../Assets/Images/time.png'
import HrChatbot from '../Components/HrChatbot';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

function HrAttendancereporter() {
    const [showFilter, setShowFilter] = useState(false);

    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    const handleChatbotToggle = () => {
      setIsChatbotOpen(!isChatbotOpen);
    };

    const handleStatusClick = () => {
      setShowFilter(!showFilter);
    };
  return (
<div className='admin-dashboard'>
<Header/>
<div style={{ display: 'flex', flexDirection: 'row',}}>

        <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
          <SidenavHR />
        </div>

        
        <div style={{ flexGrow: 1, padding: '30px 50px',  }}>
        <img src={leftarrow} width={'20px'}/>
          <h3 style={{ color: 'black',marginTop:'20px' }}>Attendance Reporter</h3>

          {/* Date Dropdown */}
          <MDBDropdown className='btn-department'>
            <MDBDropdownToggle tag='a' className='date-drop text-dark'>
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
      <th>Employee Name</th>
      <th >Date</th>
      <th>Status</th>
      <th>In</th>
      <th>Out</th>
      <th>Break</th>
     
      <th  style={{ position: 'relative' }}>Work Hours
                                    <img
                    src={status}
                    alt="Status Filter"
                    className="status-icon ms-2"
                    onClick={handleStatusClick}
                    style={{ cursor: 'pointer' }}
                  />
                  {/* Filter Dropdown */}
                  {showFilter && (
                    <div className="filter-dropdown">
                      <ul>
                     <li className='text-dark'><input type="checkbox" /> Work from Home</li>
                        <li><input type="checkbox" />Leave</li>
                        <li><input type="checkbox" />Work from Office</li>
                        <li><input type="checkbox" />Late Arrival</li>
                        
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
  <button
    type="button"
    className="btn btn-success"
    style={{
      width: '120px',   // Reduced width
      height: '30px',  // Added a specific height
      textTransform: 'capitalize',
      borderRadius: '15px',  // Reduced border radius for a more compact look
      fontSize: '12px',  // Adjusted font size for smaller button
      padding: '2px 8px'  // Reduced padding for a more compact appearance
    }}
  >
   Work from home
  </button>
</td>      <td>
<p><img src={time} style={{width:'18px'}}/>9:00 AM</p>
      </td>
      <td>
      <p><img src={time} style={{width:'18px'}}/>6:00 PM</p>
    </td>
      <td><p className='text-success'><img src={clk} className='me-2' style={{width:'18px'}}/>01 hr</p></td>
      <td><p className='text-primary'><img src={duration} className='me-2' style={{width:'18px'}}/>09 hrs  <img src={edit1} className='ms-4' style={{cursor:'pointer'}}/><img src={edit2} className='ms-3' onClick={handleChatbotToggle} style={{cursor:'pointer'}}/></p></td>

      
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
  <button
    type="button"
    className="btn btn-primary"
    style={{
      width: '120px',   // Reduced width
      height: '30px',  // Added a specific height
      textTransform: 'capitalize',
      borderRadius: '15px',  // Reduced border radius for a more compact look
      fontSize: '12px',  // Adjusted font size for smaller button
      padding: '2px 8px'  // Reduced padding for a more compact appearance
    }}
  >
Late Arrival
  </button>
</td>        <td>
<p><img src={time} style={{width:'18px'}}/>9:00 AM</p>
      </td>
      <td>
      <p><img src={time}style={{width:'18px'}}/>6:00 PM</p>
    </td>
      <td><p className='text-success'><img src={clk} className='me-2' style={{width:'18px'}}/>01 hr</p></td>
      <td><p className='text-primary'><img src={duration} className='me-2' style={{width:'18px'}}/>09 hrs  <img src={edit1} className='ms-4'/><img src={edit2} className='ms-3' onClick={handleChatbotToggle}/></p></td>

      
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
  <button
    type="button"
    className="btn btn-danger"
    style={{
      width: '120px',   // Reduced width
      height: '30px',  // Added a specific height
      textTransform: 'capitalize',
      borderRadius: '15px',  // Reduced border radius for a more compact look
      fontSize: '12px',  // Adjusted font size for smaller button
      padding: '2px 8px'  // Reduced padding for a more compact appearance
    }}
  >
  Leave
  </button>
</td>        <td>
<p><img src={time} style={{width:'18px'}}/>0:00 AM</p>
      </td>
      <td>
      <p><img src={time} style={{width:'18px'}}/>0:00 PM</p>
    </td>
      <td><p className='text-success'><img src={clk} className='me-2' style={{width:'18px'}}/>01 hr</p></td>
      <td><p className='text-primary'><img src={duration} className='me-2' style={{width:'18px'}}/>09 hrs  <img src={edit1} className='ms-4'/><img src={edit2} className='ms-3'/></p></td>

      
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
      <td><p class="fw-normal mb-1"><img src={calender} className='me-1'/>23/05/2024</p></td>

      <td>
  <button
    type="button"
    className="btn btn-success"
    style={{
      width: '120px',   // Reduced width
      height: '30px',  // Added a specific height
      textTransform: 'capitalize',
      borderRadius: '15px',  // Reduced border radius for a more compact look
      fontSize: '12px',  // Adjusted font size for smaller button
      padding: '2px 8px'  // Reduced padding for a more compact appearance
    }}
  >
   Work from home
  </button>
</td>        <td>
<p><img src={time}style={{width:'18px'}}/>9:00 AM</p>
      </td>
      <td>
      <p><img src={time} style={{width:'18px'}}/>6:00 PM</p>
    </td>
      <td><p className='text-success'><img src={clk} className='me-2' style={{width:'18px'}}/>01 hr</p></td>
      <td><p className='text-primary'><img src={duration} className='me-2' style={{width:'18px'}}/>09 hrs  <img src={edit1} className='ms-4'/><img src={edit2} className='ms-3'/></p></td>

      
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
  <button
    type="button"
    className="btn btn-success"
    style={{
      width: '120px',   // Reduced width
      height: '30px',  // Added a specific height
      textTransform: 'capitalize',
      borderRadius: '15px',  // Reduced border radius for a more compact look
      fontSize: '12px',  // Adjusted font size for smaller button
      padding: '2px 8px'  // Reduced padding for a more compact appearance
    }}
  >
   Work from home
  </button>
</td>        <td>
<p><img src={time} style={{width:'18px'}}/>9:00 AM</p>
      </td>
      <td>
      <p><img src={time} style={{width:'18px'}}/>6:00 PM</p>
    </td>
      <td><p className='text-success'><img src={clk} className='me-2' style={{width:'18px'}}/>01 hr</p></td>
      <td><p className='text-primary'><img src={duration} className='me-2' style={{width:'18px'}}/>09 hrs  <img src={edit1} className='ms-4'/><img src={edit2} className='ms-3'/></p></td>

      
    </tr>
   
</tbody>
</table>
</div>
</div>
<HrChatbot isOpen={isChatbotOpen} onClose={handleChatbotToggle} />
</div>

  )
}

export default HrAttendancereporter
