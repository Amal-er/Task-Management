import React, { useState } from "react";
import { Dropdown, ButtonGroup, Modal, Button, Form } from "react-bootstrap";
import { FaCalendarAlt, FaRegFileAlt, FaEllipsisV } from "react-icons/fa";
import Chatbot from "../Components/Chatbot";
import chat from "../assets/icons/chat1.png";
import mail from "../assets/icons/gmail.png";
import { useNavigate } from "react-router-dom";
import tick from "../assets/icons/tick.png";
import attach from "../assets/icons/attach.png";
import chain from "../assets/icons/chain.png";

import "bootstrap/dist/css/bootstrap.min.css";

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
    status: "Completed",
    statusColor: "green",
    taskTitle: "UI/UX designing of travel App",
    startDate: "20/05/2024",
    endDate: "22/05/2024",
    avatar: "https://mdbootstrap.com/img/new/avatars/8.jpg",
  },
  {
    id: 3,
    memberName: "Ammu",
    memberRole: "Sr UI/UX Developer",
    status: "Completed",
    statusColor: "green",
    taskTitle: "UI/UX designing of travel App",
    startDate: "14/05/2024",
    endDate: "18/05/2024",
    avatar: "https://mdbootstrap.com/img/new/avatars/8.jpg",
  },
];

const TeamCompleted = () => {
  const [showChatBot, setShowChatbot] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // Added state for popup
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 }); // Added state for popup position
  const [showBigPopup, setShowBigPopup] = useState(false); //link adding

  const navigate = useNavigate();

  const handleshowchat = () => {
    setShowChatbot(!showChatBot);
  };

  const handleSelect = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  };

  const handleClose = () => {
    setShowModal(false); // Close the modal
  };

  const handleshow = (e) => {
    setShowPopup(!showPopup);
    const rect = e.target.getBoundingClientRect();
    setPopupPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
  };

  const handleAttachClick = () => {
    setShowBigPopup(true);
  };

  const handleCloseBigPopup = () => {
    setShowBigPopup(false);
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
                <select onChange={handleSelect} className="form-select">
                  <option value="" disabled selected>
                    Completed Task
                  </option>
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
                    <p
                      className="fw-normal mb-1"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaCalendarAlt
                        className="me-1 icon"
                        style={{ cursor: "pointer" }}
                      />
                      <span
                        style={{ cursor: "pointer", color: "black" }}
                        onMouseEnter={(e) => (e.target.style.color = "red")}
                        onMouseLeave={(e) => (e.target.style.color = "black")}
                      >
                        {task.startDate}
                      </span>
                    </p>
                  </div>
                  <div className="tabcell">
                    <p
                      className="fw-normal mb-1"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaCalendarAlt
                        className="me-1 icon"
                        style={{ cursor: "pointer" }}
                      />
                      <span
                        style={{ cursor: "pointer", color: "black" }}
                        onMouseEnter={(e) => (e.target.style.color = "red")}
                        onMouseLeave={(e) => (e.target.style.color = "black")}
                      >
                        {task.endDate}
                      </span>
                    </p>
                  </div>

                  <div className="tabcell d-flex justify-content-between align-items-center">
                    <img
                      src={chat}
                      onClick={handleshowchat}
                      alt="Chat"
                      style={{ cursor: "pointer" }}
                    />
                    <img
                      src={mail}
                      onClick=""
                      alt="mail"
                      style={{ cursor: "pointer" }}
                    />
                    <img
                      src={attach}
                      onClick={handleAttachClick}
                      alt="attach"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Show All, Checkbox, and Date Checkbox */}
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
              <Form.Check label="Date" type="checkbox" />
            </Form.Group>
          </Form>
        </div>
      )}

      {/* ------------show bigpopup---------------- */}

      {/* Big Popup for Attach */}
      {showBigPopup && (
        <div
          className="big-popup"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "80%",
              maxWidth: "600px",
            }}
          >
            <h4 style={{ textDecoration: "underline" }}>Tasks</h4>

            <Form>
              <Form.Group controlId="formFile" className="mb-3">
                <div className="d-flex justify-content-between">
                  <p className="linkaddinghead">
                    Make an Automatic Approval system for leave request
                  </p>
                  <button className="success">Completed</button>
                </div>
                <p className="linkaddinghead">#05455</p>

                <a href="">
                  https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0J/view?usp=sharing
                </a>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3 pt-10">
                <div className="d-flex justify-content-between">
                  <p className="linkaddinghead">
                    Make an Home page for admin and adding employee
                  </p>
                  <button className="success">Completed</button>
                </div>
                <p className="linkaddinghead">#05455</p>

                <a href="">
                  https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0J/view?usp=sharing
                </a>
              </Form.Group>
              <Button variant="secondary" onClick={handleCloseBigPopup}>
                Close
              </Button>
              <Button variant="primary" type="submit" className="ms-2">
                Attach
              </Button>
            </Form>
          </div>
        </div>
      )}

      {/* ------------------------------------------- */}

      <Chatbot isOpen={showChatBot} onClose={() => setShowChatbot(false)} />
    </div>
  );
};

export default TeamCompleted;

// the un wanted code
