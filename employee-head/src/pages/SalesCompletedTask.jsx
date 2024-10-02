import React, { useState, useEffect } from "react";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { FaEllipsisV, FaBell, FaUserCircle } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import attach from "../assets/icons/attach.png";
import chat from "../assets/icons/chat.png";
import tick from "../assets/icons/tick.png";
import Chatbot from "../Components/Chatbot";
import { useNavigate, useLocation } from "react-router-dom";

const tasks = [
  {
    id: 1,
    employeeName: "Anu K L",
    designation: "Sr UI/UX Developer",
    taskTitle: "UI/UX designing",
    category: "Travel App",
    startDate: "20/05/2024",
    endDate: "28/05/2024",
    status: "Completed",
  },
  {
    id: 2,
    employeeName: "Ammu",
    designation: "Sr UI/UX Developer",
    taskTitle: "UI/UX designing",
    category: "Travel App",
    startDate: "20/05/2024",
    endDate: "28/05/2024",
    status: "Completed",
  },
  {
    id: 3,
    employeeName: "Aishu",
    designation: "Sr UI/UX Developer",
    taskTitle: "UI/UX designing",
    category: "Travel App",
    startDate: "20/05/2024",
    endDate: "28/05/2024",
    status: "Completed",
  },
  {
    id: 4,
    employeeName: "Devika",
    designation: "Sr UI/UX Developer",
    taskTitle: "UI/UX designing",
    category: "Travel App",
    startDate: "20/05/2024",
    endDate: "28/05/2024",
    status: "Completed",
  },
  // Add more tasks here...
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
      return "success";
    default:
      return "secondary";
  }
};

const SalesCompletedTask = () => {
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

  const handleShowReport = () => {
    navigate("/employee/salesreport");
  };

  return (
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <div className="p-4">
        <div className="custom-table-container">
          <div className="custom-table">
            <div className="tabhead">
              <div className="tabrow">
                <div className="tabcell">Employee Name</div>
                <div className="tabcell">Status</div>
                <div className="tabcell">Task Title</div>
                <div className="tabcell">State Date</div>
                <div className="tabcell">End Date</div>
                <div className="tabcell">Actions</div>
              </div>
            </div>
            <div className="tbody">
              <div className="filter-container">
                <select
                  value={selectedOption}
                  onChange={handleSelect}
                  className="form-select"
                >
                  <option value="/task/salesmyteam">Ongoing Task</option>\
                  <option value="/task/salescompletedtask">
                    Completed Task
                  </option>
                </select>
              </div>
              {tasks.map((task) => (
                <div key={task.id} className="task-row">
                  <div className="tabcell">
                    <div className="d-flex align-items-center">
                      <img src={tick} className="me-2 icon" alt="" />
                      <div>
                        <div className="employee-name text-primary">
                          {task.employeeName}
                        </div>
                        <div className="text-primary small designation">
                          {task.designation}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tabcell">
                    <Button
                      variant={getStatusButtonClass(task.status)}
                      className="rounded-pill text-white"
                    >
                      {task.status}
                    </Button>
                  </div>
                  <div className="tabcell">{task.taskTitle}</div>
                  <div className="tabcell">{task.startDate}</div>
                  <div className="tabcell">{task.endDate}</div>
                  <div className="tabcell d-flex align-items-center">
                    <Button variant="link" className="me-2">
                      <img src={chat} alt="Chat" />
                    </Button>
                    <Button variant="link" className="me-2 ">
                      <img
                        src={attach}
                        onClick={handleShowReport}
                        alt="Attach"
                      />
                    </Button>
                    <Dropdown as={ButtonGroup} align="end">
                      <Dropdown.Toggle
                        split
                        variant="light"
                        id="dropdown-custom-components"
                      >
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
        </div>
      </div>
      <Chatbot isOpen={showChatBot} onClose={() => setShowChatbot(false)} />
    </div>
  );
};

export default SalesCompletedTask;
