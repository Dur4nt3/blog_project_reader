import getErrorsObject from './validation/getErrorsObject';
import CommentError from './classes/CommentError';

export default function formatCommentResults(results, status) {
    if (results.success === true) {
        return true;
    }

    const serverError = new CommentError(
        'Could not process your request, try again later.',
        null
    );

    // success isn't true but there are no errors?
    // most likely a server-side error
    if (results.errors === undefined || status === 500) {
        return serverError;
    }

    const errorsObject = getErrorsObject(results.errors);

    if (errorsObject.role !== undefined) {
        return serverError;
    }

    return new CommentError(
        'Please fix the below errors.',
        errorsObject.comment
    );
}
