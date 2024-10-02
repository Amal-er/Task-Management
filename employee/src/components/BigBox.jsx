import React from "react";
import { Routes, Route } from "react-router-dom";
import MainContent from "./MainContent";
import Employee from "../pages/Employee";
import Software from "../pages/Software";
import Amazon from "../pages/Amazon";
import Data from "../pages/Data";
import Bde from "../pages/Bde";
import UpcomingTask from "../pages/UpcomingTask";
import Task from "../pages/Task";
import RunningTask from "../pages/RunningTask";
import CompletedTask from "../pages/CompletedTask";
import Attendance from "../pages/Attendance";
import AttendanceList from "../pages/AttendanceList";
import LeaveRequest from "../pages/LeaveRequest";

import Settings from "../pages/Settings";
import Sales from "../pages/Sales";
import SalesReport from "../pages/SalesReport";
import SalesRunningTask from "../pages/SalesRunningTask";
import Chat from "../pages/Chat";
import ChatNew from "../pages/ChatNew";
import MailInbox from "../pages/Mail";
import NewMail from "../pages/NewMail";
import Mail from "../pages/Mail";


function BigBox() {
  return (
    <main className="flex-1 bg-white">
      <Routes>
        <Route path="/" element={<MainContent />} />
     
        <Route path="/employee" element={<Employee />} />
        <Route path="/employee/software" element={<Software />} />
        <Route path="/employee/amazon" element={<Amazon />} />x
        <Route path="/employee/data" element={<Data />} />
        <Route path="/employee/bde" element={<Bde />} />
        <Route path="/task" element={<Task />} />
        <Route path="/task/upcoming" element={<UpcomingTask />} />
        <Route path="/task/running" element={<RunningTask />} />
        <Route path="/task/completed" element={<CompletedTask />} />
        <Route path="/task/sales" element={<Sales />} />
        <Route path="/task/salesrunningtask" element={<SalesRunningTask />} />
        <Route path="/task/salesreport" element={<SalesReport />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/attendance/list" element={<AttendanceList />} />
        <Route path="/attendance/leave" element={<LeaveRequest />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chatnew" element={<ChatNew />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/newmail" element={<NewMail />} />
      </Routes>
    </main>
  );
}

export default BigBox;
