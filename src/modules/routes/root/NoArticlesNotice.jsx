import './stylesheets/NoArticlesNotice.css';

export default function NoArticlesNotice() {
    return (
        <div className='no-articles-notice'>
            <h2>Articles are temporarily unavailable.</h2>
            <p>
                We couldn't load the latest articles. This is likely a temporary
                issue. Try refreshing, or try again later.
            </p>
        </div>
    );
}
