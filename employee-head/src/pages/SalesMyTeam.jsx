import React, { useState } from "react";
import { Dropdown, ButtonGroup, Button, Form } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BsFillChatDotsFill } from "react-icons/bs";
import tick from "../assets/icons/tick.png";
import attach from "../assets/icons/attach.png";
import Chatbot from "../Components/Chatbot";
import chain from "../assets/icons/chain.png";
import chat from "../assets/icons/chat.png";
import msg from "../assets/icons/msg.png";
import add from "../assets/icons/plusround.png";

const tasks = [
  {
    id: 1,
    employeeName: "Anu K L",
    role: "Sr UI/UX Developer",
    taskTitle: "UI/UX designing of travel App",
    startDate: "20/05/2024",
    endDate: "28/05/2024",
    status: "Completed",
  },
  {
    id: 2,
    employeeName: "Minnu",
    role: "Sr UI/UX Developer",
    taskTitle: "UI/UX designing of travel App",
    startDate: "20/05/2024",
    endDate: "28/05/2024",
    status: "Ongoing",
  },
  {
    id: 3,
    employeeName: "Ammu",
    role: "Sr UI/UX Developer",
    taskTitle: "UI/UX designing of travel App",
    startDate: "20/05/2024",
    endDate: "28/05/2024",
    status: "Pending",
  },
  // Add more tasks as needed
];

const getStatusButtonColor = (status) => {
  switch (status.toLowerCase()) {
    case "ongoing":
      return "#007bff"; // Primary color
    case "pending":
      return "#ffc107"; // Warning color
    case "paused":
      return "#6c757d"; // Secondary color
    case "completed":
      return "#28a745"; // Success color
    default:
      return "#6c757d"; // Secondary color
  }
};

const SalesMyTeam = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [selectedOption, setSelectedOption] = useState("/task/salesmyteam");
  const [selectedOptionText, setSelectedOptionText] = useState("Ongoing Task"); // Initial text
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const navigate = useNavigate(); // Make sure useNavigate is imported

  const handleChatClick = () => {
    setShowChatbot(!showChatbot);
  };

  const handleSelect = (e) => {
    const selectedValue = e.target.value;
    const selectedText = e.target.options[e.target.selectedIndex].text;
    setSelectedOption(selectedValue);
    setSelectedOptionText(selectedText); // Update the selected text
    if (selectedValue) {
      navigate(selectedValue); // This will navigate to the selected route
    }
  };

  // -------------------

  const handleshow = (e) => {
    setShowPopup(!showPopup);
    const rect = e.target.getBoundingClientRect();
    setPopupPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
  };

  const handleAddNewTask = () => {
    navigate("/task/sales");
  };

  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <div className="p-4">
        <div className="d-flex justify-content-end">
          <button className="task-add" onClick={handleAddNewTask}>
            Add New Task <img src={add} alt="" />
          </button>
        </div>

        <div className="custom-table-container">
          <div className="custom-table">
            <div className="tabhead">
              <div className="tabrow">
                <div className="tabcell">Employee Name</div>
                <div className="tabcell">Status</div>
                <div className="tabcell">Task Title</div>
                <div className="tabcell">State Date</div>
                <div className="tabcell">End Date</div>
                <div className="tabcell">
                  <img onClick={handleshow} src={chain} alt="" />
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
                  <option value="/task/salesmyteam">Ongoing Task</option>
                  <option value="/task/salescompletedtask">
                    Completed Task
                  </option>
                </select>
                {/* Display selected option text */}
                {/* <div className="selected-option-box">{selectedOptionText}</div> */}
              </div>
              {tasks.map((task) => (
                <div key={task.id} className="task-row">
                  <div className="tabcell">
                    <div className="d-flex align-items-center">
                      <img src={tick} className="me-2 icon" alt="" />
                      <div>
                        <div className="employee-name">{task.employeeName}</div>
                        <div className="role text-muted">{task.role}</div>
                      </div>
                    </div>
                  </div>
                  <div className="tabcell">
                    <Button
                      variant={getStatusButtonColor(task.status)}
                      className="rounded-pill text-white"
                      style={{
                        backgroundColor: getStatusButtonColor(task.status),
                        border: "none",
                      }}
                    >
                      {task.status}
                    </Button>
                  </div>
                  <div className="tabcell">{task.taskTitle}</div>
                  <div className="tabcell">{task.startDate}</div>
                  <div className="tabcell">{task.endDate}</div>
                  <div className="tabcell d-flex align-items-center">
                    <div onClick={handleChatClick} className="d-flex">
                      <img src={chat} alt="" />
                    </div>
                    <div className="px-3">
                      <img src={msg} alt="" />
                    </div>
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
      <Chatbot isOpen={showChatbot} onClose={() => setShowChatbot(false)} />
    </div>
  );
};

export default SalesMyTeam;
