import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {

  return (
    <div className="topo">
      <div className="topCenter">
            <section className='titlee'>Media społecznościowe</section>
            <Link className="link space-bet byg" >facebook</Link>
            <Link className="link space-bet byg" >google</Link>
            <div className="space-bet">
            <Link className="link space-bet smol" >Regulamin Retro Gaming Clubu</Link>
            -
            <Link className="link space-bet smol" >Polityka Prywatności</Link>
            -
            <Link className="link space-bet smol" >Polityka Cookies</Link>
            </div>
      </div>
    </div>
  );
}