import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { TasksProvider } from "./contexts/TasksContext";

const App = () => {
  return (
    <TasksProvider>
      <Router>
        <Dashboard />
      </Router>
    </TasksProvider>
  );
};

export default App;
