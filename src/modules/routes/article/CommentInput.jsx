import { useFetcher } from 'react-router';

export default function CommentInput() {
    const fetcher = useFetcher();

    return (
        <div className='post-comment-cont'>
            <fetcher.Form
                method='POST'
                action='/comments'
                className='add-comment-form'
            >
                <div className='form-row'>
                    <label htmlFor='comment'>Add a comment</label>
                    <textarea name='comment' id='comment'></textarea>
                </div>
                <button type='submit'>Comment</button>
            </fetcher.Form>
        </div>
    );
}
