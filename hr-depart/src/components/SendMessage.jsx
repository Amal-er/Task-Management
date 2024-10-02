import React from "react";
import { MdMailOutline } from "react-icons/md";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import mail from "../assets/images/mail1.png";
// import "../Pages/Main.css";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from "react-router-dom";
function SendMessage() {
  const [show, setShow] = useState(false);
  x;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        id="sendbtn"
        onClick={handleShow}
        style={{ textTransform: "capitalize" }}
      >
        Send Announcement
      </button>
      <Link to={"/newmail"}>
        <MdMailOutline className="ms-3 text-white fs-3 mb-1" />
      </Link>
      <MdOutlineMessage className="ms-3 text-white fs-3 me-5" />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img src={mail} className="me-2" />
            Send Announcement
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A messages can be used to notify the user about something special:
          success, information or warning.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SendMessage;

