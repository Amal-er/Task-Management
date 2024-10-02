import React, { useState } from "react";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { FaCalendarAlt, FaFileAlt, FaEllipsisV } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import attach from "../assets/icons/attach.png";
import chat from "../assets/icons/chat.png";
import bulb from "../assets/icons/bulb.png";
import Chatbot from "../Components/Chatbot";
import option from "../assets/icons/option.png";

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
  const [showChatBot, setShowChatbot] = useState(false);

  const handleshowchat = () => {
    setShowChatbot(!showChatBot);
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
                      <img src={bulb} className="me-2 icon" alt="" />
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
                    <img src={attach} alt="" />
                    {/* <Link to="/task/chat"> */}
                    <div>
                      <img
                        src={chat}
                        onClick={handleshowchat}
                        alt="Chat"
                        style={{ cursor: "pointer" }}
                      />
                    </div>

                    {/* </Link> */}
                    <Dropdown as={ButtonGroup} align="end">
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        <FaEllipsisV />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          href="#"
                          onClick={() => handleTogglePopup(task)}
                        >
                          <input type="checkbox" className="me-2" />
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#"
                          onClick={() => handleDelete(task.id)}
                        >
                          <input type="checkbox" className="me-2" />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link to="/task/addupcomingtask">
            <Button variant="primary" className="mt-4">
              Add New Task
            </Button>
          </Link>
        </div>
      </div>
      <Chatbot isOpen={showChatBot} onClose={() => setShowChatbot(false)} />
    </div>
  );
};

export default UpcomingTask;
