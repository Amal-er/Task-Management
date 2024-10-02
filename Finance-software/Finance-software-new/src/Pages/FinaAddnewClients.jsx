
import React, { useState } from 'react';
import Header from '../Components/Header';
import FinanceSidenav from '../Components/FinanceSidenav';
import leftarrow from '../Assets/Images/left-arrow_10068022 1.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaUpload } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Dropzone = ({ title }) => {
    return (
      <div className="dropzone-container">
        <h5>{title}</h5>
        <div className="dropzone">
          <p>Drop your file</p>
          <FaUpload />

        </div>
      </div>
    );
  };
  

function FinaAddnewClients() {
  const [customerType, setCustomerType] = useState('Individual');
  const [contact, setContact] = useState({ firstName: '', lastName: '' });
  const [companyName, setCompanyName] = useState('');
  const [currency, setCurrency] = useState('INR-Indian Rupee');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPhone, setCompanyPhone] = useState({ workPlace: '', mobile: '' });
  const [gstTreatment, setGstTreatment] = useState('');
  const [placeOfSupply, setPlaceOfSupply] = useState('');


  const handleSave = () => {
  
  };
 

  return (
    <div className='admin-dashboard'>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>
    
    <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
      <FinanceSidenav /> 
    </div>

    
    <div style={{ flexGrow: 1, padding: '30px 50px' }}>
        <Link to={'/financeclients'}>
          <img src={leftarrow}/></Link>
          <div className="new-customer mt-3">
            <h2>New Clients</h2>
            <div className="customer-type"><p className='mt-3 me-3'>Customer Type</p>
              <label>
                <input
                  type="radio"
                  value="Business"
                  checked={customerType === 'Business'}
                  onChange={() => setCustomerType('Business')}
                />
                Business
              </label>
              <label>
                <input
                  type="radio"
                  value="Individual"
                  checked={customerType === 'Individual'}
                  onChange={() => setCustomerType('Individual')}
                />
                Individual
              </label>
            </div>
            <div className="customer-details">
              <div className="input-group">
                <label>Contact</label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={contact.firstName}
                  onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={contact.lastName}
                  onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
                />
              </div>
              <div className="input-group">
                <label>Company Name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Currency</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value="INR-Indian Rupee">INR-Indian Rupee</option>
                  {/* Add more currency options here */}
                </select>
              </div>
              <div className="input-group">
                <label>Company Email</label>
                <input
                  type="email"
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Company Phone</label>
                <input
                  type="text"
                  placeholder="Work Place"
                  value={companyPhone.workPlace}
                  onChange={(e) => setCompanyPhone({ ...companyPhone, workPlace: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Mobile"
                  value={companyPhone.mobile}
                  onChange={(e) => setCompanyPhone({ ...companyPhone, mobile: e.target.value })}
                />
              </div>
       <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
    <Tab eventKey="home" title="Other Details">
    <div className='row' style={{marginLeft:'40px'}}>
 GST Treatment<div className="input-group" id='inputgroup'>
    <select
    >
    <option value="INR-Indian Rupee">select GST treatment</option>
    </select>
    </div></div>
    <div className='row' style={{marginLeft:'33px'}}>
Place Of Supply<div className="input-group" id='inputgroup'>
    <select
    >
    <option value="INR-Indian Rupee">select GST treatment</option>
    </select>
    </div></div>
      </Tab>
      <Tab eventKey="profile" title="Address">
<div className='row' style={{marginLeft:'40px'}}>
 Company Address<div className="input-group" id='inputgroup'>
    <select
    >
    <option value="INR-Indian Rupee">select GST treatment</option>
    </select>
    </div></div>
    <div className='row' style={{marginLeft:'40px'}}>
 Country Name<div className="input-group" id='inputgroup'  style={{marginLeft:'70px'}}>
    <select
    >
    <option value="INR-Indian Rupee">country name</option>
    </select>
    </div></div>
    <div className='row' style={{marginLeft:'40px'}}>
    State Name<div className="input-group" id='inputgroup' style={{marginLeft:'90px'}}>
    <select
    >
    <option value="INR-Indian Rupee">state name</option>
    </select>
    </div>
    </div>
    <div className='row' style={{marginLeft:'40px'}}>
    City Name<div className="input-group" id='inputgroup' style={{marginLeft:'100px'}}>
    <select
    >
    <option value="INR-Indian Rupee">city name</option>
    </select>
    </div>
    </div>
    <div className='row' style={{marginLeft:'40px'}}>
    Pin Code<div className="input-group" id='inputgroup'  style={{marginLeft:'110px'}}>
    <select
    >
    <option value="INR-Indian Rupee">pin code</option>
    </select>
    </div>
    </div>

      </Tab>
      <Tab eventKey="contact" title="Contact Persons" >
      <div className='row' style={{marginLeft:'40px'}}>
 Full Name<div className="input-group" id='inputgroup'>
 <input value="" placeholder='name'></input>
    </div></div>
    <div className='row' style={{marginLeft:'40px'}}>
Title/Position<div className="input-group" id='inputgroup'  style={{marginLeft:'17px'}}>
<input value=""></input>
    </div></div>
    <div className='row' style={{marginLeft:'40px'}}>
  Email Address<div className="input-group" id='inputgroup' style={{marginLeft:'12px'}}>
  <input value="" placeholder='email'></input>
    </div>
    </div>
    <div className='row' style={{marginLeft:'40px'}}>
    Phone Number<div className="input-group" id='inputgroup' style={{marginLeft:'8px'}}>
    <input value="" placeholder='phone number'></input>
    </div>
    </div>
    <div className='row' style={{marginLeft:'40px'}}>
  Availability<div className="input-group" id='inputgroup'  style={{marginLeft:'38px'}}>
 
    <input value="" placeholder='available for meeting or phone call'></input>
   
    </div>
    </div>
      </Tab>
      <Tab eventKey="custom" title="Custom Fields" >
      <div className='row' style={{marginLeft:'40px'}}>
Customer Id<div className="input-group" id='inputgroup'>
 <input value="" ></input>
    </div></div>
    <div className='row' style={{marginLeft:'40px'}}>
Project Period<div className="input-group" id='inputgroup'  style={{marginLeft:'25px'}}>
<input value=""></input>
    </div></div>
    <div className='row' style={{marginLeft:'40px'}}>
  Place Of Supply<div className="input-group" id='inputgroup' style={{marginLeft:'14px'}}>
  <input value=""></input>
    </div>
    </div>
    <div className='row' style={{marginLeft:'40px'}}>
  Payment Terms<div className="input-group" id='inputgroup' style={{marginLeft:'12px'}}>
    <input value=""></input>
    </div>
    </div>
      </Tab>
      <Tab eventKey="attachments" title="Attachments" >
     
      <div className="row" id='upload'>
      <div className="col-md-4">
        <Dropzone title="Project Logo"  />
      </div>
      <div className="col-md-4">
        <Dropzone title="Project Description" />
      </div>
      <div className="col-md-4">
        <Dropzone title="Project Invoices" />
      </div>
</div>
      </Tab>
    </Tabs>
                 
            </div>
            <div className="actions">
              <button className="save" onClick={handleSave}>Save</button>
              <button className="cancel">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinaAddnewClients;
