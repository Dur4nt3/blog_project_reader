export default async function deleteCommentAction({ params }) {
    // eslint-disable-next-line @stylistic/max-len
    const serverUrl = `${import.meta.env.VITE_API_URL}/posts/${params.articleId}/comments/${params.commentId}`;

    const response = await fetch(serverUrl, {
        method: 'DELETE',
        credentials: 'include',
    });

    const results = await response.json();

    if (results.success === false) {
        return { success: false };
    }

    return { success: true };
}
