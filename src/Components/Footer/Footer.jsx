import './Footer.css';
import { MockedData } from "./utils";
import footerImg from '../../Assets/footer-img.jpg';
import { Nav } from "../index";
import FooterColumn from "./FooterColumn/FooterColumn";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-img"><img src={footerImg} alt={""}/></div>
                <div className="footer-columns">
                    <div className="footer-columns-item">
                        <h2>Description for column</h2>
                        <Nav extraClass="footer-nav" />
                    </div>
                    <FooterColumn title="Description for column 2" items={MockedData} />
                    <FooterColumn title="Description for column 3" items={MockedData} />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
