// Given an article's comments
// Returns all the comments the current user is the author of
export default function getUserCommentsOnArticle(userId, articleComments) {
    if (userId === undefined) {
        return {};
    }

    const currentUserComments = {};

    for (const comment of articleComments) {
        if (comment.userId === userId) {
            currentUserComments[comment.commentId] = true;
        }
    }

    return currentUserComments;
}