import { Route, Routes } from 'react-router-dom'
import './App.css'
import StudentLogin from './pages/studentlogin/StudentLogin'
import TeacherLogin from './pages/teacherlogin/TeacherLogin'
import AdminLogin from './pages/adminlogin/AdminLogin'
import StudentDashboard from './pages/studentdashboard/StudentDashboard'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<StudentLogin />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path='/teacher-login' element={<TeacherLogin />} />
      <Route path='/admin-login' element={<AdminLogin />} />
    </Routes>
      
    </>
  )
}

export default App
