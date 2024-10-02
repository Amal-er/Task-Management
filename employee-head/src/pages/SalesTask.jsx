import React, { useState } from "react";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsFillChatDotsFill } from "react-icons/bs";
import tick from "../assets/icons/tick.png";
import chat from "../assets/icons/chat.png";
import attach from "../assets/icons/attach.png";
// import "../assets/css/TaskEmployee.css";
import Chatbot from "../Components/Chatbot";
import { useLocation } from "react-router-dom";

const tasks = [
  {
    id: 1,
    taskID: "#23446",
    taskTitle: "Sales project 22",
    startDate: "18/05/2024",
    endDate: "20/05/2024",
    status: "Pending",
  },
  {
    id: 2,
    taskID: "#23446",
    taskTitle: "Sales project 21",
    startDate: "16/05/2024",
    endDate: "18/05/2024",
    status: "Ongoing",
  },
  {
    id: 3,
    taskID: "#23446",
    taskTitle: "Sales project 19",
    startDate: "14/05/2024",
    endDate: "16/05/2024",
    status: "Completed",
  },
  {
    id: 4,
    taskID: "#23446",
    taskTitle: "Sales project 18",
    startDate: "12/05/2024",
    endDate: "14/05/2024",
    status: "Paused",
  },
];

const getStatusButtonColor = (status) => {
  switch (status.toLowerCase()) {
    case "ongoing":
      return "#007bff"; // Primary color
    case "pending":
      return "#dc3545"; // Danger color
    case "paused":
      return "#ffc107"; // Warning color
    case "completed":
      return "#28a745"; // Success color
    default:
      return "#6c757d"; // Secondary color
  }
};

const SalesTask = () => {
  const location = useLocation(); // Initialize useLocation
  const { employeeName } = location.state || {}; // Destructure employeeName from location.state

  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatClick = () => {
    setShowChatbot(!showChatbot);
  };
  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <div className="p-4">
        <h2>Employee Task</h2>
        <p>Employee Name: {employeeName}</p>
        <div className="custom-table-container">
          <div className="custom-table">
            <div className="tabhead">
              <div className="tabrow">
                <div className="tabcell">Task Title</div>
                <div className="tabcell">Task ID</div>
                <div className="tabcell">Due Date</div>
                <div className="tabcell">Status</div>
              </div>
            </div>
            <div className="tbody">
              {tasks.map((task) => (
                <div key={task.id} className="task-row">
                  <div className="tabcell">
                    <div className="d-flex align-items-center">
                      <img src={tick} className="me-2 icon" alt="" />
                      <div>
                        <div className="project-name text-primary">
                          {task.taskTitle}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tabcell">{task.taskID}</div>
                  <div className="tabcell due-date-container">
                    <span>Start Date: {task.startDate}</span>
                    <br />
                    <span>End Date: {task.endDate}</span>
                  </div>
                  <div className="tabcell d-flex align-items-center">
                    <Button
                      variant={getStatusButtonColor(task.status)}
                      className="me-2 rounded-pill text-white"
                      style={{
                        backgroundColor: getStatusButtonColor(task.status),
                        border: "none",
                      }}
                    >
                      {task.status}
                    </Button>
                    {/* <BsFillChatDotsFill className="me-2" /> */}
                    <div>
                      <img src={chat} onClick={handleChatClick} alt="chat" />
                    </div>

                    <Link to="/employee/salesreport">
                      <img src={attach} alt="Attach" />
                    </Link>
                    <Dropdown as={ButtonGroup} align="end">
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        <FaEllipsisV />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Ongoing</Dropdown.Item>
                        <Dropdown.Item href="#">Pending</Dropdown.Item>
                        <Dropdown.Item href="#">Paused</Dropdown.Item>
                        <Dropdown.Item href="#">Completed</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link to="/task/sales">
            <Button variant="primary" className="mt-4">
              Add New Task
            </Button>
          </Link>
        </div>
      </div>
      <Chatbot isOpen={showChatbot} onClose={() => setShowChatbot(false)} />
    </div>
  );
};

export default SalesTask;
