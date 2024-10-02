import React from "react";
import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import girl from "../assets/images/girl.png";
import wring from "../assets/icons/wring.png";
import wmail from "../assets/icons/wmail.png";
import group from "../assets/icons/Group.png";
import reddot from "../assets/icons/reddot.png";
import leaveReq from "../assets/icons/leaveReq.png";
import absentReq from "../assets/icons/absentreq.png";
import dashchat from "../assets/icons/dashchat.png";

import option from "../assets/icons/option.png";

import dashmail from "../assets/icons/dashmail.png";

import Calendar from "react-calendar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainContent = () => {
  const [date, setDate] = useState(new Date());
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isBreakOut, setIsBreakOut] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const eventList = [
    { title: "Blockchain", date: "July 17" },
    { title: "Client Meeting", date: "July 20" },
    { title: "Webinars", date: "July 17" },
  ];

  const HandleChat = () => {
    navigate("/chatnew");
  };

  const HandleMail = () => {
    navigate("/mail");
  };

  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <Container className="container-fluid ">
        <Row className="container-fluid">
          {/* Left Column: Profile and Attendance */}
          <Col
            xs={12}
            md={12}
            lg={12}
            className="container-fluid mb-3 firstcolbox"
          >
            <div className="card1 d-flex  flex-md-row justify-content-between align-items-center px-6 px-md-5 text-white">
              <div className="d-flex align-items-center">
                <img
                  src={girl}
                  alt="Profile"
                  className="rounded-circle mb-3 mb-md-0"
                  style={{ width: "80px", height: "80px" }}
                />
                <div className="col-12 col-md-9 text-center justify-content-center text-md-start ">
                  <div>
                    {" "}
                    <p className="good mb-1">Good afternoon</p>
                  </div>
                  <div>
                    {" "}
                    <p className="good2 ">Welcome Back</p>
                  </div>
                </div>
              </div>
              {/* ----------------------------- */}
              <div className="d-flex justify-content-center justify-content-md-start gap-5">
                <div className="ash" onClick={HandleChat}>
                  <img src={dashchat} alt="" />
                </div>
                <div className="ash" onClick={HandleMail}>
                  <img src={dashmail} alt="" />
                </div>
              </div>

              {/* ------- */}
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <button className="btn announce px-4">Send Announcement</button>

                {/* Sign In / Sign Out Button */}
                {isSignedIn ? (
                  <button
                    className="btn btn-danger px-4"
                    onClick={() => setIsSignedIn(false)}
                  >
                    Sign Out
                  </button>
                ) : (
                  <button
                    className="btn btn-success px-4"
                    onClick={() => setIsSignedIn(true)}
                  >
                    Sign In
                  </button>
                )}

                {isBreakOut ? (
                  <button
                    className="btn breakin px-4"
                    onClick={() => setIsBreakOut(false)}
                  >
                    Break In
                  </button>
                ) : (
                  <button
                    className="btn breakout px-4"
                    onClick={() => setIsBreakOut(true)}
                  >
                    Break Out
                  </button>
                )}
              </div>
            </div>
          </Col>
        </Row>

        {/* <Col xs={12} md={7} lg={7} className="mb-3 secondcol "> */}
        {/* <table className="table1">
              <thead>
                <p>My Team</p>
                <tr>
                  <th className="scope">Project Name</th>
                  <th className="scope">Project Lead</th>
                  <th className="scope">Progress</th>
                  <th className="scope">Due date</th>
                  <th className="scope">Status</th>
                </tr>
                
              </thead>
              <tbody className="py-5">
                <tr>
                  <td>Website</td>
                  <td>Johnson</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: "10%" }}
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>06 Jan 2024</td>
                  <td>
                    <button className="bg-primary but1 text-white">
                      Ongoing
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Jacob</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>30 Jan 2024</td>
                  <td>
                    <button className="bg-success but1 text-white">
                      Completed
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Larry the Bird</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>30 Jan 2024</td>
                  <td>
                    <button className="bg-primary but1 text-white">
                      ongoing
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Larry the Bird</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>30 Jan 2024</td>
                  <button className="bg-warning but1 text-white">
                    pending
                  </button>
                </tr>
              </tbody>
            </table> */}
        {/* </Col> */}
        {/* </Row> */}
        {/* ------------------------------------------------------- */}
        <Row className="px-3 py-2">
          {/* Left Column: Profile and Attendance */}
          <Col
            xs={12}
            md={7}
            lg={7}
            className="container-fluid mb-3  px-2 d-grid justify-content-center "
          >
            <table className="table1 px-5 py-10">
              <thead className="table-header">
                <tr>
                  <th>Project Name</th>
                  <th>Project Lead</th>
                  <th>Progress</th>
                  <th>Due Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr>
                  <td>Website</td>
                  <td>Johnson</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: "10%" }}
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>06 Jan 2024</td>
                  <td>
                    <button className="bg-primary but1 text-white">
                      Ongoing
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Mobile App</td>
                  <td>Amal</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>30 Jan 2024</td>
                  <td>
                    <button className="bg-success but1 text-white">
                      Completed
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Sales Call</td>
                  <td>Kevin</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>30 Jan 2024</td>
                  <td>
                    <button className="bg-primary but1 text-white">
                      Ongoing
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Marketing</td>
                  <td>Thomas</td>
                  <td>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                  <td>30 Jan 2024</td>
                  <td>
                    <button className="bg-warning but1 text-white">
                      Pending
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* <div className="d-flex gap-3 px-4 justify-content-start ">
              <div className="box1">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p>07</p>
                  </div>
                  <div>
                    <img src={group} className="group" alt="Group" />
                  </div>
                </div>
                <p className="temp">Total employees</p>
                <p>2 new employees added</p>
              </div>
              <div className="box1">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p>07</p>
                  </div>
                  <div>
                    <img src={leaveReq} className="group" alt="Group" />
                  </div>
                </div>
                <p className="temp">leave Request</p>
                <p>-10% less than yesterdays</p>
              </div>
              <div className="box1">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p>07</p>
                  </div>
                  <div>
                    <img src={absentReq} className="group" alt="Group" />
                  </div>
                </div>
                <p className="temp">Absent</p>
                <p>+3% lesser than yesterdays</p>
              </div>
            </div> */}
            {/* ------------------- */}
            <div className="mt-2">
              {/* <div className="pt-2">
                {" "}
                <h5>My Task</h5>
              </div> */}

              {/* Left part - 2 boxes */}
              <div className="col-md-12  py-4">
                <div className="d-flex gap-3 justify-content-start ">
                  <div className="box1 p-3 rounded shadow-sm">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="employee-count mb-0">06</p>
                      </div>
                      <div>
                        <div className="ash2">
                          {" "}
                          <img src={group} className="group-icon" alt="Group" />
                        </div>
                      </div>
                    </div>
                    <p className="temp mb-1">Total Employees</p>
                    <p className="new-employees text-muted mb-0">
                      <span className="text-success">
                        + 2 new employees added!
                      </span>
                    </p>
                  </div>

                  <div className="box1 p-3 rounded shadow-sm">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="employee-count mb-0">01</p>
                      </div>
                      <div>
                        <div className="ash2">
                          {" "}
                          <img
                            src={leaveReq}
                            className="group-icon"
                            alt="Group"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="temp mb-1">Total Employees</p>
                    <p className="new-employees text-muted mb-0">
                      <span className="text-success">
                        + 2 new employees added!
                      </span>
                    </p>
                  </div>
                  <div className="box1 p-3 rounded shadow-sm">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="employee-count mb-0">01</p>
                      </div>
                      <div>
                        <div className="ash2">
                          {" "}
                          <img
                            src={absentReq}
                            className="group-icon"
                            alt="Group"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="temp mb-1">Total Employees</p>
                    <p className="new-employees text-muted mb-0">
                      <span className="text-success">
                        + 2 new employees added!
                      </span>
                    </p>
                  </div>
                </div>
                {/* ------------------------------ */}
                <div className="d-flex flex-column flex-md-row gap-2 py-3">
                  <div className="col-12 col-md-6 pt-3">
                    <div className="empstatus h-100 p-3 shadow-sm rounded">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fw-semibold text-decoration-underline">
                          Employment Status
                        </p>
                        <img src={option} className="group" alt="option" />
                      </div>
                      <hr />
                      <div className="mt-3">
                        <div className="border p-2">
                          <p className="fw-bold mb-1">
                            Total <span className="float-end">06</span>
                          </p>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <span className="dot bg-warning me-2"></span>Intern
                            Employee
                          </div>
                          <span>01</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-2">
                          <div className="d-flex align-items-center">
                            <span className="dot bg-success me-2"></span>
                            Permanent Employee
                          </div>
                          <span>03</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-2">
                          <div className="d-flex align-items-center">
                            <span className="dot bg-primary me-2"></span>
                            Probationary Employee
                          </div>
                          <span>02</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 pt-3">
                    <div className="empstatus h-100 p-3 shadow-sm rounded py-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fw-semibold text-decoration-underline">
                          My Attendance Record
                        </p>
                        <p>Month</p>
                      </div>
                      <hr />
                      <div className="mt-3">
                        <p className="fw-bold mb-1">
                          Present <span className="float-end">06</span>
                        </p>
                        <p className="fw-bold mb-1">
                          Absent <span className="float-end">06</span>
                        </p>
                      </div>

                      <div className="d-flex gap-5 py-3 align-items-center">
                        <div className="d-flex me-2 justify-content-center align-items-center">
                          <span className="dot2 bg-success me-2"></span>
                          <p className="mb-0">Status</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Active</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right part - 1 big box */}
              {/* <div className="col-md-6">
                <div className="empstatus h-100 p-3 shadow-sm rounded">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="fw-bold">Employment Status</p>
                    <img src={group} className="group" alt="Group" />
                  </div>

                  <div className="progress my-2" style={{ height: "6px" }}>
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "12%" }}
                    ></div>
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "18%" }}
                    ></div>
                    <div
                      className="progress-bar bg-success"
                      style={{ width: "60%" }}
                    ></div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <span>12%</span>
                    <span>18%</span>
                    <span>60%</span>
                  </div>

                  <div className="mt-3">
                    <p className="fw-bold mb-1">
                      Total <span className="float-end">06</span>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="dot bg-warning me-2"></span>Intern
                        Employee
                      </div>
                      <span>01</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <div className="d-flex align-items-center">
                        <span className="dot bg-success me-2"></span>Permanent
                        Employee
                      </div>
                      <span>03</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <div className="d-flex align-items-center">
                        <span className="dot bg-primary me-2"></span>
                        Probationary Employee
                      </div>
                      <span>02</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </Col>

          {/* Right Column: Today, Upcoming Events, My Task */}
          <Col xs={12} md={5} lg={5} className="  ">
            {/* ------------- */} <h5>My Task</h5>
            {/* ------------------------------- */}
            <div className="d-flex justify-content-between align-items-center">
              <p className="text-primary">on going</p>

              <div>
                <p>completed</p>
              </div>
              <div>
                <p>Pending</p>
              </div>
            </div>
            {/* -------------------------------- */}
            <div className=" flex-column ">
              <div className="box2 px-3">
                <div className="d-flex flex-column justify-content-start align-items-start">
                  <p>Today's task</p>
                  <p className="completes">Complete the UI for travel App</p>
                  <div className="w-100 ">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        25%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------------------------- */}
            <div className=" card3  ">
              <div className="d-flex justify-content-between align-items-center">
                <div className="">
                  <h5 className="text-primary">Today</h5>
                </div>
                <div>
                  <h5 className="mb-3 text-primary">{date.toDateString()}</h5>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center text-center">
                <div>
                  <Calendar onChange={setDate} value={date} />
                </div>
              </div>
            </div>
            {/* ------------------------------- */}
            <div className="mb-3 pt-3 ">
              <div className="events p-2 ">
                <div className="d-flex justify-content-between align-items-center p-3">
                  <h5 className="mb-0">Upcoming Events</h5>
                  <Button
                    variant="primary"
                    className="btn-sm"
                    onClick={handleShow}
                  >
                    View All
                  </Button>
                </div>
                <hr />
                <ul className="list-unstyled">
                  {eventList.slice(0, 3).map((event, index) => (
                    <li key={index} className="d-flex align-items-center">
                      {event.title} On {event.date}
                      <img src={reddot} alt="red dot" className="ms-2" />
                    </li>
                  ))}
                </ul>
              </div>

              <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Upcoming Events</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ul className="list-unstyled">
                    {eventList.map((event, index) => (
                      <li key={index} className="d-flex align-items-center">
                        {event.title} On {event.date}
                        <img src={reddot} alt="red dot" className="ms-2" />
                      </li>
                    ))}
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            {/* ----------------------------------- */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainContent;

