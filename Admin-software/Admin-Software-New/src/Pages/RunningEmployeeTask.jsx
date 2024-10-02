import React, { useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Header from '../Components/Header';
import Sidenav from '../Components/Sidenav';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { MdOutlineMessage } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Chatbot from '../Components/Chatbot';
import leftarrow from '../assets/Images/left-arrow_10068022 1.png';

function RunningEmployeeTask() {
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
    <div className='empsaletask'>
   <Link to={'/runningtasksales'} ><img src={leftarrow} className="mb-2"/></Link>
    <h3 className='text-dark mt-5'>Employee Task</h3>
    <p className='text-dark mt-3 d-grid gap-2 d-md-flex justify-content-md-end'>Employee Name:

    <MDBDropdown className="d-grid gap-2 d-md-flex justify-content-md-end">
      <MDBDropdownToggle tag='a' className='btn btn-light'>
 Amal
      </MDBDropdownToggle>
      <MDBDropdownMenu>
    <MDBDropdownItem link>Amal</MDBDropdownItem>
        <MDBDropdownItem link>Anu</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    </p>
    
    <div className="col-md-10"  id='emptable'>
    <MDBTable className='bg-white'>
      <MDBTableHead  className='bg-primary text-white'>
        <tr>
          <th scope='col' className='text-white'>Company Name</th>
          <th scope='col' className='text-white'>Lead Name</th>
          <th scope='col' className='text-white'>Lead Source</th>
          <th scope='col' className='text-white'>Email Id</th>
          <th scope='col' className='text-white'>Phone No</th>
          <th scope='col' className='text-white'>Response</th>
          <th scope='col' className='text-white'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-success'>Interested</td>
          <td>
          <MdOutlineMessage onClick={handleChatbotToggle} className='fs-3 text-primary' />
          <HiOutlineDotsVertical className='fs-4'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-success'>Interested</td>
          <td><MdOutlineMessage className='fs-3 text-primary'/> <HiOutlineDotsVertical className='fs-4'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-primary'>Call back</td>
          <td><MdOutlineMessage className='fs-3 text-primary'/> <HiOutlineDotsVertical className='fs-4'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-danger'>Rejected</td>
          <td><MdOutlineMessage className='fs-3 text-primary'/> <HiOutlineDotsVertical className='fs-4'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-danger'>Rejected</td>
          <td><MdOutlineMessage className='fs-3 text-primary'/> <HiOutlineDotsVertical className='fs-4'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-warning'>No Response</td>
          <td><MdOutlineMessage className='fs-3 text-primary'/> <HiOutlineDotsVertical className='fs-4'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-warning'>No Response</td>
          <td><MdOutlineMessage  className='fs-3 text-primary'/>
           <HiOutlineDotsVertical className='fs-4'/>
          </td>
        </tr>
       
      </MDBTableBody>
    </MDBTable>
    </div>
    </div>
    </div>
    </div>
    <Chatbot isOpen={isChatbotOpen} onClose={handleChatbotToggle} />

    </div>
  )
}

export default RunningEmployeeTask
