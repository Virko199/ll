import "./Footer.css";
import { MockedData } from "./utils";
import footerImg from "../../Assets/footer-img.jpg";
import { Nav } from "../index";
import FooterColumn from "./FooterColumn/FooterColumn";

const Footer = () => (
    <footer className="footer">
        <div className="container footer-container">
            <div className="footer-content">
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
            <span className="footer-copyright">© {new Date().getFullYear()} Little Lemon by Vl_Si. All rights reserved.</span>
        </div>
    </footer>
);

export default Footer;
