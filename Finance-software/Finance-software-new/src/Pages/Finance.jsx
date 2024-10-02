
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  ProgressBar,
  Card,
  ListGroup,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { MDBBtn } from 'mdb-react-ui-kit';
import leftarrow from '../Assets/Images/left-arrow_10068022 1.png';
import Header from '../Components/Header';
import dollar from "../Assets/Images/dollar_3209339 1.png";
import economy from "../Assets/Images/calendar_1100801 1.png";
import calender1 from "../Assets/Images/economic-growth_9894425 1.png";
import payment from "../Assets/Images/assets_10006444 1.png";
import axis from "../Assets/Images/0_sVFPMqhiXvS4-36R 1.png";
import holiday from "../Assets/Images/cc.png";
import add from "../Assets/Images/add_6318228 1.png";
import expense from "../Assets/Images/calculator_15256701 1.png";
import graph from '../Assets/Images/graph.png'
import { LuDot } from "react-icons/lu";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset } from '../Pages/DataSet';
import { Link } from "react-router-dom";
import FinanceSidenav from "../Components/FinanceSidenav";


const Finance = () => {
  const chartSetting = {
    yAxis: [
      {
        // label: 'rainfall (mm)',
      },
    
    ],
width:650,
    height: 200,
   
    sx: {
      // [`.${axisClasses.left} .${axisClasses.label}`]: {
      //   transform: 'translate(-40px, 0)',
      // },
    },
  };
  const valueFormatter = (value) => `${value}mm`;
  const [showModal, setShowModal] = useState(false);
  const [holidays, setHolidays] = useState([]);
  const [newHoliday, setNewHoliday] = useState({
    title: "",
    description: "",
    date: "",
  });
 
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewHoliday((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleSave = () => {
    setHolidays((prev) => [...prev, newHoliday]);
    setNewHoliday({ title: "", description: "", date: "" });
    setShowModal(false);
  };
 
  return (
    <div className='admin-dashboard'>
    <Header />
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>
        
        <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
          <FinanceSidenav /> 
        </div>

        
        <div style={{ flexGrow: 1, padding: '10px 10px', }}>
        
        

      <Container fluid className={`p-4 $ {showModal ? "blur-background" : ""}`} >
      <img src={leftarrow} className="mb-2"/>
        <Row className="mb-4" >
          <Col
            xs={12}
            md={3}
           
            className="d-flex justify-content-center mb-3 mb-md-0"
          >
            <Card className="shadow-sm size-card" >
              <Card.Body className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center mb-2">
                  <img
                    src={dollar}
                    alt="Dollar Icon"
                    style={{ marginRight: "10px"}}
                  />
                  <p className="mb-0" style={{color:'#5255ba'}}>Company Balance</p>
                </div>
                <hr
                  style={{
                    width: "100%",
                    borderTop: "1px solid #000",
                    margin: "10px 0",
                  }}
                />
                <Card.Text>
                  <h4>₹12,34,56,032</h4>
               
                  <small>28% increase since last month.</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            md={3}
            className="d-flex justify-content-center mb-3 mb-md-0"
          >
            <Card className="shadow-sm size-card">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center mb-2">
                  <img
                    src={expense}
                    alt="Expense Icon"
                    style={{ marginRight: "10px" }}
                  />
                  <p className="mb-0 " style={{color:'#5255ba'}}>Company Expense</p>
                </div>
                <hr
                  style={{
                    width: "90%",
                    borderTop: "1px solid #000",
                    margin: "10px 0",
                  }}
                />
                <Card.Text>
                  <h4>₹4,56,032</h4>
                  
                  <small>11% increase since last month.</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            md={3}
            className="d-flex justify-content-center mb-3 mb-md-0"
          >
            <Card className="shadow-sm size-card">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center mb-2">
                  <img
                    src={economy}
                    alt="Economy Icon"
                    style={{ marginRight: "10px" }}
                  />
                  <p className="mb-0" style={{color:'#5255ba'}}>Attendance Average</p>
                </div>
                <hr
                  style={{
                    width: "90%",
                    borderTop: "1px solid #000",
                    margin: "10px 0",
                  }}
                />
                <Card.Text>
                  <h4>97% from 22 days</h4>
                 
                  <small>Total Employee: 22</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            md={3}
            className="d-flex justify-content-center mb-3 mb-md-0"
          >
            <Card className="shadow-sm size-card">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center mb-2">
                  <img
                    src={calender1}
                    alt="Calendar Icon"
                    style={{ marginRight: "10px" }}
                  />
                  <p className="mb-0" style={{color:'#5255ba'}}>Upcoming Salary Date</p>
                </div>
                <hr
                  style={{
                    width: "90%",
                    borderTop: "1px solid #000",
                    margin: "10px 0",
                  }}
                />
                <Card.Text>
                  <h4>Aug 03, 2024</h4>
                 
                  <small>25 days to go</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
 
        <Row className="">
          <Col md={8}>
            <Card className="payroll shadow-sm border-radius-sm">
              <Card.Body className="d-flex">
                <div className="progress-container">
                  <ProgressBar
                    now={60} 
                    className="vertical-progress-bar"
                  />
                </div>
                <div className="content-container">
                  <p>All Activities</p>

                  <Card.Title>Payroll Expenses
                 
       <MDBDropdown animation={false} className="ms-5">
      <MDBDropdownToggle className="bg-light text-dark"style={{left:'430px'}}>2024</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>Action</MDBDropdownItem>
        <MDBDropdownItem link>Another action</MDBDropdownItem>
        <MDBDropdownItem link>Something else here</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    
                  </Card.Title> 
                  <hr  style={{
                    width: "115%",
                    borderTop: "1px solid #000",
                    margin: "10px 0"}}
                    />
                  {/* Add other content here */}
                  <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      
      series={[
        { dataKey: 'london',  valueFormatter },
   
      ]}
      
      {...chartSetting}
    />
                </div>
            
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="emp-status shadow-sm  border-radius-sm " style={{height:'350px'}}>
              <Card.Body>
                <Card.Title className="mt-5">Employment Status</Card.Title>
                <img src={graph}/>
                <div className="status-bar "></div>
                <ListGroup variant="flush">
                  <ListGroup.Item>Total: 30</ListGroup.Item>
                  <ListGroup.Item>
                    <span className="dot dot-intern"></span><LuDot className="fs-3 text-warning"/> Intern Employee:{" "}
                    <strong>5</strong>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="dot dot-permanent"></span><LuDot className="fs-3 text-success"/>  Permanent
                    Employee: <strong>22</strong>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="dot dot-probationary"></span><LuDot className="fs-3 text-primary"/> Probationary
                    Employee: <strong>3</strong>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
 
        <Row className="mt-2">
          <Col md={8}>
            <Card className="payroll2">
      
        <div class="form-group has-search mt-2" style={{width:'80%'}}>
        
         
       {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end "> */}
       <MDBDropdown animation={false} >
      <MDBDropdownToggle className="bg-light text-dark">All Employee</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>Action</MDBDropdownItem>
        <MDBDropdownItem link>Another action</MDBDropdownItem>
        <MDBDropdownItem link>Something else here</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    <MDBDropdown animation={false}>
      <MDBDropdownToggle className="bg-light text-dark">Date</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>Action</MDBDropdownItem>
        <MDBDropdownItem link>Another action</MDBDropdownItem>
        <MDBDropdownItem link>Something else here</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    <input type="text" class="form-control d-flex justify-content-md-end " placeholder="Search" /></div>   
     {/* </div> */}
              <Card.Body className="flex-column">
              
                {/* <Card.Title>Employee Details</Card.Title> */}
                <div style={{ flexGrow: 1, overflowX: "auto" }}>
                  <div className="custom-table-wrapper">
                    <div className="custom-table-header-row">
                      <div className="custom-table-header-cell">Employee</div>
                      <div className="custom-table-header-cell">Role</div>
                      <div className="custom-table-header-cell">Hours</div>
                      <div className="custom-table-header-cell">Salary</div>
                      <div className="custom-table-header-cell">Status</div>
                    </div>
                    <div className="custom-table-content">
                      <div className="custom-table-content-row">
                        <div className="custom-table-content-cell">Amal</div>
                        <div className="custom-table-content-cell">
                          UI Developer
                        </div>
                        <div className="custom-table-content-cell">180</div>
                        <div className="custom-table-content-cell">$14,000</div>
                        <div className="custom-table-content-cell">Paid</div>
                      </div>
                      <div className="custom-table-content-row">
                        <div className="custom-table-content-cell">Anu</div>
                        <div className="custom-table-content-cell">
                          UI Developer
                        </div>
                        <div className="custom-table-content-cell">180</div>
                        <div className="custom-table-content-cell">$14,000</div>
                        <div className="custom-table-content-cell">Paid</div>
                      </div>
                      <div className="custom-table-content-row">
                        <div className="custom-table-content-cell">Yadhu</div>
                        <div className="custom-table-content-cell">
                          UI Developer
                        </div>
                        <div className="custom-table-content-cell">180</div>
                        <div className="custom-table-content-cell">$14,000</div>
                        <div className="custom-table-content-cell">Paid</div>
                      </div>
                    </div>
                 
                  </div>
                <Link to={'/financepayroll'} > <MDBBtn  className="d-grid gap-2 d-md-flex justify-content-md-end mt-2" >View All</MDBBtn></Link>

                </div>
              </Card.Body>
            </Card>
          </Col>
 
  <Col md={4} className="d-flex flex-column ">
            <Card
              className="shadow-sm mb-1 pay border-radius-lg"
              style={{ width: "100%", height: "175px" }}
            >
              <Card.Body className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center mb-2">
                  <img
                    src={payment}
                    alt="payment Icon"
                    style={{ marginRight: "10px" }}
                  />
                  <p className="mb-0">Payment Account</p>
                </div>
                <hr
                  style={{
                    width: "100%",
                    borderTop: "1px solid #000",
                    margin: "10px 0",
                  }}
                />
                <Card.Text>
                  <div className="d-flex align-items-center gap-5">
                    <div>
                      <img src={axis} alt="Axis Logo" />
                    </div>
                    <div className="ml-2">
                      <p className="mb-0 text-success">•connect</p>
                    </div>
                  </div>
 
                  <br />
                  
                </Card.Text>
              </Card.Body>
            </Card>
 
            <Card
              className="shadow-sm mb-2 mt-3 pay border-radius-lg"
              style={{ width: "100%", height: "175px" }}
            >
              <Card.Body className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center mb-2">
                  <img
                    src={holiday}
                    alt="Holiday Icon"
                    style={{ marginRight: "10px" }}
                  />
                  <p className="mb-0">Holidays</p>
                </div>
                <hr
                  style={{
                    width: "100%",
                    borderTop: "1px solid #000",
                    margin: "10px 0",
                  }}
                />
                <Card.Text>
                  <div
                    className="d-flex flex-row align-items-center mb-2"
                    onClick={handleShow}
                    style={{ cursor: "pointer" }}
                  >
                    <p className="mb-0" style={{ marginRight: "10px" }}>
                      Add a New Holiday
                    </p>
                    <div>
                      <img
                        src={add}
                        alt="Add Icon"
                        style={{ width: "25px", height: "25px" }}
                      />
                    </div>
                  </div>
                  <ListGroup variant="flush">
                    {holidays.map((holiday, index) => (
                      <ListGroup.Item key={index}>
                        {holiday.title} - {holiday.date}
                        <br />
                        <small>{holiday.description}</small>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
 
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Holidays</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="holidayTitle">
                  <Form.Label>Holiday Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={newHoliday.title}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    value={newHoliday.description}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={newHoliday.date}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
    </div>
  );
};
 
export default Finance;













