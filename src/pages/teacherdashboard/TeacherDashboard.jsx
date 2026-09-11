import React from 'react'
import TSidebar from '../../components/tsidebar/TSidebar'
import Topbar from '../../components/topbar/Topbar'
import './TeacherDashboard.css'

export default function TeacherDashboard() {
  return (
    <>
      <div className="dashboard-layout">
      <TSidebar />

      <div className="dashboard-main">
        <Topbar breadcrumb={["Home", "Dashboard"]} />

        <div className="page-content"></div>
      </div>
    </div>
    </>
  )
}
