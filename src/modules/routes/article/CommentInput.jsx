import { useRef, useEffect } from 'react';
import { useFetcher } from 'react-router';

import FormRowTextArea from '../root/FormRowTextArea';
import FormLoader from '../../utilities/miscUI/FormLoader';
import FormLevelError from '../root/FormLevelError';

export default function CommentInput({ articleId }) {
    const commentRef = useRef(null);
    const fetcher = useFetcher();

    useEffect(() => {
        if (fetcher.data?.success === true && commentRef.current) {
            commentRef.current.value = '';
        }
    }, [fetcher.data]);

    return (
        <div className='post-comment-cont'>
            <fetcher.Form
                method='POST'
                action={`/articles/${articleId}/comments`}
                className='add-comment-form'
            >
                {fetcher.data?.errors?.formLevel !== null &&
                    fetcher.data?.errors?.formLevel !== undefined && (
                        <FormLevelError
                            errorText={fetcher.data.errors.formLevel}
                        />
                    )}

                <FormRowTextArea
                    labelContent='Comment'
                    fieldName='comment'
                    error={fetcher.data?.errors?.comment}
                    classes='short-text-area'
                    ref={commentRef}
                />

                <button type='submit'>
                    {fetcher.state === 'idle' ? 'Comment' : <FormLoader />}
                </button>
            </fetcher.Form>
        </div>
    );
}
