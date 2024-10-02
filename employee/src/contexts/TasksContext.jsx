// TasksContext.js
import React, { createContext, useState } from "react";

const TasksContext = createContext();

const initialTasks = [
  {
    id: 1,
    companyName: "ABC Company",
    leadName: "ABC Company",
    leadSource: "Advertisement",
    email: "hr@abcd.com",
    phone: "9876543212",
    status: null,
  },
  {
    id: 2,
    companyName: "XYZ Company",
    leadName: "XYZ Lead",
    leadSource: "Referral",
    email: "contact@xyz.com",
    phone: "1234567890",
    status: null,
  },
  {
    id: 3,
    companyName: "LMN Company",
    leadName: "LMN Lead",
    leadSource: "Organic",
    email: "info@lmn.com",
    phone: "9876543212",
    status: null,
  },
];

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
