import React from "react";
import { Form, Row, Col, Card, Button } from "react-bootstrap";

function PaySlip() {
  return (
    <div
      style={{
        backgroundColor: "#E2EBFC",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Card
        style={{
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          background: "#ffff",
        }}
      >
        <div className="create  ">
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "30px",
              textAlign: "left", // Ensuring alignment is to the left
            }}
          >
            Create Payslip
          </h2>
        </div>

        <h4
          style={{ fontSize: "18px", fontWeight: "500", marginBottom: "20px" }}
        >
          Basic Information
        </h4>
        <Form>
          <Row className="mb-4">
            <Col md={4}>
              <Form.Group controlId="formStaffName">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" }}>
                  Staff name
                </Form.Label>
                <Form.Control
                  as="select"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                >
                  <option>Select staff</option>
                  {/* Add options here */}
                </Form.Control>
                <Form.Text
                  className="text-danger"
                  style={{ fontSize: "12px", marginTop: "5px" }}
                >
                  There is an error
                </Form.Text>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="formDesignation">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" }}>
                  Designation
                </Form.Label>
                <Form.Control
                  as="select"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                >
                  <option>Select Designation</option>
                  {/* Add options here */}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formLevel">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" }}>
                  Level
                </Form.Label>
                <Form.Control
                  as="select"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                >
                  <option>Select level</option>
                  {/* Add options here */}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card>

      <Card
        style={{
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          background: "#ffff",
          marginTop: "20px",
        }}
      >
        <h4
          style={{
            fontSize: "18px",
            fontWeight: "500",
            marginBottom: "20px",
          }}
        >
          Salary Structure
        </h4>
        <Form>
          <Row className="mb-4">
            <Col md={4}>
              <Form.Group controlId="formBasicSalary">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" }}>
                  Basic salary
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
                <Form.Text
                  className="text-danger"
                  style={{ fontSize: "12px", marginTop: "5px" }}
                >
                  There is an error
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formWorkingHours">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" }}>
                  Working hours
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="00:00 Hours"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formTransportAllowance">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" }}>
                  Transport allowance
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={4}>
              <Form.Group controlId="formUtilityAllowance">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" }}>
                  Utility allowance
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formProductivityAllowance">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" }}>
                  Productivity allowance
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formHousingAllowance">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" }}>
                  Housing allowance
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={4}>
              <Form.Group controlId="formCommunicationAllowance">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" }}>
                  Communication allowance
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formInconvenienceAllowance">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" }}>
                  Inconvenience allowance
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formGrossSalary">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" }}>
                  Gross Salary
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card>

      <Card
        style={{
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          background: "#ffff",
          marginTop: "20px",
        }}
      >
        <h4
          style={{
            fontSize: "18px",
            fontWeight: "500",
            marginBottom: "20px",
          }}
        >
          Deductions
        </h4>
        <Form>
          <Row className="mb-4">
            <Col md={4}>
              <Form.Group controlId="formTaxDeduction">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" }}>
                  Tax deduction
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="formPension">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" }}>
                  Pension
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formTotalDeduction">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" }}>
                  Total Deduction
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card>

      <Card
        style={{
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          background: "#ffff",
          marginTop: "20px",
        }}
      >
        <h4
          style={{
            fontSize: "18px",
            fontWeight: "500",
            marginBottom: "20px",
          }}
        >
          Total Payout
        </h4>
        <Form>
          <Row className="mb-4">
            <Col md={4}>
              <Form.Group controlId="formTotalPay">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" }}>
                  Total pay
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Amount"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formAmountInWords">
                <Form.Label style={{ fontSize: "16px", fontWeight: "400" }}>
                  Amount in words
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter amount in words"
                  style={{
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    borderColor: "#dcdcdc",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <Button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            borderColor: "#007bff",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Save Payslip
        </Button>
      </Card>
    </div>
  );
}

export default PaySlip;
