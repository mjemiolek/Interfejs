import { Link } from "react-router-dom";
import img from "../images/logo-retro.png";
import "./header.css";
import { FaSortDown } from "react-icons/fa";

export default function Header() {
  const scroolTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <img className="imgClass" src={img} alt="" />
          <li className="topListItem hover-underline-animation">
            {/* <Link className="link" to="/" onClick={scroolTop}> */}
              Strona główna
            {/* </Link> */}
          </li>
          <li className="topListItem hover-underline-animation">
            {/* <Link className="link" to="/" onClick={scroolTop}> */}
              Katalog 
            {/* </Link> */}
          </li>
          <FaSortDown/>
          <li className="topListItem hover-underline-animation">
            {/* <Link className="link" to="/about" onClick={scroolTop}> */}
              Rezerwacje
            {/* </Link> */}
          </li>
          <li className="topListItem hover-underline-animation">
            {/* <Link className="link" to="/contact" onClick={scroolTop}> */}
              Kontakt
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
}