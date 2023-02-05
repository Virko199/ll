import "./MenuSection.css";
import { mocksData } from "./mock";
import { MainBtn, Dishes } from "../index";

const MenuSection = () => (
    <section id="menu" className="menu-section">
        <div className="container menu-section-container">
            <header className="menu-section-header">
                <h2>This Week's Specials</h2>
                <MainBtn desc="Online menu"/>
            </header>
            <Dishes items={mocksData} />
        </div>
    </section>
);

export default MenuSection;
