import restaurantImg from "../../Assets/restaurant.jpg";
import "./MainSection.css";
import { Link } from "react-router-dom";
import { MainBtn } from "../index";
import SectionArticle from "../SectionArticle/SectionArticle";

const MainSection = () => (
    <section className="main-section">
        <div className="container main-section-container">
            <SectionArticle
                title="Little lemon"
                subtitle="Chicago"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus enim harum hic
                tempora veniam veritatis voluptatem voluptatum? Asperiores ea exercitationem in labore
                nemo provident quae rem sint sit! Ea, enim."
            >
                <Link to="/reservations">
                    <MainBtn desc="Reserve a table"/>
                </Link>
            </SectionArticle>
            <div className="main-section-img">
                <img src={restaurantImg} alt="restaurant" />
            </div>
        </div>
    </section>
);

export default MainSection;
