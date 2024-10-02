import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import Header from '../Components/Header';
import FinanceSidenav from '../Components/FinanceSidenav';
import inbox from '../assets/Images/inbox.png';
import { CiInboxIn } from "react-icons/ci";
import { BiSend } from "react-icons/bi";
function FinanceMailInbox() {
  const [activeTab, setActiveTab] = useState('inbox');
  const [selectedMails, setSelectedMails] = useState([]);

  const inboxMessages = [
    { sender: 'Arun K S', subject: 'New Project Approval Waiting', time: '10:30 PM' },
    { sender: 'Amal S M', subject: 'Leave Request', time: '10:30 PM' },
    { sender: 'Arun K S', subject: 'New Project Approval Waiting', time: '10:30 PM' },
    { sender: 'Amal S M', subject: 'Leave Request', time: '10:30 PM' },
    { sender: 'Arun K S', subject: 'New Project Approval Waiting', time: '10:30 PM' },
    { sender: 'Amal S M', subject: 'Leave Request', time: '10:30 PM' },
    { sender: 'Anu S S', subject: 'Meeting Day Approval', time: '10:30 PM' },
  ];

  const sentMessages = [
    { sender: 'Arun K S', subject: 'Project Plan', time: '9:15 AM' },
    { sender: 'Anu S S', subject: 'Team Meeting Follow-up', time: '8:45 AM' },
    { sender: 'Amal S M', subject: 'Leave Request', time: '9:30 AM' },
    { sender: 'Arun K S', subject: 'New Project Approval Waiting', time: '7:30 AM' },
    { sender: 'Amal S M', subject: 'Leave Request', time: '8:30 AM' },
  ];

  const handleSelectMail = (index) => {
    if (selectedMails.includes(index)) {
      setSelectedMails(selectedMails.filter((i) => i !== index));
    } else {
      setSelectedMails([...selectedMails, index]);
    }
  };

  const isSelected = (index) => selectedMails.includes(index);

  return (
<div className=''>
  <Header/>
  
  <div style={{ display: 'flex', flexDirection: 'row', height: '100vh',}}>

<div style={{ width: '200px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
  <FinanceSidenav /> 
</div>


<div style={{ flexGrow: 1, padding: '30px 50px', backgroundColor: '#f0f4ff' }}>
  <div className='mailbox-container'>
          <div className='mail-header'>
            <input type="text" className="search-mail" placeholder="Search Mail" />
            <Link to={'/financenewmail'}>
              <button className="new-mail-btn">✉️ Send New Mail</button>
            </Link>
          </div>

          <div className='tabs'>
            <button className={activeTab === 'inbox' ? 'active' : ''} onClick={() => setActiveTab('inbox')}><CiInboxIn className='me-1 fs-5'/>Inbox</button>
            <button className={activeTab === 'sent' ? 'active' : ''} onClick={() => setActiveTab('sent')}><BiSend className='me-1'/>Sent</button>
          </div>

          <div className='mail-list'>
            {(activeTab === 'inbox' ? inboxMessages : sentMessages).map((msg, index) => (
              <div key={index} className={`mail-item ${isSelected(index) ? 'selected' : ''}`}>
                <input
                  type='checkbox'
                  onChange={() => handleSelectMail(index)}
                  checked={isSelected(index)}
                />
                <span className='sender'>{msg.sender}</span>
                <span className='subject'>{msg.subject}</span>
                {!isSelected(index) && <span className='time'>{msg.time}</span>}
                {/* Show delete button if the mail is selected */}
                {isSelected(index) && (
                  <div className='mail-actions'>
                    <button className='delete-btn'><MdDelete /></button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>
        </div>
        </div>
  );
}

export default FinanceMailInbox;


 