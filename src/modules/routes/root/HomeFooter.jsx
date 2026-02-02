import './stylesheets/HomeFooter.css';

export default function HomeFooter() {
    return (
        <footer className='home-footer'>
            <div className='footer-content'>
                <p className='credits'>© 2026 Dante</p>
                <div className='footer-actions'>
                    <a
                        href='https://github.com/Dur4nt3/blog_project_reader'
                        rel='noreferrer noopener'
                    >
                        GitHub
                    </a>
                    <a href={import.meta.env.VITE_AUTHOR_APP} rel='noreferrer noopener'>
                        Author Login
                    </a>
                </div>
            </div>
        </footer>
    );
}
