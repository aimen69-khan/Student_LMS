import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  BookOpen,
  CalendarCheck,
  ClipboardList,
  HelpCircle,
  ChevronLeft,
  Menu,
} from "lucide-react";
import "./Sidebar.css";

const navItems = [
  { label: "Dashboard", icon: LayoutGrid, path: "/student-dashboard" },
  { label: "Progress", icon: BookOpen, path: "/student-progress" },
  { label: "Attendance", icon: CalendarCheck, path: "/student-attendance" },
  { label: "Assignment", icon: ClipboardList, path: "/student-assignment" },
  { label: "Quiz", icon: HelpCircle, path: "/student-quiz" },
];

export default function Sidebar({ userName = "Student" }) {
  // Only matters on small screens — the sidebar becomes a slide-in drawer there.
  const [isOpen, setIsOpen] = useState(false);

  const initials = userName
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger icon — hidden on desktop, shown on small screens via CSS */}
      <button
        className="sidebar-mobile-toggle"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Dark backdrop behind the open drawer on mobile */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <img src="/logo.png" alt="SMIT" className="sidebar-logo" />
          <button
            className="sidebar-collapse"
            aria-label="Close menu"
            onClick={closeSidebar}
          >
            <ChevronLeft size={16} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map(({ label, icon: Icon, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-user">
          <div className="sidebar-avatar">{initials}</div>
          <span className="sidebar-username">{userName}</span>
        </div>
      </aside>
    </>
  );
}