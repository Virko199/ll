import './Layout.css';
import { Header } from "../Components";
const MainLayout = ({ children }) => (
    <>
        <Header />
        {children}
        <footer>footer</footer>
    </>
)

export default MainLayout;