export default function ArticleHeader({
    title,
    description,
    authorName,
    createdAt,
}) {
    return (
        <header className='article-header'>
            <h2 className='article-title'>{title}</h2>
            <h3 className='article-description'>{description}</h3>
            <h4 className='article-author'>
                By {authorName} @ {createdAt}
            </h4>
        </header>
    );
}
