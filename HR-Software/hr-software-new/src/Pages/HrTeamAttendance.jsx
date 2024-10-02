import React from 'react';
import Header from '../Components/Header';
import SidenavHR from '../Components/SidenavHR';
import status from '../assets/Images/mingcute_settings-6-line.png';
import computer from '../assets/Images/computer.png';
import phone from '../assets/Images/telephone 2.png';
import mail from '../assets/Images/mail.png';
import green from '../assets/Images/Ellipse 2369.png';
import blue from '../assets/Images/Ellipse 233.png';
import leftarrow from '../assets/Images/left-arrow_10068022 1.png';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

function HrTeamAttendance() {
  return (
<div className='admin-dashboard'>
<Header/>


<div style={{ display: 'flex', flexDirection: 'row',   }}>
       
        <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
          <SidenavHR /> 
        </div>

        
        <div style={{ flexGrow: 1, padding: '30px 50px',}}>
        <img src={leftarrow} width={'20px'}/>
          <h3 style={{ color: 'black',marginTop:'20px' }}>Team Attendance</h3>

          {/* Date Dropdown */}
          <div>
          <MDBDropdown className='btn-department me-4'>
            <MDBDropdownToggle tag='a' className='date-drop text-dark'>
              Date
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem link>Action</MDBDropdownItem>
              <MDBDropdownItem link>Another action</MDBDropdownItem>
              <MDBDropdownItem link>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown className='btn-department me-4'>
            <MDBDropdownToggle tag='a' className='date-drop text-dark'>
              Department
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem link>Action</MDBDropdownItem>
              <MDBDropdownItem link>Another action</MDBDropdownItem>
              <MDBDropdownItem link>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown className='btn-department '>
            <MDBDropdownToggle tag='a' className='date-drop text-dark'>
           Employee
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem link>Action</MDBDropdownItem>
              <MDBDropdownItem link>Another action</MDBDropdownItem>
              <MDBDropdownItem link>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          </div>
<table class="table align-middle bg-white " >
  <thead class="bg-primary">
    <tr className='text-white'>
      <th>Employee Name</th>
      <th >Designation</th>
      <th>Mobile No</th>
      <th> Email Id</th>
      <th> Work Type</th>
      <th>Status <img src={status} className='ms-5'/></th>
 
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
      <td><p class="fw-normal mb-1"><img src={computer} className='me-1'/>UI/UX Developer</p></td>
      <td>
<p><img src={phone} className='me-2'/>9654784567</p>
      </td>
      <td>
      <p><img src={mail} className='me-2'/>johndoe@gmail.com</p>
       
      </td>
      <td><img src={green} className='me-2' style={{width:'10px'}}/>Office</td>
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
      <td><p class="fw-normal mb-1"><img src={computer} className='me-1'/>UI/UX Developer</p></td>
      <td>
<p><img src={phone} className='me-2'/>9654784567</p>
      </td>
      <td>
      <p><img src={mail} className='me-2'/>johndoe@gmail.com</p>
       
      </td>
      <td><img src={green} className='me-2' style={{width:'10px'}}/>Office</td>
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
      <td><p class="fw-normal mb-1"><img src={computer} className='me-1'/>UI/UX Developer</p></td>
      <td>
<p><img src={phone} className='me-2'/>9654784567</p>
      </td>
      <td>
      <p><img src={mail} className='me-2'/>johndoe@gmail.com</p>
       
      </td>
      <td><img src={green} className='me-2' style={{width:'10px'}}/>Office</td>
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
      <td><p class="fw-normal mb-1"><img src={computer} className='me-1'/>UI/UX Developer</p></td>
      <td>
<p><img src={phone} className='me-2'/>9654784567</p>
      </td>
      <td>
      <p><img src={mail} className='me-2'/>johndoe@gmail.com</p>
       
      </td>
      <td><img src={blue} className='me-2' style={{width:'10px'}}/>Home</td>
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
      <td><p class="fw-normal mb-1"><img src={computer} className='me-1'/>UI/UX Developer</p></td>
      <td>
<p><img src={phone} className='me-2'/>9654784567</p>
      </td>
      <td>
      <p><img src={mail} className='me-2'/>johndoe@gmail.com</p>
       
      </td>
      <td><img src={green} className='me-2' style={{width:'10px'}}/>Office</td>
      <td>
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
      <td><p class="fw-normal mb-1"><img src={computer} className='me-1'/>UI/UX Developer</p></td>
      <td>
<p><img src={phone} className='me-2'/>9654784567</p>
      </td>
      <td>
      <p><img src={mail} className='me-2'/>johndoe@gmail.com</p>
       
      </td>
      <td><img src={green} className='me-2' style={{width:'10px'}}/>Office</td>
      <td>
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
  Absent
  </button>
</td>
      </td>
    </tr>
   
</tbody>
</table>
</div>
</div>
</div>


  )
}

export default HrTeamAttendance
