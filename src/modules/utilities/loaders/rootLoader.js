import getUserInfo from '../auth/getUserInfo';

export default async function rootLoader() {
    const serverUrl = `${import.meta.env.VITE_API_URL}/posts?count=3`;
    const response = await fetch(serverUrl, {
        method: 'GET',
    }).catch(() => 502);

    // Fetch failed
    // Shows the most likely error to occur
    if (response === 502) {
        return 502;
    }

    const user = await getUserInfo();

    const jsonData = await response.json();

    if (jsonData.success !== true) {
        return typeof user === 'object' ? { user } : 500;
    }


    return {
        articles: jsonData.posts,
        user: typeof user === 'object' ? user : null,
    };
}
