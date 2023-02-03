import "./App.css";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage/HomePage";
import ReservationPage from "./Pages/ReservationPage/ReservationPage";
const App = () =>
    <>
        <Routes>
            <Route path="/" element={
                <MainLayout>
                    <HomePage />
                </MainLayout>}
            />
            <Route path="/reservations" element={
                <MainLayout>
                    <ReservationPage />
                </MainLayout>}
            />
            <Route path="*" element={
                <MainLayout>
                    <HomePage />
                </MainLayout>}
            />
        </Routes>
    </>

export default App;
