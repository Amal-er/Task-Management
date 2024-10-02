import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Image,
  Button,
  Modal,
} from "react-bootstrap";
import {
  FaPhone,
  FaVideo,
  FaSignOutAlt,
  FaPaperPlane,
  FaUserCircle,
  FaComments,
  FaMicrophone,
  FaPhoneSlash,
} from "react-icons/fa";
 
import chatchat from "../Assets/Images/chatchat.png";
import people from "../Assets/Images/people.png";
import calling from "../Assets/Images/calling.png";
import vediocall from "../Assets/Images/videocall.png";
import girl from "../Assets/Images/girl.png";
import chatframe from "../Assets/Images/chatFrame.png";
import camframe from "../Assets/Images/camframe.png";
import micframe from "../Assets/Images/micframe.png";
import close from "../Assets/Images/close.png";
import Header from '../Components/Header';
import SidenavHR from '../Components/SidenavHR';
function HrNewChat() {
  const [view, setView] = useState("chats"); // "chats" or "people"
  const [selectedItem, setSelectedItem] = useState(null);
 
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
 
  const [showVideoPop, setShowVideoPop] = useState(false);
 
  const [selectedPeople, setSelectedPeople] = useState("");
  const [showVideoPopup, setShowVideoPopup] = useState(false); // State to control video call popup visibilit
  // Dummy data for groups and chats
  const groups = [
    {
      name: "Sales Team",
      lastMessage: "Yadhu: Call report should be submitted",
      message:
        "Hi Anu, I’ve seen your task and it's very good. Keep up the great work!",
      badgeCount: 5,
    },
    {
      name: "Software Team",
      lastMessage: "Amal: Hello I am here to chat",
      message:
        "Hi Anju, I’ve seen your task and it's very good. Keep up the great work!",
      badgeCount: 3,
    },
    {
      name: "Design Team",
      lastMessage: "Wilson P O: Everyone should do the",
      message:
        "Hi Anju, I’ve seen your task and it's very good. Keep up the great work!",
      badgeCount: 2,
    },
  ];
 
  const chats = [
    {
      name: "Nolan Schleifer",
      lastMessage: "Hello I am here to chat",
      badgeCount: 5,
    },
    { name: "Anna Johnson", lastMessage: "Hey, how are you?", badgeCount: 3 },
    {
      name: "James Smith",
      lastMessage: "Let's catch up tomorrow.",
      badgeCount: 2,
    },
    {
        name: "Nolan Schleifer",
        lastMessage: "Hello I am here to chat",
        badgeCount: 5,
      },
      { name: "Anna Johnson", lastMessage: "Hey, how are you?", badgeCount: 3 },
      {
        name: "Nolan Schleifer",
        lastMessage: "Hello I am here to chat",
        badgeCount: 5,
      },
  ];
 
  // Handler for item click
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
 
  // Handler for switching views
  const handleViewChange = (newView) => {
    if (view !== newView) {
      setView(newView);
      setSelectedItem(null); // Clear selection when switching views
    }
  };
 
  // Handler to show the call popup
  const handleShow = () => setShowPopup(true);
 
  const handleVideo = () => setShowVideoPop(true);
  // ------------------------------
//   const handleclose = () => setHandleClose(false);
  // Handler to hide the popup
  const handleClose = () => setShowPopup(false);
 
  // Handler for selecting a person from the dropdown
  const handleSelect = (event) => {
    setSelectedPeople(event.target.value);
  };
 
  //  --------video calling
  // Handler to show the video call popup
  const handleShowVideo = () => setShowVideoPopup(true);
 
  // Handler to hide the video call popup
  const handleCloseVideo = () => setShowVideoPopup(false);
 
  // -----------------------------
  const handleVideoClose = () => setShowVideoPopup(false);
 
  return (
    <div className='admin-dashboard'>
    <Header/>
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>

<div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
  <SidenavHR /> 
</div>


<div style={{ flexGrow: 1, padding: '30px 50px', }}>
    <div style={{ backgroundColor: "#E2EBFC", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", maxHeight: "40vh" }}>
        <Container fluid className="chat-container">
          <Row className="px-5">
            <Col
              md={3}
              className="p-3 cht"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div className="d-col gap-5">
                <div className="d-flex justify-content-between align-items-center py-2">
                  <div>
                    <img
                      onClick={() => handleViewChange("chats")}
                      style={{ cursor: "pointer" }}
                      src={chatchat}
                      alt="Chat"
                    />
                  </div>
                  <div>
                    <img
                      onClick={() => handleViewChange("people")}
                      style={{ cursor: "pointer" }}
                      src={people}
                      alt="People"
                    />
                  </div>
                  <div>
                    <img onClick={handleShow} src={calling} alt="Calling" />
                  </div>
                  <div>
                    <img
                      onClick={handleVideo}
                      src={vediocall}
                      alt="Video Call"
                    />
                  </div>
                </div>
                <div className="d-flex gap-5 py-3">
                  <h5>{view === "people" ? "Groups" : "Chats"}</h5>
                  <Button variant="primary" className="mb-3">
                    + New {view === "people" ? "Group" : "Chat"}
                  </Button>
                </div>
              </div>
 
              <Form.Control
                type="text"
                placeholder={`Search ${view === "people" ? "Group" : "Chat"}`}
                className="mb-3"
              />
 
              {view === "chats" ? (
                <div>
                  {chats.map((chat, index) => (
                    <div
                      key={index}
                      onClick={() => handleItemClick(chat)}
                      className="d-flex align-items-center mb-2"
                      style={{
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                        borderRadius: "8px",
                        padding: "10px",
                        backgroundColor: "#fff",
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={girl}
                        roundedCircle
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div className="ms-2">
                        <strong>{chat.name}</strong>
                        <p className="mb-0" style={{ fontSize: "0.85rem" }}>
                          {chat.lastMessage}
                        </p>
                      </div>
                      <span className="ms-auto badge bg-primary">
                        {chat.badgeCount}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {groups.map((group, index) => (
                    <div
                      key={index}
                      onClick={() => handleItemClick(group)}
                      className="d-flex align-items-center mb-2"
                      style={{
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                        borderRadius: "8px",
                        padding: "10px",
                        backgroundColor: "#fff",
                        cursor: "pointer",
                      }}
                    >
                      <div className="ms-2">
                        <strong>{group.name}</strong>
                        <p className="mb-0" style={{ fontSize: "0.85rem" }}>
                          {group.lastMessage}
                        </p>
                      </div>
                      <span className="ms-auto badge bg-primary">
                        {group.badgeCount}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </Col>
 
            <Col
              md={9}
              className="p-0 cht"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              {selectedItem ? (
                <div>
                  <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
                    <div className="d-flex align-items-center">
                      <Image
                        src={girl}
                        roundedCircle
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div className="ms-2">
                        <strong>{selectedItem.name}</strong>
                        <p className="mb-0" style={{ fontSize: "0.85rem" }}>
                          {view === "people" ? "Group" : "Last seen 3 mins ago"}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div onClick={handleShowVideo}>
                        {" "}
                        <FaPhone className="me-3" />
                      </div>
                      <div onClick={handleVideo}>
                        {" "}
                        <FaVideo className="me-3" />
                      </div>
                      <div>
                        {" "}
                        <FaSignOutAlt />
                      </div>
                    </div>
                  </div>
                  <div
                    className="p-3"
                    style={{ height: "calc(100vh - 150px)", overflowY: "auto" }}
                  >
                    {view === "chats" ? (
                      <>
                        <div className="d-flex mb-3">
                          <div
                            className="me-auto p-2 rounded-custom"
                            style={{ maxWidth: "60%" }}
                          >
                            <p className="mb-1">
                              Hi Anu, I've seen your task and it's very good.
                              Keep up the great work!
                            </p>
                            <small className="text-muted">09:44 AM</small>
                          </div>
                        </div>
                        <div className="d-flex mb-3">
                          <div
                            className="ms-auto p-2 text-black rounded-custom2"
                            style={{ maxWidth: "60%" }}
                          >
                            <p className="mb-1">Thank you so much</p>
                            <small className="text-muted">09:44 AM</small>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div>
                        <h5>{selectedItem.name}</h5>
                        <div
                          className="me-auto p-2 rounded-custom"
                          style={{ maxWidth: "60%" }}
                        >
                          <p>{selectedItem.message}</p>
                        </div>
                        <div className="d-flex mb-3">
                          <div
                            className="ms-auto p-2 text-black rounded-custom2"
                            style={{ maxWidth: "60%" }}
                          >
                            <p className="mb-1">Thank you so much</p>
                            <small className="text-muted">09:44 AM</small>
                          </div>
                        </div>
                      </div>
                    )}
                    <div
                      className="p-3 border-top mt-10px"
                      style={{ marginTop: "250px" }}
                    >
                      <Form className="d-flex align-items-center">
                        <Form.Control
                          type="text"
                          placeholder="Message"
                          className="me-2"
                        />
                        <FaPaperPlane className="text-primary" />
                      </Form>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-3">
                  Select a chat or group to view details.
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
 
     
 
 
 {/* Popup Modal */}
      <Modal show={showPopup} onHide={handleClose} className="d-flex " centered>
        <Modal.Body>
          {" "}
          <div
            style={{
              position: "absolute",
              top: "10px", // Move above the header box
              right: "20px", // Move outside the right edge of the header box
              cursor: "pointer",
            }}
          >
            <img onClick="" src={close} alt="Close" />
          </div>
          {/* Change body background color */}
          <Form>
            {/* Calling to Input */}
            <p>Start a calling Now</p>
            <Form.Group controlId="formCallingTo">
              <Form.Label>Calling to</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
 
            {/* Dropdown to Add Members */}
            <Form.Group controlId="formAddMember" className="mt-3">
              <Form.Label>Select a member to add</Form.Label>
              <Form.Select value={selectedPeople} onChange={handleSelect}>
                <option value="">Choose a person</option>
                <option value="Person1">Person 1</option>
                <option value="Person2">Person 2</option>
                <option value="Person3">Person 3</option>
              </Form.Select>
            </Form.Group>
 
            {/* Add Member Button - Full Width */}
            {/* <Button variant="secondary" className="mt-3 w-100">
              Add member
            </Button> */}
 
            {/* Start Calling Button - Full Width */}
            <Button
              variant="primary"
              className="mt-3 w-100"
              onClick={handleShowVideo}
            >
              Start Calling
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
 
      {/* --------videopopup--------- */}
      <Modal
        show={showVideoPop}
        onHide={handleClose}
        className="d-flex "
        centered
      >
        <Modal.Body>
          {" "}
          <div
            style={{
              position: "absolute",
              top: "10px", // Move above the header box
              right: "20px", // Move outside the right edge of the header box
              cursor: "pointer",
            }}
          >
            <img onClick={handleVideoClose} src={close} alt="Close" />
          </div>
          {/* Change body background color */}
          <Form>
            {/* Calling to Input */}
            <p>Start a Meeting Now</p>
            <Form.Group controlId="formCallingTo">
              <Form.Label>Meeting Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
 
            <Button
              style={{
                marginTop: "3px",
                border: "1px solid #ccc",
                background: "transparent",
                color: "#007bff",
                fontWeight: "bold",
                width: "100%",
                padding: "10px",
                textAlign: "center",
                display: "block",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Get a Link
            </Button>
 
            {/* Dropdown to Add Members */}
 
            {/* Add Member Button - Full Width */}
            {/* <Button variant="secondary" className="mt-3 w-100">
              Add member
            </Button> */}
 
            {/* Start Calling Button - Full Width */}
            <Button variant="primary" className="mt-3 w-100" onClick="">
              Start meeting
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
 
      {/* video call popup */}
      {showVideoPopup && (
        <div
          style={{
            position: "fixed",
            top: 210,
            left: 400,
            right: 0,
            bottom: 603,
            backgroundColor: "#F5F7FF", // Light background color
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1050, // Higher than Bootstrap modal z-index
            padding: "20px",
            width: "800px",
            height: "500px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around", // Distributes items with equal space around them
              alignItems: "center",
              padding: "10px 20px",
              backgroundColor: "#E3EBFF", // Light blue background for header
              borderRadius: "8px",
              position: "relative", // Needed for absolute positioning of the close icon
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // Center align within this container
              }}
            >
              <div className="d-flex">
                <FaUserCircle size={40} style={{ marginRight: "10px" }} />
                <div>
                  <h5 style={{ margin: 0 }}>Corey Vaccaro</h5>
                  <span>Calling...</span>
                </div>
              </div>
            </div>
 
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // Center align within this container
              }}
            >
              <div style={{ marginRight: "10px" }}>
                <img src={chatframe} alt="Chat" />
              </div>
              <div style={{ marginRight: "10px" }}>
                <img src={camframe} alt="Camera" width={'30px'} />
              </div>
              <div style={{ marginRight: "10px" }}>
                <img src={micframe} alt="Microphone" />
              </div>
            </div>
 
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // Center align within this container
              }}
            >
              <Button variant="danger" style={{ marginRight: "10px" }}>
                <FaPhoneSlash /> Leave
              </Button>
            </div>
 
            {/* Close icon positioned outside the top-right corner of the blue box */}
            <div
              style={{
                position: "absolute",
                top: "-20px", // Move above the header box
                right: "10px", // Move outside the right edge of the header box
                cursor: "pointer",
              }}
            >
              <img onClick={handleVideoClose} src={close} alt="Close" />
            </div>
          </div>
 
          <div
            style={{
              textAlign: "center",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              src="/path-to-your-image.png" // Update the path to your image
              alt="Caller"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <h4>Calling...</h4>
          </div>
 
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E3EBFF", // Light blue background for footer
              borderRadius: "8px",
              padding: "10px 0",
            }}
          ></div>
        </div>
      )}
 
      {/* ---------------------- */}
    </div>
    </div>
    </div>
    </div>
  );
}
 
export default HrNewChat;
 