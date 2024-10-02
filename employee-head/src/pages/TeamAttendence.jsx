import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import girl from "../assets/images/girl.png";
import emailIcon from "../assets/icons/mail.png";
import callIcon from "../assets/icons/call.png";
import uiux from "../assets/icons/ui-ux.png";
import officeIcon from "../assets/icons/greendot.png"; // Icon for Office work
import homeIcon from "../assets/icons/bluedot.png"; // Icon for Home work
import chain from "../assets/icons/chain.png";

const attendances = [
  {
    id: 1,
    employeeName: "Arun K S",
    position: "UI/UX Developer",
    employeeID: "#A1234567",
    mobile: "9876543210",
    email: "arun@gmail.com",
    workType: "Office",
    status: "Present",
  },
  {
    id: 2,
    employeeName: "Arun K S",
    position: "UI/UX Developer",
    employeeID: "#A1234567",
    mobile: "9876543210",
    email: "arun@gmail.com",
    workType: "Home",
    status: "Present",
  },
  {
    id: 3,
    employeeName: "Arun K S",
    position: "UI/UX Developer",
    employeeID: "#A1234567",
    mobile: "9876543210",
    email: "arun@gmail.com",
    workType: "Office",
    status: "Absent",
  },
  // Add more records as needed
];

const getWorkTypeIcon = (type) => {
  switch (type) {
    case "Office":
      return officeIcon;
    case "Home":
      return homeIcon;
    default:
      return officeIcon;
  }
};

const TeamAttendance = () => {
  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <div className="p-4">
        <h2>Team Attendance</h2>

        <div className="custom-table-container">
          <div className="custom-table">
            <div className="tabhead">
              <div className="tabrow">
                <div className="tabcell">Employee Name</div>
                <div className="tabcell">Designation</div>
                <div className="tabcell">Mobile No</div>
                <div className="tabcell">Email Id</div>
                <div className="tabcell">Type of work</div>
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
                    <img src={uiux} className="me-2 icon" alt="" />
                    {attendance.position}
                  </div>

                  <div className="tabcell">
                    <img src={callIcon} className="me-2 icon" alt="" />
                    {attendance.mobile}
                  </div>
                  <div className="tabcell">
                    <img src={emailIcon} className="me-2 icon" alt="" />
                    {attendance.email}
                  </div>
                  <div className="tabcell">
                    <img
                      src={getWorkTypeIcon(attendance.workType)}
                      className="me-2 icon"
                      alt=""
                    />
                    {attendance.workType}
                  </div>
                  <div className="tabcell">
                    <button
                      style={{
                        backgroundColor:
                          attendance.status === "Present"
                            ? "#28a745"
                            : "#dc3545",
                        color: "white",
                        padding: "5px 10px",
                        border: "none",
                        borderRadius: "15px",
                        cursor: "not-allowed", // Indicates the button is not clickable
                      }}
                      disabled // Disables the button so it can't be clicked
                    >
                      {attendance.status}
                    </button>
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

export default TeamAttendance;
