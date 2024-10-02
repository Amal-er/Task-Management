import React from 'react';
import { IoMdClose } from "react-icons/io";

const messages = [
  {
    id: 1,
    sender: 'Amal',
    text: "Hi Anu, I've seen your task and it's very good. Keep up the great work!",
    time: '02:44 PM',
    imgSrc: 'https://c.pxhere.com/photos/44/dc/smiling_boy_man_professional_happy_people_young_portrait-865531.jpg!d', // Replace with actual image URL
  },
  {
    id: 2,
    sender: 'Anu',
    text: 'Thank you sir. I will always do my best',
    time: '02:54 PM',
    imgSrc: 'https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0', // Replace with actual image URL
  
  },
];


const HrChatbot = ({ isOpen, onClose }) => {
  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-header">
        <img src="https://c.pxhere.com/photos/44/dc/smiling_boy_man_professional_happy_people_young_portrait-865531.jpg!d" alt="profile" style={{width:'50px',height:'50px'}} className="profile-img" />
        <h4>Amal</h4>
        <button onClick={onClose} className="close-btn" style={{float:'right'}}><IoMdClose className='fs-3'/>
        </button>
      </div>
      <div className="chatbot-body">
        {messages.map((message) => (
          <div key={message.id} className={`chat-message ${message.sender === 'Anu' ? 'chat-message-right' : 'chat-message-left'}`}>
            <img src={message.imgSrc} alt="profile" className="chat-img" />
            <div className="chat-bubble">
              <p>{message.text}</p>
              <span className="chat-time">{message.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input type="text" placeholder="Type a message..." />
        <button type="submit">&#9658;</button>
      </div>
    </div>
  );
};

export default HrChatbot;
