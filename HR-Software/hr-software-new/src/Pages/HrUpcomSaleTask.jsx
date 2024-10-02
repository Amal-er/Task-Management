import React, { useState } from 'react';
import Header from '../Components/Header';
import SidenavHR from '../Components/SidenavHR';
import bulb from '../assets/Images/bulb.png';
import notes from '../assets/Images/note.png';
import calender from '../assets/Images/calendar.png';
import book from '../assets/Images/book.png';
import message from '../assets/Images/message.png';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';
import HrChatbot from '../Components/HrChatbot';
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

function HrUpcomSaleTask() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
      setIsOpen(!isOpen);
  };

  const closeDropdown = (e) => {
      if (!e.target.closest('.dropdown')) {
          setIsOpen(false);
      }
  };

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleChatbotToggle = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };


  const [projectName, setProjectName] = useState('Book my J');
  const [assignedTo, setAssignedTo] = useState('Arun K S');
  const [description, setDescription] = useState('Front end developing of travel App');
 const [date, setDate] = useState('2024-05-20');
 const [basicModal, setBasicModal] = useState(false);
 const toggleOpen = () => setBasicModal(!basicModal);

  return (
<div className='admin-dashboard'>
<Header/>
<div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>

<div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
  <SidenavHR /> 
</div>


<div style={{ flexGrow: 1, padding: '30px 50px', }}>
<div className='table'><h3>Upcoming Task Sales</h3>
<MDBDropdown>
<MDBDropdownToggle tag='a' className='btn-department'>
Department
</MDBDropdownToggle>
<MDBDropdownMenu>
<Link to={'/hrupcomsaletask'}><MDBDropdownItem link>Sales</MDBDropdownItem></Link>

</MDBDropdownMenu>
</MDBDropdown>
<table class="table align-middle mb-0 bg-white " >

<thead class="bg-primary">
<tr className='text-white'>
<th> Project Name</th>
<th>Assign to</th>
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
            //   style="width: 45px; height: 45px"
class=""
/>
<div class="ms-3">
<p class="fw-bold mb-1">Book my j</p>
<p class="text-muted mb-0">#1234567</p>
</div>
</div>
</td>
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
<td>
<div class="d-flex align-items-center">
<img
src={notes}
alt=""
            //   style="width: 45px; height: 45px"
class=""
/>
<div class="ms-3">
<p class="fw-bold mb-1">Frontend developing</p>
<p class="text-muted mb-0">Travel app</p>
</div>
</div>
</td>
<td>
<p class="fw-normal mb-1"><img src={calender} className='me-1'/>26/07/2024</p>
</td>
<td>
<p class="fw-normal mb-1"><img src={book} className='me-1'/><img src={message} className='me-1' onClick={handleChatbotToggle} style={{cursor:'pointer'}}/>
      <BsThreeDotsVertical className='three-dots-icon text-dark ms-2' onClick={toggleDropdown}  />
            {isOpen && (
                <div className="dropdown-content">
                    <div className="dropdown-item text-dark">
                      <label>
    <input type="checkbox" />
    <span onClick={toggleOpen}>Edit</span>
</label>
                    </div>
                    <div className="dropdown-item text-dark">
                        <label>
                            <input type="checkbox" />
                            <span>Delete</span>
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
<p class="fw-bold mb-1">Book my j</p>
<p class="text-muted mb-0">#1234567</p>
</div>
</div>
</td>
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
<td>
<div class="d-flex align-items-center">
<img
src={notes}
alt=""
            //   style="width: 45px; height: 45px"
class=""
/>
<div class="ms-3">
<p class="fw-bold mb-1">Frontend developing</p>
<p class="text-muted mb-0">Travel app</p>
</div>
</div>
</td>
<td>
<p class="fw-normal mb-1"><img src={calender} className='me-1'/>26/07/2024</p>
</td>
<td>
<p class="fw-normal mb-1 "><img src={book} className='me-1 '/><img src={message} className='me-1 '  onClick={handleChatbotToggle} /><BsThreeDotsVertical  className='three-dots-icon text-dark ms-2'/></p>
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
<p class="fw-bold mb-1">Book my j</p>
<p class="text-muted mb-0">#1234567</p>
</div>
</div>
</td>
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
<td>
<div class="d-flex align-items-center">
<img
src={notes}
alt=""
            //   style="width: 45px; height: 45px"
class=""
/>
<div class="ms-3">
<p class="fw-bold mb-1">Frontend developing</p>
<p class="text-muted mb-0">Travel app</p>
</div>
</div>
</td>
<td>
<p class="fw-normal mb-1"><img src={calender} className='me-1'/>26/07/2024</p>
</td>
<td>
<p class="fw-normal mb-1 "><img src={book} className='me-1 '/><img src={message} className='me-1 '  onClick={handleChatbotToggle} /><BsThreeDotsVertical  className='three-dots-icon text-dark ms-2'/></p>
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
<p class="fw-bold mb-1">Book my j</p>
<p class="text-muted mb-0">#1234567</p>
</div>
</div>
</td>
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
      <td>
        <div class="d-flex align-items-center">
          <img
              src={notes}
              alt=""
            //   style="width: 45px; height: 45px"
              class=""
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Frontend developing</p>
            <p class="text-muted mb-0">Travel app</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1"><img src={calender} className='me-1'/>26/07/2024</p>
       
      </td>
      <td>
      <p class="fw-normal mb-1 "><img src={book} className='me-1 '/><img src={message} className='me-1 '  onClick={handleChatbotToggle} /><BsThreeDotsVertical  className='three-dots-icon text-dark ms-2'/></p>
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
            <p class="fw-bold mb-1">Book my j</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
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
      <td>
        <div class="d-flex align-items-center">
          <img
              src={notes}
              alt=""
            //   style="width: 45px; height: 45px"
              class=""
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Frontend developing</p>
            <p class="text-muted mb-0">Travel app</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1"><img src={calender} className='me-1'/>26/07/2024</p>
       
      </td>
      <td>
      <p class="fw-normal mb-1 "><img src={book} className='me-1 '/><img src={message} className='me-1 '  onClick={handleChatbotToggle} /><BsThreeDotsVertical  className='three-dots-icon text-dark ms-2'/></p>
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
            <p class="fw-bold mb-1">Book my j</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
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
      <td>
        <div class="d-flex align-items-center">
          <img
              src={notes}
              alt=""
            //   style="width: 45px; height: 45px"
              class=""
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Frontend developing</p>
            <p class="text-muted mb-0">Travel app</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1"><img src={calender} className='me-1'/>26/07/2024</p>
       
      </td>
      <td>
      <p class="fw-normal mb-1 "><img src={book} className='me-1 '/><img src={message} className='me-1 '  onClick={handleChatbotToggle} /><BsThreeDotsVertical  className='three-dots-icon text-dark ms-2'/></p>
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
            <p class="fw-bold mb-1">Book my j</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
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
      <td>
        <div class="d-flex align-items-center">
          <img
              src={notes}
              alt=""
            //   style="width: 45px; height: 45px"
              class=""
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Frontend developing</p>
            <p class="text-muted mb-0">Travel app</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1"><img src={calender} className='me-1'/>26/07/2024</p>
       
      </td>
      <td>
      <p class="fw-normal mb-1 "><img src={book} className='me-1 '/><img src={message} className='me-1 '  onClick={handleChatbotToggle} /><BsThreeDotsVertical  className='three-dots-icon text-dark ms-2'/></p>
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
            <p class="fw-bold mb-1">Book my j</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
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
      <td>
        <div class="d-flex align-items-center">
          <img
              src={notes}
              alt=""
            //   style="width: 45px; height: 45px"
              class=""
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Frontend developing</p>
            <p class="text-muted mb-0">Travel app</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1"><img src={calender} className='me-1'/>26/07/2024</p>
       
      </td>
      <td>
      <td className=''>
      <p class="fw-normal mb-1 "><img src={book} className='me-1 '/><img src={message} className='me-1 '  onClick={handleChatbotToggle} /><BsThreeDotsVertical  className='three-dots-icon text-dark ms-2'/></p>

      </td>
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
            <p class="fw-bold mb-1">Book my j</p>
            <p class="text-muted mb-0">#1234567</p>
          </div>
        </div>
      </td>
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
      <td>
        <div class="d-flex align-items-center">
          <img
              src={notes}
              alt=""
            //   style="width: 45px; height: 45px"
              class=""
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Frontend developing</p>
            <p class="text-muted mb-0">Travel app</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1"><img src={calender} className='me-1'/>26/07/2024</p>
       
      </td>
      <td>
      <td className=''>
      <p class="fw-normal mb-1 "><img src={book} className='me-1 '/><img src={message} className='me-1 ' onClick={handleChatbotToggle} /><BsThreeDotsVertical  className='three-dots-icon text-dark ms-2'/></p>

      </td>
      </td>
    </tr>

</tbody>
</table>
</div>
</div>
</div>
<MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Upcoming Task Edit</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody> <div className="container">
      
      
       <div className="formGroup">
         <label className="label">Project Name :</label>
        <input
           type="text"
           value={projectName}
          readOnly
           className="input mb-2"
         />
      </div>

       <div className="formGroup mb-2">
         <label className="label">Assign to :</label>
         <div className="assignInput">
          <img
            src="https://via.placeholder.com/40" // replace with actual image path
             alt="Assignee"
             className="assignImage"          />
          <select className="select">
            <option value="Arun K S">{assignedTo}</option>
             {/* Add more options as needed */}
           </select>
         </div>
       </div>

       <div className="formGroup mb-2">
         <label className="label">Description :</label>
         <input
           type="text"
           value={description}
           onChange={(e) => setDescription(e.target.value)}
          className="input"
         />
       </div>

       <div className="formGroup mb-2">
         <label className="label">Date :</label>
       <input
          type="date"
          value={date}
         onChange={(e) => setDate(e.target.value)}
           className="input"
         />
       </div>

       <div className="formGroup mb-2">
         <label className="label">Attachments</label>         <div className="uploadButton">
           <label htmlFor="fileUpload" style={{ cursor: 'pointer' }}>
           Upload file
           </label>
           <input type="file" id="fileUpload" style={{ display: 'none' }} />
        </div>
       </div>

    </div></MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color='danger' onClick={toggleOpen}>
           Delete
            </MDBBtn>
            <MDBBtn className='bg-success'>Save</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    <HrChatbot isOpen={isChatbotOpen} onClose={handleChatbotToggle} />
</div>
  )
}

export default HrUpcomSaleTask
