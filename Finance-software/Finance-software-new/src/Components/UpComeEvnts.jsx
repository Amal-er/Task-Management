import React, { useState } from 'react';
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
import tick from '../assets/Images/tick.png';
import NewEventAdd from './NewEventAdd';

 function UpComeEvnts() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);
  const [showAlert, setShowAlert] = useState(false);

  const handleSave = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };


  return (
    <>
    
      <button className='btn-view-all mt-4' onClick={toggleOpen}>View All</button>
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Upcoming Events</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody> <h4 className='text-dark'></h4>
                  <ul>
                    <li>Webinars on Topics Like AI, Machine Learning, And Blockchain On July 17 <img src={tick} alt="Tick"  width={'20px'} height={'20px'}/></li>
                    <li>Client meeting On July 20 <img src={tick} alt="Tick"  width={'20px'} height={'20px'}/></li>
                    <li>Client meeting On July 20 <img src={tick} alt="Tick"  width={'20px'} height={'20px'}/></li>
                    <li>Webinars on Topics Like AI, Machine Learning, And Blockchain On July 17 <img src={tick} alt="Tick"  width={'20px'} height={'20px'}/></li>

                  </ul></MDBModalBody>

            <MDBModalFooter>
             <NewEventAdd/>
            
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      
    </>
  );
}
export default UpComeEvnts