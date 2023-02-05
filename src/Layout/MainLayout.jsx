import "./Layout.css";
import { Header, Footer } from "../Components";
const MainLayout = ({ children }) => (
    <div className="main-wrap">
        <Header />
        {children}
        <Footer />
    </div>
)

export default MainLayout;