import './stylesheets/HomeMain.css';
import arrowSvg from '../../../assets/media/icons/arrow-right.svg';

export default function HomeMain({ children }) {
    return (
        <main className='home-main'>
            <h2 className='main-header'>Latest Articles</h2>
            <div className='featured-articles'>{children}</div>
            <a href='/articles' className='view-all-articles'>
                Explore more articles <img src={arrowSvg} className="animated-arrow" />
            </a>
        </main>
    );
}
