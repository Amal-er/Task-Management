
import React, { useState } from 'react';
import Header from '../Components/Header';
import Sidenav from '../Components/Sidenav';
import 'react-calendar/dist/Calendar.css';
import AdminSendAnnouncement from '../Components/AdminSendAnnouncement';
import tick from '../assets/Images/tick.png';
import profile from '../assets/Images/Mask Group.png'; 
import user from '../assets/Images/Group.png'
import user1 from '../assets/Images/material-symbols_avg-time-outline-sharp.png'
import user2 from '../assets/Images/mdi_weather-time.png'
import user3 from '../assets/Images/pajamas_time-out.png'
import user4 from '../assets/Images/Vector.png'
import  AdminUpComeEvents from '../Components/AdminUpcomeEvents'
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset } from '../Pages/DataSet';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';


const months = [
  { name: 'January', days: 31 },
  { name: 'February', days: 28 },
  { name: 'March', days: 31 },
  { name: 'April', days: 30 },
  { name: 'May', days: 31 },
  { name: 'June', days: 30 },
  { name: 'July', days: 31 },
  { name: 'August', days: 31 },
  { name: 'September', days: 30 },
  { name: 'October', days: 31 },
  { name: 'November', days: 30 },
  { name: 'December', days: 31 },
];

const AdminDashboard = () => {
  const [dateState, setDateState] = useState(new Date());
  const chartSetting = {
    height: 230,
   
  };
  const valueFormatter = (value) => `${value}k`;


  const [showAlert, setShowAlert] = useState(false);

  const handleSave = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };




  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());
  const [currentDay, setCurrentDay] = useState(new Date().getDate());


  const handlePrevMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex === 0 ? 11 : prevIndex - 1));
    if (currentMonthIndex === 0) {
      setCurrentYear((prevYear) => prevYear - 1);
    }
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex === 11 ? 0 : prevIndex + 1));
    if (currentMonthIndex === 11) {
      setCurrentYear((prevYear) => prevYear + 1);
    }
  };

  const renderCalendarDays = (days) => {
    let calendarDays = [];
    for (let i = 1; i <= days; i++) {
      const dateStr = `${currentYear}-${String(currentMonthIndex + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const dayEvents = events[dateStr] || [];
  
      calendarDays.push(
        <div key={i} className={`calendar-day ${i === new Date().getDate() ? 'current-day' : ''}`}>
          {i}
          {dayEvents.length > 0 && (
            <div className="event-tooltip">
              {dayEvents.map((event, index) => (
                <div key={index}>{event}</div>
              ))}
            </div>
          )}
        </div>
      );
    }
    return calendarDays;
  };

  const events = {
    '2024-08-17': ['• Webinars on Topics Like AI, Machine Learning, and Blockchain on July 17th']
    
  };
  

  return (
    <div className='admin-dashboard'>
      <Header />
      <div className="row1">
        <div className="col-md-2" id='side'>
          <Sidenav />
        </div>
        <div className='col-md-10' id='col10'>
          <div className='dashboard-container'>
            <div className='greeting-stats-container'>
            <div className='greeting-card'>
  <div className='profile-section'>
    <img src={profile} alt="Profile" className='profile-img' />
    <div className='welcome-text'>
      <h2>Good afternoon</h2> {/* Change this text as needed */}
      <p>Welcome Back Admin</p>
    </div>
  </div>
  <div className='icon-section'>
   
    <AdminSendAnnouncement/>
  </div>
</div>


              <div className='dashboard-stats'>
  <div className='stat-card'>
    <h3>25 <img src={user} alt="User Icon" /></h3>
    <p>Total Employees</p>
    <span>2 new employees added!</span>
  </div>
  <div className='stat-card'>
    <h3>04 <img src={user1} alt="Leave Request Icon" /></h3>
    <p>Leave Request</p>
    <span style={{ color: '#ff0000' }}>-10% Less than yesterday</span>
  </div>
  <div className='stat-card'>
    <h3>01 <img src={user2} alt="Absent Icon" /></h3>
    <p>Absent</p>
    <span style={{ color: '#ff0000' }}>+3% Less than yesterday</span>
  </div>
  <div className='stat-card'>
    <h3>09 <img src={user3} alt="Night Shift Icon" /></h3>
    <p>Night Shift</p>
    <span style={{ color: '#00c853' }}>+2% Increase than yesterday</span>
  </div>
  <div className='stat-card'>
    <h3>12 <img src={user4} alt="Work from Home Icon" /></h3>
    <p>Work from home</p>
    <span style={{ color: '#00c853' }}>+2% Increase than yesterday</span>
  </div>
</div>
</div>
            
            
            <div className='content'>
              <div className='left-column'>
                <div className='chart-card' style={{height:'100%'}} >
                  <h4 className='text-dark'>Payroll Expenses</h4> <hr />
                  <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      
      series={[
        { dataKey: 'london',  valueFormatter },
   
      ]}
      
      {...chartSetting}
    />
                </div>
                <div className='projects-card'>
                  <h4 className='text-dark ms-2'>Active Projects</h4><hr />
                  <table className='projects-table'>
                    <thead>
                      <tr>
                        <th>Project Name</th>
                        <th>Project Lead</th>
                        <th>Progress</th>
                        <th>Due Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Web site</td>
                        <td>Johnson</td>
                        <td><span className="progress-bar" style={{width: '70%'}}></span> 70%</td>
                        <td>06 Jan 2024</td>
                        <td><span className="status ongoing px-3">On Going</span></td>
                      </tr>
                      <tr>
                        <td>Mobile App</td>
                        <td>Amal</td>
                        <td><span className="progress-bar" style={{width: '100%'}}></span> 100%</td>
                        <td>30 Jan 2024</td>
                        <td><span className="status completed">Completed</span></td>
                      </tr>
                      <tr>
                        <td>Sales call</td>
                        <td>Kevin</td>
                        <td><span className="progress-bar" style={{width: '79%'}}></span> 79%</td>
                        <td>30 Jan 2024</td>
                        <td><span className="status ongoing px-3 ">On Going</span></td>
                      </tr>
                      <tr>
                        <td>Marketing</td>
                        <td>Thomas</td>
                        <td><span className="progress-bar" style={{width: '15%'}}></span> 15%</td>
                        <td>30 Jan 2024</td>
                        <td><span className="status pending px-3 ">Pending</span></td>
                      </tr >
                    </tbody>
                  </table>
                  {/* <button className='btn-view-all mb-2 me-4 mt-2'>View All</button> */}
                </div>
              </div>

              <div className='right-column'>
              <div className="calendar-container">
        <div className="calendar-heading">
          <span className="calendar-heading-title">
            Today, {months[new Date().getMonth()].name} {new Date().getDate()}, {new Date().getFullYear()}
          </span>
          <button className="calendar-add-btn" onClick={toggleOpen}>+</button>
        </div>
        <div className="calendar-header">
          <button className="month-nav-btn" onClick={handlePrevMonth}>&lt;</button>
          <span className="calendar-header-title">
            {months[currentMonthIndex].name}, {currentYear}
          </span>
          <button className="month-nav-btn" onClick={handleNextMonth}>&gt;</button>
        </div>
        <div className="calendar-body">
          <div className="calendar-weekdays">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
          <div className="calendar-days">
            {renderCalendarDays(months[currentMonthIndex].days)}
          </div>
        </div>
      </div>

          <MDBModal open={basicModal} onClose={toggleOpen} tabIndex='-1'>
      <MDBModalDialog style={{ maxWidth: '40%' }}>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>New Events</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <label>
              Event Title
              <input type="text" className="form-control" />
            </label>
            <label>
              Description
              <textarea className="form-control" />
            </label>
            <label>
              Date (MM/DD/YYYY)
              <input type="date" className="form-control" />
            </label>
            {/* Conditionally render the alert message */}
            {showAlert && (
              <div className="alert alert-success mt-3" role="alert">
                New event added
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseAlert}></button>
              </div>
            )}
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleOpen}>
              Close
            </MDBBtn>
            <MDBBtn onClick={handleSave}>Save</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>


                <div className='events-card'>
                  <h4 className='text-dark'>Upcoming Events</h4><hr />
                  <ul>
                    <li>Webinars on Topics Like AI, Machine Learning, And Blockchain On July 17 <img src={tick} alt="Tick"  width={'20px'} height={'20px'}/></li>
                    <li>Client meeting On July 20 <img src={tick} alt="Tick"  width={'20px'} height={'20px'}/></li>
                   
                    <li>Webinars on Topics Like AI, Machine Learning, And Blockchain On July 17 <img src={tick} alt="Tick"  width={'20px'} height={'20px'}/></li>
                  </ul>
                 <AdminUpComeEvents/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

