import React from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { FaCalendarAlt, FaClock, FaPen } from "react-icons/fa";
import person from "../assets/images/girl.png";
import addmail from "../assets/icons/addmail.png";
import empname from "../assets/icons/empname.png";
import projectname from "../assets/icons/projectname.png";
import attach from "../assets/icons/attachment.png";
import schedule from "../assets/icons/schedule.png";
import { useLocation } from "react-router-dom";

const AddnewTask = () => {
  const location = useLocation();
  const employeeName = location.state?.employeeName || "Unknown";
  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <div className="container py-5">
        <Row>
          <Col md={8}>
            <h5 className="mb-4 underline-title">
              <img src={addmail} className="me-2" alt="" />
              Add New Task
            </h5>

            {/* <hr /> */}
            <Form>
              <Form.Group as={Row} className="mb-4" controlId="formDate">
                {/* <Form.Label column sm={4} className="text-end">
                  *Select Date
                </Form.Label> */}
                <Col sm={6}>
                  <label htmlFor="employeeName">
                    <img src={empname} className="me-2" alt="" />
                    Employee Name
                  </label>
                  <InputGroup className="py-1">
                    <Form.Select id="employeeName" required>
                      <option value="" disabled selected>
                        {employeeName}
                      </option>
                      <option value="1">Arun K S</option>
                      <option value="2">John Doe</option>
                      <option value="3">Jane Smith</option>
                      {/* Add more employee options here */}
                    </Form.Select>
                    <InputGroup.Text></InputGroup.Text>
                  </InputGroup>
                </Col>

                <Col sm={6} className="">
                  <label htmlFor="">
                    <img src={schedule} className="me-2" alt="" />
                    Select Dates
                  </label>
                  <InputGroup className="py-1">
                    <Form.Control
                      type="text"
                      placeholder="Starting Date"
                      required
                    />
                    <InputGroup.Text>
                      <FaCalendarAlt />
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
                  <label htmlFor="">
                    <img src={projectname} className="me-2" alt="" />
                    Project Name
                  </label>
                  <InputGroup className="py-1">
                    <Form.Control type="text" placeholder="upload" required />
                    <InputGroup.Text>{/* <FaCalendarAlt /> */}</InputGroup.Text>
                  </InputGroup>
                </Col>
                <Col sm={6}>
                  {/* <label htmlFor="">Attachments</label> */}
                  <InputGroup className="pt-4">
                    <Form.Control
                      type="text"
                      placeholder="Ending Date"
                      required
                    />
                    <InputGroup.Text>
                      <FaCalendarAlt />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-4" controlId="formReason">
                {/* <Form.Label column sm={4} className="text-end">
                  *Reason
                </Form.Label> */}
                <Col sm={6}>
                  <label htmlFor="attachment">
                    <img src={attach} className="me-2" alt="" />
                    Attachment
                  </label>
                  <InputGroup className="py-1">
                    <Form.Control
                      type="file"
                      placeholder="Upload"
                      required
                      id="attachment"
                    />
                  </InputGroup>
                </Col>

                {/* <Col sm={6}>
                  <label htmlFor="">Project Description</label>
                  <InputGroup>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder=""
                      required
                    />
                    <InputGroup.Text>
                      <FaPen />
                    </InputGroup.Text>
                  </InputGroup>
                </Col> */}
                <Col sm={6}>
                  <label htmlFor="">Project Description</label>
                  <InputGroup className="py-1">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder=""
                      required
                    />
                    <InputGroup.Text>
                      <FaPen />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
                <Col sm={6}>
                  <div className="d-flex justify-content-left p-md-3 mt-2">
                    <Button variant="primary" type="submit" className="me-2">
                      Send
                    </Button>
                    <Button variant="danger">Delete</Button>
                  </div>
                </Col>
              </Form.Group>
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

export default AddnewTask;
