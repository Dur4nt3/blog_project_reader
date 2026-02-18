import './stylesheets/HomeFooter.css';

import { Link } from 'react-router';

export default function HomeFooter() {
    return (
        <footer className='home-footer'>
            <div className='footer-content'>
                <p className='credits'>By Dante</p>
                <div className='footer-actions'>
                    <a
                        href='https://github.com/Dur4nt3/blog_project_reader'
                        rel='noreferrer noopener'
                    >
                        GitHub
                    </a>
                    <a href={`${import.meta.env.VITE_AUTHOR_APP}/login`}>
                        Author Login
                    </a>
                    <Link to='/login'>
                        Reader Login
                    </Link>
                </div>
            </div>
        </footer>
    );
}
