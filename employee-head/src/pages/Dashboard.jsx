import React, { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import BigBox from "../Components/BigBox";

import { Container, Row, Col } from "react-bootstrap";

function Dashboard() {
  const [sidebarVisible, setSidebarVisible] = useState(false); // Sidebar hidden by default on mobile

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleLinkClick = () => {
    setSidebarVisible(false); // Hide sidebar when a link is clicked
  };

  return (
    <div>
      <Header onToggleSidebar={toggleSidebar} />
      <Container fluid>
        <Row>
          <Col lg={2} className={`p-0 d-none d-lg-block`}>
            <Sidebar visible={true} onLinkClick={handleLinkClick} />{" "}
            {/* Always visible on desktop */}
          </Col>
          <Col
            lg={2}
            className={`p-0 d-block d-lg-none ${
              sidebarVisible ? "d-block" : "d-none"
            }`}
          >
            <Sidebar visible={sidebarVisible} onLinkClick={handleLinkClick} />{" "}
            {/* Toggle visibility on mobile */}
          </Col>
          <Col lg={10} className="p-0" style={{ paddingRight: "15px" }}>
            <BigBox />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
