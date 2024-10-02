

import React, { useState } from 'react';
import Header from '../Components/Header';
import SidenavHR from '../Components/SidenavHR';
import status from '../assets/Images/mingcute_settings-6-line.png';
import notes from '../assets/Images/note.png';
import calender from '../assets/Images/calendar.png';
import { MdOutlineMessage } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import HrChatbot from '../Components/HrChatbot';
function  HrRunningTaskSales() {
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
  <SidenavHR /> 
</div>


<div style={{ flexGrow: 1, padding: '30px 50px', }}>
          <h3 style={{color:'black'}}>Running Task Sales</h3>

          <MDBDropdown className='mt-3'>
            <MDBDropdownToggle tag='a' className='btn-department'>
              Department
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <Link to={'/hrrunningsaletask'}><MDBDropdownItem link>Sales</MDBDropdownItem></Link>
              
            </MDBDropdownMenu>
          </MDBDropdown>

          <table className="table align-middle mb-0 bg-white">
            <thead className="bg-primary">
              <tr className='text-white'>
                <th>Employee Name</th>
                <th>Status</th>
                <th>Task Title</th>
                <th>Start Date</th>
                <th>End Date</th>
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
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">John Doe</p>
                      <p className="text-muted mb-0">#1234567</p>
                    </div>
                  </div>
                </td>
                <td>
                  <button type="button" className="btn" style={{ width: '110px', textTransform: 'capitalize', backgroundColor: 'green', color: 'white', borderRadius: '50px' }}>Completed</button>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img src={notes} alt="" className="" />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">Frontend developing</p>
                      <p className="text-muted mb-0">Travel app</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1"><img src={calender} className='me-1' />20/05/2024</p>
                </td>
                <td>
                  <p className="fw-normal mb-1"><img src={calender} className='me-1' />25/05/2024</p>
                </td>
                <td>
                  <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary'  onClick={handleChatbotToggle} style={{cursor:'pointer'}}/>
                  <Link to={'/hrmailinbox'}><IoMailUnreadOutline className='fs-4 me-1 text-primary' /></Link>
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
          <td><button type="button" class="btn" style={{width:'110px',textTransform:'capitalize',backgroundColor:'blue',color:'white',borderRadius:'40px'}}>On going</button></td>
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
          <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary'  onClick={handleChatbotToggle} />
          <Link to={'/hrmailinbox'}><IoMailUnreadOutline className='fs-4 me-1 text-primary' /></Link> 
    
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
          <td><button type="button" class="btn" style={{width:'110px',textTransform:'capitalize',backgroundColor:' rgb(175, 50, 50)',color:'white',borderRadius:'40px'}}>Pending</button></td>
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
            <p class="fw-normal mb-1 text-danger"><img src={calender} className='me-1 bg-danger'/>20/05/2024</p>
           
          </td>
          <td>
          <p class="fw-normal mb-1 text-danger"><img src={calender} className='me-1 bg-danger'/>25/05/2024</p>
          </td>
    
          <td>
          <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary'  onClick={handleChatbotToggle} />
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
          <td><button type="button" class="btn " style={{width:'110px',textTransform:'capitalize',backgroundColor:'orange',color:'white',borderRadius:'40px'}}>Approval</button></td>
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
          <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary'  onClick={handleChatbotToggle} />
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
          <td><button type="button" class="btn " style={{width:'110px',textTransform:'capitalize',backgroundColor:'blue',color:'white',borderRadius:'40px'}}>On going</button></td>
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
          <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary'  onClick={handleChatbotToggle} />
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
          <td><button type="button" class="btn " style={{width:'110px',textTransform:'capitalize',backgroundColor:'blue',color:'white',borderRadius:'40px'}}>On going</button></td>
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
          <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary'  onClick={handleChatbotToggle} />
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
          <td><button type="button" class="btn "   style={{width:'110px',textTransform:'capitalize',backgroundColor:'blue',color:'white',borderRadius:'40px'}}>On going</button></td>
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
          <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary'  onClick={handleChatbotToggle} />
          <IoMailUnreadOutline className='fs-4 me-1 text-primary' />
    
          </td>
        </tr>
            </tbody>
          </table>
        </div>
      </div>
      <HrChatbot isOpen={isChatbotOpen} onClose={handleChatbotToggle} />
    </div>
  );
}

export default HrRunningTaskSales;
