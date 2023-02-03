import "./MenuSection.css";
import { mockedData } from "./utils";
import { MainBtn, Dishes } from "../index";

const MenuSection = () => (
    <section id="menu" className="menu-section">
        <div className="container menu-section-container">
            <header className="menu-section-header">
                <h2>This Week's Specials</h2>
                <MainBtn desc="Online menu"/>
            </header>
            <Dishes items={mockedData} />
        </div>
    </section>
);

export default MenuSection;
