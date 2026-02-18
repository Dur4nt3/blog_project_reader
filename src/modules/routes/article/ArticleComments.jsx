import { formatWithNamedMonth } from '../../utilities/formatDate';

export default function ArticleComments({ comments }) {
    return (
        <div className='all-article-comments'>
            {comments.length === 0 ? (
                <p className='no-comments-notice'>No comments yet.</p>
            ) : (
                comments.map((comment) => (
                    <div className='comment-cont' key={comment.id}>
                        <div className='comment-heading'>
                            <h3 className='comment-author'>
                                {comment.author.name}
                            </h3>
                            <p className='comment-date'>
                                {formatWithNamedMonth(comment.createdAt)}{' '}
                                {comment.edited && '(Edited)'}
                            </p>
                        </div>

                        <p className='comment-content'>{comment.content}</p>
                    </div>
                ))
            )}
        </div>
    );
}
