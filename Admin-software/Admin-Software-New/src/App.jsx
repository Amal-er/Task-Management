
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminDashboard from './Pages/AdminDashboard'
import AdminSoftware from './Pages/AdminSoftware'
import Sales from './Pages/Sales'
import SalesEmployeeTask from './Pages/SalesEmployeeTask'
import UpcomingTask from './Pages/UpcomingTask'
import UpcomingAddnewTask from './Pages/UpcomingAddnewTask';
import UpcomingsaleTask from './Pages/Upcomingsaletask';
import RunningTask from './Pages/RunningTask';
import RunningTaskSales from './Pages/RunningTaskSales'
import RunningEmployeeTask from './Pages/RunningEmployeeTask'
import CompletedTask from './Pages/CompletedTask'
import CompletedTaskSales from './Pages/CompletedTaskSales'
import CompletedEmployeeTask from './Pages/CompletedEmployeeTask'
import UpcomingEmpSaleTask from './Pages/UpcomingEmpSaleTask'
import UpcomingAddNewLead from './Pages/UpcomingAddNewLead'
import AdminFinance from './Pages/AdminFinance'
import Payroll from './Pages/Payroll'
import Payslip from './Pages/Payslip'
import Clients from './Pages/Clients'
import AddnewClients from './Pages/AddNewClients'
import AdminExistingInvoice from './Pages/AdminExistingInvoice'
import InvoiceBill from './Pages/InvoiceBill'
import AttendanceList from './Pages/AttendanceList'
import LeaveRequest from './Pages/LeaveRequest'
import Attendancereporter from './Pages/Attendancereporter'
import MailInbox from './Pages/MailInbox'
import NewMail from './Pages/NewMail'
import NewChat from './Pages/NewChat'
import Settings from './Pages/Settings'
import Login from './Pages/Login'
import Otp from './Pages/Otp'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<AdminDashboard/>}/>
      <Route path="/adminsoftware" element={<AdminSoftware/>}/>
      <Route path="/sales" element={<Sales/>}/>
      <Route path="/salesemployeetask" element={<SalesEmployeeTask/>}/>
      <Route path="/upcomingtask" element={<UpcomingTask/>}/>
      <Route path="/upcomingaddnewtask" element={<UpcomingAddnewTask/>}/>
      <Route path="/upcomingsaletask" element={<UpcomingsaleTask/>}/>
      <Route path="/upcomingempsaletask" element={<UpcomingEmpSaleTask/>}/>
      <Route path="/upcomingaddnewlead" element={<UpcomingAddNewLead/>}/>
      <Route path="/runningtask" element={<RunningTask/>}/>
      <Route path="/runningtasksales" element={<RunningTaskSales/>}/>
      <Route path="/runningemployeetask" element={<RunningEmployeeTask/>}/>
      <Route path="/completedtask" element={<CompletedTask/>}/>
      <Route path="/completedtasksales" element={<CompletedTaskSales/>}/>
      <Route path="/completedemployeetask" element={<CompletedEmployeeTask/>}/>
      <Route path="/adminfinance" element={<AdminFinance/>}/>
      <Route path="/payroll" element={<Payroll/>}/>
      <Route path="/payslip" element={<Payslip/>}/>
      <Route path="/clients" element={<Clients/>}/>
      <Route path="/addnewclients" element={<AddnewClients/>}/>
      <Route path="/adminexistinginvoice" element={<AdminExistingInvoice/>}/>
      <Route path="/invoicebill" element={<InvoiceBill/>}/>
      <Route path="/attendancelist" element={<AttendanceList/>}/>
      <Route path="/leaverequest" element={<LeaveRequest/>}/>
      <Route path="/attendancereporter" element={<Attendancereporter/>}/>
      <Route path="/mailinbox" element={<MailInbox/>}/>
      <Route path="/newmail" element={<NewMail/>}/>
      <Route path="/newchat" element={<NewChat/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/otp" element={<Otp/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route path="/resetpassword" element={<ResetPassword/>}/>
    </Routes>
    </>
  )
}

export default App
