import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import QuizInfoBanner from "../../components/quizinfobanner/QuizInfoBanner";
import QuizTable from "../../components/quiztable/QuizTable";
import "./StudentQuiz.css";

const infoItems = [
  "Once started, quizzes must be completed in one session",
  "Switching tabs or leaving the window will be recorded",
  "Ensure you have a stable internet connection",
  "The quiz will open in fullscreen mode",
];

const quizzes = [
  {
    title: "Javascript (Quiz-4)",
    module: "Modern Front-End Development",
    questions: 40,
    attempts: "1/3",
    percentage: 90,
    status: "PASSED",
    action: "Completed",
  },
  {
    title: "Javascript (Quiz-3)",
    module: "Modern Front-End Development",
    questions: 40,
    attempts: "1/3",
    percentage: 85,
    status: "PASSED",
    action: "Completed",
  },
  {
    title: "Javascript (Quiz-2)",
    module: "Modern Front-End Development",
    questions: 40,
    attempts: "1/3",
    percentage: 83,
    status: "PASSED",
    action: "Completed",
  },
  {
    title: "Javascript (Quiz-1)",
    module: "Modern Front-End Development",
    questions: 40,
    attempts: "1/3",
    percentage: 93,
    status: "PASSED",
    action: "Completed",
  },
  {
    title: "CSS Quiz",
    module: "Front-End Development",
    questions: 40,
    attempts: "1/3",
    percentage: 57,
    status: "FAILED",
    action: "Completed",
  },
  {
    title: "HTML Quiz",
    module: "Web Designing",
    questions: 40,
    attempts: "1/3",
    percentage: 73,
    status: "PASSED",
    action: "Completed",
  },
];

export default function StudentQuiz() {
  return (
    <div className="dashboard-layout">
      <Sidebar userName="Ahmed Raza" />

      <div className="dashboard-main">
        <Topbar
          breadcrumb={["Home", "Modern Web Application Development", "Quiz"]}
        />

        <div className="page-content">
          <QuizInfoBanner items={infoItems} />
          <QuizTable rows={quizzes} />
        </div>
      </div>
    </div>
  );
}