import React from 'react';
import Header from '../Components/Header';
import status from '../assets/Images/mingcute_settings-6-line.png';
import { PiFilesFill } from "react-icons/pi";
import calender from '../assets/Images/calendar_1100801 1.png';
import file1 from '../assets/Images/file 1.png';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import SidenavHR from '../Components/SidenavHR'; // Your custom sidenav
import hour from '../assets/Images/Group 1000004394.png'
import leftarrow from '../assets/Images/left-arrow_10068022 1.png';
import message from '../assets/Images/edit 12.png';
function HrOnleave() {
  return (
    <div className='admin-dashboard'>
      <Header />

  
      <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',}}>

        <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
          <SidenavHR /> 
        </div>

        
        <div style={{ flexGrow: 1, padding: '30px 50px', }}>
        <img src={leftarrow} width={'20px'}/>
          <h3 style={{ color: 'black',marginTop:'20px' }}>On Leave</h3>

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

          {/* Table */}
          <table className="table align-middle mb-0 bg-white" style={{ width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
            <thead className="bg-primary">
              <tr className='text-white'>
                <th>Employee Name</th>
                <th>Date</th>
                <th>Duration</th>
                <th>Type</th>
                <th>Reason</th>
                <th>Status <img src={status} className='ms-5' alt='status-icon' /></th>
              </tr>
            </thead>
            <tbody>
              {[...Array(3)].map((_, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        className="rounded-circle"
                        style={{ width: '45px', height: '45px' }}
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">John Doe</p>
                        <p className="text-muted mb-0">#1234567</p>
                      </div>
                    </div>
                  </td>
                  <td><p className="fw-normal mb-1"><img src={calender} className='me-1' alt='calendar-icon' />22/05/2024</p></td>
                  <td><p><img src={hour}/>#1 day</p></td>
                  <td><p className='text-danger'>Sick Leave</p></td>
                  <td><img src={file1} className='me-2' style={{ width: '20px' }} alt='file-icon' />View</td>
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
                    </button>
                    <img src={message}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* File count */}
          <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
            <PiFilesFill className='me-1 fs-5' />
            15 files
          </div>
        </div>
      </div>
    </div>
  );
}

export default HrOnleave;
