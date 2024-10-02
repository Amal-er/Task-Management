import React, { useState } from 'react'
import Header from '../Components/Header';
import status from '../assets/Images/mingcute_settings-6-line.png';
import calender from '../assets/Images/calendar_1100801 1.png';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import SidenavHR from '../Components/SidenavHR'; // Your custom sidenav
import leftarrow from '../assets/Images/left-arrow_10068022 1.png';
import delete1 from '../assets/Images/delete (1) 2.png';
import duration from '../assets/Images/duration.png';
import view from '../assets/Images/file 1.png';
import edit1 from '../assets/Images/edit 3.png';
import edit2 from '../assets/Images/edit 4.png';
import pen1 from '../assets/Images/pen1.png';
function HrEmployeeLeaveReq() {
    const [showFilter, setShowFilter] = useState(false);

    const handleStatusClick = () => {
      setShowFilter(!showFilter);
    };
  return (
    <div className='admin-dashboard'>
      <Header />

      <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>
      
        <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
          <SidenavHR /> 
        </div>

        
        <div style={{ flexGrow: 1, padding: '30px 50px',  }}>
        <img src={leftarrow} width={'20px'}/>
          <h3 style={{ color: 'black',marginTop:'20px' }}>Employee Leave Request</h3>

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
      <th>Duration</th>
      <th>Type</th>
      <th>Reason </th>
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
                      <li className='text-dark'><input type="checkbox" /> Approved</li>
                        <li><input type="checkbox" /> Rejected</li>
                        <li><input type="checkbox" /> Pending</li>
                        <li><input type="checkbox" /> Modified</li>
                        
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
  <img src={edit1} className='ms-2 status-icon' style={{position:'relative',cursor: 'pointer'}}
    alt="Status Filter"

    onClick={handleStatusClick}
    />
  {/* {showFilter && (
                    <div className="filter-dropdown">
                      <ul>
                      <li className='text-dark'><input type="checkbox" /> Approved</li>
                        <li><input type="checkbox" /> Rejected</li>
                        <li><input type="checkbox" /> Pending</li>
                        <li><input type="checkbox" /> Modified</li>
                        
                      </ul>
                    </div>
                  )} */}
  <img src={edit2} className='ms-2'/>
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
  </button><img src={edit1} className='ms-2'/><img src={edit2} className='ms-2'/>
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
  </button><img src={edit1} className='ms-2'/><img src={edit2} className='ms-2'/>
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
      width: '100px',  
      height: '30px',  
      textTransform: 'capitalize',
      borderRadius: '15px',  
      fontSize: '12px',  
      padding: '2px 8px'  
    }}
  >
 Approved
  </button><img src={edit1} className='ms-2'/><img src={edit2} className='ms-2'/>
</td>
    </tr>
</tbody>

</table>
          </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', height: '100vh', marginTop:"20px" }}>
       
        <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
          <SidenavHR /> 
        </div>

        
        <div style={{ flexGrow: 1, padding: '30px 50px',  }}>
        
          <h3 style={{ color: 'black',marginTop:'20px' }}>My Leave</h3>

          
          <table class="table align-middle mb-0 bg-white " >
  <thead class="bg-primary">
    <tr className='text-white'>
      <th>Employee Name</th>
      <th >Date</th>
      <th>Duration</th>
      <th>Type</th>
      <th>Reason </th>
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
                      <li className='text-dark'><input type="checkbox" /> Approved</li>
                        <li><input type="checkbox" /> Rejected</li>
                        <li><input type="checkbox" /> Pending</li>
                        <li><input type="checkbox" /> Modified</li>
                        
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
            <p class="fw-bold mb-1">Ram KS</p>
            <p class="text-muted mb-0">UI/UX Developer</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td><p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p></td>
      <td>
<p><img src={duration} className='me-2'/># 1days</p>
      </td>
      <td>
      <p className='text-danger'>Sick Leave</p>
       
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
  <img src={edit1} className='ms-2 status-icon' style={{position:'relative',cursor: 'pointer'}}
    alt="Status Filter"

    onClick={handleStatusClick}
    />
  {/* {showFilter && (
                    <div className="filter-dropdown">
                      <ul>
                      <li className='text-dark'><input type="checkbox" /> Approved</li>
                        <li><input type="checkbox" /> Rejected</li>
                        <li><input type="checkbox" /> Pending</li>
                        <li><input type="checkbox" /> Modified</li>
                        
                      </ul>
                    </div>
                  )} */}
  <img src={edit2} className='ms-2'/>
  <img src={delete1} className='ms-2'/>
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
            <p class="fw-bold mb-1">Ram Ks</p>
            <p class="text-muted mb-0">UI/UX Developer</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td><p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p></td>
      <td>
<p><img src={duration} className='me-2'/># 1days</p>
      </td>
      <td>
      <p className='text-danger'>Sick Leave</p>
       
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
  </button><img src={edit1} className='ms-2'/><img src={edit2} className='ms-2'/><img src={delete1} className='ms-2'/>
</td>
    </tr>
    
  
   
</tbody>

</table>
          </div>
        
          </div>
          <div className="leave-request-container w-50">
  <div className="leave-request-title">
    <img src={pen1} alt="Leave Request" /> {/* Icon for title */}
    <h3>Leave Request</h3> 
  </div>
  <hr />
  <div className="leave-form">
    <div className="form-group">
      <label htmlFor="from-date">From *</label>
      <input type="date" id="from-date" />

    </div>
    <div className="form-group">
      <label htmlFor="to-date">To *</label>
      <input type="date" id="to-date" />
     
    </div>
    <div className="form-group">
      <label htmlFor="duration">Duration</label>
      <input type="text" id="duration" />
     
    </div>

    <div className="form-group">
      <label htmlFor="leave-type">Leave Type*</label>
      <select id="leave-type">
        <option>Select Leave Type</option>
        <option>Sick Leave</option>
        <option>Casual Leave</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="reason">Reason *</label>
      <input type="text" id="reason" />
     
    </div>

    <div className="buttons">
      <button className="apply-button">Apply Leave</button>
      <button className="cancel-button">Cancel</button>
    </div>
  </div>
</div>

          
          </div>

  )
}

export default HrEmployeeLeaveReq
