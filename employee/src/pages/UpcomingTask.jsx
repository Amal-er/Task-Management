import React, { useState } from "react";
import { Modal, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaFileAlt,
  FaEllipsisV,
  FaRegFileAlt,
} from "react-icons/fa";
import attach from "../assets/icons/attach.png";
import chat from "../assets/icons/chat.png";
import bulb from "../assets/icons/bulb.png";
import men from "../assets/images/men.png";
import women from "../assets/images/women.png";
import Chatbot from "../components/Chatbot";

const tasks = [
  {
    id: 1,
    projectName: "Book my J",
    category: "Travel App",
    description: "Front end developing of travel App",
    date: "20/05/2024",
    status: "Started",
  },
  {
    id: 2,
    projectName: "Student web site",
    category: "Education",
    description: "Front end developing of Education web",
    date: "20/05/2024",
    status: "Ongoing",
  },
  {
    id: 3,
    projectName: "Turf booking",
    category: "Booking App",
    description: "Front end developing of Booking App",
    date: "20/05/2024",
    status: "Canceled",
  },
];

const UpcomingTask = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatClick = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <div className="p-4">
        <h2>Upcoming Task</h2>
        <div className="custom-table-container">
          <div className="custom-table">
            <div className="tabhead">
              <div className="tabrow">
                <div className="tabcell">Project Name</div>
                <div className="tabcell">Description</div>
                <div className="tabcell">Date</div>
                <div className="tabcell">Attachment</div>
              </div>
            </div>
            <div className="tbody">
              {tasks.map((task) => (
                <div key={task.id} className="task-row">
                  <div className="tabcell">
                    <div className="d-flex align-items-center">
                      <img src={bulb} className="me-2 icon" alt="bulb icon" />
                      <div>
                        <div className="project-name text-primary ">
                          {task.projectName}
                        </div>
                        <div className="text-primary small category ">
                          {task.category}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tabcell">
                    <FaRegFileAlt className="me-2 icon" />
                    {task.description}
                  </div>
                  <div className="tabcell">
                    <FaCalendarAlt className="me-2 icon" />
                    {task.date}
                  </div>
                  <div className="tabcell d-flex justify-content-between align-items-center">
                    <img src={attach} alt="attach icon" />
                    <img
                      src={chat}
                      alt="chat icon"
                      onClick={handleChatClick}
                      style={{ cursor: "pointer" }}
                    />
                    <Dropdown as={ButtonGroup} align="end">
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        <FaEllipsisV />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Started</Dropdown.Item>
                        <Dropdown.Item href="#">Ongoing</Dropdown.Item>
                        <Dropdown.Item href="#">Canceled</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Chatbot isOpen={showChatbot} onClose={() => setShowChatbot(false)} />
    </div>
  );
};

export default UpcomingTask;
