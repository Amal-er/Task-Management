import React, { useState } from "react";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import tick from "../assets/icons/tick.png";
import attach from "../assets/icons/attach.png";
import chat from "../assets/icons/chat.png";
import option from "../assets/icons/option.png";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import Chatbot from "../Components/Chatbot";

const tasks = [
  {
    id: 1,
    taskID: "#45232",
    taskTitle: "UI/UX Designing",
    category: "Travel App",
    dueDate: "Start date 01/01/2024 - End Date 31/01/2024",
    status: "ongoing",
  },
  {
    id: 2,
    taskID: "#45232",
    taskTitle: "Frontend Development",
    category: "Travel App",
    dueDate: "Start date 01/01/2024 - End Date 31/01/2024",
    status: "pending",
  },
  {
    id: 3,
    taskID: "#45232",
    taskTitle: "Backend Development",
    category: "Travel App",
    dueDate: "Start date 01/01/2024 - End Date 31/01/2024",
    status: "paused",
  },
  {
    id: 4,
    taskID: "#45232",
    taskTitle: "Backend Development",
    category: "Travel App",
    dueDate: "Start date 01/01/2024 - End Date 31/01/2024",
    status: "NeedApprovel",
  },
];

const getStatusButtonColor = (status) => {
  switch (status) {
    case "ongoing":
      return "#007bff"; // Primary color
    case "pending":
      return "#dc3545"; // Danger color
    case "paused":
      return "#ffc107"; // Warning color
    case "NeedApprovel":
      return "#ffc107"; // Warning color or adjust if needed
    default:
      return "#6c757d"; // Secondary color
  }
};

const TaskEmployee = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const employeeName = location.state?.employeeName || "Unknown";
  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatClick = () => {
    setShowChatbot(!showChatbot);
  };

  const handleMoreClick = () => {
    navigate("/employee/addnewtask", { state: { employeeName } }); // Navigate to AddnewTask page with state
  };

  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <div className="p-4">
        <h2>Employee Task</h2>
        <p>{employeeName}</p>
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
                        <div className="text-primary small category ">
                          {task.category}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tabcell">{task.taskID}</div>
                  <div className="tabcell due-date-container">
                    <span>Start date End date </span>
                    <span>01/01/2024 31/01/2024</span>
                  </div>
                  <div className="tabcell d-flex align-items-center">
                    <Dropdown as={ButtonGroup} align="end">
                      <Button
                        variant={getStatusButtonColor(task.status)}
                        className="me-2 rounded-pill text-white"
                        style={{
                          backgroundColor: getStatusButtonColor(task.status),
                          border: "none",
                        }}
                      >
                        {task.status.charAt(0).toUpperCase() +
                          task.status.slice(1)}
                      </Button>

                      <Dropdown.Toggle
                        split
                        variant={getStatusButtonColor(task.status)}
                        className="me-2"
                        id="dropdown-custom-components"
                      />
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Ongoing</Dropdown.Item>
                        <Dropdown.Item href="#">Pending</Dropdown.Item>
                        <Dropdown.Item href="#">Paused</Dropdown.Item>
                        <Dropdown.Item href="#">Approved</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <div>
                      <img src={chat} onClick={handleChatClick} alt="" />
                    </div>

                    <img src={attach} alt="" />
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      <FaEllipsisV />
                    </Dropdown.Toggle>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button variant="primary" className="mt-4" onClick={handleMoreClick}>
            Add New Task
          </Button>
        </div>
      </div>
      <Chatbot isOpen={showChatbot} onClose={() => setShowChatbot(false)} />
    </div>
  );
};

export default TaskEmployee;
