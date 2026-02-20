import deleteCommentAction from './deleteCommentAction';
import editCommentAction from './editCommentAction';

export default async function individualCommentAction({ request, params }) {
    const method = request.method.toUpperCase();

    console.log('method is:', method);

    if (method === 'DELETE') {
        return await deleteCommentAction({ request, params });
    }

    if (method === 'PUT') {
        return await editCommentAction({ request, params });
    }
}
