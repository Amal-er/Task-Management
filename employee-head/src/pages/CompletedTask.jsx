import React, { useState } from "react";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import attach from "../assets/icons/attach.png";
import chat from "../assets/icons/chat.png";
import tick from "../assets/icons/tick.png";
import Chatbot from "../Components/Chatbot";

const tasks = [
  {
    id: 1,
    taskID: "#45232",
    taskTitle: "UI/UX Designing",
    category: "Travel App",
    dueDate: "Start date 01/01/2024 - End Date 31/01/2024",
    status: "Completed",
  },
  {
    id: 2,
    taskID: "#45232",
    taskTitle: "Frontend Development",
    category: "Travel App",
    dueDate: "Start date 01/01/2024 - End Date 31/01/2024",
    status: "Completed",
  },
  {
    id: 3,
    taskID: "#45232",
    taskTitle: "Backend Development",
    category: "Travel App",
    dueDate: "Start date 01/01/2024 - End Date 31/01/2024",
    status: "Completed",
  },
  {
    id: 4,
    taskID: "#45232",
    category: "Travel App",
    taskTitle: "Backend Development",
    dueDate: "Start date 01/01/2024 - End Date 31/01/2024",
    status: "Completed",
  },
];

const getStatusButtonClass = (status) => {
  switch (status) {
    case "ongoing":
      return "primary";
    case "pending":
      return "danger";
    case "paused":
      return "warning";
    case "Completed":
      return "success"; // Use success for completed status
    default:
      return "secondary";
  }
};

const CompletedTask = () => {
  const [showChatBot, setShowChatbot] = useState(false);

  const handleShowChat = () => {
    setShowChatbot(!showChatBot);
  };

  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <div className="p-4">
        <h2>Completed Task</h2>
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
                        variant={getStatusButtonClass(task.status)}
                        className="me-2 rounded-pill text-white"
                      >
                        {task.status.charAt(0).toUpperCase() +
                          task.status.slice(1)}
                      </Button>

                      {/* <Dropdown.Toggle
                        split
                        variant={getStatusButtonClass(task.status)}
                        id="dropdown-custom-components"
                      >
                        <FaEllipsisV />
                      </Dropdown.Toggle> */}
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Ongoing</Dropdown.Item>
                        <Dropdown.Item href="#">Pending</Dropdown.Item>
                        <Dropdown.Item href="#">Paused</Dropdown.Item>
                        <Dropdown.Item href="#">Completed</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <div onClick={handleShowChat}>
                      <img src={chat} alt="" />
                    </div>

                    <img src={attach} alt="" />

                    {/* <BsFillChatDotsFill className="me-2 icon" /> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Chatbot isOpen={showChatBot} onClose={() => setShowChatbot(false)} />
    </div>
  );
};

export default CompletedTask;
