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

    return { article: jsonData.post, authorName: jsonData.name };
}
