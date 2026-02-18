import { Link } from 'react-router';

export default function CommentLoginNotice() {
    return (
        <div className='comment-login-notice'>
            <h3>You must be logged in to leave a comment.</h3>
            <Link to='/login'>Log in to participate</Link>
        </div>
    );
}
