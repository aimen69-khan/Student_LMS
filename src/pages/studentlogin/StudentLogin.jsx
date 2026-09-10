import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/passwordinput/PasswordInput";
import Button from "../../components/button/Button";
import "./StudentLogin.css";


export default function StudentLogin() {
  const navigate = useNavigate();
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 
  const handleLogin = () => {
    if (!cnic || !password) {
      setError("Enter your CNIC and password to continue.");
      return;
    }
    if (cnic === "12345-6789101-1" && password === "123456") {
      setError("");
      navigate("/student-dashboard");
      return;
    }
 
    setError("Invalid CNIC or password.");
  };
 
  return (
    <div className="page">
      <div className="auth-container">
        <Logo portalName="Student Portal" />
 
        <div className="card">
          <h2 className="card-title">Login</h2>
          <p className="card-desc">
          </p>
 
          <Input
            label="CNIC"
            required
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            placeholder="42101-1234567-1"
          />
 
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
 
          {error && <p className="error-text">{error}</p>}
 
          <Button variant="primary" onClick={handleLogin}>
            LOGIN
          </Button>
        </div>
 
        <button className="role-btn" onClick={() => navigate("/teacher-login")}>
          Login as teacher
        </button>
        <button className="role-btn" onClick={() => navigate("/admin-login")}>
          Login as admin
        </button>
      </div>
    </div>
  );
}
 