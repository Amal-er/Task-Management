
import React, { useState } from 'react';
import Header from '../Components/Header';
import Sidenav from '../Components/Sidenav';
import status from '../assets/Images/mingcute_settings-6-line.png';
import notes from '../assets/Images/note.png';
import calender from '../assets/Images/calendar.png';
import { MdOutlineMessage } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Chatbot from '../Components/Chatbot';

function RunningTask() {
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
    <h3 style={{color:'black'}}>Running Task</h3>
    <MDBDropdown  className='btn-department'>
      <MDBDropdownToggle tag='a' className=' text-dark'>
Department
      </MDBDropdownToggle>
      <MDBDropdownMenu>
      <Link to={'/runningtasksales'}> <MDBDropdownItem link>Sales</MDBDropdownItem></Link> 
       
      </MDBDropdownMenu>
    </MDBDropdown>
<table class="table align-middle mb-0 bg-white " >
  <thead class="bg-primary">
    <tr className='text-white'>
      <th className='text-white'>Employee Name</th>
      <th className='text-white'>Status</th>
      <th className='text-white'>Task Title</th>
      <th className='text-white'> Start Date</th>
      <th className='text-white'>End Date</th>
      <th style={{ position: 'relative' }}>
                  {/* Status Filter Icon */}
                  <img
                    src={status}
                    alt="Status Filter"
                    className="status-icon"
                    onClick={handleStatusClick}
                    style={{ cursor: 'pointer' }}
                  />
                  {/* Filter Dropdown */}
                  {showFilter && (
                    <div className="filter-dropdown" style={{width:'120px'}}>
                      <ul>
                        <li><input type="checkbox" /> Show All</li>
                        <li><input type="checkbox" /> Completed</li>
                        <li><input type="checkbox" /> Ongoing</li>
                        <li><input type="checkbox" /> Pending</li>
                        <li><input type="checkbox" /> Paused</li>
                        <li><input type="checkbox" /> Approval</li>
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
          
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td>
  <button
    type="button"
    className="btn"
    style={{
      width: '100px',          // Reduced the width for a smaller button
      height: '30px',         // Set a smaller height
      textTransform: 'capitalize',
      backgroundColor: 'green',
      color: 'white',
      borderRadius: '15px',   // Adjusted border radius for a smaller button
      padding: '5px 10px',    // Adjusted padding for a smaller button
      fontSize: '12px'        // Adjusted font size for a smaller button
    }}
  >
    Completed
  </button>
</td>
      <td>
        <div class="d-flex align-items-center">
          <img
              src={notes}
              alt=""
        
              class=""
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Frontend developing</p>
            <p class="text-muted mb-0">Travel app</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p>
       
      </td>
      <td>
      <p class="fw-normal mb-1"><img src={calender} className='me-1'/>25/05/2024</p>
      </td>

      <td>
      <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary' onClick={handleChatbotToggle} style={{cursor:'pointer'}}/>
      <IoMailUnreadOutline className='fs-4 me-1 text-primary' />

      </td>
    </tr>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
           
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td>
  <button
    type="button"
    className="btn"
    style={{
      width: '100px',           // Reduced width for a smaller button
      height: '30px',          // Set a smaller height
      textTransform: 'capitalize',
      backgroundColor: 'blue',
      color: 'white',
      borderRadius: '15px',    // Adjusted border radius for a smaller button
      padding: '5px',          // Adjusted padding for a smaller button
      fontSize: '12px'         // Reduced font size to fit the button size
    }}
  >
    On going
  </button>
</td>
      <td>
        <div class="d-flex align-items-center">
          <img
              src={notes}
              alt=""
          
              class=""
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Frontend developing</p>
            <p class="text-muted mb-0">Travel app</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p>
       
      </td>
      <td>
      <p class="fw-normal mb-1 text-danger"><img src={calender} className='me-1 bg-danger'/>25/05/2024</p>
      </td>

      <td>
      <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary' onClick={handleChatbotToggle} style={{cursor:'pointer'}}/>
      <IoMailUnreadOutline className='fs-4 me-1 text-primary' />

      </td>
    </tr>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
         
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>    
      <td>
  <button
    type="button"
    className="btn"
    style={{
      width: '100px',           // Reduced width for a smaller button
      height: '30px',          // Set a smaller height
      textTransform: 'capitalize',
      backgroundColor: 'rgb(175, 50, 50)',
      color: 'white',
      borderRadius: '15px',    // Adjusted border radius for a smaller button
      padding: '5px',          // Adjusted padding for a smaller button
      fontSize: '12px'         // Reduced font size to fit the button size
    }}
  >
    Pending
  </button>
</td>  <td>
        <div class="d-flex align-items-center">
          <img
              src={notes}
              alt=""
          
              class=""
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Frontend developing</p>
            <p class="text-muted mb-0">Travel app</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1 text-danger"><img src={calender} className='me-1 bg-danger'/>20/05/2024</p>
       
      </td>
      <td>
      <p class="fw-normal mb-1 text-danger"><img src={calender} className='me-1 bg-danger'/>25/05/2024</p>
      </td>

      <td>
      <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary' onClick={handleChatbotToggle} style={{cursor:'pointer'}}/>
      <IoMailUnreadOutline className='fs-4 me-1 text-primary' />

      </td>
    </tr>

    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""

              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td>
  <button
    type="button"
    className="btn"
    style={{
      width: '100px',           // Reduced width for a smaller button
      height: '30px',          // Set a smaller height
      textTransform: 'capitalize',
      backgroundColor: 'orange',
      color: 'white',
      borderRadius: '15px',    // Adjusted border radius for a smaller button
      padding: '5px',          // Adjusted padding for a smaller button
      fontSize: '12px'         // Reduced font size to fit the button size
    }}
  >
    Approval
  </button>
</td>      <td>
        <div class="d-flex align-items-center">
          <img
              src={notes}
              alt=""
      
              class=""
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Frontend developing</p>
            <p class="text-muted mb-0">Travel app</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p>
       
      </td>
      <td>
      <p class="fw-normal mb-1"><img src={calender} className='me-1'/>25/05/2024</p>
      </td>

      <td>
      <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary' onClick={handleChatbotToggle} style={{cursor:'pointer'}}/>
      <IoMailUnreadOutline className='fs-4 me-1 text-primary' />

      </td>
    </tr>
    
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
            
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td>
  <button
    type="button"
    className="btn"
    style={{
      width: '100px',           // Reduced width for a smaller button
      height: '30px',          // Set a smaller height
      textTransform: 'capitalize',
      backgroundColor: 'blue',
      color: 'white',
      borderRadius: '15px',    // Adjusted border radius for a smaller button
      padding: '5px',          // Adjusted padding for a smaller button
      fontSize: '12px'         // Reduced font size to fit the button size
    }}
  >
    On going
  </button>
</td>      <td>
        <div class="d-flex align-items-center">
          <img
              src={notes}
              alt=""
        
              class=""
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Frontend developing</p>
            <p class="text-muted mb-0">Travel app</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p>
       
      </td>
      <td>
      <p class="fw-normal mb-1"><img src={calender} className='me-1'/>25/05/2024</p>
      </td>

      <td>
      <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary' onClick={handleChatbotToggle} style={{cursor:'pointer'}}/>
      <IoMailUnreadOutline className='fs-4 me-1 text-primary' />

      </td>
    </tr>

    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
           
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td>
  <button
    type="button"
    className="btn"
    style={{
      width: '100px',           // Reduced width for a smaller button
      height: '30px',          // Set a smaller height
      textTransform: 'capitalize',
      backgroundColor: 'blue',
      color: 'white',
      borderRadius: '15px',    // Adjusted border radius for a smaller button
      padding: '5px',          // Adjusted padding for a smaller button
      fontSize: '12px'         // Reduced font size to fit the button size
    }}
  >
    On going
  </button>
</td>      <td>
        <div class="d-flex align-items-center">
          <img
              src={notes}
              alt=""
            
              class=""
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Frontend developing</p>
            <p class="text-muted mb-0">Travel app</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p>
       
      </td>
      <td>
      <p class="fw-normal mb-1"><img src={calender} className='me-1'/>25/05/2024</p>
      </td>

      <td>
      <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary' onClick={handleChatbotToggle} style={{cursor:'pointer'}}/>
      <IoMailUnreadOutline className='fs-4 me-1 text-primary' />

      </td>
    </tr>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
      
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
      <td>
  <button
    type="button"
    className="btn"
    style={{
      width: '100px',           // Reduced width for a smaller button
      height: '30px',          // Set a smaller height
      textTransform: 'capitalize',
      backgroundColor: 'blue',
      color: 'white',
      borderRadius: '15px',    // Adjusted border radius for a smaller button
      padding: '5px',          // Adjusted padding for a smaller button
      fontSize: '12px'         // Reduced font size to fit the button size
    }}
  >
    On going
  </button>
</td>      <td>
        <div class="d-flex align-items-center">
          <img
              src={notes}
              alt=""
              class=""
              />
      <div class="ms-3">
            <p class="fw-bold mb-1">Frontend developing</p>
            <p class="text-muted mb-0">Travel app</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1"><img src={calender} className='me-1'/>20/05/2024</p>
       
      </td>
      <td>
      <p class="fw-normal mb-1"><img src={calender} className='me-1'/>25/05/2024</p>
      </td>

      <td>
      <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary' onClick={handleChatbotToggle} style={{cursor:'pointer'}}/>
      <IoMailUnreadOutline className='fs-4 me-1 text-primary' />

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

export default RunningTask
