import './stylesheets/NoArticlesNotice.css';

export default function NoArticlesNotice({ header, content }) {
    return (
        <div className='no-articles-notice'>
            <h2>{header}</h2>
            <p>{content}</p>
        </div>
    );
}
