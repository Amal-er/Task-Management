import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, ButtonGroup, Button, Modal } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import { TasksContext } from "../contexts/TasksContext";
import phoneIcon from "../assets/icons/tele.png";
import chatIcon from "../assets/icons/chat.png";
import uploadIcon from "../assets/icons/upload.png";
import option from "../assets/icons/option.png";

const Sales = () => {
  const navigate = useNavigate();
  const { tasks, setTasks } = useContext(TasksContext);
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
    const updatedTasks = tasks.map((task) =>
      task.id === currentTask.id ? { ...task, status } : task
    );
    setTasks(updatedTasks);
    setShowUploadPopup(false);
    // navigate("/task/salesreport");
  };

  const handleFileChange = (event) => {
    // Handle file upload
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
        <div>
          <h5 style={{ textDecoration: "underline" }}>Employee Task Adding</h5>
        </div>

        <div className="mb-4">
          <p className="bold">Upload files</p>

          <div className="upload-box">
            <input
              type="file"
              onChange={handleFileChange}
              className="file-input"
            />
            <div className="upload-placeholder">
              <img src={uploadIcon} alt="Upload Icon" />
              <p>
                Drag and drop or <span>Choose file</span> to upload
              </p>
            </div>
          </div>
        </div>

        <div>
          <p>Employee Name: Amal E R</p>
        </div>
        <div className="d-flex justify-content-end ">
          <Link to="/task/addnewlead">
            <Button variant="primary"> +New </Button>
          </Link>
        </div>

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
                      style={{ marginRight: "10px", cursor: "pointer" }}
                      onClick={() => handlePhoneClick(task)}
                    />
                    <img
                      src={chatIcon}
                      alt="chat"
                      style={{ marginRight: "10px" }}
                    />
                    <img src={option} alt="" />
                    {/* <Dropdown as={ButtonGroup} align="end">
                      <Dropdown.Toggle
                        variant="light"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Option 1</Dropdown.Item>
                        <Dropdown.Item href="#">Option 2</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown> */}
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

export default Sales;
