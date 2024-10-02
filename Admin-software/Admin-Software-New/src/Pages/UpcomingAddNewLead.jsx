import React from 'react';
import Header from '../Components/Header';
import Sidenav from '../Components/Sidenav';
import leftarrow from '../assets/Images/left-arrow_10068022 1.png';
import { Link } from 'react-router-dom';

function UpcomingAddNewLead() {
  return (
    <div className='admin-dashboard'>
        <Header/>
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>
    
    <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
      <Sidenav /> 
    </div>

    
    <div style={{ flexGrow: 1, padding: '30px 40px' }} >
    <Link to={'/upcomingaddnewtask'} ><img src={leftarrow} className="mb-2"/></Link>
        <div className="form-container">
      <h3>Add new Leads</h3>
      <form className="lead-form">
        <div className="form-group">
          <label>Company Name :</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Lead Name :</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Lead Source :</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Email Id :</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Phone No :</label>
          <input type="tel" />
        </div>
        <div className="form-group">
          <label>Location :</label>
          <input type="text" />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary save-btn">Save</button>
          <button type="button" className=" btn btn-danger delete-btn">Delete</button>
        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
}

export default UpcomingAddNewLead;
