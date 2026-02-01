import './stylesheets/HomeHeader.css';

export default function HomeHeader() {
    return (
        <header className='home-header'>
            <h2 className='site-name'>Dante's Blog</h2>
            <h1 className='hero-header'>
                Thoughts on software and the
                <span className='header-emphasis'> things surrounding it</span>.
            </h1>
            <h3 className='header-subtext'>
                Articles, notes, and experiments.
            </h3>

            <div className="section-divider"></div>
        </header>
    );
}
