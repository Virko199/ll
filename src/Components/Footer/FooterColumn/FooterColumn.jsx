import "./FooterColumn.css";

const FooterColumn = ({ title, items }) => (
    <div className="footer-column">
        <h2>{title}</h2>
        <ul>
            {items.map(({ desc, id}) => (
                <li key={id}>{desc}</li>
            ))}
        </ul>
    </div>
);


export default FooterColumn;