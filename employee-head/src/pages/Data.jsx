import React, { useState } from "react";
import { Container, Row, Col, Table, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import profilePic from "../assets/images/girl.png";
import softare from "../assets/icons/software.png";
import uiux from "../assets/icons/ui-ux.png";
import call from "../assets/icons/call.png";
import mail from "../assets/icons/mail.png";
import sunrise from "../assets/icons/sunrise.png";
import mark from "../assets/icons/mark.png";
import more from "../assets/icons/more.png";
import totalemp from "../assets/icons/totalemp.png";
import pmemp from "../assets/icons/pmemp.png";
import internemp from "../assets/icons/internemp.png";
import probaemp from "../assets/icons/probaemp.png";
import pmemplo from "../assets/icons/pmemplo.png";

const Data = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Array of employee objects
  const employees = [
    { id: 1, name: "Amal", profilePic: profilePic },
    { id: 2, name: "Rayna", profilePic: profilePic },
    { id: 3, name: "Cooper", profilePic: profilePic },
    { id: 4, name: "Omar", profilePic: profilePic },
    { id: 5, name: "Jordyn", profilePic: profilePic },
    { id: 6, name: "Talan", profilePic: profilePic },
    { id: 7, name: "Cooper", profilePic: profilePic },
    { id: 8, name: "Kaylynn", profilePic: profilePic },
    { id: 9, name: "Jaxson", profilePic: profilePic },
  ];

  // State to manage visibility of additional data
  const [visibleEmployee, setVisibleEmployee] = useState(employees[0].id); // Default to the first employee

  // Toggle visibility of additional data
  const toggleVisibility = (id) => {
    setVisibleEmployee(visibleEmployee === id ? null : id);
  };

  // Handle redirect to TaskEmployee page
  const handleMoreClick = (employeeName) => {
    navigate("/employee/taskemployee", { state: { employeeName } }); // Navigate to TaskEmployee page with state
  };

  return (
    <div className="bde-background">
      <Container fluid className="p-4">
        <Row>
          <Col>
            <h2 className="mb-4">Data Employee List</h2>
            <div>
              <Row>
                <Col className="box" xs={12} md={6} lg={3}>
                  <div className="box-content d-flex align-items-center justify-content-between">
                    <img src={totalemp} alt="" className="icon me-2" />
                    <p className="text-color mb-0 me-2">Total Employee</p>
                    <span>12</span>
                  </div>
                </Col>
                <Col className="box" xs={12} md={6} lg={3}>
                  <div className="box-content d-flex align-items-center justify-content-between">
                    <img src={pmemp} alt="" className="icon me-2" />
                    <p className="text-color mb-0 me-2">Permanent Employee</p>
                    <span>23</span>
                  </div>
                </Col>
                <Col className="box" xs={12} md={6} lg={3}>
                  <div className="box-content d-flex align-items-center justify-content-between">
                    <img src={internemp} alt="" className="icon me-2" />
                    <p className="text-color mb-0 me-2">Intern Employees</p>
                    <span>15</span>
                  </div>
                </Col>
                <Col className="box" xs={12} md={6} lg={3}>
                  <div className="box-content d-flex align-items-center justify-content-between">
                    <img src={probaemp} alt="" className="icon me-2" />
                    <p className="text-color mb-0 me-2">Probation Employees</p>
                    <span>15</span>
                  </div>
                </Col>
              </Row>
            </div>
            <Table className="bde-table">
              <tbody>
                {employees.map((employee) => (
                  <React.Fragment key={employee.id}>
                    <tr>
                      <td className="software-label"> Employee Name</td>
                      <td className="software-value">
                        <Image
                          src={employee.profilePic}
                          roundedCircle
                          className="software-profile-pic"
                        />
                        {employee.name}
                        <span
                          className="updrop-spacing"
                          onClick={() => toggleVisibility(employee.id)}
                        >
                          ▾
                        </span>
                      </td>
                    </tr>
                    {visibleEmployee === employee.id && (
                      <>
                        <tr>
                          <td className="software-label">Employee ID</td>
                          <td className="bde-value">#121334</td>
                        </tr>
                        <tr>
                          <td className="software-label">Branch</td>
                          <td className="bde-value">
                            <img className="me-2 icon" src={softare} alt="" />
                            Software
                          </td>
                        </tr>
                        <tr>
                          <td className="software-label">Designation</td>
                          <td className="bde-value">
                            <img className="me-2 icon" src={uiux} alt="" />
                            UI/UX Developer
                          </td>
                        </tr>
                        <tr>
                          <td className="software-label">State</td>
                          <td className="bde-value">
                            <img className="me-2 icon" src={pmemplo} alt="" />
                            Permanent Employee
                          </td>
                        </tr>
                        <tr>
                          <td className="software-label">Mobile No</td>
                          <td className="bde-value">
                            <img className="me-2 icon" src={call} alt="" />
                            9876543210
                          </td>
                        </tr>
                        <tr>
                          <td className="software-label">Email Id</td>
                          <td className="bde-value">
                            <img className="me-2 icon" src={mail} alt="" />
                            ram@gmail.com
                          </td>
                        </tr>
                        <tr>
                          <td className="software-label">Shift</td>
                          <td className="bde-value">
                            <img className="me-2 icon" src={sunrise} alt="" />
                            Morning
                          </td>
                        </tr>
                        <tr>
                          <td className="software-label">Task</td>
                          <td className="bde-value">
                            <img className="me-2 icon" src={mark} alt="" />
                            <span className="bde-text">03</span>
                            <img
                              className="ms-2 icon"
                              src={more}
                              alt=""
                              onClick={() => handleMoreClick(employee.name)} // Pass employee name here
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="software-label">Status</td>
                          <td className="bde-value">
                            <Button variant="success">Sign in</Button>
                          </td>
                        </tr>
                      </>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Data;
