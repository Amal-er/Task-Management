import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const PopupModal = ({ show, onClose, onSave, initialData }) => {
  const [task, setTask] = useState({
    projectName: "",
    memberName: "",
    description: "",
    date: "",
    attachment: null,
  });

  // Update form data when initialData changes
  useEffect(() => {
    if (initialData) {
      setTask({
        projectName: initialData.projectName || "",
        memberName: initialData.memberName || "",
        description: initialData.description || "",
        date: initialData.date || "",
        attachment: initialData.attachment || null, // Handle attachment separately
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [id]: files ? files[0] : value,
    }));
  };

  const handleSave = () => {
    const updatedTask = {
      ...initialData,
      projectName: task.projectName,
      description: task.description,
      date: task.date,
      memberName: task.memberName,
      // Handle attachment separately if needed
    };
    onSave(updatedTask);
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group mb-3 d-flex align-items-center">
            <label
              htmlFor="projectName"
              style={{
                width: "150px",
                marginRight: "10px",
                textAlign: "right",
                height: "38px",
                lineHeight: "38px",
              }}
            >
              Project Name:
            </label>
            <input
              type="text"
              id="projectName"
              className="form-control"
              value={task.projectName}
              onChange={handleChange}
              style={{
                backgroundColor: "#f0f0f0",
                height: "38px",
                width: "100%",
              }}
            />
          </div>

          <div className="form-group mb-3 d-flex align-items-center">
            <label
              htmlFor="memberName"
              style={{
                width: "150px",
                marginRight: "10px",
                textAlign: "right",
                height: "38px",
                lineHeight: "38px",
              }}
            >
              Assign to:
            </label>
            <select
              id="memberName"
              className="form-control"
              value={task.memberName}
              onChange={handleChange}
              style={{
                height: "38px",
                width: "100%",
              }}
            >
              <option value="">Select...</option>
              <option value="ramu">ramu (Sr UI/UX Developer)</option>
              <option value="chottu">chottu (Sr UI/UX Developer)</option>
              <option value="mone">mone (Sr UI/UX Developer)</option>
            </select>
          </div>

          <div className="form-group mb-3 d-flex align-items-start">
            <label
              htmlFor="description"
              style={{
                width: "150px",
                marginRight: "10px",
                textAlign: "right",
                lineHeight: "38px",
                paddingTop: "6px",
              }}
            >
              Description:
            </label>
            <textarea
              id="description"
              className="form-control"
              rows="3"
              value={task.description}
              onChange={handleChange}
              style={{
                width: "100%",
              }}
            ></textarea>
          </div>

          <div className="form-group mb-3 d-flex align-items-center">
            <label
              htmlFor="date"
              style={{
                width: "150px",
                marginRight: "10px",
                textAlign: "right",
                height: "38px",
                lineHeight: "38px",
              }}
            >
              Date:
            </label>
            <input
              type="date"
              id="date"
              className="form-control"
              value={task.date}
              onChange={handleChange}
              style={{
                height: "38px",
                width: "100%",
              }}
            />
          </div>

          <div className="form-group mb-3 d-flex align-items-center">
            <label
              htmlFor="attachment"
              style={{
                width: "150px",
                marginRight: "10px",
                textAlign: "right",
                height: "38px",
                lineHeight: "38px",
              }}
            >
              Attachments:
            </label>
            <input
              type="file"
              id="attachment"
              className="form-control"
              onChange={handleChange}
              style={{
                height: "38px",
                width: "100%",
              }}
            />
            {task.attachment && <div>File: {task.attachment.name}</div>}
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
        <Button variant="danger" onClick={onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupModal;
