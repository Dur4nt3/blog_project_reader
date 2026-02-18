export default async function allArticlesLoader() {
    const serverUrl = `${import.meta.env.VITE_API_URL}/posts`;
    const response = await fetch(serverUrl, {
        method: 'GET',
    }).catch(() => 502);

    // Fetch failed
    // Shows the most likely error to occur
    if (response === 502) {
        return 502;
    }

    const jsonData = await response.json();

    if (jsonData.success !== true) {
        return 500;
    }

    return { articles: jsonData.posts };
}
