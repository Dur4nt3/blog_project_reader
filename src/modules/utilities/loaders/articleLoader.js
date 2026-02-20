import getUserInfo from '../auth/getUserInfo';

export default async function articleLoader({ params }) {
    // eslint-disable-next-line @stylistic/max-len
    const articleEndpoint = `${import.meta.env.VITE_API_URL}/posts/${params.articleId}`;
    const articleResponse = await fetch(articleEndpoint, {
        method: 'GET',
    }).catch(() => 502);

    // Fetch failed
    if (articleResponse === 502) {
        return null;
    }

    const articleData = await articleResponse.json();

    if (articleData.success !== true) {
        return null;
    }

    const user = await getUserInfo();

    // eslint-disable-next-line @stylistic/max-len
    const commentsEndpoint = `${import.meta.env.VITE_API_URL}/posts/${params.articleId}/comments`;
    const commentsResponse = await fetch(commentsEndpoint, {
        method: 'GET',
    }).catch(() => 502);

    // Fetch failed
    if (commentsResponse === 502) {
        return null;
    }

    const commentsData = await commentsResponse.json();

    // If the article was retrieved without an issue
    // But the comments couldn't be retrieve
    // Just return the article without comments
    if (commentsData.success !== true) {
        return {
            article: articleData.post,
            authorName: articleData.name,
            user: typeof user === 'object' ? user : null,
            comments: null,
        };
    }

    return {
        article: articleData.post,
        authorName: articleData.name,
        user: typeof user === 'object' ? user : null,
        comments: commentsData.comments,
    };
}
