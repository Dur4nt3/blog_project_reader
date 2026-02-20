import { useState, useEffect } from 'react';
import { useFetcher } from 'react-router';

import { formatWithNamedMonth } from '../../utilities/formatDate';

import FormLevelError from '../root/FormLevelError';
import FormLoader from '../../utilities/miscUI/FormLoader';
import FormRowTextArea from '../root/FormRowTextArea';

function ArticleCommentCont({ comment, currentUserIsOwner }) {
    const [editToggled, toggleEdit] = useState(false);

    const editFetcher = useFetcher();
    const deleteFetcher = useFetcher();

    useEffect(() => {
        if (editFetcher.data?.success === true) {
            toggleEdit(false);
        }
    }, [editFetcher.data]);

    return (
        <div className='comment-cont' key={comment.commentId}>
            {deleteFetcher.data?.success === false && (
                <FormLevelError
                    errorText={
                        'An error occurred while attempting to delete your comment, try again later.'
                    }
                />
            )}

            <div className='comment-heading'>
                <h3 className='comment-author'>
                    {comment.author.name}{' '}
                    {currentUserIsOwner === true && (
                        <span className='personal-comment-indicator'>
                            (You)
                        </span>
                    )}
                </h3>
                <p className='comment-date'>
                    {formatWithNamedMonth(comment.createdAt)}{' '}
                    {comment.edited && '(Edited)'}
                </p>
            </div>

            {editToggled ? (
                <editFetcher.Form
                    method='PUT'
                    // eslint-disable-next-line @stylistic/max-len
                    action={`/articles/${comment.postId}/comments/${comment.commentId}`}
                    className='edit-comment-form'
                >
                    {editFetcher.data?.errors?.formLevel !== null &&
                        editFetcher.data?.errors?.formLevel !== undefined && (
                            <FormLevelError
                                errorText={editFetcher.data.errors.formLevel}
                            />
                        )}

                    <FormRowTextArea
                        labelContent='Comment'
                        fieldName='comment'
                        error={editFetcher.data?.errors?.comment}
                        classes='short-text-area'
                        defaultValue={comment.content}
                    />

                    <div className='edit-comment-actions'>
                        <button
                            type='button'
                            onClick={() => toggleEdit(false)}
                            className='cancel-edit'
                        >
                            Cancel
                        </button>
                        <button
                            type='submit'
                            className='send-edit'
                            disabled={editFetcher.state !== 'idle'}
                        >
                            {editFetcher.state === 'idle' ? (
                                'Edit'
                            ) : (
                                <FormLoader color='#2563eb' size='16' />
                            )}
                        </button>
                    </div>
                </editFetcher.Form>
            ) : (
                <p className='comment-content'>{comment.content}</p>
            )}

            {currentUserIsOwner === true && (
                <div className='comment-actions'>
                    {editToggled === false && (
                        <>
                            <button
                                className='edit-comment-button'
                                type='button'
                                onClick={() => toggleEdit(true)}
                            >
                                Edit
                            </button>
                            <deleteFetcher.Form
                                method='DELETE'
                                // eslint-disable-next-line @stylistic/max-len
                                action={`/articles/${comment.postId}/comments/${comment.commentId}`}
                            >
                                <button
                                    disabled={deleteFetcher.state !== 'idle'}
                                    className='delete-comment-button'
                                    type='submit'
                                >
                                    {deleteFetcher.state === 'idle' ? (
                                        'Delete'
                                    ) : (
                                        <FormLoader color='#991818' size='16' />
                                    )}
                                </button>
                            </deleteFetcher.Form>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

function ArticleCommentsContent({ comments, currentUserComments }) {
    if (comments === null) {
        return (
            <p className='no-comments-notice'>
                Comments are temporarily unavailable.
            </p>
        );
    }

    if (comments.length === 0) {
        return <p className='no-comments-notice'>No comments yet.</p>;
    }

    return (
        <>
            {comments.map((comment) => (
                <ArticleCommentCont
                    comment={comment}
                    currentUserIsOwner={
                        currentUserComments[comment.commentId] === true
                    }
                    key={comment.commentId}
                />
            ))}
        </>
    );
}

export default function ArticleComments({ comments, currentUserComments }) {
    return (
        <div className='all-article-comments'>
            <ArticleCommentsContent
                comments={comments}
                currentUserComments={currentUserComments}
            />
        </div>
    );
}
