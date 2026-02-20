import CommentError from '../classes/CommentError';

function validateCommentBody(fieldValue, fieldName) {
    if (fieldValue === undefined) {
        return `${fieldName} must not be empty`;
    }

    const trimmedValue = fieldValue.trim();

    if (trimmedValue === '') {
        return `${fieldName} must not be empty`;
    }

    if (trimmedValue.length < 10 || trimmedValue.length > 1000) {
        return `${fieldName} must be between 10 and 1000 characters`;
    }

    const regex = /^[A-Za-z0-9.,:;?!\-"() ]+$/;

    if (!regex.test(trimmedValue)) {
        const failingChar = trimmedValue.match(/[^A-Za-z0-9.,:;?!\-"() ]/);

        // eslint-disable-next-line @stylistic/max-len
        return `${fieldName} must only includes letters, numbers, spaces and basic punctuation only (${JSON.stringify(failingChar[0])} disallowed)`;
    }

    return null;
}

// Gets comment form data
// Returns null if data is valid (no errors)
// Returns an instance of "CommentError" if it isn't
export default function validateComment(jsonData) {
    const commentError = validateCommentBody(jsonData.comment, 'Comment');

    if (commentError !== null) {
        return new CommentError('Please fix the below errors.', commentError);
    }

    return null;
}
