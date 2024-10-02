import React from "react";
import { Dropdown, ButtonGroup, Button, Badge } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import chat from "../assets/icons/chat.png";

const tasks = [
  {
    id: 1,
    companyName: "ABCD Company",
    leadName: "ABCD Company",
    leadSource: "Advertisement",
    emailId: "hr@abcd.com",
    phoneNo: "9876543212",
    response: "Interested",
  },
  {
    id: 2,
    companyName: "ABCD Company",
    leadName: "ABCD Company",
    leadSource: "Advertisement",
    emailId: "hr@abcd.com",
    phoneNo: "9876543212",
    response: "Interested",
  },
  {
    id: 3,
    companyName: "ABCD Company",
    leadName: "ABCD Company",
    leadSource: "Advertisement",
    emailId: "hr@abcd.com",
    phoneNo: "9876543212",
    response: "Call back",
  },
  {
    id: 4,
    companyName: "ABCD Company",
    leadName: "ABCD Company",
    leadSource: "Advertisement",
    emailId: "hr@abcd.com",
    phoneNo: "9876543212",
    response: "Rejected",
  },
  {
    id: 5,
    companyName: "ABCD Company",
    leadName: "ABCD Company",
    leadSource: "Advertisement",
    emailId: "hr@abcd.com",
    phoneNo: "9876543212",
    response: "Rejected",
  },
  {
    id: 6,
    companyName: "ABCD Company",
    leadName: "ABCD Company",
    leadSource: "Advertisement",
    emailId: "hr@abcd.com",
    phoneNo: "9876543212",
    response: "No Response",
  },
  {
    id: 7,
    companyName: "ABCD Company",
    leadName: "ABCD Company",
    leadSource: "Advertisement",
    emailId: "hr@abcd.com",
    phoneNo: "9876543212",
    response: "No Response",
  },
  {
    id: 8,
    companyName: "ABCD Company",
    leadName: "ABCD Company",
    leadSource: "Advertisement",
    emailId: "hr@abcd.com",
    phoneNo: "9876543212",
    response: "Interested",
  },
];

const getResponseBadgeColor = (response) => {
  switch (response) {
    case "Interested":
      return "success";
    case "Rejected":
      return "danger";
    case "Call back":
      return "primary";
    case "No Response":
      return "warning";
    default:
      return "secondary";
  }
};

const SalesReport = () => {
  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <div className="p-4">
        <h2>Employee Task</h2>
        <p>Employee Name: Amal E R</p>
        <div className="custom-table-container">
          <div className="custom-table">
            <div className="tabhead">
              <div className="tabrow">
                <div className="tabcell">Company Name</div>
                <div className="tabcell">Lead Name</div>
                <div className="tabcell">Lead Source</div>
                <div className="tabcell">Email ID</div>
                <div className="tabcell">Phone No</div>
                <div className="tabcell">Response</div>
                <div className="tabcell">Action</div>
              </div>
            </div>
            <div className="tbody">
              {tasks.map((task) => (
                <div key={task.id} className="task-row">
                  <div className="tabcell">{task.companyName}</div>
                  <div className="tabcell">{task.leadName}</div>
                  <div className="tabcell">{task.leadSource}</div>
                  <div className="tabcell">{task.emailId}</div>
                  <div className="tabcell">{task.phoneNo}</div>
                  <div className="tabcell">
                    <Badge bg={getResponseBadgeColor(task.response)}>
                      {task.response}
                    </Badge>
                  </div>
                  <div className="tabcell d-flex align-items-center">
                    <Link to="/task/salesreport">
                      <img src={chat} alt="Attach" className="me-2" />
                    </Link>
                    <Dropdown as={ButtonGroup} align="end">
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        <FaEllipsisV />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                        <Dropdown.Item href="#">Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <Link to="/employee/addnewtask">
            <Button variant="primary" className="mt-4">
              Add New Task
            </Button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
