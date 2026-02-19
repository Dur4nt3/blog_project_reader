import { redirect } from 'react-router';
import getUserInfo from '../auth/getUserInfo';

export default async function loginLoader() {
    const user = await getUserInfo();
    
    if (typeof user !== 'object') {
        return false;
    }

    return redirect('/');
}
