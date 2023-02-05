import "./Reservation.css"
import {ReservationForm} from "../../Components";
import {useEffect} from "react";
const ReservationPage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    return (
            <div className="reserve">
                <div className="reserve-container">
                    <ReservationForm />
                </div>
            </div>
    )
}
export default ReservationPage;
