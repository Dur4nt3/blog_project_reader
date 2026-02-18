import Markdown from 'react-markdown';

export default function ArticleContent({ content, lastModification }) {
    return (
        <>
            <div className='article-markdown-content'>
                <Markdown
                    components={{
                        br: () => <span className='md-break'></span>,
                    }}
                >
                    {content}
                </Markdown>
            </div>
            <p className='article-latest-edit'>
                Latest edit @ {lastModification}
            </p>
        </>
    );
}
