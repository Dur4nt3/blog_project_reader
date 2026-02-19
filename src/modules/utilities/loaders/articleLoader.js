import getUserInfo from '../auth/getUserInfo';

export default async function articleLoader({ params }) {
    // eslint-disable-next-line @stylistic/max-len
    const serverUrl = `${import.meta.env.VITE_API_URL}/posts/${params.articleId}`;
    const response = await fetch(serverUrl, {
        method: 'GET',
    }).catch(() => 502);

    // Fetch failed
    if (response === 502) {
        return null;
    }

    const jsonData = await response.json();

    if (jsonData.success !== true) {
        return null;
    }

    const user = await getUserInfo();

    const mockComments = [
        {
            id: 1,
            author: {
                name: 'John',
            },
            content: 'Really appreciate the article!',
            createdAt: new Date().toISOString(),
            edited: false,
        },
        {
            id: 2,
            author: {
                name: 'Jane',
            },
            content: 'Simple structure, but very clear contract.',
            createdAt: new Date().toISOString(),
            edited: true,
        },
    ];

    return {
        article: jsonData.post,
        authorName: jsonData.name,
        user: typeof user === 'object' ? user : null,
        comments: mockComments,
    };
}
