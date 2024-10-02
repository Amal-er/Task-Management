import React, { useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Header from '../Components/Header';
import SidenavHR from '../Components/SidenavHR';
import { MdOutlineMessage } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import HrChatbot from '../Components/HrChatbot';
import leftarrow from '../Assets/Images/left-arrow_10068022 1.png';
import { Link } from 'react-router-dom';


function HrEmployeeSaleTask() {
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
    <Header/>
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>

<div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
  <SidenavHR /> 
</div>


<div style={{ flexGrow: 1, padding: '30px 50px', }}>
    <Link to={'/hrcomplsaletask'}><img src={leftarrow} className="mb-2"/></Link>
    <h3 className='text-dark mt-5'>Employee Task Sales</h3>
    <p className='text-dark mt-3'>Employee Name: Amal</p>
    <div className="col-md-10"  id='emptable'>
    <MDBTable className='bg-white'>
      <MDBTableHead  className='bg-primary text-white'>
        <tr>
          <th scope='col'>Company Name</th>
          <th scope='col'>Lead Name</th>
          <th scope='col'>Lead Source</th>
          <th scope='col'>Email Id</th>
          <th scope='col'>Phone No</th>
          <th scope='col'>Response</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row' className='text-primary'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-success'>Interested</td>
          <td style={{position:'relative'}}>
          <MdOutlineMessage onClick={handleChatbotToggle} className='fs-3 text-primary' />
          <HiOutlineDotsVertical className='status-icon fs-4'
           alt="Status Filter" 
          style={{cursor: 'pointer'}}
                onClick={handleStatusClick}
                />
         
                  {/* Filter Dropdown */}
                  {showFilter && (
                    <div className="filter-dropdown">
                      <ul>
                    
                        <li><input type="checkbox" /> Delete</li>
                        
                      </ul>
                    </div>
                  )}
          </td>
        </tr>
        <tr>
          <th scope='row' className='text-primary'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-success'>Interested</td>
          <td  style={{position:'relative'}}><MdOutlineMessage className='fs-3 text-primary' onClick={handleChatbotToggle}/> 
          <HiOutlineDotsVertical className=' fs-4'/>
          
          
          </td>
        </tr>
        <tr>
          <th scope='row' className='text-primary'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-primary'>Call back</td>
          <td><MdOutlineMessage className='fs-3 text-primary' onClick={handleChatbotToggle}/> <HiOutlineDotsVertical className='fs-4'/>
          </td>
        </tr>
        <tr>
          <th scope='row' className='text-primary'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-danger'>Rejected</td>
          <td><MdOutlineMessage className='fs-3 text-primary' onClick={handleChatbotToggle}/> <HiOutlineDotsVertical className='fs-4'/>
          </td>
        </tr>
        <tr>
          <th scope='row' className='text-primary'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-danger'>Rejected</td>
          <td><MdOutlineMessage className='fs-3 text-primary'/> <HiOutlineDotsVertical className='fs-4'/>
          </td>
        </tr>
        <tr>
          <th scope='row' className='text-primary'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-warning'>No Response</td>
          <td><MdOutlineMessage className='fs-3 text-primary'/> <HiOutlineDotsVertical className='fs-4'/>
          </td>
        </tr>
        <tr>
          <th scope='row' className='text-primary'>ABCD Company</th>
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
    <HrChatbot isOpen={isChatbotOpen} onClose={handleChatbotToggle} />

    </div>
  )
}

export default HrEmployeeSaleTask
