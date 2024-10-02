import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Modal,
  AccordionBody,
} from "react-bootstrap";
import girl from "../assets/images/girl.png";
import wring from "../assets/icons/wring.png";
import wmail from "../assets/icons/wmail.png";
import group from "../assets/icons/Group.png";
import reddot from "../assets/icons/reddot.png";
import leaveReq from "../assets/icons/leaveReq.png";
import absentReq from "../assets/icons/absentreq.png";
import dashchat from "../assets/icons/dashchat.png";
import dashmail from "../assets/icons/dashmail.png";
import option from "../assets/icons/option.png";
import Calendar from "react-calendar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainContent = () => {
  const [date, setDate] = useState(new Date());
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isBreakOut, setIsBreakOut] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [holidayModal, setHolidayModal] = useState(false);
  const [holidayDescription, setHolidayDescription] = useState("");
  const [holidays, setHolidays] = useState([]); // To track holidays
  const [selectedDate, setSelectedDate] = useState(null); // Date clicked for adding holiday

  const navigate = useNavigate();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleHolidayModalClose = () => setHolidayModal(false);

  const eventList = [
    { title: "Blockchain", date: "July 17" },
    { title: "Client Meeting", date: "July 20" },
    { title: "Webinars", date: "July 17" },
    ...holidays, // Add holidays to the upcoming events list
  ];

  const handleChat = () => {
    navigate("/chatnew");
  };

  const handleMail = () => {
    navigate("/mail");
  };

  const handleDateClick = (clickedDate) => {
    setSelectedDate(clickedDate);
    setHolidayModal(true); // Open modal to enter holiday description
  };

  const handleHolidaySubmit = () => {
    if (holidayDescription && selectedDate) {
      setHolidays([
        ...holidays,
        { title: holidayDescription, date: selectedDate.toDateString() },
      ]);
      setHolidayDescription("");
      setHolidayModal(false);
    }
  };

  const tileClassName = ({ date }) => {
    const holidayFound = holidays.find(
      (holiday) => new Date(holiday.date).toDateString() === date.toDateString()
    );
    return holidayFound ? "holiday-tile" : null;
  };

  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <Container className="container-fluid">
        <Row className="">
          <Col
            xs={12}
            md={12}
            lg={12}
            className="container-fluid mb-3 firstcolbox"
          >
            <div className="card1 d-flex flex-column flex-md-row justify-content-between align-items-center px-6 px-md-5 text-white">
              <div className="d-flex align-items-center">
                <img
                  src={girl}
                  alt="Profile"
                  className="rounded-circle mb-3 mb-md-0"
                  style={{ width: "80px", height: "80px" }}
                />
                <div className="col-12 col-md-9 text-center text-md-start ms-3">
                  <p className="good mb-1">Good afternoon</p>
                  <p className="good2 mb-1">Welcome Back</p>
                </div>
              </div>
              {/* ------------- */}
              <div className="d-flex justify-content-center justify-content-md-start gap-5">
                <div className="ash" onClick={handleChat}>
                  <img src={dashchat} alt="" />
                </div>
                <div className="ash" onClick={handleMail}>
                  <img src={dashmail} alt="" />
                </div>
              </div>

              {/* ------- */}
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                {/* <button className="btn announce px-4">Send Announcement</button> */}
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

        {/* ----------------------------------------- */}

        <Row className="px-3 py-2">
          {/* Left Column: Profile and Attendance */}
          <Col
            xs={12}
            md={7}
            lg={7}
            className="container-fluid mb-3 firstcolbox px-2"
          >
            <table className="table1 px-5 py-10 text-justify">
              <thead className="table-header">
                <tr>
                  <th>Project Name</th>
                  <th>Project Lead</th>
                  <th>Progress</th>
                  <th>Due Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="table-body  ">
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

            {/* ------------------- */}
            <div className="mt-5">
              {/* Left part - 2 boxes */}
              <div className="col-md-12  py-2">
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
              </div>

              {/* Right part - 1 big box */}
            </div>
          </Col>

          <Col xs={12} md={5} lg={5} className="  ">
            {/* ------------
            {/* -------- calendar------------ */}
            <div className=" card3 ">
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
                  <Calendar
                    onChange={setDate}
                    value={date}
                    tileClassName={tileClassName} // Apply custom tile class
                    onClickDay={handleDateClick} // Handle clicking on a date
                  />
                </div>
              </div>
            </div>

            {/* ------------------------ */}
            <div className="mb-3 pt-4">
              <div className="events p-2">
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
          </Col>
        </Row>

        {/* --------- */}
        <Modal show={holidayModal} onHide={handleHolidayModalClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add Holiday</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <label>Holiday Description</label>
              <input
                type="text"
                className="form-control"
                value={holidayDescription}
                onChange={(e) => setHolidayDescription(e.target.value)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleHolidayModalClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleHolidaySubmit}>
              Add Holiday
            </Button>
          </Modal.Footer>
        </Modal>

        {/* ----------- */}
        {/* --------------------------------------- */}
      </Container>
    </div>
  );
};

export default MainContent;

// ---------------------
