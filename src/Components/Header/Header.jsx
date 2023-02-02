import './Header.css';
import logo from '../../Assets/Logo.svg';
import { HeaderNav } from "../index";
const Header = () => {
    return(
        <header className="header">
            <div className="header-container container">
                <div className="header-logo"><img src={logo} alt="little lemon logo" /></div>
                <HeaderNav />
            </div>
        </header>
    )
}

export default Header;