import React from "react";
import "./MobileNav.css"
import menuIcon from "../../Assets/hamburger.svg"
import closeIcon from "../../Assets/close.svg"
import {useState} from "react";
const MobileNav = ({ children }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <div className="mobile-nav">
            <div onClick={() => setMenuOpen(true)}>
                <img src={menuIcon} alt="menu button"/>
            </div>
            <div className={`mobile-nav-backdrop ${isMenuOpen ? 'isOpen' : ''}`}>
                <div className="mobile-nav-close" onClick={() => setMenuOpen(false)}>
                    <img src={closeIcon} alt="close button"/>
                </div>
                { React.cloneElement( children, { onClick: () => setMenuOpen(false) } ) }
            </div>
        </div>
    )
}

export default MobileNav;