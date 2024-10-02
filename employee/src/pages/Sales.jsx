import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, ButtonGroup, Button, Modal, Badge } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { TasksContext } from "../contexts/TasksContext";
import phoneIcon from "../assets/icons/tele.png";
import chatIcon from "../assets/icons/chat.png";
import edit from "../assets/icons/edit.png";
import Chatbot from "../components/Chatbot";

const Sales = () => {
  const navigate = useNavigate();
  const { tasks, setTasks } = useContext(TasksContext);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [isCalling, setIsCalling] = useState(false); // State for calling indicator

  const handlePhoneClick = (task) => {
    setCurrentTask(task);
    setShowConfirmationPopup(true);
  };

  const handleCloseConfirmationPopup = () => {
    setShowConfirmationPopup(false);
  };

  const handleYesClick = () => {
    setShowConfirmationPopup(false);
    setShowUploadPopup(true);
    setIsCalling(true); // Show the calling indicator
  };

  const handleCloseUploadPopup = () => {
    setShowUploadPopup(false);
    setIsCalling(false); // Hide the calling indicator when done
  };

  const handleStatusClick = (status) => {
    const updatedTasks = tasks.map((task) =>
      task.id === currentTask.id ? { ...task, status } : task
    );
    setTasks(updatedTasks);
    setShowUploadPopup(false);
    setIsCalling(false); // Hide the calling indicator when done
    navigate("/task/salesreport");
  };

  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatClick = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div
      style={{
        backgroundColor: "#E2EBFC",
        minHeight: "100vh",
        filter: showConfirmationPopup || showUploadPopup ? "" : "none",
        position: "relative", // Ensure relative positioning for the parent container
      }}
    >
      <div className="p-4">
        <h2>Employee Task</h2>
        <p>Employee Name: Amal E R</p>
        <div className="custom-table-container">
          <div className="custom-table">
            <div className="tabhead">
              <div className="tabrow">
                <div className="tabcell">Company Name</div>
                <div className="tabcell">Lead Name</div>
                <div className="tabcell">Lead Source</div>
                <div className="tabcell">Email Id</div>
                <div className="tabcell">Phone No</div>
                <div className="tabcell">Action</div>
              </div>
            </div>
            <div className="tbody">
              {tasks.map((task) => (
                <div key={task.id} className="task-row">
                  <div className="tabcell">
                    <input
                      type="checkbox"
                      id={`checkbox-${task.id}`}
                      className="me-2"
                    />
                    {task.companyName}
                  </div>
                  <div className="tabcell">{task.leadName}</div>
                  <div className="tabcell">{task.leadSource}</div>
                  <div className="tabcell">{task.email}</div>
                  <div className="tabcell">{task.phone}</div>
                  <div className="tabcell">
                    <img
                      src={phoneIcon}
                      alt="phone"
                      style={{
                        width: "35px",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => handlePhoneClick(task)}
                    />
                    <img
                      src={chatIcon}
                      alt="chat"
                      style={{ marginRight: "10px" }}
                      onClick={handleChatClick}
                    />
                    <Dropdown as={ButtonGroup} align="end">
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        <FaEllipsisV />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Option 1</Dropdown.Item>
                        <Dropdown.Item href="#">Option 2</Dropdown.Item>
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

      {/* Calling indicator */}
      {isCalling && (
        <div
          className="w-10 h-8 bg-danger"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "10px 30px",
            fontSize: "14px",
            marginRight: "60px",
          }}
        >
          <div>dfdjgndgmnmn m</div>
        </div>
      )}

      <Modal
        show={showConfirmationPopup}
        onHide={handleCloseConfirmationPopup}
        centered
      >
        <Modal.Body className="text-center">
          <p>
            Are you sure you want to connect the call to {currentTask?.phone}?
          </p>
          <Button variant="success" onClick={handleYesClick} className="me-2">
            Yes
          </Button>
          <Button variant="danger" onClick={handleCloseConfirmationPopup}>
            No
          </Button>
        </Modal.Body>
      </Modal>

      <Modal
        show={showUploadPopup}
        onHide={handleCloseUploadPopup}
        centered
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <div className="w-100 text-end">
            <Modal.Title>Call connected. 00:05</Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body className="popup2">
          <div className="d-flex align-items-center mb-2 ">
            <div className="me-3">
              <p className="mb-0">Name: {currentTask?.leadName}</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <input type="checkbox" />
              <div className="mb-0 me-2">
                <img src={edit} alt="" />
              </div>
            </div>
          </div>

          <p>Company Name: {currentTask?.companyName}</p>
          <p>Phone No: {currentTask?.phone}</p>
          <p>Email ID: {currentTask?.email}</p>
          <div className="d-flex gap-3">
            <p>Status:</p>
            <div className="mb-3">
              <Button
                variant="success"
                className="me-2"
                onClick={() => handleStatusClick("interested")}
              >
                Interested
              </Button>
              <Button
                variant="primary"
                className="me-2"
                onClick={() => handleStatusClick("call-me-later")}
              >
                Call me later
              </Button>
              <Button
                variant="danger"
                className="me-2"
                onClick={() => handleStatusClick("rejected")}
              >
                Rejected
              </Button>
              <Button
                variant="warning"
                className="me-2"
                onClick={() => handleStatusClick("no-response")}
              >
                No Response
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Sales;
