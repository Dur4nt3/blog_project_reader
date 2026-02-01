import { useLoaderData } from 'react-router';

import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import ArticleCard from './ArticleCard';
import HomeFooter from './HomeFooter';

export default function Root() {
    const response = useLoaderData();
    
    const articles = response?.article !== undefined ? response.articles : [];

    return (
        <>
            <HomeHeader />
            <HomeMain>
                <ArticleCard
                    title='Designing APIs with Intent'
                    summary='A practical look at structuring REST APIs so they stay flexible, predictable, and boring in the right ways.'
                    author='Dante'
                    date='February 2nd, 2026'
                />
                <ArticleCard
                    title='Why Simplicity Wins in UI'
                    summary='An argument for fewer components, clearer hierarchies, and resisting the urge to over-design.'
                    author='Dante'
                    date='February 1st, 2026'
                />
                <ArticleCard
                    title='Markdown as a Writing Medium'
                    summary='Thoughts on treating Markdown not just as a format, but as a constraint that improves clarity.'
                    author='Dante'
                    date='January 30th, 2026'
                />
            </HomeMain>
            <HomeFooter />
        </>
    );
}
