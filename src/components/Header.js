import "./Header.css";
// import Logo from "../images/logo black.png";
import Logo from "./Logo";
const Header = () => {
  return (
    <div className="Header">
      <div className="h-box-1">
        {/* <img src={Logo} alt="logo" /> */}
        <Logo />
      </div>
      <div className="h-box-2">
        <h2>Salesforce Health Cloud Accredited Professional</h2>
        <h2>Web Based Practice Exam</h2>
        <h4>Salesforce Health Cloud Accredited Professional (SP22)</h4>
        <h4 style={{ color: "black" }}>Version 10.0</h4>
      </div>
      <div className="h-box-3">
        <button title="Is not yet implemented.">End Exam</button>
      </div>
    </div>
  );
};

export default Header;
