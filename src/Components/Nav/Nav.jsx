import { Link, useLocation } from "react-router-dom";

import "./Nav.css";
import { navData, prepareLinkState } from "./utils";

const Nav = ({ extraClass = '' }) => {
    const { pathname, hash } = useLocation();

    return(
        <nav className={`nav ${extraClass}`}>
            <ul className="nav-list">
                {navData.map(({desc, to, id}) => (
                    <li key={id}>
                        <Link className={prepareLinkState(pathname, hash, to) ? 'active' : ''} to={to}>{desc}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;
