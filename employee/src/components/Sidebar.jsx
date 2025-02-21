import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import vector from "../assets/icons/vector.png";
import vector4 from "../assets/icons/Vector4.png";
import settings from "../assets/icons/settings.png";
import person from "../assets/icons/person.png";
import task from "../assets/icons/Task.png";
import chat1 from "../assets/icons/chat1.png";
import mails from "../assets/icons/mails.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = ({ visible, onLinkClick }) => {
  const [employeeDropdownOpen, setEmployeeDropdownOpen] = React.useState(false);
  const [taskDropdownOpen, setTaskDropdownOpen] = React.useState(false);
  const [attendanceDropdownOpen, setAttendanceDropdownOpen] =
    React.useState(false);

  const toggleEmployeeDropdown = () => {
    setEmployeeDropdownOpen(!employeeDropdownOpen);
  };

  const toggleTaskDropdown = () => {
    setTaskDropdownOpen(!taskDropdownOpen);
  };

  const toggleAttendanceDropdown = () => {
    setAttendanceDropdownOpen(!attendanceDropdownOpen);
  };

  return (
    <div
      className={`d-flex flex-column p-3 bg-white shadow-sm sidebar ${
        visible ? "d-block" : "d-none"
      }`}
      style={{ width: "", height: "100%" }}
    >
      <Nav className="flex-column">
        <NavItem
          to="/"
          icon={vector}
          label="Dashboard"
          onLinkClick={onLinkClick}
        />
        <div className="custom-hover">
          <div
            className="d-flex align-items-center justify-content-between"
            onClick={toggleEmployeeDropdown}
            style={{ cursor: "pointer", padding: "8px 0" }}
          >
            <div className="d-flex align-items-center">
              <img src={person} alt="" style={{ marginRight: "8px" }} />
              <span className="custom-link">Employee</span>
            </div>
            <div>
              {employeeDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {employeeDropdownOpen && (
            <div className="dropdown-container ms-3 mt-2">
              <DropdownItem
                to="/employee/software"
                label="Software"
                onLinkClick={onLinkClick}
              />
              <DropdownItem
                to="/employee/amazon"
                label="Amazon"
                onLinkClick={onLinkClick}
              />
              <DropdownItem
                to="/employee/data"
                label="Data"
                onLinkClick={onLinkClick}
              />
              <DropdownItem
                to="/employee/bde"
                label="BDE"
                onLinkClick={onLinkClick}
              />
            </div>
          )}
        </div>
        <div className="custom-hover">
          <div
            className="d-flex align-items-center justify-content-between"
            onClick={toggleTaskDropdown}
            style={{ cursor: "pointer", padding: "8px 0" }}
          >
            <div className="d-flex align-items-center">
              <img src={task} alt="" style={{ marginRight: "8px" }} />
              <span className="custom-link">Task</span>
            </div>
            <div>{taskDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
          </div>
          {taskDropdownOpen && (
            <div className="dropdown-container ms-3 mt-2">
              <DropdownItem
                to="/task/upcoming"
                label="Upcoming Task"
                onLinkClick={onLinkClick}
              />
              <DropdownItem
                to="/task/running"
                label="Running Task"
                onLinkClick={onLinkClick}
              />
              <DropdownItem
                to="/task/completed"
                label="Completed Task"
                onLinkClick={onLinkClick}
              />
              <DropdownItem
                to="/task/salesrunningtask"
                label="Sales Running Task"
                onLinkClick={onLinkClick}
              />
              <DropdownItem
                to="/task/salesreport"
                label="Sales Completed Task"
                onLinkClick={onLinkClick}
              />
            </div>
          )}
        </div>
        <div className="custom-hover">
          <div
            className="d-flex align-items-center justify-content-between"
            onClick={toggleAttendanceDropdown}
            style={{ cursor: "pointer", padding: "8px 0" }}
          >
            <div className="d-flex align-items-center">
              <img src={vector4} alt="" style={{ marginRight: "8px" }} />
              <span className="custom-link">Attendance</span>
            </div>
            <div>
              {attendanceDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {attendanceDropdownOpen && (
            <div className="dropdown-container ms-3 mt-2">
              <DropdownItem
                to="/attendance/list"
                label="Attendance List"
                onLinkClick={onLinkClick}
              />
              <DropdownItem
                to="/attendance/leave"
                label="Leave Request"
                onLinkClick={onLinkClick}
              />
            </div>
          )}
        </div>
        <NavItem
          to="/chat"
          icon={chat1}
          label="Chat Bot"
          onLinkClick={onLinkClick}
        />
        <NavItem
          to="/mail"
          icon={mails}
          label="Mail"
          onLinkClick={onLinkClick}
        />

        <NavItem
          to="/settings"
          icon={settings}
          label="Settings"
          onLinkClick={onLinkClick}
        />
      </Nav>
    </div>
  );
};

const NavItem = ({ to, icon, label, onLinkClick }) => (
  <div className="custom-hover d-flex align-items-center mb-2">
    <img src={icon} alt="" style={{ marginRight: "8px", flexShrink: 0 }} />
    <NavLink
      to={to}
      className="custom-link"
      onClick={onLinkClick}
      style={{
        textAlign: "left",
        flex: 1,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {label}
    </NavLink>
  </div>
);

const DropdownItem = ({ to, label, onLinkClick }) => (
  <div className="dropdown-item mb-1">
    <NavLink
      to={to}
      className="custom-link"
      onClick={onLinkClick}
      style={{
        textAlign: "left",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {label}
    </NavLink>
  </div>
);

export default Sidebar;
