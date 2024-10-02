import { Route, Routes } from 'react-router-dom'
import './App.css';
import HrDashboard from './Pages/HrDashboard';
import HrSoftware from './Pages/HrSoftware';
import HrUpcomingTask from './Pages/HrUpcomingTask';
import HrRunningTask from './Pages/HrRunningTask';
import HrCompleted from './Pages/HrCompleted';
import HrUpcomSaleTask from './Pages/HrUpcomSaleTask';
import HrRunningTaskSales from './Pages/HrRunningTaskSales';
import HrCompletedTaskSales from './Pages/HrCompletedTaskSales';
import HrEmployeeSaleTask from './Pages/HrEmployeeSaleTask';
import HrAttendanceList from './Pages/HrAttendanceList';
import HrOnleave from './Pages/HrOnLeave';
import HrTeamAttendance from './Pages/HrTeamAttendance';
import HrEmployeeLeaveReq from './Pages/HrEmployeeLeaveReq';
import HrAttendancereporter from './Pages/HrAttendanceReporter';
import HrMailInbox from './Pages/HrMailInbox';
import HrNewMail from './Pages/HrNewMail';
import HrNewChat from './Pages/HrNewChat';
import HrSettings from './Pages/HrSettings';
function App() {

  return (
    <>
     <Routes>
      <Route path='hrdashboard' element={<HrDashboard/>}/>
      <Route path='hrsoftware' element={<HrSoftware/>}/>
      <Route path='hrupcomingtask' element={<HrUpcomingTask/>}/>
      <Route path='hrrunningtask' element={<HrRunningTask/>}/>
      <Route path='hrcompleted' element={<HrCompleted/>}/>
      <Route path='hrupcomsaletask' element={<HrUpcomSaleTask/>}/>
      <Route path='hrrunningtasksales' element={<HrRunningTaskSales/>}/>
      <Route path='hrcompletedtasksales' element={<HrCompletedTaskSales/>}/>
      <Route path='hremployeesaletask' element={<HrEmployeeSaleTask/>}/>
      <Route path='hrattendancelist' element={<HrAttendanceList/>}/>
      <Route path='hronleave' element={<HrOnleave/>}/>
      <Route path='hrteamattendance' element={<HrTeamAttendance/>}/>
      <Route path='hremployeeleavereq' element={<HrEmployeeLeaveReq/>}/>
      <Route path='hrattendancereporter' element={<HrAttendancereporter/>}/>
      <Route path='hrmailinbox' element={<HrMailInbox/>}/>
      <Route path='hrnewmail' element={<HrNewMail/>}/>
      <Route path='hrnewchat' element={<HrNewChat/>}/>
      <Route path='hrsettings' element={<HrSettings/>}/>
     </Routes>
    
    </>
  )
}

export default App
