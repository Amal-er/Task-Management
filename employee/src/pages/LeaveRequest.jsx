import React from "react";
import { Badge, Button, Row, Col, InputGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import girl from "../assets/images/girl.png";
import calender from "../assets/icons/calender.png";
import duration from "../assets/icons/duration.png";
import lens from "../assets/icons/lens.png";
import { FaCalendarAlt, FaClock, FaPen } from "react-icons/fa";
import person from "../assets/images/girl.png";
import mail1 from "../assets/icons/mail1.png";
import msg from "../assets/icons/msg.png";
import { IoMdAdd } from "react-icons/io";
import bin from "../assets/icons/bin.png";
// import delete from "../assets/icons/delete.png"

const leaves = [
  {
    id: 1,
    employeeName: "Ram K S",
    position: "UI/UX Developer",
    employeeID: "#A12345",
    date: "20/05/2024",
    duration: "1 days",
    type: "Sick Leave",
    reason: "",
    status: "Approved",
  },
  {
    id: 2,
    employeeName: "Ram K S",
    position: "UI/UX Developer",
    employeeID: "#A12345",
    date: "10/05/2024",
    duration: "1 days",
    type: "Sick Leave",
    reason: "",
    status: "Approved",
  },
];

const getStatusBadgeColor = (status) => {
  switch (status) {
    case "Approved":
      return "success";
    case "Rejected":
      return "danger";
    case "Pending":
      return "warning";
    default:
      return "secondary";
  }
};

const LeaveRequest = () => {
  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <div className="p-4">
        <h2>Leave Request</h2>
        <div className="custom-table-container">
          <div className="custom-table">
            <div className="tabhead">
              <div className="tabrow">
                <div className="tabcell">Employee Name</div>
                <div className="tabcell">Date</div>
                <div className="tabcell">Duration</div>
                <div className="tabcell">Type</div>
                <div className="tabcell">Reason</div>
                <div className="tabcell">Status</div>
              </div>
            </div>
            <div className="tbody">
              {leaves.map((leave) => (
                <div key={leave.id} className="task-row">
                  <div className="tabcell">
                    <div className="d-flex align-items-center">
                      <img
                        src={girl}
                        className="me-2 icon"
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                      <div>
                        <div className="project-name text-primary ">
                          {leave.employeeName}
                        </div>
                        <div className="text-primary small category ">
                          {leave.position}
                        </div>
                        <div className="text-primary small category ">
                          {leave.employeeID}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tabcell">
                    <img src={calender} alt="" className="me-2 icon" />
                    {leave.date}
                  </div>
                  <div className="tabcell">
                    <img src={duration} alt="" className="me-2 icon" />
                    {leave.duration}
                  </div>
                  <div className="tabcell text-danger">{leave.type}</div>
                  <div className="tabcell">
                    <img src={lens} alt="" className="me-2 icon" />
                    {leave.reason}
                  </div>
                  <div className="tabcell d-flex gap-2">
                    <Badge bg={getStatusBadgeColor(leave.status)}>
                      {leave.status}
                    </Badge>

                    <img src={msg} alt="" />
                    <img src={bin} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*  */}
        <div className="container py-5">
          <Row>
            <Col md={8}>
              <h5 className="mb-4 underline-title">
                <img src={mail1} className="me-2" alt="" />
                Leave Request
              </h5>

              {/* <hr /> */}
              <Form>
                <Form.Group as={Row} className="mb-4" controlId="formDate">
                  {/* <Form.Label column sm={4} className="text-end">
                  *Select Date
                </Form.Label> */}
                  <Col sm={4} className="">
                    <label htmlFor="">
                      <img src="" className="me-2" alt="" />
                      From
                    </label>
                    <InputGroup className="py-1">
                      <Form.Control
                        type="date"
                        placeholder="Starting Date"
                        required
                      />
                      <InputGroup.Text>
                        <FaCalendarAlt />
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>

                  <Col sm={4} className="">
                    <label htmlFor="">
                      <img src="" className="me-2" alt="" />
                      To
                    </label>
                    <InputGroup className="py-1">
                      <Form.Control
                        type="date"
                        placeholder="Starting Date"
                        required
                      />
                      <InputGroup.Text>
                        <FaCalendarAlt />
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                  <Col sm={4} className="">
                    <label htmlFor="">
                      <img src="" className="me-2" alt="" />
                      Select Dates
                    </label>
                    <InputGroup className="py-1">
                      <Form.Control
                        type="text"
                        placeholder="Duration"
                        required
                      />
                      <InputGroup.Text>
                        {/* <FaCalendarAlt /> */}
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4" controlId="formLeaveType">
                  {/* <Form.Label column sm={4} className="text-end">
                  *Select Leave Type
                </Form.Label> */}
                  <Col sm={4}>
                    <label htmlFor="">
                      <img src="" className="me-2" alt="" />
                      Leave Type
                    </label>
                    <InputGroup className="py-1">
                      <Form.Select aria-label="Leave Type" required>
                        <option value="">Select Leave Type</option>
                        <option value="sick">Sick Leave</option>
                        <option value="casual">Casual Leave</option>
                        {/* <option value="annual">Annual Leave</option>
                        <option value="maternity">Maternity Leave</option>
                        <option value="paternity">Paternity Leave</option>
                        <option value="other">Other</option> */}
                      </Form.Select>
                    </InputGroup>
                  </Col>

                  <Col sm={4}>
                    {/* <label htmlFor="">Attachments</label> */}
                    <InputGroup className="py-4">
                      <Form.Control type="text" placeholder="Reason" required />
                      <InputGroup.Text>
                        {/* <FaCalendarAlt /> */}
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4" controlId="formReason">
                  {/* <Form.Label column sm={4} className="text-end">
                  *Reason
                </Form.Label> */}

                  <Col sm={6}>
                    <div className="d-flex justify-content-left p-md-3 mt-2">
                      <Button variant="primary" type="submit" className="me-2">
                        Apply Leave
                      </Button>
                      <Button variant="danger">Delete</Button>
                    </div>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            {/* <Col md={2} className="text-left">
            <img
              src=""
              alt="Employee"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "40px", height: "40px" }} // Adjusted size
            />
            <p style={{ fontSize: "0.875rem" }}>
              Arun K S <br />{" "}
              <span style={{ fontSize: "0.605rem" }}>
                UI/UX Developer <br />{" "}
                <span style={{ fontSize: "0.605rem" }}>#A12345</span>
              </span>
            </p>
          </Col> */}
          </Row>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default LeaveRequest;
// ----------------
