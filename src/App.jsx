import './App.css'
import { Route, Routes } from 'react-router-dom'
import StudentLogin from './pages/studentlogin/StudentLogin'
import TeacherLogin from './pages/teacherlogin/TeacherLogin'
import AdminLogin from './pages/adminlogin/AdminLogin'
import StudentDashboard from './pages/studentdashboard/StudentDashboard'
import StudentProgress from './pages/studentprogress/StudentProgress'
import StudentAssignment from './pages/studentassignment/StudentAssignment'
import StudentAttendance from './pages/studentattendance/StudentAttendance'
import StudentQuiz from './pages/studentquiz/StudentQuiz'
import TSidebar from './pages/teacherdashboard/TeacherDashboard'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<StudentLogin />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path='/student-progress' element={<StudentProgress />} />
      <Route path='/student-assignment' element={<StudentAssignment />} />
      <Route path='/student-attendance' element={<StudentAttendance />} />
      <Route path='/student-quiz' element={<StudentQuiz />} />
      <Route path='/teacher-login' element={<TeacherLogin />} />
      <Route path='/teacher-dashboard' element={<TSidebar />} />
      <Route path='/admin-login' element={<AdminLogin />} />
    </Routes>
      
    </>
  )
}

export default App
