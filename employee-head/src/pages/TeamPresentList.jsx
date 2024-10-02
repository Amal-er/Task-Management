import React from "react";
import { Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import girl from "../assets/images/girl.png";
import calender from "../assets/icons/calender.png";
import clock from "../assets/icons/clock1.png";
import leave from "../assets/icons/leave.png";
import chain from "../assets/icons/chain.png";
import lens from "../assets/icons/lens.png";
import duration from "../assets/icons/duration.png";
import chat from "../assets/icons/chat.png";

const attendances = [
  {
    id: 1,
    employeeName: "Ram K S",
    position: "UI/UX Developer",
    employeeID: "#012345",
    date: "28/05/2024",
    duration: "#1 days",
    type: "Sick leave",
    reason: "",
    status: "approved",
  },
  {
    id: 2,
    employeeName: "Ram K S",
    position: "UI/UX Developer",
    employeeID: "#012345",
    date: "28/05/2024",
    duration: "#1 days",
    type: "Sick leave",
    reason: "",
    status: "approved",
  },
  {
    id: 3,
    employeeName: "Ram K S",
    position: "UI/UX Developer",
    employeeID: "#012345",
    date: "28/05/2024",
    duration: "#1 days",
    type: "Sick leave",
    reason: "",
    status: "approved",
  },
  {
    id: 4,
    employeeName: "Ram K S",
    position: "UI/UX Developer",
    employeeID: "#012345",
    date: "28/05/2024",
    duration: "#1 days",
    type: "Sick leave",
    reason: "",
    status: "approved",
  },
  {
    id: 5,
    employeeName: "Ram K S",
    position: "UI/UX Developer",
    employeeID: "#012345",
    date: "28/05/2024",
    duration: "#1 days",
    type: "Sick leave",
    reason: "",
    status: "approved",
  },
  {
    id: 6,
    employeeName: "Ram K S",
    position: "UI/UX Developer",
    employeeID: "#012345",
    date: "28/05/2024",
    duration: "#1 days",
    type: "Sick leave",
    reason: "",
    status: "approved",
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

const TeamPresentList = () => {
  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <div className="p-4">
        {/*  */}

        {/*  */}
        <h2>On Leave</h2>

        <div className="custom-table-container">
          <div className="custom-table">
            <div className="tabhead">
              <div className="tabrow">
                <div className="tabcell">Employee Name</div>
                <div className="tabcell">Date</div>
                <div className="tabcell">Duration</div>
                <div className="tabcell">Type</div>
                <div className="tabcell">Reason</div>
                <div className="tabcell">
                  Status <img src={chain} alt="" />
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
                    <img src={duration} className="me-2 icon" alt="" />
                    {attendance.duration}
                  </div>
                  <div className="tabcell text-danger">
                    {/* <img src={clock} className="me-2 icon" alt="" /> */}
                    {attendance.type}
                  </div>
                  <div className="tabcell">
                    {/* <img src={clock} className="me-2 icon" alt="" /> */}
                    <img src={lens} alt="" />
                  </div>
                  <div className="tabcell">
                    <Badge
                      bg={getStatusBadgeColor(attendance.status)}
                      className="bg-success"
                    >
                      {attendance.status}
                    </Badge>
                    <img src={chat} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPresentList;
