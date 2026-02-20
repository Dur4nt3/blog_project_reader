import './stylesheets/HomeFooter.css';

import { Link, useFetcher } from 'react-router';

export default function HomeFooter({ user }) {
    // eslint-disable-next-line no-unused-vars
    const fetcher = useFetcher();

    return (
        <footer className='home-footer'>
            <div className='footer-content'>
                <p className={user !== null ? 'credits current-user' : 'credits'}>{user !== null ? `@ ${user.name}` : 'By Dante'}</p>
                <div className='footer-actions'>
                    <a
                        href='https://github.com/Dur4nt3/blog_project_reader'
                        rel='noreferrer noopener'
                    >
                        GitHub
                    </a>
                    {user !== null ? (
                        <fetcher.Form method='DELETE' action='/logout'>
                            <button type='submit' className='quick-logout-button'>Logout</button>
                        </fetcher.Form>
                    ) : (
                        <>
                            <a
                                // eslint-disable-next-line @stylistic/max-len
                                href={`${import.meta.env.VITE_AUTHOR_APP}/login`}
                            >
                                Author Login
                            </a>
                            <Link to='/login'>Reader Login</Link>
                        </>
                    )}
                </div>
            </div>
        </footer>
    );
}
