import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "../input/Input.css";
import "./PasswordInput.css";

export default function PasswordInput({
  label = "Password",
  required = true,
  value,
  onChange,
  placeholder = "Enter your password",
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="input-group">
      <label className="input-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <div className="password-wrap">
        <input
          type={show ? "text" : "password"}
          className="input-field password-field"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <button
          type="button"
          className="password-toggle"
          onClick={() => setShow(!show)}
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}