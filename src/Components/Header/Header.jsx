import "./Header.css";
import logo from "../../Assets/Logo.svg";
import {MobileNav, Nav} from "../index";
import {Link} from "react-router-dom";
const Header = () => (
    <header className="header">
        <div className="header-container container">
            <div className="header-logo"><Link to="/"><img src={logo} alt="little lemon logo" /></Link></div>
            <Nav extraClass="header-nav" />
            <MobileNav extraClass="header-mobile-nav">
                <Nav />
            </MobileNav>
        </div>
    </header>
);

export default Header;