import React from "react";
import { Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import girl from "../assets/images/girl.png";
import calender from "../assets/icons/calender.png";
import clock from "../assets/icons/clock1.png";
import leave from "../assets/icons/leave.png";
import comment from "../assets/icons/comment.png";

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
  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <div className="p-4">
        {/*  */}
        <div className="row mb-4">
          {/* First Box */}
          <div className="col-md-6 mb-3">
            <div
              className="p-3 bg-white rounded shadow-sm"
              style={{ minHeight: "150px" }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p className="tp2 mb-0">Team Present</p>
                </div>
                <img
                  src={girl}
                  alt="Team Members"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
                <div className="text-primary" style={{ cursor: "pointer" }}>
                  <a
                    href="/attendance/teamattendence"
                    className="tp text-secondary"
                  >
                    view details
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between gap-3 mt-3">
                <div>
                  <p className="mb-0">
                    Present <span className="text-success">-05</span>
                  </p>
                </div>
                <div>
                  <p className="mb-0">
                    Absent <span className="text-danger">-03</span>
                  </p>
                </div>
                <div>
                  <p className="mb-0">
                    Office <span className="text-primary">-06</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Box */}
          <div className="col-md-6 mb-3">
            <div className="p-3 bg-white rounded shadow-sm">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-4 w-100">
                  <div>
                    <p className="tp2 mb-0">On Leave</p>
                  </div>
                  <div
                    className="ms-auto text-primary"
                    style={{ cursor: "pointer" }}
                  >
                    <a href="/attendance/leave" className="tp text-secondary">
                      view details
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-3 pt-3">
                <div className="d-flex gap-2">
                  <img src={leave} alt="" />
                  <div className="d-col">
                    <p className="mb-0 text-primary">Ram ks</p>
                    <p className="decr">
                      Ui/UX Developer <br />
                      #08742
                    </p>
                  </div>
                </div>
                <div>
                  <div className="d-flex gap-2">
                    <img src={leave} alt="" />
                    <div className="d-col">
                      <p className="mb-0 text-primary">Ram ks</p>
                      <p className="decr">
                        Ui/UX Developer <br />
                        #08742
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex gap-2">
                    <img src={leave} alt="" />
                    <div className="d-col">
                      <p className="mb-0 text-primary">Ram ks</p>
                      <p className="decr">
                        Ui/UX Developer <br />
                        #08742
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <h2>Attendance List</h2>

        <div className="custom-table-container">
          <div className="custom-table">
            <div className="tabhead">
              <div className="tabrow">
                <div className="tabcell">Employee Name</div>
                <div className="tabcell">Date</div>
                <div className="tabcell">Check In</div>
                <div className="tabcell">Check Out</div>
                <div className="tabcell">Status</div>
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
                    <div className="gap-3 d-flex">
                      <Badge
                        bg={getStatusBadgeColor(attendance.status)}
                        className=""
                      >
                        {attendance.status}
                      </Badge>

                      <img src={comment} alt="" />
                    </div>
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

export default AttendanceList;
