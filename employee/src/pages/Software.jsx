import React from "react";
import { Container, Row, Col, Table, Button, Image } from "react-bootstrap";
import profilePic from "../assets/images/girl.png";
import softare from "../assets/icons/software.png";
import uiux from "../assets/icons/ui-ux.png";
import call from "../assets/icons/call.png";
import mail from "../assets/icons/mail.png";
import sunrise from "../assets/icons/sunrise.png";
import mark from "../assets/icons/mark.png";

const Software = () => {
  return (
    <div className="bde-background">
      <Container fluid className="p-4">
        <Row>
          <Col>
            <h2 className="mb-4">My Profile</h2>
            <Table className="bde-table">
              <tbody>
                <tr>
                  <td className="bde-label">Employee Name</td>
                  <td className="bde-value">
                    <Image
                      src={profilePic}
                      roundedCircle
                      className="bde-profile-pic"
                    />
                    Ram K S
                  </td>
                </tr>
                <tr>
                  <td className="bde-label">Employee ID</td>
                  <td className="bde-value">#121334</td>
                </tr>
                <tr>
                  <td className="bde-label">Branch</td>
                  <td className="bde-value">
                    <img className="me-2 icon" src={softare} alt="" />
                    Software
                  </td>
                </tr>
                <tr>
                  <td className="bde-label">Designation</td>
                  <td className="bde-value">
                    <img className="me-2 icon" src={uiux} alt="" />
                    UI/UX Developer
                  </td>
                </tr>
                <tr>
                  <td className="bde-label">Mobile No</td>
                  <td className="bde-value">
                    <img className="me-2 icon" src={call} alt="" />
                    9876543210
                  </td>
                </tr>
                <tr>
                  <td className="bde-label">Email Id</td>
                  <td className="bde-value">
                    <img className="me-2 icon" src={mail} alt="" />
                    ram@gmail.com
                  </td>
                </tr>
                <tr>
                  <td className="bde-label">Shift</td>
                  <td className="bde-value">
                    <img className="me-2 icon" src={sunrise} alt="" />
                    Morning
                  </td>
                </tr>
                <tr>
                  <td className="bde-label">Task</td>
                  <td className="bde-value">
                    <img className="me-2 icon" src={mark} alt="" />
                    03
                  </td>
                </tr>
                <tr>
                  <td className="bde-label">Status</td>
                  <td className="bde-value">
                    <Button variant="success">Sign in</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Software;
