import './stylesheets/AllArticlesFooter.css';

import { Link } from 'react-router';

import backSvg from '../../../assets/media/icons/arrow-left.svg';

export default function AllArticlesFooter() {
    return (
        <footer className='all-articles-footer'>
            <Link to='/'>
                <img src={backSvg} />
                <p>Home</p>
            </Link>
        </footer>
    );
}
