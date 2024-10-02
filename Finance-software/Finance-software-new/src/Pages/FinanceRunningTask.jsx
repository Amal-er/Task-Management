import React, { useState } from 'react';
import Header from '../Components/Header';
import tasks from '../assets/Images/tasks.png';
import calender from '../assets/Images/calendar.png';
import book from '../assets/Images/book.png';
import message from '../assets/Images/message.png';
import { BsThreeDotsVertical } from "react-icons/bs";
import FinanceSidenav from '../Components/FinanceSidenav';
import { PiFilesFill } from "react-icons/pi";
import Chatbot from '../Components/Chatbot';

function FinanceRunningTask() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
      setIsOpen(!isOpen);
  };
  const [showFilter, setShowFilter] = useState(false);

  const handleStatusClick = () => {
    setShowFilter(!showFilter);
  };
  const closeDropdown = (e) => {
      if (!e.target.closest('.dropdown')) {
          setIsOpen(false);
      }
  };
  const handleChatbotToggle = () => {
    setIsChatbotOpen(!isChatbotOpen);
};

  return (
<div className='admin-dashboard'>
<Header/>
<div style={{ display: 'flex', flexDirection: 'row', height: '100vh', }}>
    
        <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
          <FinanceSidenav /> 
        </div>

        
        <div style={{ flexGrow: 1, padding: '30px 50px', }}>
      
          <h3 style={{ color: 'black',marginTop:'20px' }}>Running Task</h3>

<table class="table align-middle mb-0 bg-white " >

<thead class="bg-primary">
<tr className='text-white'>
<th> Task Name</th>
<th>Task ID</th>
<th>Due Date</th>
<th>Status</th>

</tr>
</thead>
<tbody>
<tr>
<td>
<div class="d-flex align-items-center">
<img
src={tasks}
alt=""
            //   style="width: 45px; height: 45px"
class=""
/>
<div class="ms-3">
<p class="fw-bold mb-1 text-primary">Client Payment</p>
</div>
</div>
</td>

<td>
<div class="d-flex align-items-center">

<div class="ms-3">
<p class="fw-bold mb-1 text-primary">#23456</p>

</div>
</div>
</td>
<td className='d-flex'>
<p class="fw-normal mb-1">Start Date <br /><img src={calender} className='me-1'/> 26/07/2024</p>
<p class="fw-normal mb-1 ms-5">End Date <br /><img src={calender} className='me-1'/> 15/08/2024</p>
</td>

<td  style={{position:'relative'}}>
    
  <p class="fw-normal mb-1">  <button 
    type="button"
    className="btn btn-primary dropdown-toggle me-5"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    style={{
      width: '120px',
      height: '30px',
      textTransform: 'capitalize',
      borderRadius: '15px',
      fontSize: '12px',
      padding: '2px 8px'
    }}>
   Ongoing
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item">Pending</a></li>
    <li><a className="dropdown-item">Paused</a></li>
    <li><a className="dropdown-item">Ongoing</a></li>
    <li><a className="dropdown-item">Need Approval</a></li>
  </ul>
    <img src={book} className='me-1'/>
    <img 
      src={message} 
      style={{width:'10%', cursor:'pointer'}} 
      className='me-1' 
      onClick={handleChatbotToggle} 
    />
    <BsThreeDotsVertical 
      className='three-dots-icon text-dark ms-2' 
    //   onClick={toggleDropdown}  
      

      alt="Status Filter"
    //   className="status-icon ms-2"
      onClick={handleStatusClick}
     
    />
   
                  
                  {/* Filter Dropdown */}
                  {showFilter && (
                    <div className="filter-dropdown" style={{width:'65%'}}>
                      <ul>
                     <li className='text-dark'><input type="checkbox" /> 20%</li>
                        <li><input type="checkbox" />40%</li>
                        <li><input type="checkbox" />60%</li>
                        <li><input type="checkbox" />80%</li>
                        <li><input type="checkbox" />90%</li>
                        
                      </ul>
                    </div>
                  )}
    {/* Dropdown Button for Status */}
 
  </p>   
</td>

</tr>
<tr>
<td>
<div class="d-flex align-items-center">
<img
src={tasks}
alt=""
            //   style="width: 45px; height: 45px"
class=""
/>
<div class="ms-3">
<p class="fw-bold mb-1 text-primary">Client Payment</p>

</div>
</div>
</td>
<td>
<div class="d-flex align-items-center">

<div class="ms-3">
<p class="fw-bold mb-1 text-primary">#23456</p>

</div>
</div>
</td>
<td className='d-flex'>
<p class="fw-normal mb-1">Start Date <br /><img src={calender} className='me-1'/> 26/07/2024</p>
<p class="fw-normal mb-1 ms-5">End Date <br /><img src={calender} className='me-1'/> 15/08/2024</p>
</td>
<td>
<p class="fw-normal mb-1 ">
<button 
    type="button"
    className="btn btn-danger dropdown-toggle me-5"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    style={{
      width: '120px',
      height: '30px',
      textTransform: 'capitalize',
      borderRadius: '15px',
      fontSize: '12px',
      padding: '2px 8px'
    }}>
   Pending
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item">Pending</a></li>
    <li><a className="dropdown-item">Paused</a></li>
    <li><a className="dropdown-item">Ongoing</a></li>
    <li><a className="dropdown-item">Need Approval</a></li>
  </ul>
  <img src={book} className='me-1 '/><img src={message} style={{width:'10%'}} className='me-1 '/><BsThreeDotsVertical  className='three-dots-icon text-dark ms-2'/></p>
</td>
</tr>
<tr>
<td>
<div class="d-flex align-items-center">
<img
src={tasks}
alt=""
            //   style="width: 45px; height: 45px"
class=""
/>
<div class="ms-3">
<p class="fw-bold mb-1 text-primary">Client Payment</p>

</div>
</div>
</td>

<td>
<div class="d-flex align-items-center">

<div class="ms-3">
<p class="fw-bold mb-1 text-primary">#23456</p>

</div>
</div>
</td>
<td className='d-flex'>
<p class="fw-normal mb-1">Start Date <br /><img src={calender} className='me-1'/> 26/07/2024</p>
<p class="fw-normal mb-1 ms-5">End Date <br /><img src={calender} className='me-1'/> 15/08/2024</p>
</td>
<td>
<p class="fw-normal mb-1 ">  <button 
    type="button"
    className="btn btn-warning dropdown-toggle me-5"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    style={{
      width: '120px',
      height: '30px',
      textTransform: 'capitalize',
      borderRadius: '15px',
      fontSize: '12px',
      padding: '2px 8px'
    }}>
    Paused
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item">Pending</a></li>
    <li><a className="dropdown-item">Paused</a></li>
    <li><a className="dropdown-item">Ongoing</a></li>
    <li><a className="dropdown-item">Need Approval</a></li>
  </ul>
  <img src={book} className='me-1 '/><img src={message} style={{width:'10%'}} className='me-1 '/><BsThreeDotsVertical  className='three-dots-icon text-dark ms-2'/></p>
</td>
</tr>
<tr>
<td>
<div class="d-flex align-items-center">
<img
src={tasks}
alt=""
            //   style="width: 45px; height: 45px"
class=""
/>
<div class="ms-3">
<p class="fw-bold mb-1 text-primary">Client Payment</p>
</div>
</div>
</td>

      <td>
        <div class="d-flex align-items-center">

          <div class="ms-3">
            <p class="fw-bold mb-1 text-primary">#23456</p>
           
          </div>
        </div>
      </td>
      <td className='d-flex'>
<p class="fw-normal mb-1">Start Date <br /><img src={calender} className='me-1'/> 26/07/2024</p>
<p class="fw-normal mb-1 ms-5">End Date <br /><img src={calender} className='me-1'/> 15/08/2024</p>
</td>
 <td>
      
 
      <p class="fw-normal mb-1 ">
      <button 
    type="button"
    className="btn btn-warning dropdown-toggle me-5"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    style={{
      width: '120px',
      height: '30px',
      textTransform: 'capitalize',
      borderRadius: '15px',
      fontSize: '12px',
      padding: '2px 8px'
    }}>
    Need Approval
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item">Pending</a></li>
    <li><a className="dropdown-item">Paused</a></li>
    <li><a className="dropdown-item">Ongoing</a></li>
    <li><a className="dropdown-item">Need Approval</a></li>
  </ul><img src={book} className='me-1 '/><img src={message} style={{width:'10%'}} className='me-1 '/><BsThreeDotsVertical  className='three-dots-icon text-dark ms-2'/></p>
  

      </td>
    </tr>

</tbody>
</table>
<div className='d-grid gap-2 d-md-flex justify-content-md-end'>
            <PiFilesFill className='me-1 fs-5' />
            10 files
          </div>
</div>
</div>
<Chatbot isOpen={isChatbotOpen} onClose={handleChatbotToggle} />
</div>

  )
}

export default FinanceRunningTask
