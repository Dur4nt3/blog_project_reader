import validateComment from '../validation/validateComment';
import formatCommentResults from '../formatCommentResults';

export default async function editCommentAction({ request, params }) {
    const data = await request.formData();
    const jsonData = Object.fromEntries(data);

    const clientValidation = validateComment(jsonData);
    if (clientValidation !== null) {
        return { errors: clientValidation };
    }

    // eslint-disable-next-line @stylistic/max-len
    const serverUrl = `${import.meta.env.VITE_API_URL}/posts/${params.articleId}/comments/${params.commentId}`;

    const response = await fetch(serverUrl, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    });

    const results = await response.json();

    const formattedResults = formatCommentResults(results, response.status);

    if (formattedResults !== true) {
        return { errors: formattedResults };
    }

    return { success: true };
}
