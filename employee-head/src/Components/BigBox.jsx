import React from "react";
import { Routes, Route } from "react-router-dom";
import MainContent from "./MainContent";
// import Employee from "../pages/Employee";
import Software from "../pages/Software";
import Amazon from "../pages/Amazon";
import Data from "../pages/Data";
import Bde from "../pages/Bde";
import TaskEmployee from "../pages/TaskEmployee";
import AddnewTask from "../pages/AddnewTask";
import UpcomingTask from "../pages/UpcomingTask";
// import Chat from "../pages/Chat";
import AddupcomingTask from "../pages/AddupcomingTask";
// import Task from "../pages/Task";
import RunningTask from "../pages/RunningTask";
import CompletedTask from "../pages/CompletedTask";
// import Attendance from "../pages/Attendance";
import AttendanceList from "../pages/AttendenceList";
import LeaveRequest from "../pages/LeaveRequest";
import Notepad from "../pages/Notepad";
import Settings from "../pages/Settings";
import Sales from "../pages/Sales";
import LeadAdd from "../pages/LeadAdd";

import Finance from "../pages/Finance";
import SalesTask from "../pages/SalesTask";
import SalesReport from "../pages/SalesReport";
import MyTeam from "../pages/MyTeam";
import TeamRunning from "../pages/TeamRunning";
import TeamCompleted from "../pages/TeamCompleted";
import SalesRunningTask from "../pages/SalesRunningTask";
import TeamPresentList from "../pages/TeamPresentList";
import SalesCompletedTask from "../pages/SalesCompletedTask";
import SalesMyTeam from "../pages/SalesMyTeam";
import ViewAll from "../pages/ViewAll";
import PaySlip from "../pages/PaySlip";
import TeamAttendence from "../pages/TeamAttendence";
import ChatNew from "../pages/ChatNew";
import LocationTracker from "../pages/LocationTracker";
import Mail from "../pages/Mail";
import NewMail from "../pages/NewMail";

// import Task from ".";
// import Attendance from "./Attendance";
// import Settings from "./Settings";

function BigBox() {
  return (
    <main className="flex-1 bg-white">
      <Routes>
        <Route path="/" element={<MainContent />} />
        {/* <Route path="/employee" element={<Employee />} /> */}
        <Route path="/employee/software" element={<Software />} />
        <Route path="/employee/amazon" element={<Amazon />} />
        <Route path="/employee/data" element={<Data />} />
        <Route path="/employee/sales" element={<Bde />} />
        <Route path="/task-employee" element={<TaskEmployee />} />
        <Route path="/employee/addnewtask" element={<AddnewTask />} />
        <Route path="/employee/taskemployee" element={<TaskEmployee />} />

        <Route path="/employee/salestask" element={<SalesTask />} />
        <Route path="/employee/salesreport" element={<SalesReport />} />

        {/* ----------------- */}
        <Route path="/task/sales" element={<Sales />} />
        <Route path="/task/addnewlead" element={<LeadAdd />} />

        {/* <Route path="/task" element={<Task />} /> */}
        <Route path="/task/upcoming" element={<UpcomingTask />} />
        {/* <Route path="/task/chat" element={<Chat />} /> */}
        <Route path="/task/addupcomingtask" element={<AddupcomingTask />} />

        <Route path="/task/running" element={<RunningTask />} />
        <Route path="/task/completed" element={<CompletedTask />} />
        <Route path="/task/myteam" element={<MyTeam />} />

        <Route path="/task/teamrunning" element={<TeamRunning />} />
        <Route path="/task/teamcompleted" element={<TeamCompleted />} />
        <Route path="/task/salesrunningtask" element={<SalesRunningTask />} />
        <Route
          path="/task/salescompletedtask"
          element={<SalesCompletedTask />}
        />
        <Route path="/task/salesmyteam" element={<SalesMyTeam />} />

        {/* <Route path="/attendance" element={<Attendance />} /> */}
        <Route path="/finance" element={<Finance />} />
        <Route path="/viewall" element={<ViewAll />} />
        <Route path="/payslip" element={<PaySlip />} />

        {/* <Route path="/attendance" element={<Attendance />} /> */}
        <Route path="/attendance/list" element={<AttendanceList />} />
        <Route path="/attendance/teamattendence" element={<TeamAttendence />} />
        <Route path="/attendance/leave" element={<TeamPresentList />} />

        <Route path="/attendance/leaverequest" element={<LeaveRequest />} />
        <Route path="/attendance/notepad" element={<Notepad />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/chatnew" element={<ChatNew />} />
        <Route path="/locationtracker" element={<LocationTracker />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/newmail" element={<NewMail />} />
      </Routes>
    </main>
  );
}

export default BigBox;
