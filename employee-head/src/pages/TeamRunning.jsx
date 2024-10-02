import React, { useState, useEffect } from "react";
import { Dropdown, ButtonGroup, Form } from "react-bootstrap"; // Added import for Form
import { FaCalendarAlt } from "react-icons/fa";
import Chatbot from "../Components/Chatbot";
import { useNavigate, useLocation } from "react-router-dom";
import chat from "../assets/icons/chat1.png";
import attach from "../assets/icons/attach.png";
import bulb from "../assets/icons/bulb.png";
import mail from "../assets/icons/gmail.png";
import tick from "../assets/icons/tick.png";
import "bootstrap/dist/css/bootstrap.min.css";
import chain from "../assets/icons/chain.png";

const teamTasks = [
  {
    id: 1,
    memberName: "Anu K L",
    memberRole: "Sr UI/UX Developer",
    status: "Completed",
    statusColor: "green",
    taskTitle: "UI/UX designing of travel App",
    startDate: "12/05/2024",
    endDate: "15/05/2024",
    avatar: "https://mdbootstrap.com/img/new/avatars/8.jpg",
  },
  {
    id: 2,
    memberName: "Minnu",
    memberRole: "Sr UI/UX Developer",
    status: "Ongoing",
    statusColor: "blue",
    taskTitle: "UI/UX designing of travel App",
    startDate: "20/05/2024",
    endDate: "22/05/2024",
    avatar: "https://mdbootstrap.com/img/new/avatars/8.jpg",
  },
  {
    id: 3,
    memberName: "Ammu",
    memberRole: "Sr UI/UX Developer",
    status: "Pending",
    statusColor: "orange",
    taskTitle: "UI/UX designing of travel App",
    startDate: "14/05/2024",
    endDate: "18/05/2024",
    avatar: "https://mdbootstrap.com/img/new/avatars/8.jpg",
  },
];

const TeamRunning = () => {
  const [showChatBot, setShowChatbot] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Sync state with the current route
    const currentPath = location.pathname;
    setSelectedOption(currentPath);
  }, [location.pathname]);

  const handleshowchat = () => {
    setShowChatbot(!showChatBot);
  };

  const handleSelect = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue) {
      navigate(selectedValue);
    }
  };

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
        <h2>My Team Tasks</h2>
        <div className="custom-table-container">
          <div className="custom-table">
            <div className="tabhead">
              <div className="tabrow">
                <div className="tabcell">Employee Name</div>
                <div className="tabcell">Status</div>
                <div className="tabcell">Task Title</div>
                <div className="tabcell">Start Date</div>
                <div className="tabcell">End Date</div>
                <div className="tabcell">
                  <img
                    onClick={handleshow}
                    src={chain}
                    alt=""
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>

            <div className="tbody">
              <div className="filter-container">
                <select
                  value={selectedOption}
                  onChange={handleSelect}
                  className="form-select"
                >
                  <option value="/task/myteam">Upcoming Task</option>
                  <option value="/task/teamrunning">Running Task</option>
                  <option value="/task/teamcompleted">Completed Task</option>
                </select>
              </div>
              {teamTasks.map((task) => (
                <div key={task.id} className="task-row">
                  <div className="tabcell">
                    <div className="d-flex align-items-center">
                      <img
                        src={task.avatar}
                        alt="Avatar"
                        className="me-2 rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div>
                        <p className="fw-bold mb-1">{task.memberName}</p>
                        <p className="text-muted small mb-0">
                          {task.memberRole}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tabcell">
                    <button
                      type="button"
                      className="btn"
                      style={{
                        width: "110px",
                        textTransform: "capitalize",
                        backgroundColor: task.statusColor,
                        color: "white",
                        borderRadius: "40px",
                      }}
                    >
                      {task.status}
                    </button>
                  </div>
                  <div className="tabcell">
                    <div className="d-flex align-items-center">
                      <img src={tick} className="me-2 icon" alt="" />
                      <div>
                        <p className="fw-bold mb-1">{task.taskTitle}</p>
                        <p className="text-muted small mb-0">Travel app</p>
                      </div>
                    </div>
                  </div>
                  <div className="tabcell">
                    <p className="fw-normal mb-1">
                      <FaCalendarAlt className="me-1 icon" />
                      {task.startDate}
                    </p>
                  </div>
                  <div className="tabcell">
                    <p className="fw-normal mb-1">
                      <FaCalendarAlt className="me-1 icon" />
                      {task.endDate}
                    </p>
                  </div>
                  <div className="tabcell d-flex justify-content-center align-items-center gap-3">
                    <img
                      src={chat}
                      onClick={handleshowchat}
                      alt="Chat"
                      style={{ cursor: "pointer" }}
                    />
                    <img
                      src={mail}
                      alt="mail"
                      style={{ cursor: "pointer" }}
                      onClick={() => console.log("Mail icon clicked")} // Added onClick function
                    />
                    {/* 
                      <Dropdown as={ButtonGroup} align="end">
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                          <FaEllipsisV />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#">Edit</Dropdown.Item>
                          <Dropdown.Item href="#">Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown> 
                    */}
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
              <Form.Check label="Show All" type="checkbox" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Check label="Completed" type="checkbox" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Check label="Ongoing" type="checkbox" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Check label="Pending" type="checkbox" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Check label="Paused" type="checkbox" />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Check label="Need Approval" type="checkbox" />
            </Form.Group>
          </Form>
        </div>
      )}
      <Chatbot isOpen={showChatBot} onClose={() => setShowChatbot(false)} />
    </div>
  );
};

export default TeamRunning;
