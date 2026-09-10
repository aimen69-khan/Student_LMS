import "./Input.css";

export default function Input({ label, required, ...props }) {
  return (
    <div className="input-group">
      <label className="input-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <input className="input-field" {...props} />
    </div>
  );
}