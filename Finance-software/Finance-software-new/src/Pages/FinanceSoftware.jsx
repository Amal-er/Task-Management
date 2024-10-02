
import React, { useState } from 'react';
import Header from '../Components/Header';
import comp from '../assets/Images/computer.png';
import phone from '../assets/Images/telephone 1.png';
import mail from '../assets/Images/mail.png';
import sun from '../assets/Images/sunrise.png';
import tik from '../assets/Images/tik.png';
import { PiFilesFill } from "react-icons/pi";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 
import book from '../assets/Images/book.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FaFolderOpen } from "react-icons/fa6";
import FinanceSidenav from '../Components/FinanceSidenav';
import FinanceTaskView from '../Components/FinanceTaskView';


function FinanceSoftware() {
const [expanded, setExpanded] = useState(null);
const handleToggle = (index) => {
setExpanded(expanded === index ? null : index);
};




const employees = [
{
name: "Arun K S",
id: "#A1234567",
designation: "UI/UX Developer",
mobile: "9876543210",
email: "arun@gmail.com",
shift: "Morning",
tasks: 3,
status: "Online",
details: {
idProof: "Aadhar card: 1029 3832 1234",
education: "Bachelor's degree: Computer Sciences",
experience: "Jr UI/UX designer",
offerLetter: "Signed",
ndaAgreement: "Signed",
bankDetails: "Account No: 1029 3832 1234",
dob: "02/09/2000 & B+",
address: "7th street, near AKG junction Kochi",
status:"probationary employee"
}
},

{
name: "John Doe",
id: "#1234567",
designation: "Software Engineer",
mobile: "8745673427",
email: "jone@gmail.com",
shift: "Night",
tasks: 3,
status: "Online ",
},

{
name: "Alex Ray",
id: "#1234567",
designation: "Consultant",
mobile: "8745673427",
email: "jone@gmail.com",
shift: "Morning",
tasks: 3,
status: "Offline",
},

{
name: "John Doe",
id: "#1234567",
designation: "Designer",
mobile: "8745673427",
email: "jone@gmail.com",
shift: "Morning",
tasks: 3,
status: "Offline",
},
   
];


const [show, setShow] = useState(false);
const [profileImage, setProfileImage] = useState(null);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const handleProfileImageChange = (e) => {
if (e.target.files && e.target.files[0]) {
setProfileImage(URL.createObjectURL(e.target.files[0]));
}
};

return (
    <div className='admin-dashboard'>
    <Header />
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>
    
    <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
      <FinanceSidenav /> 
    </div>

    
    <div style={{ flexGrow: 1, padding: '30px 40px' }}>
    <div className='table'>
    <button type="button" className="btn " id="addnewbtn" onClick={handleShow}>
<i class="fa-solid fa-user me-2"></i>Add New Employee 
</button>
    <table className="table align-middle mb-0 bg-white">
    <thead className="bg-primary">
    <tr className='text-white'>
    <th>Employee Name</th>
    <th>Designation</th>
    <th>Mobile No</th>
    <th>Email ID</th>
    <th>Shift</th>
    <th>Task</th>
    <th>Status</th>
    </tr>
    </thead>
    <tbody>



{employees.slice(1).map((employee, index) => (
                <React.Fragment key={index}>
                  <tr onClick={() => handleToggle(index)}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                          alt=""
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{employee.name}  <button onClick={() => handleToggle(index)} className="btn btn-link">
                        {expanded === index ? <FaChevronUp /> : <FaChevronDown />}
                      </button></p>
                        <p className="text-muted mb-0">{employee.id}

                        </p>
             
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1"><img src={comp} className='me-1' alt="comp" />{employee.designation}</p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1"><img src={phone} className='me-1' alt="phone" />{employee.mobile}</p>
                    </td>
                    <td><img src={mail} className='me-1' alt="mail" />{employee.email}</td>
                    <td>
                      <p className="fw-normal"><img src={sun} className='me-1' alt="sun" />{employee.shift}</p>
                    </td>
                   
                    <td>
                    <FinanceTaskView/>
                    </td>
                    <td
  className={`btn ${employee.status === 'Offline' ? 'btn-success bg-success' : 'btn-danger bg-danger'}`}
  style={{
    borderRadius: '15px',  // Reduced the border radius for a smaller button
    width: '90px',         // Set a smaller width
    height: '25px',        // Set a smaller height
    marginTop: '15px',     // Adjusted margin to better fit the smaller button
    display: 'flex',       // Flexbox to center content
    justifyContent: 'center',  // Center the text horizontally
    alignItems: 'center',  // Center the text vertically
    padding: '5px'         // Adjust padding for a smaller button
  }}
>
  {employee.status}
</td>

                  </tr>
                  {expanded === index && (
                    <tr>
                      <td colSpan="7">
                        <div className="employee-details">
                          {/* Add other employee details here if needed */}
                    <p>ID proof: <p style={{float:'right',color:'blue'}}>{employees[0].details.idProof}<img src={book} className='ms-4'/></p>                        </p>
                    <p>Educational Certificates:  <p style={{float:'right',color:'blue'}}> {employees[0].details.education}<img src={book}  className='ms-4'/></p></p>
                    <p>Previous experiences:<p style={{float:'right',color:'blue'}}> {employees[0].details.experience}<img src={book}  className='ms-4'/></p></p>
                    <p>Offer Letter and Appointment Letter: <p style={{float:'right',color:'grey'}}>{employees[0].details.offerLetter}<img src={book}  className='ms-4'/></p></p>
                    <p>NDA and Employee Agreement: <p style={{float:'right',color:'grey'}}>{employees[0].details.ndaAgreement}<img src={book}  className='ms-4'/></p></p>
                    <p>Bank account details: <p style={{float:'right',color:'blue'}}>{employees[0].details.bankDetails}<img src={book}  className='ms-4'/></p></p>
                    <p  className='me-4'>DOB & Blood Group: <p style={{float:'right',color:'blue'}}>{employees[0].details.dob}</p></p>
                    <p  className='me-4'>Home address:<p style={{float:'right',color:'blue'}}> {employees[0].details.address}</p></p>
                    <p  className='me-4'>Status:<p style={{float:'right',color:'grey'}}> {employees[0].details.status}</p></p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}

              {/* Other Employees with Dropdown */}
              {employees.slice(1).map((employee, index) => (
                <React.Fragment key={index}>
                  <tr onClick={() => handleToggle(index)}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                          alt=""
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{employee.name}  <button onClick={() => handleToggle(index)} className="btn btn-link">
                        {expanded === index ? <FaChevronUp /> : <FaChevronDown />}
                      </button></p>
                        <p className="text-muted mb-0">{employee.id}</p>
             
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1"><img src={comp} className='me-1' alt="comp" />{employee.designation}</p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1"><img src={phone} className='me-1' alt="phone" />{employee.mobile}</p>
                    </td>
                    <td><img src={mail} className='me-1' alt="mail" />{employee.email}</td>
                    <td>
                      <p className="fw-normal"><img src={sun} className='me-1' alt="sun" />{employee.shift}</p>
                    </td>
                    <td >
                      <p className="task-tik1 fw-normal me-4"><img src={tik} className='me-1' alt="tik" />{employee.tasks}</p>
                    </td>
                    <td
  className={`btn ${employee.status === 'Offline' ? 'btn-success bg-success' : 'btn-danger bg-danger'}`}
  style={{
    borderRadius: '15px',  // Reduced the border radius for a smaller button
    width: '90px',         // Set a smaller width
    height: '25px',        // Set a smaller height
    marginTop: '15px',     // Adjusted margin to better fit the smaller button
    display: 'flex',       // Flexbox to center content
    justifyContent: 'center',  // Center the text horizontally
    alignItems: 'center',  // Center the text vertically
    padding: '5px'         // Adjust padding for a smaller button
  }}
>
  {employee.status}
</td>
                  </tr>
                  {expanded === index && (
                    <tr>
                      <td colSpan="7">
                        <div className="employee-details">
                          {/* Add other employee details here if needed */}
                    <p>ID proof: <p style={{float:'right',color:'blue'}}>{employees[0].details.idProof}<img src={book} className='ms-4'/></p>                        </p>
                    <p>Educational Certificates:  <p style={{float:'right',color:'blue'}}> {employees[0].details.education}<img src={book}  className='ms-4'/></p></p>
                    <p>Previous experiences:<p style={{float:'right',color:'blue'}}> {employees[0].details.experience}<img src={book}  className='ms-4'/></p></p>
                    <p>Offer Letter and Appointment Letter: <p style={{float:'right',color:'grey'}}>{employees[0].details.offerLetter}<img src={book}  className='ms-4'/></p></p>
                    <p>NDA and Employee Agreement: <p style={{float:'right',color:'grey'}}>{employees[0].details.ndaAgreement}<img src={book}  className='ms-4'/></p></p>
                    <p>Bank account details: <p style={{float:'right',color:'blue'}}>{employees[0].details.bankDetails}<img src={book}  className='ms-4'/></p></p>
                    <p  className='me-4'>DOB & Blood Group: <p style={{float:'right',color:'blue'}}>{employees[0].details.dob}</p></p>
                    <p  className='me-4'>Home address:<p style={{float:'right',color:'blue'}}> {employees[0].details.address}</p></p>
                        </div>
                      </td>
                      
                    </tr>
                     
                  )}
                </React.Fragment>
              ))}  
              {employees.slice(1).map((employee, index) => (
                <React.Fragment key={index}>
                  <tr onClick={() => handleToggle(index)}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                          alt=""
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{employee.name}  <button onClick={() => handleToggle(index)} className="btn btn-link">
                        {expanded === index ? <FaChevronUp /> : <FaChevronDown />}
                      </button></p>
                        <p className="text-muted mb-0">{employee.id}</p>
             
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1"><img src={comp} className='me-1' alt="comp" />{employee.designation}</p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1"><img src={phone} className='me-1' alt="phone" />{employee.mobile}</p>
                    </td>
                    <td><img src={mail} className='me-1' alt="mail" />{employee.email}</td>
                    <td>
                      <p className="fw-normal"><img src={sun} className='me-1' alt="sun" />{employee.shift}</p>
                    </td>
                    <td >
                      <p className="task-tik1 fw-normal me-4"><img src={tik} className='me-1' alt="tik" />{employee.tasks}</p>
                    </td>
                    <td
  className={`btn ${employee.status === 'Offline' ? 'btn-success bg-success' : 'btn-danger bg-danger'}`}
  style={{
    borderRadius: '15px',  // Reduced the border radius for a smaller button
    width: '90px',         // Set a smaller width
    height: '25px',        // Set a smaller height
    marginTop: '15px',     // Adjusted margin to better fit the smaller button
    display: 'flex',       // Flexbox to center content
    justifyContent: 'center',  // Center the text horizontally
    alignItems: 'center', 
    padding: '5px',
    
        
  }}
>
  {employee.status}
</td>
                  
           
                  </tr>
                  {expanded === index && (
                    <tr>
                      <td colSpan="7">
                        <div className="employee-details">
                          {/* Add other employee details here if needed */}
                    <p>ID proof: <p style={{float:'right',color:'blue'}}>{employees[0].details.idProof}<img src={book} className='ms-4'/></p>                        </p>
                    <p>Educational Certificates:  <p style={{float:'right',color:'blue'}}> {employees[0].details.education}<img src={book}  className='ms-4'/></p></p>
                    <p>Previous experiences:<p style={{float:'right',color:'blue'}}> {employees[0].details.experience}<img src={book}  className='ms-4'/></p></p>
                    <p>Offer Letter and Appointment Letter: <p style={{float:'right',color:'grey'}}>{employees[0].details.offerLetter}<img src={book}  className='ms-4'/></p></p>
                    <p>NDA and Employee Agreement: <p style={{float:'right',color:'grey'}}>{employees[0].details.ndaAgreement}<img src={book}  className='ms-4'/></p></p>
                    <p>Bank account details: <p style={{float:'right',color:'blue'}}>{employees[0].details.bankDetails}<img src={book}  className='ms-4'/></p></p>
                    <p  className='me-4'>DOB & Blood Group: <p style={{float:'right',color:'blue'}}>{employees[0].details.dob}</p></p>
                    <p  className='me-4'>Home address:<p style={{float:'right',color:'blue'}}> {employees[0].details.address}</p></p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <div className='files'>
            <div className='file1'>
              <p className='text-dark mt-1'><PiFilesFill className='me-1 fs-5' />15 files</p>
            </div>
       
        
          </div>
        </div>
      </div>
    </div>



    
<Modal show={show} onHide={handleClose} className='modalnew' centered>
<Modal.Header closeButton>
<Modal.Title>Add New Employee</Modal.Title>
</Modal.Header>
<Modal.Body>
          <Form>
            <div className="form-content">
              <div className="input-fields">
                <div className="form-group-row">
                  <Form.Group controlId="formFirstName" className="form-group">
                    <Form.Control type="text" placeholder="First Name" />
                  </Form.Group>
                  <Form.Group controlId="formLastName" className="form-group">
                    <Form.Control type="text" placeholder="Last Name" />
                  </Form.Group>
                </div>
                <div className="form-group-row">
                  <Form.Group controlId="formPhoneNo" className="form-group">
                    <Form.Control type="text" placeholder="Phone No" />
                  </Form.Group>
                  <Form.Group controlId="formEmailId" className="form-group">
                    <Form.Control type="email" placeholder="Email Id" />
                  </Form.Group>
                </div>
                <div className="form-group-row">
                  <Form.Group controlId="formIdProof" className="form-group file-group">
                    <Form.Control type="file" className="file-input" />
                    <label className="file-label">Id Proof <FaFolderOpen style={{float:'right'}} /></label>
                  </Form.Group>
                  <Form.Group controlId="formEducationalCertificates" className="form-group file-group">
                    <Form.Control type="file" className="file-input" />
                    <label className="file-label">Educational Certificates <FaFolderOpen style={{float:'right'}} /></label>
                  </Form.Group>
                </div>
                <div className="form-group-row">
                  <Form.Group controlId="formPreviousExperiences" className="form-group file-group">
                    <Form.Control type="file" className="file-input" />
                    <label className="file-label">Previous experiences <FaFolderOpen style={{float:'right'}} /></label>
                  </Form.Group>
                  <Form.Group controlId="formOfferLetter" className="form-group file-group">
                    <Form.Control type="file" className="file-input" />
                    <label className="file-label">Offer Letter <FaFolderOpen style={{float:'right'}} /></label>
                  </Form.Group>
                </div>
                <div className="form-group-row">
                  <Form.Group controlId="formNDA" className="form-group file-group">
                    <Form.Control type="file" className="file-input" />
                    <label className="file-label">NDA <FaFolderOpen style={{float:'right'}} /></label>
                  </Form.Group>
                  <Form.Group controlId="formEmployeeAgreement" className="form-group file-group">
                    <Form.Control type="file" className="file-input" />
                    <label className="file-label">Employee Agreement <FaFolderOpen style={{float:'right'}} /></label>
                  </Form.Group>
                </div>
                <div className="form-group-row">
                  <Form.Group controlId="formBankAccountDetails" className="form-group file-group">
                    <Form.Control type="file" className="file-input" />
                    <label className="file-label">Bank account details <FaFolderOpen style={{float:'right'}} /></label>
                  </Form.Group>
                  <Form.Group controlId="formBloodGroup" className="form-group">
                    <Form.Control type="text" placeholder="Blood Group" />
                  </Form.Group>
                </div>
                <div className="form-group-row">
                  <Form.Group controlId="formHomeAddress" className="form-group">
                    <Form.Control type="text" placeholder="Home Address" />
                  </Form.Group>
                  <Form.Group controlId="formDateOfBirth" className="form-group">
                    <Form.Control type="date" placeholder="Date of Birth" />
                  </Form.Group>
                </div>
                <div className="form-group-row">
                  <Form.Group controlId="formDesignation" className="form-group" >
                    <Form.Control as="select" >
                      <option>Designation </option>
                      <option>Full stack developer </option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formDepartment" className="form-group">
                    <Form.Control as="select">
                      <option>Department</option>
                      <option>Software</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formDepartment" className="form-group">
                    <Form.Control as="select">
                      <option>Status</option>
                      <option>Intern</option>
                      <option>Probationary</option>
                      <option>Permanent</option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="upload-photo-row">
                <div className="upload-photo">
                  <img
                    src={profileImage || 'path-to-placeholder-image.jpg'}
                    alt="profile image"
                    className="user-photo"
                  />
                  <input
                    type="file"
                    className="upload-input"
                    onChange={handleProfileImageChange}
                    id="upload-photo-input"
                  />
                  <label htmlFor="upload-photo-input" className="upload-button">📷 Upload Photo</label>
                  <Form>
    <div className="form-content">
     

      <div className="create-user">
        <h5>Create User name</h5>
        <Form.Group controlId="formUsername" className="form-group">
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Form.Group controlId="formPassword" className="form-group">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </div>

    </div>
  </Form>
                </div>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose} style={{width:'150px'}}>
            Delete
          </Button>
          <Button variant="success" onClick={handleClose} style={{width:'150px'}}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FinanceSoftware;


