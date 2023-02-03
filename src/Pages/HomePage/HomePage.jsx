import {AboutSection, MainSection, MenuSection} from "../../Components";
import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    return (
        <>
            <MainSection />
            <MenuSection />
            <AboutSection />
        </>
    )
}
export default HomePage;
