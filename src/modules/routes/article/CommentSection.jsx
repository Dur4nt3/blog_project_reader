import './stylesheets/CommentSection.css';

export default function CommentSection({ children }) {
    return <div className="comment-section">
        <h2 className="comment-section-heading">Comments</h2>
        {children}
    </div>
}