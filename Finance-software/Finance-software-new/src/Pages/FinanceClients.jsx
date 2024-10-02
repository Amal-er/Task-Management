import React, { useState } from 'react';
import Header from '../Components/Header';
import FinanceSidenav from '../Components/FinanceSidenav';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import file from '../Assets/Images/file-document_14488187 1@2x.png';
import download from '../Assets/Images/file-document_14488187 1.png';

function FinanceClients() {
  const [activeTab, setActiveTab] = useState('clients'); // State to manage tab switching
  const [invoiceOption, setInvoiceOption] = useState('new'); // State to track which radio button is selected
  const [selectedClient, setSelectedClient] = useState(''); // State to track the selected client from dropdown

  const clientList = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Robert Williams' }
  ]; // Example client list for the dropdown

  return (
    <div className='admin-dashboard'>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>
    
        <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
          <FinanceSidenav /> 
        </div>

        
        <div style={{ flexGrow: 1, padding: '30px 50px' }}>
       
            {/* <img src={leftarrow} alt="Go back" /> */}
         

          {/* Tab Navigation */}
          <div className="tab-container">
            <button
              className={`tab-button ${activeTab === 'clients' ? 'active' : ''}`}
              onClick={() => setActiveTab('clients')}
            >
              Our Clients
            </button>
            <button
              className={`tab-button ${activeTab === 'invoice' ? 'active' : ''}`}
              onClick={() => setActiveTab('invoice')}
            >
              Invoice
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'clients' && (
            <div className="clients-section">
              <table className="table align-middle mb-0 bg-white">
                <thead className="bg-primary">
                  <tr className='text-white'>
                    <th>Name</th>
                    <th>Company Name</th>
                    <th>Email</th>
                    <th>Work Phone</th>
                    <th>Place of Supply</th>
                    <th>Receivable</th>
                    <th>Unused Credits</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example row */}
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <p className="fw-bold mb-1">John Doe</p>
                      </div>
                    </td>
                    <td><p className="fw-normal mb-1">Neways</p></td>
                    <td><p>neways@gmail.com</p></td>
                    <td><p>+91 8045678967</p></td>
                    <td><p>Kochi</p></td>
                    <td><p>₹00,000.00</p></td>
                    <td>
                      <p>
                        ₹00,000.00 
                        <img src={file} className='ms-4 fs-4' alt="file icon" />
                        <img src={download} className='ms-3 fs-3' alt="download icon" />
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <p className="fw-bold mb-1">John Doe</p>
                      </div>
                    </td>
                    <td><p className="fw-normal mb-1">Neways</p></td>
                    <td><p>neways@gmail.com</p></td>
                    <td><p>+91 8045678967</p></td>
                    <td><p>Kochi</p></td>
                    <td><p>₹00,000.00</p></td>
                    <td>
                      <p>
                        ₹00,000.00 
                        <img src={file} className='ms-4 fs-4' alt="file icon" />
                        <img src={download} className='ms-3 fs-3' alt="download icon" />
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <p className="fw-bold mb-1">John Doe</p>
                      </div>
                    </td>
                    <td><p className="fw-normal mb-1">Neways</p></td>
                    <td><p>neways@gmail.com</p></td>
                    <td><p>+91 8045678967</p></td>
                    <td><p>Kochi</p></td>
                    <td><p>₹00,000.00</p></td>
                    <td>
                      <p>
                        ₹00,000.00 
                        <img src={file} className='ms-4 fs-4' alt="file icon" />
                        <img src={download} className='ms-3 fs-3' alt="download icon" />
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          <Link to={'/finaaddnewclients'}>
            <div className="add-new-client-container">
              <button className="new-client bg-primary">Add New Client</button>
            </div>
          </Link>

          {activeTab === 'invoice' && (
            <div className="invoice-section">
              <form className="invoice-form">
                {/* Types */}
                <div className="form-group">
                  <label>Types</label>
                  <div className="radio-options">
                    <label>
                      <input type="radio" name="type" value="goods" /> Goods
                    </label>
                    <label>
                      <input type="radio" name="type" value="service" /> Service
                    </label>
                  </div>
                </div>

                {/* Name */}
                <div className="form-group">
                  <label>Name <span className="required">*</span></label>
                  <input type="text" className="input-field" placeholder="Enter name" />
                </div>

                {/* Unit */}
                <div className="form-group">
                  <label>Unit</label>
                  <input type="text" className="input-field" placeholder="Enter unit" />
                </div>

                {/* HSN Code */}
                <div className="form-group">
                  <label>HSN Code <span className="required">*</span></label>
                  <input type="text" className="input-field" placeholder="Enter HSN Code" />
                </div>

                {/* Tax Preference */}
                <div className="form-group">
                  <label>Tax Preference <span className="required">*</span></label>
                  <input type="text" className="input-field" placeholder="Enter tax preference" />
                </div>

                {/* Selling Price */}
                <div className="form-group">
                  <label>Selling Price</label>
                  <input type="text" className="input-field" placeholder="Enter selling price" />
                </div>

                {/* Description */}
                <div className="form-group">
                  <label>Description <span className="required">*</span></label>
                  <input type="text" className="input-field" placeholder="Enter description" />
                </div>

                {/* Default Tax Rate */}
                <h4>Default Tax Rate</h4>
                <div className="form-group">
                  <label>Intra State Rate</label>
                  <input type="text" className="input-field" placeholder="Enter intra state rate" />
                </div>
                <div className="form-group">
                  <label>Inter State Rate</label>
                  <input type="text" className="input-field" placeholder="Enter inter state rate" />
                </div>

                {/* Save and Cancel */}
                <div className="button-group">
                  <Button variant="primary" className="save-btn">Save</Button>
                  <Button variant="danger" className="cancel-btn">Cancel</Button>
                </div>

                {/* Add more details */}
                <div className="add-more-details">
                  <a href="#">Add more details</a>
                </div>
              </form>

              {/* Create invoice section */}
              <div className="create-invoice">
                <h4>Create an invoice?</h4>
                <label className="existing-client-option">
                  <input
                    type="radio"
                    name="invoice_option"
                    value="existing"
                    onChange={() => setInvoiceOption('existing')}
                  /> 
                  Create from existing clients
                </label>
                <label className="new-client-option">
                  <input
                    type="radio"
                    name="invoice_option"
                    value="new"
                    onChange={() => setInvoiceOption('new')}
                  /> 
                  Create new Invoice
                </label>

                {/* Show the client dropdown if 'existing' option is selected */}
                {invoiceOption === 'existing' && (
                  <div className="client-dropdown">
                    <label>Select Client</label>
                    <select
                      className="input-field"
                      value={selectedClient}
                      onChange={(e) => setSelectedClient(e.target.value)}
                    >
                      <option value="">Select a client</option>
                      {clientList.map(client => (
                        <option key={client.id} value={client.id}>
                          {client.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

               <Link to={'/finaexistinvoice'}> <button className="create-new-invoice bg-primary">
                  {invoiceOption === 'existing' ? 'Create Invoice' : 'Create new Invoice +'}
                </button></Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FinanceClients;
