import React, { useState } from "react";
import { Dropdown, ButtonGroup } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaFileAlt,
  FaEllipsisV,
  FaRegFileAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import attach from "../assets/icons/attach.png";
import chat from "../assets/icons/chat.png";
import bulb from "../assets/icons/bulb.png";
import Chatbot from "../Components/Chatbot";
import "bootstrap/dist/css/bootstrap.min.css";
import PopupModal from "../Components/PopupModal";

const MyTeam = () => {
  const [showChatBot, setShowChatbot] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [teamTasks, setTeamTasks] = useState([
    {
      id: 1,
      projectName: "Book my J",
      category: "Travel App",
      description: "Front end developing of travel App",
      date: "20/05/2024",
      memberName: "Arun K S",
      memberRole: "Sr UI/UX Developer",
    },
    {
      id: 2,
      projectName: "Student web site",
      category: "Education",
      description: "Front end developing of Education web",
      date: "20/05/2024",
      memberName: "Sara L",
      memberRole: "Jr Frontend Developer",
    },
    {
      id: 3,
      projectName: "Turf booking",
      category: "Booking App",
      description: "Front end developing of Booking App",
      date: "20/05/2024",
      memberName: "John D",
      memberRole: "Backend Developer",
    },
  ]);

  const [selectedOption, setSelectedOption] = useState("/task/myteam");
  const [editingTask, setEditingTask] = useState(null);
  const [formData, setFormData] = useState({
    projectName: "",
    category: "",
    description: "",
    date: "",
    memberName: "",
    memberRole: "",
  });
  const navigate = useNavigate();

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

  const handleTogglePopup = (task) => {
    if (task) {
      setEditingTask(task);
      setFormData({ ...task });
    } else {
      setEditingTask(null);
    }
    setShowPopup(!showPopup);
  };

  const handleSaveTask = (updatedTask) => {
    setTeamTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
    setShowPopup(false);
  };

  const handleDelete = (id) => {
    setTeamTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div
      style={{
        backgroundColor: "#E2EBFC",
        minHeight: "100vh",
      }}
    >
      <div className="p-4">
        <h2>My Team Tasks</h2>
        <div className="custom-table-container">
          <div className="custom-table">
            <div className="tabhead">
              <div className="tabrow">
                <div className="tabcell">Project Name</div>
                <div className="tabcell">Assigned To</div>
                <div className="tabcell">Description</div>
                <div className="tabcell">Date</div>
                <div className="tabcell">Attachment</div>
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
                      <img src={bulb} className="me-2 icon" alt="" />
                      <div>
                        <div className="project-name text-primary">
                          {task.projectName}
                        </div>
                        <div className="text-primary small category">
                          {task.category}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tabcell">
                    <div className="d-flex align-items-center">
                      <img
                        src={task.avatar}
                        alt="Member Avatar"
                        className="me-2 rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div>
                        <div className="member-name text-primary">
                          {task.memberName}
                        </div>
                        <div className="member-role text-muted small">
                          {task.memberRole}
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
                    <div>
                      <img
                        src={chat}
                        onClick={handleshowchat}
                        alt="Chat"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
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
        </div>
      </div>

      {/* Popup Modal */}
      <PopupModal
        show={showPopup}
        onClose={() => setShowPopup(false)}
        onSave={handleSaveTask}
        initialData={editingTask}
      />

      <Chatbot isOpen={showChatBot} onClose={() => setShowChatbot(false)} />
    </div>
  );
};

export default MyTeam;
