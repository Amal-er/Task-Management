import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import dnld from "../assets/icons/dnldbtn.png";
import sent from "../assets/icons/sent.png";

function Mail() {
  const [activeTab, setActiveTab] = useState("inbox");
  const [selectedMails, setSelectedMails] = useState([]);

  const [inboxMessages, setInboxMessages] = useState([
    {
      sender: "Arun K S",
      subject: "New Project Approval Waiting",
      time: "10:30 PM",
    },
    { sender: "Amal S M", subject: "Leave Request", time: "10:30 PM" },
    {
      sender: "Arun K S",
      subject: "New Project Approval Waiting",
      time: "10:30 PM",
    },
    { sender: "Amal S M", subject: "Leave Request", time: "10:30 PM" },
    {
      sender: "Arun K S",
      subject: "New Project Approval Waiting",
      time: "10:30 PM",
    },
    { sender: "Amal S M", subject: "Leave Request", time: "10:30 PM" },
    { sender: "Anu S S", subject: "Meeting Day Approval", time: "10:30 PM" },
  ]);

  const [sentMessages, setSentMessages] = useState([
    { sender: "Arun K S", subject: "Project Plan", time: "9:15 AM" },
    { sender: "Anu S S", subject: "Team Meeting Follow-up", time: "8:45 AM" },
    { sender: "Amal S M", subject: "Leave Request", time: "9:30 AM" },
    {
      sender: "Arun K S",
      subject: "New Project Approval Waiting",
      time: "7:30 AM",
    },
    { sender: "Amal S M", subject: "Leave Request", time: "8:30 AM" },
  ]);

  const handleSelectMail = (index) => {
    if (selectedMails.includes(index)) {
      setSelectedMails(selectedMails.filter((i) => i !== index));
    } else {
      setSelectedMails([...selectedMails, index]);
    }
  };

  const isSelected = (index) => selectedMails.includes(index);

  const handleDeleteMail = (index) => {
    if (activeTab === "inbox") {
      setInboxMessages(inboxMessages.filter((_, i) => i !== index));
    } else {
      setSentMessages(sentMessages.filter((_, i) => i !== index));
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#E2EBFC",
        minHeight: "100vh",
        padding: "50px",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <input
          type="text"
          className="search-mail"
          placeholder="Search Mail"
          style={{
            width: "300px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <Link to={"/newmail"}>
          <button
            className="new-mail-btn"
            style={{
              padding: "10px 20px",
              backgroundColor: "#9389ee",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            ✉️ Send New Mail
          </button>
        </Link>
      </div>

      <div
        className="mail-list"
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          height: "400px", // Keep a fixed height for scrolling
          overflowY: "auto", // Enable vertical scrolling inside this div
        }}
      >
        <div className="tabs mb-4 d-flex gap-5 align-items-center">
          <div
            className={`d-flex align-items-center ${
              activeTab === "inbox" ? "active" : ""
            }`}
            onClick={() => setActiveTab("inbox")}
          >
            <img src={dnld} alt="icon" style={{ marginRight: "10px" }} />
            <p className="mb-0">Inbox</p>
          </div>
          <div
            className={`d-flex align-items-center ${
              activeTab === "sent" ? "active" : ""
            }`}
            onClick={() => setActiveTab("sent")}
          >
            <img src={sent} alt="icon" style={{ marginRight: "10px" }} />
            <p className="mb-0">Sent</p>
          </div>
        </div>

        {(activeTab === "inbox" ? inboxMessages : sentMessages).map(
          (msg, index) => (
            <div
              key={index}
              className={`mail-item d-flex justify-content-between align-items-center mb-3 ${
                isSelected(index) ? "selected" : ""
              }`}
              style={{
                borderBottom: "1px solid #ccc",
                padding: "10px",
              }}
            >
              <input
                type="checkbox"
                onChange={() => handleSelectMail(index)}
                checked={isSelected(index)}
                style={{ marginRight: "15px" }}
              />
              <span style={{ width: "30%", fontWeight: "bold" }}>
                {msg.sender}
              </span>
              <span style={{ width: "50%" }}>{msg.subject}</span>
              {!isSelected(index) && (
                <span style={{ width: "20%", textAlign: "right" }}>
                  {msg.time}
                </span>
              )}
              {isSelected(index) && (
                <div className="mail-actions">
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteMail(index)}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "red",
                    }}
                  >
                    <MdDelete />
                  </button>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Mail;
