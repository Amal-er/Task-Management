import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import notification from "../assets/Images/Notification.png";
import person from "../assets/Images/Mask Group.png";
import poweroff from "../assets/Images/logout.png";
 
const Header = ({ onToggleSidebar }) => {
  const [show, setShow] = React.useState(false);
  const [target, setTarget] = React.useState(null);
 
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
 
  const popover = (
    <Popover id="notification-popover" style={{ maxWidth: "300px" }}>
      <Popover.Header as="h3">Notifications</Popover.Header>
      <Popover.Body>
        <p>No new notifications</p>
        <ul>
          <li>Make an Automatic Payment System that enable the design</li>
          <li>Make an Automatic Payment System that enable the design</li>
          <li>Make an Automatic Payment System that enable the design</li>
        </ul>
      </Popover.Body>
    </Popover>
  );
 
  return (
    <Navbar bg="white" expand="lg" className="container-fluid px-5 header">
      <Navbar.Brand href="/">
        {/* <img src={logo} className="logo" alt="logo" /> */}
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={onToggleSidebar}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="d-flex ms-auto">
        </Form>
        <OverlayTrigger
          show={show}
          target={target}
          placement="bottom"
          overlay={popover}
          rootClose
          onHide={() => setShow(false)}
          trigger="click"
        >
          <div className="d-flex align-items-center ms-3" onClick={handleClick}>
            <img
              src={notification}
              alt="notification"
              style={{ cursor: "pointer" }}
            />
          </div>
        </OverlayTrigger>
        <div className="d-flex align-items-center ms-3">
          <img
            src={person}
            alt="Profile"
            className="rounded-circle"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <div className="d-flex align-items-center ms-3">
          <img src={poweroff} alt="Logout" style={{ cursor: "pointer" }} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
 
export default Header;
 