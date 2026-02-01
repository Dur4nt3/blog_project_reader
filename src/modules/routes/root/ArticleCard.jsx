import './stylesheets/ArticleCard.css';

export default function ArticleCard({ title, summary, author, date }) {
    return (
        <div className='article-card'>
            <h3 className='card-title'>{title}</h3>
            <p className='card-summary'>{summary}</p>
            <p className='card-misc'>
                {author} @ {date}
            </p>

            <div className="section-divider conditional-divider"></div>
        </div>
    );
}
