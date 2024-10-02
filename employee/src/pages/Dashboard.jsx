// import React from "react";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// // import MainContent from "../components/MainContent";
// import { Container, Row, Col } from "react-bootstrap";
// import BigBox from "../components/BigBox";

// function Dashboard() {
//   return (
//     <div>
//       <Header />
//       <Container fluid>
//         <Row>
//           <Col lg={2} className="p-0" style={{ paddingLeft: "15px" }}>
//             <Sidebar />
//           </Col>
//           <Col lg={10} className="p-0" style={{ paddingRight: "15px" }}>
//             <BigBox />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Dashboard;

// ------------------------------------------------------------

// import React, { useState } from "react";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import { Container, Row, Col } from "react-bootstrap";
// import BigBox from "../components/BigBox";

// function Dashboard() {
//   const [sidebarVisible, setSidebarVisible] = useState(false); // Sidebar hidden by default on mobile

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   return (
//     <div>
//       <Header onToggleSidebar={toggleSidebar} />
//       <Container fluid>
//         <Row>
//           <Col lg={2} className={`p-0 d-none d-lg-block`}>
//             <Sidebar visible={true} /> {/* Always visible on desktop */}
//           </Col>
//           <Col
//             lg={2}
//             className={`p-0 d-block d-lg-none ${
//               sidebarVisible ? "d-block" : "d-none"
//             }`}
//           >
//             <Sidebar visible={sidebarVisible} />{" "}
//             {/* Toggle visibility on mobile */}
//           </Col>
//           <Col lg={10} className="p-0" style={{ paddingRight: "15px" }}>
//             <BigBox />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Dashboard;

// -----------------------------------------------

import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import BigBox from "../components/BigBox";

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

// ---------------------------------------
