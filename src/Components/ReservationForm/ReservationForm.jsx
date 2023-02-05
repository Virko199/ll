import {useEffect, useState} from "react";
import "./ReservationForm.css";
import {EMAIL_REGEXP, fetchAPI, PHONE_REGEXP, submitAPI} from "../../utis";

const Form = ()  => {
    const initState = {
        name: '',
        email: '',
        phone: '',
        guests: '',
        date: '',
        time: '',
    };

    const [availableHours, setAvailableHours] = useState([]);
    const [formState, setFormState] = useState(initState);
    const [formErrors, setFormErrors] = useState(initState);
    const [successModal, setSuccessModal] = useState(false);

    useEffect(() => {
        if (successModal) {
            setTimeout(() => setSuccessModal(false), 4000);
        }
    }, [successModal]);
    const handleChange = inputName => e => {
        setFormErrors(prevState => ({...prevState, [inputName]: ''}));
        setFormState(prevState => ({...prevState, [inputName]: e.target.value}));

        if (inputName === "date") {
            const res = fetchAPI(new Date(formState.date));
            const inputTime = "time";

            if (res.length) {
                setAvailableHours(res);
                setFormState(prevState => ({...prevState, [inputTime]: res[0]}));
            } else {
                setFormErrors(prevState => ({...prevState, [inputName]: "Sorry, but no available hours :( But, you can choose another date"}));
            }
        }
    };

    const prepareDate = (date, time) => !date || !time ? '' : `${date} ${time}`;

    const prepareData = ({ name, email, phone, guests, date, time}) => ({
        name,
        email,
        phone,
        guests,
        date: prepareDate(date, time),
    });

    const handleValid = (data) => {
        let isValid = true;
        const keys = Object.keys(data);
        setFormErrors(initState);
        keys.forEach(item => {
            if (!data[item]) {

                setFormErrors(prevState => ({...prevState, [item]: `${item} is required`}));
                isValid = false;
            } else {
                if (item === 'email' && !data[item].match(EMAIL_REGEXP)) {
                    setFormErrors(prevState => ({...prevState, [item]: `${item} is not valid`}));
                    isValid = false;
                }
                if (item === 'phone') {
                    if (!data[item].match(PHONE_REGEXP)) {
                        setFormErrors(prevState => ({...prevState, [item]: `${item} must match - 123 456 78 90`}));
                        isValid = false;
                    }

                    if (data[item].length !== 10) {
                        setFormErrors(prevState => ({...prevState, [item]: `${item} length must be 10`}));
                        isValid = false;
                    }
                }
                if (item === 'guests' && data[item] < 1) {
                    setFormErrors(prevState => ({...prevState, [item]: "Must be at least 1 guest"}));
                    isValid = false;
                }
            }
        });
        return isValid;
    };

    const handleSubmit = e => {
        e.preventDefault();
        const preparedData = prepareData(formState);

        if (handleValid(preparedData)) {
            const res = submitAPI(preparedData);
            if (res === true) {
                setSuccessModal(true);
                setFormErrors(initState);
                setFormState(initState);
                setAvailableHours([]);
            }
        }
    }

    const prepareInputStyle = inputErr => inputErr ? 'invalid-field' : '';

    return (
        <>
        <form className="reservation-form" onSubmit={handleSubmit}>
                <div className="reservation-form-field">
                    <label className={prepareInputStyle(formErrors.name)} htmlFor="name">Name</label>
                    <input className={prepareInputStyle(formErrors.name)} value={formState.name} type="text" placeholder="Your name" name="name" onChange={handleChange("name")} />
                    <span>{formErrors.name}</span>
                </div>
                <div className="reservation-form-field">
                    <label className={prepareInputStyle(formErrors.email)} htmlFor="email">Email</label>
                    <input className={prepareInputStyle(formErrors.email)} value={formState.email} type="text" placeholder="Your email address" name="email" onChange={handleChange("email")} />
                    <span>{formErrors.email}</span>
                </div>
                <div className="reservation-form-field">
                    <label className={prepareInputStyle(formErrors.phone)} htmlFor="phone">Phone</label>
                    <input className={prepareInputStyle(formErrors.phone)} value={formState.phone} type="tel" placeholder="Your phone number, pattern - 123 456 78 90" name="phone" onChange={handleChange("phone")} />
                    <span>{formErrors.phone}</span>
                </div>
                <div className="reservation-form-field">
                    <label className={prepareInputStyle(formErrors.guests)} htmlFor="guests">Guests</label>
                    <input className={prepareInputStyle(formErrors.guests)} value={formState.guests} type="number" placeholder="Number of guests, can't be 0" name="guests" onChange={handleChange("guests")}/>
                    <span>{formErrors.guests}</span>
                </div>
                <div className="reservation-form-field">
                    <label className={prepareInputStyle(formErrors.date)} htmlFor="date">Date</label>
                    <input className={prepareInputStyle(formErrors.date)} value={formState.date} type="date" name="date" onChange={handleChange("date")} />
                    <span>{formErrors.date}</span>
                </div>
            {availableHours.length ? <div className="reservation-form-field">
                <label htmlFor="time">Time</label>
                <div className="options">
                    <select value={formState.time} name="time" onChange={handleChange("time")}>
                        {availableHours.map(item => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
            </div> : null}
                <button className="reserve-btn" type="submit">Reserve</button>
        </form>
            <div className={`modal-backdrop ${successModal ? 'isOpen' : ''}`} onClick={() => setSuccessModal(false)}>
                <div className="modal-container">
                    <div className="modal-content">
                        <h2>🎉🎉🎉 Congrats you have successfully booked a table!</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;
