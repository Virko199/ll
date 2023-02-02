import { Link, useLocation } from "react-router-dom";

import "./HeaderNav.css";
import { navData, prepareLinkState } from "./utils";

const HeaderNav = () => {
    const { pathname, hash } = useLocation();

    return(
        <nav className="header-nav">
            <ul className="header-nav-list">
                {navData.map(({desc, to, id}) => (
                    <li key={id}>
                        <Link className={prepareLinkState(pathname, hash, to) ? 'active' : ''} to={to}>{desc}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default HeaderNav;
