import React from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { FaCalendarAlt, FaClock, FaPen } from "react-icons/fa";
import person from "../assets/images/girl.png";

const LeaveRequestForm = () => {
  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <div className="container py-5">
        <Row>
          <Col md={8}>
            <h2 className="mb-4">Leave Request</h2>
            <hr />
            <Form>
              <Form.Group as={Row} className="mb-4" controlId="formDate">
                {/* <Form.Label column sm={4} className="text-end">
                  *Select Date
                </Form.Label> */}
                <Col sm={6}>
                  <InputGroup>
                    <Form.Control
                      type="date"
                      placeholder="Select Date"
                      required
                    />
                    <InputGroup.Text>
                      <FaCalendarAlt />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
                <Col sm={6}>
                  <InputGroup>
                    <Form.Control type="text" placeholder="Duration" required />
                    <InputGroup.Text>
                      <FaClock />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Form.Group>

              {/* <Form.Group as={Row} className="mb-4" controlId="formDuration">
                <Form.Label column sm={4} className="text-end">
                  Duration
                </Form.Label>
                <Col sm={7}>
                  <InputGroup>
                    <Form.Control type="text" placeholder="Duration" required />
                    <InputGroup.Text>
                      <FaClock />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Form.Group> */}

              <Form.Group as={Row} className="mb-4" controlId="formLeaveType">
                {/* <Form.Label column sm={4} className="text-end">
                  *Select Leave Type
                </Form.Label> */}
                <Col sm={6}>
                  <Form.Select required>
                    <option value="">Select Leave Type</option>
                    <option value="Sick Leave">Sick Leave</option>
                    <option value="Casual Leave">Casual Leave</option>
                    <option value="Earned Leave">Earned Leave</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-4" controlId="formReason">
                {/* <Form.Label column sm={4} className="text-end">
                  *Reason
                </Form.Label> */}
                <Col sm={6}>
                  <InputGroup>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Reason"
                      required
                    />
                    <InputGroup.Text>
                      <FaPen />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Form.Group>

              <div className="d-flex justify-content-left p-md-3">
                <Button variant="primary" type="submit" className="me-2">
                  Send
                </Button>
                <Button variant="danger">Delete</Button>
              </div>
            </Form>
          </Col>
          <Col md={2} className="text-left">
            <img
              src={person}
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
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LeaveRequestForm;
