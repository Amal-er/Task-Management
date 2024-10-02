import React, { useState } from 'react'
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

  import search from '../assets/Images/search.png'
  import tik from '../assets/Images/tik.png';
  import leftarrow from '../Assets/Images/left-arrow_10068022 1.png';
import msge from '../assets/Images/edit 12.png';
import { VscChecklist } from "react-icons/vsc";
import book from '../assets/Images/book.png';
import AdminTask from '../Components/AdminTask';
import Chatbot from './Chatbot';
import { Link } from 'react-router-dom';


function  AdminTaskView() {
    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);

    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleChatbotToggle = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

const employees = [
    {
    name: "Arun K S",
    id: "#A1234567",
    designation: "UI/UX Developer",
    mobile: "9876543210",
    email: "arun@gmail.com",
    shift: "Morning",
    tasks: 3,
    status: "Online",
    details: {
    idProof: "Aadhar card: 1029 3832 1234",
    education: "Bachelor's degree: Computer Sciences",
    experience: "Jr UI/UX designer",
    offerLetter: "Signed",
    ndaAgreement: "Signed",
    bankDetails: "Account No: 1029 3832 1234",
    dob: "02/09/2000 & B+",
    address: "7th street, near AKG junction Kochi"
    }
    },
    
    {
    name: "John Doe",
    id: "#1234567",
    designation: "Software Engineer",
    mobile: "8745673427",
    email: "jone@gmail.com",
    shift: "Night",
    tasks: 3,
    status: "Online",
    },
    
    {
    name: "Alex Ray",
    id: "#1234567",
    designation: "Consultant",
    mobile: "8745673427",
    email: "jone@gmail.com",
    shift: "Morning",
    tasks: 3,
    status: "Offline",
    },
    
    {
    name: "Kate Hunington",
    id: "#1234567",
    designation: "Designer",
    mobile: "8745673427",
    email: "jone@gmail.com",
    shift: "Morning",
    tasks: 3,
    status: "Offline",
    },
       
    ];
  return (
    <div>
       <td>
    <p className="task-tik fw-normal mt-3" ><img src={tik} className='me-1' alt="tik" onClick={toggleOpen} />{employees[0].tasks}</p>
    </td>
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1' >
        <MDBModalDialog className='taskmodal' >
       
          <MDBModalContent id='modaltask'>
          <img src={leftarrow} className="mt-2 ms-2"/>
            <MDBModalHeader>
         
              <MDBModalTitle><img src={search}/>Tasks View <span style={{marginLeft:'650px',fontSize:'15px',}}> Employee Name: Amal</span></MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                <div className=''>
<table class="table align-middle mb-0 bg-white " >
    <thead class="bg-white">
    <tr className='text-dark'>
      <td><VscChecklist className='me-2' />Make an Automatic Approval system for leave request
      <p>#402235</p></td>
      <th>Start Date<p>12/3/2024</p></th>
      <th>End Date<p>12/3/2024</p></th>
      <th><button type="button" className="btn btn-success mb-4" style={{ width: '110px', textTransform: 'capitalize' ,borderRadius:'20px'}}>Completed</button></th>
      <th><img src={msge}  onClick={handleChatbotToggle} className=" "/></th>
      <th><AdminTask/></th>

    </tr>
  </thead></table>
</div>

<div className=''>
<table class="table align-middle mb-0 bg-white " >
    <thead class="bg-white">
    <tr className='text-dark'>
      <td><VscChecklist className='me-2' />Make an Automatic Approval system for leave request
      <p>#402235</p></td>
      <th>Start Date<p>12/3/2024</p></th>
      <th>End Date<p>12/3/2024</p></th>
      <th><button type="button" className="btn btn-primary mb-4" style={{ width: '110px', textTransform: 'capitalize' ,borderRadius:'20px'}}>Ongoing</button></th>
      {/* <Chatbot isOpen={isChatbotOpen} onClose={handleChatbotToggle}/> */}
           <th><img src={msge} className=" mb-4"/></th>
      <th> <Link to={''}><img src={book} className=" mb-4"/></Link></th>
    </tr>
  </thead></table>
                </div>

                <div className=''>
<table class="table align-middle mb-0 bg-white " >
    <thead class="bg-white">
    <tr className='text-dark'>
      <td><VscChecklist className='me-2' />Make an Automatic Approval system for leave request
      <p>#402235</p></td>
      <th>Start Date<p>12/3/2024</p></th>
      <th>End Date<p>12/3/2024</p></th>
      <th><button type="button" className="btn btn-danger mb-4" style={{ width: '110px', textTransform: 'capitalize' ,borderRadius:'20px'}}>Completed</button></th>
      <th><img src={msge} className=" mb-4"/></th>
      <th> <Link to={''}> <img src={book} className=" mb-4"/></Link></th>
    </tr>
  </thead></table>
                </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <Chatbot isOpen={isChatbotOpen} onClose={handleChatbotToggle} />
    </div>
  )
}

export default AdminTaskView


