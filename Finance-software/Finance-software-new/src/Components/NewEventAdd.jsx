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
  

function NewEventAdd() {
    const [showAlert, setShowAlert] = useState(false);

    const handleSave = () => {
      setShowAlert(true);
    };
  
    const handleCloseAlert = () => {
      setShowAlert(false);
    };
  
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);
  return (
    <div>
         <MDBBtn color='secondary' onClick={toggleOpen}>
              Add New Events
              </MDBBtn>
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
    </div>
  )
}

export default NewEventAdd
