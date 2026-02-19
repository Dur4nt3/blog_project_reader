export default async function authenticationCheck() {
    const serverUrl = `${import.meta.env.VITE_API_URL}/users/me/`;
    const response = await fetch(serverUrl, {
        method: 'GET',
        credentials: 'include',
    }).catch(() => new Response(null, { status: 502 }));

    return response;
}