

import React, { useState } from "react";
import { Form, Row, Col, Card, Button, Modal } from "react-bootstrap";
import Header from '../Components/Header';
import Sidenav from '../Components/Sidenav';
import payroll from '../Assets/Images/people.png'
import leftarrow from '../Assets/Images/left-arrow_10068022 1.png';
import { Link } from "react-router-dom";
import { FaEdit } from 'react-icons/fa'; // Import edit icon
import { CiTrash } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa"; // Import the delete icon

function Payslip() {
  const [show, setShow] = useState(false);


  const [deleteConfirm, setDeleteConfirm] = useState(false); // State for confirmation modal

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteClose = () => setDeleteConfirm(false);
  const handleDeleteShow = () => setDeleteConfirm(true);
  const [showNewModal, setShowNewModal] = useState(false); // New state for the image modal



  const handleNewModalClose = () => setShowNewModal(false);
  const handleNewModalShow = () => setShowNewModal(true); // Function to open the new modal



  return (
    <div className='admin-dashboard'>
      <Header/>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>

<div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
  <Sidenav /> 
</div>


<div style={{ flexGrow: 1, padding: '30px 50px',  }}>

          <div className="container-fluid p-1">
            <h4 className="mb-2 text-dark">  
              <img src={payroll} className="me-2" alt="payroll" />Payroll
            </h4>
            <p className="ms-2 ">Generate and send payroll to account</p>
            <div
              style={{
                backgroundColor: "#E2EBFC",
                minHeight: "100vh",
              }}
            >
              <Card
                style={{
                  padding: "40px",
                  borderRadius: "8px",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                  background: "#ffff",
                }}
              >
                <div className="create  ">
                  <h1
                    style={{
                      fontSize: "26px",
                      fontWeight: "600",
                      marginBottom: "30px",
                      textAlign: "left", 
                      color: "black"
                    }}
                  >
                    Create Payslip
                  </h1>
                </div>

                {/* Basic Information Section */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4
                    style={{ fontSize: "19px", fontWeight: "500", marginBottom: "20px", color: "black" }}
                  >
                    <b>Basic Information</b>
                  </h4>
                  <FaEdit style={{ cursor: 'pointer' }} onClick={handleShow} /> {/* Edit icon */}
                </div>

                <Form>
                  <Row className="mb-4">
                    <Col md={4}>
                      <Form.Group controlId="formStaffName">
                        <Form.Label style={{ fontSize: "16px", fontWeight: "400", width: '250px', color: 'black' }}>
                          Staff name
                        </Form.Label>
                        <Form.Control
                          as="select"
                          style={{
                            fontSize: "14px",
                            padding: "10px",
                            borderRadius: "5px",
                            borderColor: "#dcdcdc",
                          }}
                        >
                          <option>Select staff </option>
                        </Form.Control>
                      </Form.Group>
                    </Col>

                    <Col md={4}>
                      <Form.Group controlId="formDesignation">
                        <Form.Label style={{ fontSize: "16px", fontWeight: "400", width: '250px', color: 'black' }}>
                          Designation
                        </Form.Label>
                        <Form.Control
                          as="select"
                          style={{
                            fontSize: "14px",
                            padding: "10px",
                            borderRadius: "5px",
                            borderColor: "#dcdcdc",
                          }}
                        >
                          <option>Select Designation</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="formLevel">
                        <Form.Label style={{ fontSize: "16px", fontWeight: "400", width: '250px', color: 'black' }}>
                          Level
                        </Form.Label>
                        <Form.Control
                          as="select"
                          style={{
                            fontSize: "14px",
                            padding: "10px",
                            borderRadius: "5px",
                            borderColor: "#dcdcdc",
                          }}
                        >
                          <option>Select level</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card>

              {/* Modal for editing Basic Information */}
              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Basic Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmployeeName">
              <Form.Label>Employee Name</Form.Label>
              <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Form.Control type="text" placeholder="Select Employee" />
                <FaTrashAlt
                  style={{
                    position: 'absolute',
                    right: '10px',
                    cursor: 'pointer',
                    color: 'red',
                  }}
                  onClick={handleDeleteShow}
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formDesignation" className="mt-3">
              <Form.Label>Designation</Form.Label>
              <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Form.Control type="text" placeholder="Select Designation" />
                <FaTrashAlt
                  style={{
                    position: 'absolute',
                    right: '10px',
                    cursor: 'pointer',
                    color: 'red',
                  }}
                  onClick={handleDeleteShow}
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formDepartment" className="mt-3">
              <Form.Label>Department</Form.Label>
              <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Form.Control type="text" placeholder="Select Level" />
                <FaTrashAlt
                  style={{
                    position: 'absolute',
                    right: '10px',
                    cursor: 'pointer',
                    color: 'red',
                  }}
                  onClick={handleDeleteShow}
                />
              </div>
            </Form.Group>

            <Button variant="primary" className="mt-3" onClick={handleNewModalShow}>
              Add +
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* New Modal (From the Image) */}
      <Modal show={showNewModal} onHide={handleNewModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new section.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formHeading">
              <Form.Label>Add Heading</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type heading name"
                style={{ marginBottom: '15px', paddingRight: '35px' }}
              />
            </Form.Group>

            <Form.Group controlId="formData">
              <Form.Label>Add Data</Form.Label>
              <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Form.Control
                  type="text"
                  placeholder="Type data to show"
                  style={{ paddingRight: '35px' }}
                />
                <Button
                  variant="light"
                  style={{
                    position: 'absolute',
                    right: '10px',
                    padding: '5px',
                    borderRadius: '50%',
                  }}
                >
                  <i className="fas fa-plus"></i>
                </Button>
              </div>
            </Form.Group>

            <Button
              variant="outline-primary"
              className="mt-3"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 20px',
              }}
            >
              <i className="fas fa-plus" style={{ marginRight: '5px' }}></i>
              Add more
            </Button>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <Button variant="primary">Save</Button>
              <Button variant="danger" onClick={handleNewModalClose}>
                Cancel
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={deleteConfirm} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you really want to delete this section? This process cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            No
          </Button>
          <Button variant="danger" onClick={() => {
            // Add delete logic here
            handleDeleteClose();
          }}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

              <Card
        style={{
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          background: "#ffff",
          marginTop: "20px",
        }}
      >
      
       
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4
                    style={{ fontSize: "19px", fontWeight: "500", marginBottom: "20px", color: "black" }}
                  >
                    <b>Salary Structure</b>
                  </h4>
                  <FaEdit style={{ cursor: 'pointer' }} onClick={handleShow} /> {/* Edit icon */}
                </div>
   
        
        
        <Form>
          <Row className="mb-4">
            <Col md={4}>
              <Form.Group controlId="formBasicSalary">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" ,color:"black",width:'250px'}}>
                  Basic salary
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
                <Form.Text
                  className="text-danger"
                  style={{ fontSize: "12px", marginTop: "5px" }}
                >
                  There is an error
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formWorkingHours">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400",color:"black",width:'250px' }}>
                  Working hours
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="00:00 Hours"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formTransportAllowance">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" ,color:"black",width:'250px'}}>
                  Transport allowance
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
 
          <Row className="mb-4">
            <Col md={4}>
              <Form.Group controlId="formUtilityAllowance">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400",color:"black",width:'250px' }}>
                  Utility allowance
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formProductivityAllowance">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400",color:"black",width:'250px' }}>
                  Productivity allowance
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formHousingAllowance">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400",color:"black",width:'250px' }}>
                  Housing allowance
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
 
          <Row className="mb-4">
            <Col md={4}>
              <Form.Group controlId="formCommunicationAllowance">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400",color:"black",width:'250px' }}>
                  Communication allowance
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formInconvenienceAllowance">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400",color:"black",width:'250px' }}>
                  Inconvenience allowance
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formGrossSalary">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400",color:"black",width:'250px' }}>
                  Gross Salary
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card>
    
 
      <Card
        style={{
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          background: "#ffff",
          marginTop: "20px",
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4
                    style={{ fontSize: "19px", fontWeight: "500", marginBottom: "20px", color: "black" }}
                  >
                    <b>Deduction</b>
                  </h4>
                  <FaEdit style={{ cursor: 'pointer' }} onClick={handleShow} /> {/* Edit icon */}
                </div>
 
 
  <Form>
          <Row className="mb-4">
            <Col md={4}>
              <Form.Group controlId="formTaxDeduction">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400",color:"black",width:'250px' }}>
                 TAX/PAYE
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
 
            <Col md={4}>
              <Form.Group controlId="formPension">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400",color:"black",width:'250px' }}>
                  Pension
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formTotalDeduction">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400",color:"black",width:'250px' }}>
                  Total Deduction
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card>
 
     
      <Card
        style={{
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          background: "#ffff",
          marginTop: "20px",
        }}
      >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4
                    style={{ fontSize: "19px", fontWeight: "500", marginBottom: "20px", color: "black" }}
                  >
                    <b>Net Salary</b>
                  </h4>
                  <FaEdit style={{ cursor: 'pointer' }} onClick={handleShow} /> {/* Edit icon */}
                </div>
        <Form>
          <Row className="mb-4">
            <Col md={4}>
              <Form.Group controlId="formTotalPay">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400",width:'250px' , color:'black' }}>
           Net Salary
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                       color:'black'
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formAmountInWords">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400",width:'250px' , color:'black'}}>
                  Amount in words
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount in words"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <Button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            borderColor: "#007bff",
            borderRadius: "5px",
            fontSize: "16px",
            width:'250px',
            margin:'0px 45px',
            textTransform:'capitalize',
          }}
        >
          Create Payslip
        </Button>
      </Card>
              
    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payslip;
