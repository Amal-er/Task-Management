import React, { useState } from 'react';
import Header from '../Components/Header';
import Sidenav from '../Components/Sidenav';
import Chatbot from '../Components/Chatbot';
import status from '../Assets/Images/mingcute_settings-6-line.png';
import notes from '../Assets/Images/note.png';
import calender from '../Assets/Images/calendar.png';
import book from '../Assets/Images/book.png';
import { MdOutlineMessage } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import AdminTask from '../Components/AdminTask'

function CompletedTask() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleChatbotToggle = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const [showFilter, setShowFilter] = useState(false);
  const handleStatusClick = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className='admin-dashboard'>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>
    
    <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
      <Sidenav /> 
    </div>

    
<div style={{ flexGrow: 1, padding: '30px 40px' }} >
        <div className='table'>
          <h3 style={{ color: 'black' }}>Completed Task</h3>
          <MDBDropdown className='btn-department'>
      <MDBDropdownToggle tag='a' className='text-dark'>
Department
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <Link to={'/empsaletask'}> <MDBDropdownItem link>Sales</MDBDropdownItem></Link>
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
                        <li><input type="checkbox" /> Date</li>
                        
                      </ul>
                    </div>
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
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
</td>                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={notes}
                      alt=""
                      className=""
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">Frontend developing</p>
                      <p className="text-muted mb-0">Travel app</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1"><img src={calender} className='me-1' alt="calendar" />20/05/2024</p>
                </td>
                <td>
                  <p className="fw-normal mb-1"><img src={calender} className='me-1' alt="calendar" />25/05/2024</p>
                </td>
                <td>
                  <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary' onClick={handleChatbotToggle} style={{cursor:'pointer'}}/>
                  <span><IoMailUnreadOutline className='fs-4 me-1 text-primary' /> <AdminTask /></span>
                 
                </td>
              </tr>
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
</td>                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={notes}
                      alt=""
                      className=""
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">Frontend developing</p>
                      <p className="text-muted mb-0">Travel app</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1"><img src={calender} className='me-1' alt="calendar" />20/05/2024</p>
                </td>
                <td>
                  <p className="fw-normal mb-1"><img src={calender} className='me-1' alt="calendar" />25/05/2024</p>
                </td>
                <td>
                  <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary' onClick={handleChatbotToggle} style={{cursor:'pointer'}}/>
                  <span><IoMailUnreadOutline className='fs-4 me-1 text-primary' /> <AdminTask /></span>
                </td>
              </tr>
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
</td>                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={notes}
                      alt=""
                      className=""
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">Frontend developing</p>
                      <p className="text-muted mb-0">Travel app</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1"><img src={calender} className='me-1' alt="calendar" />20/05/2024</p>
                </td>
                <td>
                  <p className="fw-normal mb-1"><img src={calender} className='me-1' alt="calendar" />25/05/2024</p>
                </td>
                <td>
                  <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary' onClick={handleChatbotToggle} style={{cursor:'pointer'}}/>
                  <span><IoMailUnreadOutline className='fs-4 me-1 text-primary' /> <AdminTask /></span>
                </td>
              </tr>
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
</td>                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={notes}
                      alt=""
                      className=""
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">Frontend developing</p>
                      <p className="text-muted mb-0">Travel app</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1"><img src={calender} className='me-1' alt="calendar" />20/05/2024</p>
                </td>
                <td>
                  <p className="fw-normal mb-1"><img src={calender} className='me-1' alt="calendar" />25/05/2024</p>
                </td>
                <td>
                  <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary' onClick={handleChatbotToggle} style={{cursor:'pointer'}} />
                   <span><IoMailUnreadOutline className='fs-4 me-1 text-primary' /> <AdminTask /></span>
                </td>
              </tr>
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
</td>                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={notes}
                      alt=""
                      className=""
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">Frontend developing</p>
                      <p className="text-muted mb-0">Travel app</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1"><img src={calender} className='me-1' alt="calendar" />20/05/2024</p>
                </td>
                <td>
                  <p className="fw-normal mb-1"><img src={calender} className='me-1' alt="calendar" />25/05/2024</p>
                </td>
                <td>
                  <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary' onClick={handleChatbotToggle} style={{cursor:'pointer'}}/>
                  <IoMailUnreadOutline className='fs-4 me-1 text-primary' />
                  <img src={book} className='me-1 ms-2' alt="book" />
                </td>
              </tr>
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
</td>                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={notes}
                      alt=""
                      className=""
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">Frontend developing</p>
                      <p className="text-muted mb-0">Travel app</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1"><img src={calender} className='me-1' alt="calendar" />20/05/2024</p>
                </td>
                <td>
                  <p className="fw-normal mb-1"><img src={calender} className='me-1' alt="calendar" />25/05/2024</p>
                </td>
                <td>
                  <MdOutlineMessage className='fs-4 me-3 mt-1 text-primary' onClick={handleChatbotToggle} style={{cursor:'pointer'}} />
                  <IoMailUnreadOutline className='fs-4 me-1 text-primary' />
                  <img src={book} className='me-1 ms-2' alt="book" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
      <Chatbot isOpen={isChatbotOpen} onClose={handleChatbotToggle} />
    </div>
  );
}

export default CompletedTask;
