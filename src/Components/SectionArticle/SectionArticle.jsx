import "./SectionArticle.css";

const SectionArticle = ({ children, title, subtitle, desc, extraClass }) => (
    <article className={`section-article ${extraClass}`}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{desc}</p>
        {children}
    </article>
)

export default SectionArticle;