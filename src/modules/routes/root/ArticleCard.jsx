import { Link } from 'react-router';

import './stylesheets/ArticleCard.css';

export default function ArticleCard({ id, title, summary, author, date }) {
    return (
        <div className='article-card'>
            <h3 className='card-title'>
                <Link to={`/articles/${id}`}>{title}</Link>
            </h3>
            <p className='card-summary'>{summary}</p>
            <p className='card-misc'>
                {author} @ {date}
            </p>

            <div className="section-divider conditional-divider"></div>
        </div>
    );
}
