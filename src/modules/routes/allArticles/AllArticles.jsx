import { useLoaderData } from 'react-router';

import { formatWithNamedMonth } from '../../utilities/formatDate';

import AllArticlesHeader from './AllArticlesHeader';
import AllArticlesMain from './AllArticlesMain';
import ArticleCard from '../root/ArticleCard';
import NoArticlesNotice from '../root/NoArticlesNotice';
import AllArticlesFooter from './AllArticlesFooter';

export default function AllArticles() {
    const response = useLoaderData();

    const articles = response?.articles !== undefined ? response.articles : [];

    return (
        <>
            <AllArticlesHeader />
            <AllArticlesMain>
                {articles.length === 0 ? (
                    <NoArticlesNotice />
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
            </AllArticlesMain>
            <AllArticlesFooter />
        </>
    );
}
