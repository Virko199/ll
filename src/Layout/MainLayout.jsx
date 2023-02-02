import './Layout.css';
import { Header, Footer } from "../Components";
const MainLayout = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
)

export default MainLayout;