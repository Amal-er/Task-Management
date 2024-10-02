import React, { useState } from "react";
import user1 from "../assets/images/man.png";
import user2 from "../assets/images/girl1.png";
import sendIcon from "../assets/icons/mail1.png";

const initialMessages = [
  {
    id: 1,
    user: "user1",
    text: "Start the Task before Monday",
  },
  {
    id: 2,
    user: "user2",
    text: "Ok, I will",
  },
];

const Chat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, user: "user2", text: input },
      ]);
      setInput("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#E2EBFC",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-3xl relative">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <img src={sendIcon} alt="Message Icon" className="w-6 h-6 mr-2" />
              Message
            </h2>
            <button className="text-gray-500 hover:text-gray-700 text-2xl absolute right-6 top-6">
              &times;
            </button>
          </div>
          <hr className="mb-4" />
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-center ${
                  message.user === "user1" ? "justify-start" : "justify-end"
                }`}
              >
                {message.user === "user1" && (
                  <>
                    <img
                      src={user1}
                      alt="User 1"
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <div
                      className="bg-gray-200 rounded-lg p-3 max-w-xs"
                      style={{
                        borderRadius: "15px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {message.text}
                    </div>
                  </>
                )}
                {message.user === "user2" && (
                  <>
                    <div
                      className="bg-blue-500 text-white rounded-lg p-3 max-w-xs"
                      style={{
                        borderRadius: "15px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {message.text}
                    </div>
                    <img
                      src={user2}
                      alt="User 2"
                      className="w-10 h-10 rounded-full ml-2"
                    />
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <form
              className="flex items-center justify-end"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 border rounded-full px-4 py-2 mr-2"
                style={{ border: "1px solid #C4C4C4" }}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-full p-2 flex items-center"
                style={{ borderRadius: "20px", padding: "10px 20px" }}
              >
                send
                <img src={sendIcon} alt="Send Icon" className="w-4 h-4 ml-1" />
              </button>
            </form>
          </div>
          x
        </div>
      </div>
    </div>
  );
};

export default Chat;
