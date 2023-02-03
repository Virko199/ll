import "./AboutSection.css";
import {SectionArticle} from "../index";
import aboutImg from "../../Assets/about.jpg";

const AboutSection = () => (
    <section id="about" className="about">
        <div className="container about-container">
            <SectionArticle
                extraClass="about-article"
                title="Little lemon"
                subtitle="Chicago"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus enim harum hic
                tempora veniam veritatis voluptatem voluptatum? Asperiores ea exercitationem in labore
                nemo provident quae rem sint sit! Ea, enim."
            />
            <div className="about-img">
                <img className="bottom-layer" src={aboutImg} alt="about" />
                <img className="top-layer" src={aboutImg} alt="about" />
            </div>
        </div>
    </section>
)

export default AboutSection;
