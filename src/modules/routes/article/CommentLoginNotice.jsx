import { Link } from 'react-router';

export default function CommentLoginNotice({ articleId }) {
    const returnTo =
        articleId !== undefined
            ? encodeURIComponent(`/articles/${articleId}`)
            : null;
    const loginUrl =
        returnTo !== null ? `/login?returnTo=${returnTo}` : '/login';

    return (
        <div className='comment-login-notice'>
            <h3>You must be logged in to leave a comment.</h3>
            <Link to={loginUrl}>Log in to participate</Link>
        </div>
    );
}
