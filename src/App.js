import "./App.css";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
const App = () =>
    <>
        <Routes>
            <Route path="/" element={<MainLayout><div>main</div></MainLayout>} />
            <Route path="/reservations" element={<MainLayout><div>reserve</div></MainLayout>} />
            <Route path="*" element={<MainLayout><div>main</div></MainLayout>} />
        </Routes>
    </>

export default App;
