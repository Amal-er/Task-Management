// SalesReport.jsx
import React, { useContext, useState } from "react";
import { Dropdown, ButtonGroup, Button, Modal } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { TasksContext } from "../contexts/TasksContext";
import phoneIcon from "../assets/icons/tele.png";
import chatIcon from "../assets/icons/chat.png";

const SalesReport = () => {
  const { tasks } = useContext(TasksContext);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

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
  };

  const handleCloseUploadPopup = () => {
    setShowUploadPopup(false);
  };

  const handleStatusClick = (status) => {
    // Add your status handling logic here
    console.log(`Status clicked: ${status}`);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "interested":
        return "status-interested";
      case "call-me-later":
        return "status-call-me-later";
      case "rejected":
        return "status-rejected";
      case "no-response":
        return "status-no-response";
      default:
        return "";
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#E2EBFC",
        minHeight: "100vh",
        filter: showConfirmationPopup || showUploadPopup ? "blur(5px)" : "none",
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
                <div
                  key={task.id}
                  className={`task-row ${
                    task.status ? `status-${task.status}` : ""
                  }`}
                >
                  <div className="tabcell">
                    <div
                      className={`status-indicator ${getStatusClass(
                        task.status
                      )}`}
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
                      style={{ marginRight: "10px", cursor: "pointer" }}
                      onClick={() => handlePhoneClick(task)}
                    />
                    <img
                      src={chatIcon}
                      alt="chat"
                      style={{ marginRight: "10px" }}
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

      <Modal
        show={showConfirmationPopup}
        onHide={handleCloseConfirmationPopup}
        centered
      >
        <Modal.Body className="text-center">
          <p>Are you sure? Connect the call.</p>
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
          <p>Name: {currentTask?.leadName}</p>
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

export default SalesReport;
