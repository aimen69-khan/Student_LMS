import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/passwordinput/PasswordInput";
import Button from "../../components/button/Button";
import "./AdminLogin.css";


export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin123@gmail.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
 
  const handleLogin = () => {
    if (!email || !password) {
      setError("Enter your email and password to continue.");
      return;
    }
 
    // TODO: replace this with a real call to the admin auth endpoint.
    // Hardcoded for now so you can test the flow end to end.
    if (email === "admin123@gmail.com" && password === "admin123") {
      setError("");
      navigate("/admin-dashboard");
      return;
    }
 
    setError("Invalid email or password.");
  };
 
  return (
    <div className="page">
      <div className="auth-container">
        <Logo portalName="Admin Portal" />
 
        <div className="card">
          <h2 className="card-title">Login</h2>
          <p className="card-desc">
            Kindly provide your email and password to access the admin
            portal.
          </p>
 
          <Input
            label="Email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@smit.edu.pk"
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
 