
import React, { useState } from 'react';
import book from '../assets/Images/book.png';

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

export default function App() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

  return (
    <>
   <th  onClick={toggleOpen}> <img src={book} className="tasks-all "  onClick={toggleOpen}/></th>
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
        <MDBModalDialog className='modal-dialog-task'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Tasks</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p >Make an Automatic Approval system for leave request <span className='butn-compl btn btn-success justify-content-end' style={{borderRadius:'50px'}}>completed</span></p> 
             <p> #402235 </p> <br />
             <h5 className='text-primary'>https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I10J/view?usp=sharing</h5><hr />
       

             <p >Make an Automatic Approval system for leave request <span className='butn-compl btn btn-success justify-content-end' style={{borderRadius:'50px'}}>completed</span></p> 
             <p> #402235 </p> <br />
             <h5 className='text-primary'>https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I10J/view?usp=sharing</h5><hr /> <br /><br /><br />
            </MDBModalBody>

          
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}