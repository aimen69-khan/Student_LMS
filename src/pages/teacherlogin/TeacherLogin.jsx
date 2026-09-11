import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/passwordinput/PasswordInput";
import Button from "../../components/button/Button";
import "./TeacherLogin.css";

export default function TeacherLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Enter your Email and Password to continue.");
      return;
    }
    if(email === "teacher123@gmail.com" && password === "teacher123"){
      setError("");
      navigate("/teacher-dashboard");
      return;
    }

    setError("");
  };

  return (
    <div className="page">
      <div className="auth-container">
        <Logo portalName="Teacher Portal" />

        <div className="card">
          <h2 className="card-title">Login</h2>
          <p className="card-desc">
          </p>

          <Input
            label="EMAIL"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
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

        <button className="role-btn" onClick={() => navigate("/")}>
          Back to student login
        </button>
      </div>
    </div>
  );
}