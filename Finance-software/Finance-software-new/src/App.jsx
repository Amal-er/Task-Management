
import { Route, Routes } from 'react-router-dom';
import './App.css'
import FinanceDashboard from './Pages/FinanceDashboard';
import FinanceSoftware from './Pages/FinanceSoftware';
import FinanceUpcomingTask from './Pages/FinanceUpcomingTask';
import FinanceRunningTask from './Pages/FinanceRunningTask';
import FinanceCompleted from './Pages/FinanceCompleted';
import Finance from './Pages/Finance';
import FinancePayroll from './Pages/FinancePayroll';
import FinancePayslip from './Pages/FinancePayslip';
import FinanceClients from './Pages/FinanceClients';
import FinaAddnewClients from './Pages/FinaAddnewClients';
import FinaexistInvoice from './Pages/FinaexistInvoice';
import FinaBillDetails from './Pages/FinaBillDetails';
import FinanceAttendance from './Pages/FinanceAttendance';
import FinanceLeave from './Pages/FinanceLeave';
import FinanceTeamAttendance from './Pages/FinanceTeamAttendance';
import FinanceMailInbox from './Pages/FinanceMailInbox';
import FinanceNewMail from './Pages/FinanceNewMail';
import FinanceNewChat from './Pages/FinanceNewChat';
import FinanceSettings from './Pages/FinanceSettings';
import Login from './Pages/Login'
import Otp from './Pages/Otp'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword'
function App() {

  return (
    <>
    <Routes>
      <Route path='financedashboard' element={<FinanceDashboard/>}/>
      <Route path='financesoftware' element={<FinanceSoftware/>}/>
      <Route path='financeupcomingtask' element={<FinanceUpcomingTask/>}/>
      <Route path='financerunningtask' element={<FinanceRunningTask/>}/>
      <Route path='financecompleted' element={<FinanceCompleted/>}/>
      <Route path='finance' element={<Finance/>}/>
      <Route path='financepayroll' element={<FinancePayroll/>}/>
      <Route path='financepayslip' element={<FinancePayslip/>}/>
      <Route path='financeclients' element={<FinanceClients/>}/>
      <Route path='finaaddnewclients' element={<FinaAddnewClients/>}/>
      <Route path='finaexistinvoice' element={<FinaexistInvoice/>}/>
      <Route path='finabilldetails' element={<FinaBillDetails/>}/>
      <Route path='financeattendance' element={<FinanceAttendance/>}/>
      <Route path='financeleave' element={<FinanceLeave/>}/>
      <Route path='financeteamattendance' element={<FinanceTeamAttendance/>}/>
      <Route path='financemailinbox' element={<FinanceMailInbox/>}/>
      <Route path='financenewmail' element={<FinanceNewMail/>}/>
      <Route path='financenewchat' element={<FinanceNewChat/>}/>
      <Route path='financesettings' element={<FinanceSettings/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/otp" element={<Otp/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route path="/resetpassword" element={<ResetPassword/>}/>
    </Routes>
    </>
  )
}

export default App
