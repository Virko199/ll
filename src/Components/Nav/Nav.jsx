import { Link, useLocation } from "react-router-dom";

import "./Nav.css";
import { navData, prepareLinkState } from "./utils";

const Nav = ({ extraClass = '', onClick = () => {} }) => {
    const { pathname, hash } = useLocation();

    return(
        <nav className={`nav ${extraClass}`}>
            <ul className="nav-list">
                {navData.map(({desc, to, id, isAnchor}) => (
                    <li key={id} onClick={onClick}>
                        {isAnchor ? <a className={prepareLinkState(pathname, hash, to) ? 'active' : ''} href={to}>{desc}</a> :
                        <Link className={prepareLinkState(pathname, hash, to) ? 'active' : ''} to={to}>{desc}</Link>}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;
