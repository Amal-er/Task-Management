// import React from "react";
// import { Form, Button } from "react-bootstrap";

// function LeadAdd() {
//   return (
//     <div
//       style={{
//         backgroundColor: "#E2EBFC",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "#fff",
//           padding: "20px",
//           borderRadius: "8px",
//           boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//           width: "80%", // Responsive width
//           maxWidth: "600px", // Maximum width
//         }}
//       >
//         <h3>Add new Leads</h3>
//         <Form>
//           <Form.Group className="mb-3 d-flex align-items-center" controlId="formCompanyName">
//             <Form.Label className="me-3" style={{ minWidth: "150px" }}>Company Name :</Form.Label>
//             <Form.Control type="text" placeholder="Enter company name" />
//           </Form.Group>
//           <Form.Group className="mb-3 d-flex align-items-center" controlId="formLeadName">
//             <Form.Label className="me-3" style={{ minWidth: "150px" }}>Lead Name :</Form.Label>
//             <Form.Control type="text" placeholder="Enter lead name" />
//           </Form.Group>
//           <Form.Group className="mb-3 d-flex align-items-center" controlId="formLeadSource">
//             <Form.Label className="me-3" style={{ minWidth: "150px" }}>Lead Source :</Form.Label>
//             <Form.Control type="text" placeholder="Enter lead source" />
//           </Form.Group>
//           <Form.Group className="mb-3 d-flex align-items-center" controlId="formEmailId">
//             <Form.Label className="me-3" style={{ minWidth: "150px" }}>Email Id :</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//           </Form.Group>
//           <Form.Group className="mb-3 d-flex align-items-center" controlId="formPhoneNo">
//             <Form.Label className="me-3" style={{ minWidth: "150px" }}>Phone No :</Form.Label>
//             <Form.Control type="text" placeholder="Enter phone number" />
//           </Form.Group>
//           <Form.Group className="mb-3 d-flex align-items-center" controlId="formLocation">
//             <Form.Label className="me-3" style={{ minWidth: "150px" }}>Location :</Form.Label>
//             <Form.Control type="text" placeholder="Enter location" />
//           </Form.Group>
//           <div className="d-flex justify-content-end">
//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default LeadAdd;

import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { TasksContext } from "../contexts/TasksContext";
import { useNavigate } from "react-router-dom";

function LeadAdd() {
  const { addTask } = useContext(TasksContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    leadName: "",
    leadSource: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(formData);
    navigate("/task/sales"); // Navigate to the sales page after adding the task
  };

  return (
    <div
      style={{
        backgroundColor: "#E2EBFC",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          width: "80%", // Responsive width
          maxWidth: "600px", // Maximum width
        }}
      >
        <h3>Add new Leads</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="formCompanyName"
          >
            <Form.Label className="me-3" style={{ minWidth: "150px" }}>
              Company Name :
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter company name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="formLeadName"
          >
            <Form.Label className="me-3" style={{ minWidth: "150px" }}>
              Lead Name :
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter lead name"
              name="leadName"
              value={formData.leadName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="formLeadSource"
          >
            <Form.Label className="me-3" style={{ minWidth: "150px" }}>
              Lead Source :
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter lead source"
              name="leadSource"
              value={formData.leadSource}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="formEmailId"
          >
            <Form.Label className="me-3" style={{ minWidth: "150px" }}>
              Email Id :
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="formPhoneNo"
          >
            <Form.Label className="me-3" style={{ minWidth: "150px" }}>
              Phone No :
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="formLocation"
          >
            <Form.Label className="me-3" style={{ minWidth: "150px" }}>
              Location :
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LeadAdd;
