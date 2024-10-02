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
import dollar from "../assets/icons/dollar.png";
import expense from "../assets/icons/expense.png";
import economy from "../assets/icons/economy.png";
import calender1 from "../assets/icons/calender1.png";
import payment from "../assets/icons/payment.png";
import axis from "../assets/images/axis-1.png";
import holiday from "../assets/icons/holiday.png";
import add from "../assets/icons/add.png";
import { useNavigate } from "react-router-dom";

const Finance = () => {
  const [showModal, setShowModal] = useState(false);
  const [holidays, setHolidays] = useState([]);
  const [newHoliday, setNewHoliday] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewHoliday((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setHolidays((prev) => [...prev, newHoliday]);
    setNewHoliday({ title: "", description: "", date: "" });
    setShowModal(false);
  };

  const handleViewAllClick = () => {
    navigate("/viewall"); // Replace with the path to your new page
  };

  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <Container fluid className={`p-4 ${showModal ? "blur-background" : ""}`}>
        <Row className="mb-4">
          <Col
            xs={12}
            md={3}
            className="d-flex justify-content-center mb-3 mb-md-0"
          >
            <Card className="shadow-sm fixed-size-card">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center mb-2">
                  <img
                    src={dollar}
                    alt="Dollar Icon"
                    style={{ marginRight: "10px" }}
                  />
                  <p className="mb-0">Company Balance</p>
                </div>
                <hr
                  style={{
                    width: "90%",
                    borderTop: "1px solid #000",
                    margin: "10px 0",
                  }}
                />
                <Card.Text>
                  $12,34,56,032
                  <br />
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
            <Card className="shadow-sm fixed-size-card">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center mb-2">
                  <img
                    src={expense}
                    alt="Expense Icon"
                    style={{ marginRight: "10px" }}
                  />
                  <p className="mb-0">Company Expense</p>
                </div>
                <hr
                  style={{
                    width: "90%",
                    borderTop: "1px solid #000",
                    margin: "10px 0",
                  }}
                />
                <Card.Text>
                  $4,56,032
                  <br />
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
            <Card className="shadow-sm fixed-size-card">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center mb-2">
                  <img
                    src={economy}
                    alt="Economy Icon"
                    style={{ marginRight: "10px" }}
                  />
                  <p className="mb-0">Attendance Average</p>
                </div>
                <hr
                  style={{
                    width: "90%",
                    borderTop: "1px solid #000",
                    margin: "10px 0",
                  }}
                />
                <Card.Text>
                  97% from 22 days
                  <br />
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
            <Card className="shadow-sm fixed-size-card">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center mb-2">
                  <img
                    src={calender1}
                    alt="Calendar Icon"
                    style={{ marginRight: "10px" }}
                  />
                  <p className="mb-0">Upcoming Salary Date</p>
                </div>
                <hr
                  style={{
                    width: "90%",
                    borderTop: "1px solid #000",
                    margin: "10px 0",
                  }}
                />
                <Card.Text>
                  Aug 03, 2024
                  <br />
                  <small>25 days to go</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={8}>
            <Card className="payroll shadow-sm border-radius-sm">
              <Card.Body className="d-flex">
                <div className="progress-container">
                  <ProgressBar
                    now={60} // Set the progress percentage here
                    className="vertical-progress-bar"
                  />
                </div>
                <div className="content-container">
                  <Card.Title>Payroll Expenses</Card.Title>
                  {/* Add other content here */}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="emp-status shadow-sm mb-4  border-radius-sm">
              <Card.Body>
                <Card.Title>Employment Status</Card.Title>
                <div className="status-bar mb-3"></div>
                <ListGroup variant="flush">
                  <ListGroup.Item>Total: 30</ListGroup.Item>
                  <ListGroup.Item>
                    <span className="dot dot-intern"></span> Intern Employee:{" "}
                    <strong>5</strong>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="dot dot-permanent"></span> Permanent
                    Employee: <strong>22</strong>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="dot dot-probationary"></span> Probationary
                    Employee: <strong>3</strong>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={8}>
            <div className="simple py-4">
              <div className="px-4">
                <div className="d-flex ">
                  {/* Search Bar */}
                  <div className="search-bar-wrapper ">
                    <input
                      type="text"
                      placeholder="Search"
                      className="search-bar"
                    />
                  </div>

                  {/* Dropdowns */}
                  <div className="dropdowns-wrapper">
                    <select className="dropdown">
                      <option>All Employee</option>
                      {/* Add more options here */}
                    </select>

                    <select className="dropdown">
                      <option>Date</option>
                      {/* Add more options here */}
                    </select>
                  </div>
                </div>
              </div>

              {/* Employee Table */}
              <Card className="payroll2">
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
                <div className="viewall ">
                  <button
                    className="btn btn-primary pl-6 "
                    onClick={handleViewAllClick}
                  >
                    View All
                  </button>
                </div>
              </Card>
            </div>
          </Col>

          <Col md={4} className="d-flex flex-column ">
            <Card
              className="shadow-sm mb-4 pay border-radius-lg"
              style={{ width: "90%", height: "125px" }}
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
                      <img src={axis} alt="Axis Logo" />¯
                    </div>
                    <div className="ml-2">
                      <p className="mb-0 text-success">•connect</p>
                    </div>
                  </div>

                  <br />
                  {/* <small>28% increase since last month.</small> */}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              className="shadow-sm mb-4 pay border-radius-lg"
              style={{ width: "90%", height: "125px" }}
            >
              <Card.Body className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center mb-2">
                  <img
                    src={holiday}
                    alt="Holiday Icon"
                    style={{ marginRight: "10px" }}
                  />
                  <p className="mb-0">Holiday</p>
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
  );
};

export default Finance;
