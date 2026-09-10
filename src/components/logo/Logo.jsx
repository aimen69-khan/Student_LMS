import "./Logo.css";

export default function Logo({ portalName }) {
  return (
    <div className="logo-wrap">
      <img src="/logo.png" alt="SMIT" className="logo-img" />
      <h1 className="portal-title">{portalName}</h1>
    </div>
  );
}