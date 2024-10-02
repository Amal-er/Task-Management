import React from "react";
import { Badge, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import girl from "../assets/images/girl.png";
import calender from "../assets/icons/calender.png";
import clock from "../assets/icons/clock1.png";
import chain from "../assets/icons/chain.png";
import { useState } from "react"; // Add useState for managing component state
import goldcalender from "../assets/icons/goldcalender.png";
import { IoMdArrowDropdown } from "react-icons/io";

const attendances = [
  {
    id: 1,
    employeeName: "Ram K S",
    position: "UI/UX Developer",
    employeeID: "#012345",
    date: "28/05/2024",
    checkIn: "09:00 AM",
    checkOut: "06:00 PM",
    status: "Present",
  },
  {
    id: 2,
    employeeName: "Ram K S",
    position: "UI/UX Developer",
    employeeID: "#012345",
    date: "27/05/2024",
    checkIn: "09:00 AM",
    checkOut: "05:00 PM",
    status: "Present",
  },
  {
    id: 3,
    employeeName: "Ram K S",
    position: "UI/UX Developer",
    employeeID: "#AA12345",
    date: "26/05/2024",
    checkIn: "10:00 AM",
    checkOut: "02:00 PM",
    status: "Half Day",
  },
  {
    id: 4,
    employeeName: "Ram K S",
    position: "UI/UX Developer",
    employeeID: "#E12345",
    date: "25/05/2024",
    checkIn: "00:00 AM",
    checkOut: "00:00 PM",
    status: "Absent",
  },
  {
    id: 5,
    employeeName: "Ram K S",
    position: "UI/UX Developer",
    employeeID: "#AA12345",
    date: "24/05/2024",
    checkIn: "09:00 PM",
    checkOut: "06:00 AM",
    status: "Present",
  },
  {
    id: 6,
    employeeName: "Ram K S",
    position: "UI/UX Developer",
    employeeID: "#E12345",
    date: "20/05/2024",
    checkIn: "10:00 PM",
    checkOut: "06:00 AM",
    status: "Present",
  },
];

const getStatusBadgeColor = (status) => {
  switch (status) {
    case "Present":
      return "success";
    case "Absent":
      return "danger";
    case "Half Day":
      return "primary";
    default:
      return "secondary";
  }
};

const AttendanceList = () => {
  const [showPopup, setShowPopup] = useState(false); // State for showing popup
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 }); // State for popup position

  const handleshow = (e) => {
    setShowPopup(!showPopup);
    const rect = e.target.getBoundingClientRect();
    setPopupPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
  };

  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <div className="p-4">
        <div className="d-flex justify-content-between align-items-center px-4">
          <div>
            <h2>Attendance List</h2>
          </div>
          <div>
            <div className="d-flex align-items-center">
              <div
                className="px-2 d-flex align-items-center  "
                style={{
                  width: "170px",
                  height: "40px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              >
                {/* Flexbox container for the content, aligned between left and right */}
                <div className="d-flex justify-content-between align-items-center">
                  {/* Left side content */}
                  <div className="d-flex align-items-center">
                    <img
                      className="me-2"
                      src={goldcalender}
                      alt="Golden Calendar"
                      style={{ width: "20px", height: "20px" }} // Adjust size if needed
                    />
                    <p className="m-0">Date</p>
                  </div>
                  <div className="px-5">
                    <IoMdArrowDropdown size={25} />
                  </div>
                  {/* Right side content (arrow) */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="custom-table-container">
          <div className="custom-table">
            <div className="tabhead">
              <div className="tabrow">
                <div className="tabcell">Employee Name</div>
                <div className="tabcell">Date</div>
                <div className="tabcell">Check In</div>
                <div className="tabcell">Check Out</div>
                <div className="tabcell">
                  Status
                  <img onClick={handleshow} src={chain} alt="" />
                </div>
              </div>
            </div>
            <div className="tbody">
              {attendances.map((attendance) => (
                <div key={attendance.id} className="task-row">
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
                          {attendance.employeeName}
                        </div>
                        <div className="text-primary small category ">
                          {attendance.position}
                        </div>
                        <div className="text-primary small category ">
                          {attendance.employeeID}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tabcell">
                    <img src={calender} className="me-2 icon" alt="" />
                    {attendance.date}
                  </div>
                  <div className="tabcell">
                    <img src={clock} className="me-2 icon" alt="" />
                    {attendance.checkIn}
                  </div>
                  <div className="tabcell">
                    <img src={clock} className="me-2 icon" alt="" />
                    {attendance.checkOut}
                  </div>
                  <div className="tabcell">
                    <Badge
                      bg={getStatusBadgeColor(attendance.status)}
                      className=""
                    >
                      {attendance.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div
          className="popup-box"
          style={{
            position: "absolute",
            top: popupPosition.top,
            left: popupPosition.left,
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            zIndex: 1000,
          }}
        >
          <Form>
            <Form.Group className="mb-2">
              <Form.Check label="Present" type="checkbox" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Check label="Half Day" type="checkbox" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Check label="Absent" type="checkbox" />
            </Form.Group>
          </Form>
        </div>
      )}
    </div>
  );
};

export default AttendanceList;
