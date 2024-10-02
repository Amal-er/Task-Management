
import React from 'react';
import Sidenav from '../Components/Sidenav';
import Header from '../Components/Header';
import newtask from '../Assets/Images/mail 1.png'
import employee from '../Assets/Images/project-management 2.png'
import dates from '../Assets/Images/schedule 2.png'
import project from '../Assets/Images/project-management 3.png'
import project1 from '../Assets/Images/project-management 1.png'
import book from '../Assets/Images/book.png'
import leftarrow from '../assets/Images/left-arrow_10068022 1.png';
import { Link } from 'react-router-dom';

const UpcomingAddnewTask = () => {
   
  return (
    <div className='admin-dashboard'>
     
    <Header/> 
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',  }}>
    
    <div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
      <Sidenav /> 
    </div>

    
    <div style={{ flexGrow: 1, padding: '30px 40px' }}>
    <Link to={'/upcomingempsaletask'} ><img src={leftarrow} className="mb-2"/></Link>
    <div className="task-form-container">
    <h2 className="task-form-title">
       <span className="icon-add-task"></span><img src={newtask} className='me-2'/> Add New Task
      </h2>

      <div className="task-form">
        <div className="task-field">
          <label>
            <span className="icon-employee"></span><img src={employee} className='me-2'/> Employee Name
          </label>
          <select className="input-field">
            <option>Arun K S</option>
            {/* Other employee options */}
          </select>
        </div>

        <div className="task-field">
          <label>
            <span className="icon-calendar"></span><img src={dates} className='me-2'/>  Select Dates
          </label>
          <div className="date-field">
            <input type="date" placeholder="Starting Date" />
            <input type="date" placeholder="Ending Date" />
          </div>
        </div>

        <div className="task-field">
          <label>
            <span className="icon-project"></span> <img src={project} className='me-2'/>Project Name
          </label>
          <input type="text" className="input-field" placeholder="Project Name" />
        </div>

        <div className="task-field">
          <label>
            <span className="icon-attachment"></span><img src={book}/> Attachments
          </label>
          <input type="file" className="input-field" />
        </div>

        <div className="task-field">
          <label>
            <span className="icon-description"></span><img src={project1} className='me-2'/> Project Description
          </label>
          <textarea className="input-field" placeholder="Project Description"></textarea>
        </div>

        <div className="form-buttons">
          <button className="btn btn-primary send-btn">Send</button>
          <button className="btn btn-danger delete-btn">Delete</button>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default UpcomingAddnewTask;
