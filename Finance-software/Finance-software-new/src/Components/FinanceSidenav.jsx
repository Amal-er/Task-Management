import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import auximg from '../assets/Images/auximg.png';
import { BsBank } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";


function FinanceSidenav() {
const [openMenu, setOpenMenu] = useState(null);
const [isSidenavOpen, setSidenavOpen] = useState(false);
const toggleMenu = (menu) => {
setOpenMenu(openMenu === menu ? null : menu);
};
 
  const toggleSidenav = () => {
    setSidenavOpen(!isSidenavOpen);
  };

  return (
    <>



<header className="headerside">
        <button className="sidenav-toggle" onClick={toggleSidenav}>
          ☰
        </button>
      </header>
      <div className={`sidenav ${isSidenavOpen ? 'open' : ''}`}>
        <nav className="sidebar">
        <img src={auximg} width={'50px'}/>
          <ul>
            <li>
          <a href="financedashboard" className="menu-item " onClick={() => toggleMenu('dashboard')}><MdDashboard className='ms-3' />Dashboard</a>
           </li>

            <li>
              <a href="#" className="menu-item" onClick={() => toggleMenu('employee')}>
              <FaRegUserCircle  className='ms-3'/> Employee<i class="fa-solid fa-caret-down ms-3"></i>
              </a>
              {openMenu === 'employee' && (
                <ul className="submenu">
                  <li><a href="/financesoftware">Software Solution</a></li>
                  <li><a href="#">Economic Business</a></li>
                  <li><a href="#">Data Solution</a></li>
                  <li><a href="#">Marketing</a></li>
                  <li><a href="/">Sales</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" className="menu-item" onClick={() => toggleMenu('task')}>
              <BiTask className='ms-3' /> Task <i class="fa-solid fa-caret-down ms-3"></i>
              </a>
              {openMenu === 'task' && (
                <ul className="submenu">
                  <li><a href="/financeupcomingtask">Upcoming Task</a></li>
                  <li><a href="/financerunningtask">Running Task</a></li>
                  <li><a href="/financecompleted">Completed Task</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" className="menu-item" onClick={() => toggleMenu('finance')}>
              <BsBank  className='ms-3 me-1' />Finance <i class="fa-solid fa-caret-down ms-3"></i>
              </a>
              {openMenu === 'finance' && (
                <ul className="submenu">
                                <li><a href="/finance">Finance</a></li>
                  <li><a href="/financeclients">Clients</a></li>
                  <li><a href="/financepayroll">Payroll</a></li>
                </ul>
              )}
            </li>
            
                        <li>
              <a href="#" className="menu-item" onClick={() => toggleMenu('attendance')}>
              <FaPeopleGroup  className='ms-3' /> Attendance<i class="fa-solid fa-caret-down ms-3"></i>
              </a>
              {openMenu === 'attendance' && (
                <ul className="submenu">
                  <li><a href="/financeattendance">Attendance List</a></li>
                    <li><a href="/financeleave">Leave Request</a></li>
                  <li><a href="/financeteamattendance">Employee Attendance</a></li>


                
                </ul>
              )}
            </li>
            <li>
              <a href="/financemailinbox" className="menu-item" onClick={() => toggleMenu('customer')}>
              <MdMailOutline className='ms-3' /> Mail
              </a>
    
            </li>
            <li>
              <a href="/financenewchat" className="menu-item" onClick={() => toggleMenu('newchat')}>
              <IoChatbubbleEllipsesOutline  className='ms-3' /> Chat
              </a>
    
            </li>
            <li>
              <a href="/financesettings" className="menu-item" onClick={() => toggleMenu('settings')}>
              <CiSettings  className='ms-3 fs-5' /> Settings 
              </a>
              
            </li>
          </ul>
        </nav>
      </div>
      {isSidenavOpen && <div className="overlay" onClick={toggleSidenav}></div>}
    </>
  );
}

export default FinanceSidenav;





