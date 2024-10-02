import React, { useState } from 'react';
import Header from '../Components/Header';
import bulb from '../assets/Images/bulb.png';
import notes from '../assets/Images/note.png';
import calender from '../assets/Images/calendar.png';
import book from '../assets/Images/book.png';
import message from '../assets/Images/message.png';
import { BsThreeDotsVertical } from "react-icons/bs";
import FinanceSidenav from '../Components/FinanceSidenav';
import { PiFilesFill } from "react-icons/pi";
import Chatbot from '../Components/Chatbot';

function FinanceUpcomingTask() {
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
<div style={{ display: 'flex', flexDirection: 'row', height: '100vh',}}>
    
        <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
          <FinanceSidenav /> 
        </div>

        
        <div style={{ flexGrow: 1, padding: '30px 50px', }}>
      
          <h3 style={{ color: 'black',marginTop:'20px' }}>Upcoming Task</h3>

<table class="table align-middle mb-0 bg-white " >

<thead class="bg-primary">
<tr className='text-white'>
<th> Project Name</th>
<th>Description</th>
<th>Date</th>
<th>Attachments</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<div class="d-flex align-items-center">
<img
src={bulb}
alt=""
class=""
/>
<div class="ms-3">
<p class="fw-bold mb-1 text-primary">Client Payment</p>
</div>
</div>
</td>

<td>
<div class="d-flex align-items-center">
<img
src={notes}

/>
<div class="ms-3">
<p class="fw-bold mb-1 text-primary">Salary Payment and make <br /> invoice</p>

</div>
</div>
</td>
<td>
<p class="fw-normal mb-1"><img src={calender} className='me-1'/>26/07/2024</p>
</td>
<td>
<p class="fw-normal mb-1"><img src={book} className='me-1' style={{cursor:'pointer'}}/><img src={message} style={{width:'15%',cursor:'pointer'}} className='me-1' onClick={handleChatbotToggle} />
      <BsThreeDotsVertical className='three-dots-icon text-dark ms-2' onClick={toggleDropdown}  />
            {isOpen && (
                <div className="dropdown-content">
                    <div className="dropdown-item text-dark">
                        <label>
                            <input type="checkbox" />
                            <span>Started</span>
                            
                        </label>
                        
                    </div>
                    <div className="dropdown-item text-dark">
                        <label>
                            <input type="checkbox" />
                            <span>Ongoing</span>
                            
                        </label>
                        
                    </div>
                    <div className="dropdown-item text-dark">
                        <label>
                            <input type="checkbox" />
                            <span>Cancelled</span>
                            
                        </label>
                        
                    </div>
                </div>
            )}
      </p>   </td>
</tr>
<tr>
<td>
<div class="d-flex align-items-center">
<img
src={bulb}
alt=""
            //   style="width: 45px; height: 45px"
class=""
/>
<div class="ms-3">
<p class="fw-bold mb-1 text-primary">Employee Payment</p>

</div>
</div>
</td>
<td>
<div class="d-flex align-items-center">
<img
src={notes}
alt=""
            //   style="width: 45px; height: 45px"
class=""
/>
<div class="ms-3">
<p class="fw-bold mb-1 text-primary">Salary Payment and make <br />invoice</p>

</div>
</div>
</td>
<td>
<p class="fw-normal mb-1"><img src={calender} className='me-1'/>26/07/2024</p>
</td>
<td>
<p class="fw-normal mb-1 "><img src={book} className='me-1 '/><img src={message} style={{width:'15%'}} className='me-1 '/><BsThreeDotsVertical  className='three-dots-icon text-dark ms-2'/></p>
</td>
</tr>
<tr>
<td>
<div class="d-flex align-items-center">
<img
src={bulb}
alt=""
            //   style="width: 45px; height: 45px"
class=""
/>
<div class="ms-3">
<p class="fw-bold mb-1 text-primary">Employee Payment</p>

</div>
</div>
</td>

<td>
<div class="d-flex align-items-center">
<img
src={notes}
alt=""
            //   style="width: 45px; height: 45px"
class=""
/>
<div class="ms-3">
<p class="fw-bold mb-1 text-primary">Salary Payment and make <br /> invoice</p>

</div>
</div>
</td>
<td>
<p class="fw-normal mb-1"><img src={calender} className='me-1'/>26/07/2024</p>
</td>
<td>
<p class="fw-normal mb-1 "><img src={book} className='me-1 '/><img src={message} style={{width:'15%'}} className='me-1 '/><BsThreeDotsVertical  className='three-dots-icon text-dark ms-2'/></p>
</td>
</tr>
<tr>
<td>
<div class="d-flex align-items-center">
<img
src={bulb}
alt=""
            //   style="width: 45px; height: 45px"
class=""
/>
<div class="ms-3">
<p class="fw-bold mb-1 text-primary">Employee Payment</p>
</div>
</div>
</td>

      <td>
        <div class="d-flex align-items-center">
          <img
              src={notes}
              alt=""
            //   style="width: 45px; height: 45px"
              class=""
              />
          <div class="ms-3">
            <p class="fw-bold mb-1 text-primary">Salary Payment and make <br />invoice</p>
           
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1"><img src={calender} className='me-1'/>26/07/2024</p>
       
      </td>
      <td>
      <p class="fw-normal mb-1 "><img src={book} className='me-1 '/><img src={message} style={{width:'15%'}} className='me-1 '/><BsThreeDotsVertical  className='three-dots-icon text-dark ms-2'/></p>
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

export default FinanceUpcomingTask
