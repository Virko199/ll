import "./Dishes.css"
import {Link} from "react-router-dom";

const Dishes = ({ items }) => (
    <ul className="dishes">
        {items.map(({ id, title, desc, price, imgUrl}) => (
            <li key={id} className="dishes-item">
                <div className="dishes-item-img">
                    <img src={imgUrl} alt={title} />
                </div>
                <div className="dishes-item-content">
                    <div className="dishes-item-title">
                        <h6>{title}</h6>
                        <h6 className="dishes-item-price">{price}</h6>
                    </div>
                    <p>{desc}</p>
                    <Link to="/">Order a delivery</Link>
                </div>
            </li>
        ))}
    </ul>
)

export default Dishes;
