import React, { useState } from "react";
import { IoIosAttach } from "react-icons/io";
import { PiTextAUnderlineBold } from "react-icons/pi";
import { RiDriveLine } from "react-icons/ri";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineMailLock } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineUndo } from "react-icons/md";
import { MdOutlineRedo } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { MdFormatListBulleted } from "react-icons/md";
import mail1 from "../Assets/Images/Ellipse 2358.png";
import Header from "../Components/Header";
import SidenavHR from "../Components/SidenavHR";

function HrNewmail() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const emailSuggestions = [
    "ammu@gmail.com",
    "anus@gmail.com",
    "akavayas@gmail.com",
  ];

  return (
    <div className="">
      <Header />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "110vh",
          backgroundColor: "#f0f4ff",
        }}
      >
        <div
          style={{
            width: "200px",
            backgroundColor: "#fff",
            boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
          }}
        >
          <SidenavHR />
        </div>

        <div
          style={{
            flexGrow: 1,
            padding: "30px 50px",
            backgroundColor: "#f0f4ff",
          }}
        >
          <div className="email-box-container">
            <div className="email-box">
              <div className="email-box-header">
                <h2>New Mail</h2>
                <button className="close-btn">
                  <b className="text-dark">
                    <IoCloseOutline />
                  </b>
                </button>
              </div>
              <div className="email-box-body bg-white">
                <div className="email-input-group">
                  <input
                    type="email"
                    className="email-input to-input"
                    placeholder="To"
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                    onChange={(e) => setEmailInput(e.target.value)}
                    value={emailInput}
                  />
                  {showSuggestions && (
                    <div className="suggestions-dropdown">
                      {emailSuggestions.map((email, index) => (
                        <div
                          key={index}
                          className="suggestion-item"
                          onMouseDown={() => setEmailInput(email)}
                        >
                          <img
                            src={mail1}
                            alt="user"
                            className="suggestion-avatar"
                          />
                          {email}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="email-input-group">
                  <input
                    type="email"
                    className="email-input to-input"
                    placeholder="CC"
                  />
                </div>
                <div className="email-input-group">
                  <input
                    type="email"
                    className="email-input to-input"
                    placeholder="Bcc"
                  />
                </div>
                <div className="email-editor">
                  <textarea
                    className="email-textarea"
                    placeholder="Compose your email..."
                  ></textarea>
                </div>
                <div className="font-style">
                  <MdOutlineUndo className="me-1" />
                  <MdOutlineRedo className="me-2" />
                  <p className="me-2">Fonts</p>
                  <b className="me-2">B</b>
                  <i className="me-2">I</i>
                  <u className="me-2">U</u>
                  <PiTextAUnderlineBold className="fs-3 me-2" />
                  <MdFormatListNumbered className="fs-3 me-2" />
                  <MdFormatListBulleted className="fs-3 me-2" />
                </div>
                <div className="email-footer">
                  <button className="send-btn">Send</button>
                  <div className="editor-toolbar">
                    <IoIosAttach className="fs-4 me-2" />
                    <PiTextAUnderlineBold className="fs-4 me-2 bg-secondary py-1" />
                    <RiDriveLine className="fs-4 me-2" />
                    <CiImageOn className="fs-4 me-2" />
                    <MdOutlineMailLock className="fs-4 me-2" />
                    <RiDeleteBin6Line className="fs-4 me-2" />
                    <BsThreeDotsVertical className="fs-4 me-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HrNewmail;

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
