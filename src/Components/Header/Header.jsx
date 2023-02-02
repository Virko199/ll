import './Header.css';
import logo from '../../Assets/Logo.svg';
import { HeaderNav } from "../index";
import {Link} from "react-router-dom";
const Header = () => {
    return(
        <header className="header">
            <div className="header-container container">
                <div className="header-logo"><Link to="/"><img src={logo} alt="little lemon logo" /></Link></div>
                <HeaderNav />
            </div>
        </header>
    )
}

export default Header;