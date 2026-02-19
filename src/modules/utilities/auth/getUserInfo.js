import authenticationCheck from './authenticationCheck';

// Returns information about the current user
// Return a status code if something went wrong
export default async function getUserInfo() {
    const response = await authenticationCheck();

    if (response.status === 502) {
        return 502;
    }

    if (!response.ok) {
        return response.status;
    }

    const jsonData = await response.json();

    if (jsonData.success === false) {
        return response.status;
    }

    if (jsonData?.user !== undefined) {
        return jsonData.user;
    }

    return 401;
}
