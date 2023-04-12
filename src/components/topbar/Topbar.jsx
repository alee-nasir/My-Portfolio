import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Topbar({ menuOn, setMenuOn }) {
  return (
    <div className={"topbar " + (menuOn && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            {"<AN/>"}
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+39 350 9488891</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>ale.nasir254@gmail.com</span>
          </div>
          <div className="itemContainer">
            <LocationOnIcon className="icon" />
            <span>Italy</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOn(!menuOn)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
