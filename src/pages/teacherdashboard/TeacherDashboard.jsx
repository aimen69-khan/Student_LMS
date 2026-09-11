import React from 'react'
import TSidebar from '../../components/tsidebar/TSidebar'
import Topbar from '../../components/topbar/Topbar'
import ActiveCourseCard from '../../components/activecoursecard/ActiveCourseCard'
import './TeacherDashboard.css'

const courses = [
  {
    title: "Web & App Development",
    progress: 68,
    meta: [
      { icon: "hash", label: "Batch", value: 20 },
      { icon: "users", label: "Students", value: 42 },
      { icon: "pin", label: "Campus", value: "Zaitoon Ashraf IT Park" },
      { icon: "pin", label: "City", value: "Karachi" },
    ],
  },
  {
    title: "Data Science",
    progress: 45,
    meta: [
      { icon: "hash", label: "Batch", value: 14 },
      { icon: "users", label: "Students", value: 35 },
      { icon: "pin", label: "Campus", value: "Zaitoon Ashraf IT Park" },
      { icon: "pin", label: "City", value: "Karachi" },
    ],
  },
];

export default function TeacherDashboard() {
  return (
    <>
      <div className="dashboard-layout">
      <TSidebar />

      <div className="dashboard-main">
        <Topbar breadcrumb={["Home", "Dashboard"]} />

        <div className="page-content">
          <h3 className="section-heading">Training Courses</h3>
 
          {courses.map((course) => (
            <ActiveCourseCard
              key={course.title}
              title={course.title}
              status="ACTIVE"
              progress={course.progress}
              meta={course.meta}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
