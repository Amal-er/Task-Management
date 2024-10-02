import React, { useState } from 'react';
import Header from '../Components/Header';
import Sidenav from '../Components/Sidenav';
import status from '../assets/Images/mingcute_settings-6-line.png';
import calender from '../assets/Images/calendar.png';
import time from '../assets/Images/time.png';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import person from '../assets/Images/Ellipse 2358.png'

function AttendanceList() {
    const [showFilter, setShowFilter] = useState(false);

const handleStatusClick = () => {
  setShowFilter(!showFilter);
};
  return (
    <div className="hr-attendance-page" >
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>
      <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
      <Sidenav /> 
    </div>

    <div style={{ flexGrow: 1, padding: '30px 40px' }} >
          {/* Cards Section */}
          <div className="cards-present">
            <div className="card-presents present-card">
              <div className="card-header">
                <h4>Team Present</h4>
                <div className="avatar-group">
                  <img src={person} alt="avatar" />
                  <img src={person} alt="avatar" />
                  <img src={person} alt="avatar" />
                  <span className="more-avatars">+2</span>
                </div>
              </div>
              <div className="card-body-details d-flex">
                <p>Present - <span className="present-count text-success">18</span></p>
                <p>Absent - <span className="absent-count text-danger">03</span></p>
                <p>Office - <span className="office-count text-primary">06</span></p>
              </div>
              <a href="/hrteamattendance" className="view-details">View Details</a>
            </div>

            <div className="card-leave leave-card">
              <h4>On Leave</h4>
              <div className="leave-list d-flex">
             <p>  <img src={person} />Ram K S <br />UI/UX Developer</p>
             <p>  <img src={person} />Ram K S <br />UI/UX Developer</p>
             <p>  <img src={person}  />Ram K S <br />UI/UX Developer</p>
              </div>
              <a href="/hronleave" className="view-details">View Details</a>
            </div>
          </div>

          {/* Table Section */}
         
          <div className='table'>
   
    <h3 style={{color:'black'}}>Attendance List</h3>
    <MDBDropdown className='btn-department'>
      <MDBDropdownToggle tag='a' className='date-drop text-dark'>
      Date
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>Action</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
<table class="table align-middle mb-0 bg-white" >
  <thead class="bg-primary">
    <tr className='text-white'>
      <th className='text-white'>Employee Name</th>
      <th className='text-white' >Date</th>
      <th className='text-white'>Check in</th>
      <th className='text-white'> Check out</th>
   
      <th style={{ position: 'relative' }}>
                                    <img
                    src={status}
                    alt="Status Filter"
                    className="status-icon"
                    onClick={handleStatusClick}
                    style={{ cursor: 'pointer' }}
                  />
                  {/* Filter Dropdown */}
                  {showFilter && (
                    <div className="filter-dropdown">
                      <ul>
                       <li className='text-dark'><input type="checkbox" /> Present</li>
                        <li><input type="checkbox" /> Half Day</li>
                        <li><input type="checkbox" /> Absent</li>
                        
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
    
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td><p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p></td>
      <td>
<p><img src={time} className='me-2'/>9:00 AM</p>
      </td>
      <td>
      <p><img src={time} className='me-2'/>6:00 PM</p>
       
      </td>
      
      <td>
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
    Present
  </button>
</td>
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
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td><p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p></td>
      <td>
<p><img src={time} className='me-2'/>9:00 AM</p>
      </td>
      <td>
      <p><img src={time} className='me-2'/>6:00 PM</p>
       
      </td>
      
      <td>
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
    Present
  </button>
</td>
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
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td><p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p></td>
      <td>
<p><img src={time} className='me-2'/>9:00 AM</p>
      </td>
      <td>
      <p><img src={time} className='me-2'/>6:00 PM</p>
       
      </td>
   
      <td>
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
    Present
  </button>
</td>
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
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td><p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p></td>
      <td>
<p className='text-danger'><img src={time} className='me-2' />0:00 AM</p>
      </td>
      <td>
      <p className='text-danger'><img src={time} className='me-2'/>0:00 PM</p>
       
      </td>
     
      <td>
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
Absent
  </button>
</td>
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
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td><p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p></td>
      <td>
<p className='text-danger'><img src={time} className='me-2 '/>0:00 AM</p>
      </td>
      <td>
      <p className='text-danger'><img src={time} className='me-2 '/>0:00 PM</p>
       
      </td>
   
      <td>
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
      Absent
  </button>
</td>
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
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td><p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p></td>
      <td>
<p><img src={time} className='me-2'/>9:00 AM</p>
      </td>
      <td>
      <p><img src={time} className='me-2'/>6:00 PM</p>
       
      </td>
    
      <td>
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
    Present
  </button>
</td>
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
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td><p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p></td>
      <td>
<p><img src={time} className='me-2'/>9:00 AM</p>
      </td>
      <td>
      <p><img src={time} className='me-2'/>6:00 PM</p>
       
      </td>

      <td>
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
    Present
  </button>
</td>
      </td>
    </tr>

</tbody>
</table>
</div>
</div>
      
        </div>
      </div>
 
  );
}

export default AttendanceList;
