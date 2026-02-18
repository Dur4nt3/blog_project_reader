import { useLoaderData } from 'react-router';

import { formatWithNamedMonth } from '../../utilities/formatDate';

import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import ArticleCard from './ArticleCard';
import NoArticlesNotice from './NoArticlesNotice';
import HomeFooter from './HomeFooter';

export default function Root() {
    const response = useLoaderData();

    const articles = response?.articles !== undefined ? response.articles : [];

    return (
        <>
            <HomeHeader />
            <HomeMain bodyEmpty={articles.length === 0}>
                {articles.length === 0 ? (
                    <NoArticlesNotice
                        header={'Articles are temporarily unavailable'}
                        // eslint-disable-next-line @stylistic/max-len
                        content={`We couldn't load the latest articles. This is likely a temporary
                issue. Try refreshing, or try again later.`}
                    />
                ) : (
                    articles.map((article) => (
                        <ArticleCard
                            key={article.postId}
                            id={article.postId}
                            title={article.title}
                            summary={article.description}
                            author={article.author?.name}
                            date={formatWithNamedMonth(article.createdAt)}
                        />
                    ))
                )}
            </HomeMain>
            <HomeFooter />
        </>
    );
}
